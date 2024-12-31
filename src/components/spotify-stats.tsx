"use client";
import { useEffect, useState } from "react";

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
  is_playing?: boolean;
  item?: Track;
  items?: Array<{ track: Track; played_at: string }>;
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

  const track = data.item || data.items?.[0]?.track;
  if (!track) return <div className="p-4">No track data available</div>;

  return (
    <div className="border border-neutral-800 p-4 md:p-6">
      <h2 className="text-xl md:text-2xl font-bold text-white mb-4 md:mb-6">
        <span className="text-textAccent mr-2">*</span>
        {data.is_playing ? "now playing" : "last played"}
      </h2>

      <a
        href={track.external_urls.spotify}
        target="_blank"
        rel="noopener noreferrer"
        className="block border border-neutral-800 p-3 md:p-4 hover:bg-neutral-900/50 transition-colors"
      >
        <div className="flex items-center gap-4">
          <img
            src={track.album.images[1]?.url || track.album.images[0]?.url}
            alt={track.album.name}
            className="w-16 h-16"
          />
          <div className="flex-1 min-w-0">
            <p className="text-white font-medium truncate">{track.name}</p>
            <p className="text-gray-400 text-sm truncate">
              {track.artists.map((a) => a.name).join(", ")}
            </p>
          </div>
        </div>
      </a>
    </div>
  );
}
