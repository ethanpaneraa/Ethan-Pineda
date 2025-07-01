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

interface SpotifyStatsClientProps {
  initialData: SpotifyData | null;
}

export function SpotifyStatsClient({ initialData }: SpotifyStatsClientProps) {
  const [data, setData] = useState<SpotifyData | null>(initialData);
  const [error, setError] = useState<string | null>(null);
  const [isUpdating, setIsUpdating] = useState(false);

  useEffect(() => {
    const fetchStats = async () => {
      setIsUpdating(true);
      try {
        const response = await fetch("/api/spotify");
        if (!response.ok) {
          throw new Error("Failed to fetch stats");
        }
        const newData = await response.json();
        setData(newData);
        setError(null);
      } catch (err) {
        console.error("Error fetching Spotify stats:", err);
        setError(err instanceof Error ? err.message : "An error occurred");
      } finally {
        setIsUpdating(false);
      }
    };

    const interval = setInterval(fetchStats, 300000);
    return () => clearInterval(interval);
  }, []);

  if (error) {
    return <div className="p-4 text-red-500">Error: {error}</div>;
  }

  if (!data) {
    return (
      <div className="border border-neutral-800 p-4 md:p-6">
        <h2 className="text-xl md:text-2xl font-bold text-white mb-4 md:mb-6">
          <span className="text-textAccent mr-2">*</span>
          listening stats
        </h2>
        <div className="text-gray-400">No data available</div>
      </div>
    );
  }

  const { current, topTracks, topArtists } = data;

  return (
    <div
      className={`border border-neutral-800 p-4 md:p-6 ${
        isUpdating ? "opacity-75 transition-opacity" : ""
      }`}
    >
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
            {topArtists?.map((artist, index) => (
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
