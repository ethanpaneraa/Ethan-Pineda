"use client";

import { useEffect, useState } from "react";

interface Artist {
  name: string;
  external_urls: {
    spotify: string;
  };
  images: Array<{ url: string }>;
}

interface Track {
  name: string;
  artists: Array<{ name: string }>;
  album: {
    name: string;
    images: Array<{ url: string }>;
  };
  external_urls: {
    spotify: string;
  };
}

interface SpotifyData {
  current: {
    is_playing: boolean;
    item: Track;
  };
  topTracks: Track[];
  topArtists: Artist[];
}

export default function SpotifyStats() {
  const [data, setData] = useState<SpotifyData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const response = await fetch("/api/spotify");
        if (!response.ok) {
          throw new Error("Failed to fetch stats");
        }
        const data = await response.json();
        setData(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : "An error occurred");
      } finally {
        setLoading(false);
      }
    };

    fetchStats();
    const interval = setInterval(fetchStats, 30000);
    return () => clearInterval(interval);
  }, []);

  if (loading) return <div className="p-4">Loading...</div>;
  if (error) return <div className="p-4 text-red-500">Error: {error}</div>;
  if (!data) return <div className="p-4">No data available</div>;

  const { current, topTracks, topArtists } = data;

  return (
    <div className="border border-neutral-800 p-4 md:p-6">
      <h2 className="text-xl md:text-2xl font-bold text-white mb-4 md:mb-6">
        <span className="text-textAccent mr-2">*</span>
        listening stats
      </h2>

      <div className="mb-6">
        {current?.item && (
          <div className="border border-neutral-800 p-3 md:p-4">
            <p className="text-gray-400 text-xs md:text-sm mb-1 md:mb-2">
              {current.is_playing ? "now playing" : "last played"}
            </p>
            <a
              href={current.item.external_urls.spotify}
              target="_blank"
              rel="noopener noreferrer"
              className="group"
            >
              <div className="flex items-center gap-3">
                <img
                  src={current.item.album.images[2]?.url}
                  alt={current.item.album.name}
                  className="w-10 h-10"
                />
                <div className="min-w-0">
                  <p className="text-white font-medium truncate group-hover:text-textAccent">
                    {current.item.name}
                  </p>
                  <p className="text-gray-400 text-sm truncate">
                    {current.item.artists.map((a) => a.name).join(", ")}
                  </p>
                </div>
              </div>
            </a>
          </div>
        )}
      </div>
      <div className="space-y-6">
        <div>
          <h3 className="text-gray-400 text-xs md:text-sm mb-3 md:mb-4">
            {"> "}top artists this month
          </h3>
          <div className="space-y-3">
            {topArtists.map((artist, index) => (
              <a
                key={artist.name}
                href={artist.external_urls.spotify}
                target="_blank"
                rel="noopener noreferrer"
                className="block border border-neutral-800 p-3 hover:bg-neutral-900/50 transition-colors"
              >
                <div className="flex items-center gap-3">
                  <span className="text-gray-400 text-sm">{index + 1}</span>
                  <img
                    src={artist.images[2]?.url}
                    alt={artist.name}
                    className="w-10 h-10 rounded-full"
                  />
                  <p className="text-white font-medium truncate">
                    {artist.name}
                  </p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
