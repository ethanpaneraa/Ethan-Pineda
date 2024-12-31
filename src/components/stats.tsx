"use client";
import { useEffect, useState } from "react";

interface StatsItem {
  name: string;
  total_seconds: number;
  percent: number;
}

interface WakaTimeStats {
  data: {
    languages: StatsItem[];
    projects: StatsItem[];
    editors: StatsItem[];
    total_seconds: number;
    daily_average: {
      seconds: number;
      hours: number;
      minutes: number;
    };
  };
}

export default function WakapiStats() {
  const [stats, setStats] = useState<WakaTimeStats | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const response = await fetch("/api/wakatime");
        if (!response.ok) {
          throw new Error("Failed to fetch stats");
        }
        const data = await response.json();
        setStats(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : "An error occurred");
      } finally {
        setLoading(false);
      }
    };

    fetchStats();
  }, []);

  if (loading) return <div className="p-4">Loading...</div>;
  if (error) return <div className="p-4 text-red-500">Error: {error}</div>;
  if (!stats?.data) return <div className="p-4">No data available</div>;

  const formatTime = (seconds: number) => {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    return `${hours}h ${minutes}m`;
  };

  const formatHours = (seconds: number) => {
    const hours = seconds / 3600;
    return `${hours.toFixed(1)}h`;
  };

  const mainProject = stats.data.projects[0];
  const mainEditor = stats.data.editors[0];

  return (
    <div className="border border-neutral-800 p-4 md:p-6">
      <h2 className="text-xl md:text-2xl font-bold text-white mb-4 md:mb-6">
        coding stats{" "}
        <span className="text-gray-400 font-normal">(this week)</span>
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4 mb-6 md:mb-8">
        <div className="border border-neutral-800 p-3 md:p-4">
          <p className="text-gray-400 text-xs md:text-sm mb-1 md:mb-2">
            time coding
          </p>
          <p className="text-white text-lg md:text-xl font-bold truncate">
            {formatTime(stats.data.total_seconds)}
          </p>
        </div>
        {mainProject && (
          <div className="border border-neutral-800 p-3 md:p-4">
            <p className="text-gray-400 text-xs md:text-sm mb-1 md:mb-2">
              main project
            </p>
            <p className="text-white text-lg md:text-xl font-bold truncate">
              {mainProject.name}
            </p>
          </div>
        )}
        {mainEditor && (
          <div className="border border-neutral-800 p-3 md:p-4">
            <p className="text-gray-400 text-xs md:text-sm mb-1 md:mb-2">
              main editor
            </p>
            <p className="text-white text-lg md:text-xl font-bold truncate">
              {mainEditor.name}
            </p>
          </div>
        )}
        <div className="border border-neutral-800 p-3 md:p-4">
          <p className="text-gray-400 text-xs md:text-sm mb-1 md:mb-2">
            daily average
          </p>
          <p className="text-white text-lg md:text-xl font-bold truncate">
            {formatTime(stats.data.total_seconds / 7)}
          </p>
        </div>
      </div>

      <div>
        <h3 className="text-gray-400 text-xs md:text-sm mb-3 md:mb-4">
          {">"} language breakdown
        </h3>
        <div className="space-y-3 md:space-y-4">
          {stats.data.languages
            .sort((a, b) => b.total_seconds - a.total_seconds)
            .map((lang) => (
              <div key={lang.name}>
                <div className="flex justify-between text-xs md:text-sm mb-1">
                  <span className="text-white">{lang.name}</span>
                  <span className="text-gray-400 ml-2">
                    {formatHours(lang.total_seconds)} ({lang.percent.toFixed(1)}
                    %)
                  </span>
                </div>
                <div className="h-1 bg-gray-800 rounded">
                  <div
                    className="h-full bg-textAccent rounded"
                    style={{ width: `${lang.percent}%` }}
                  />
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}
