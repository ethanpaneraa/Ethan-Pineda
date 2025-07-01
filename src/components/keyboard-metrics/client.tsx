"use client";

import { useEffect, useState } from "react";

interface KeyboardMetrics {
  id: number;
  created_at: string;
  keypresses: number;
  mouse_clicks: number;
  mouse_distance_in: number;
  mouse_distance_mi: number;
  scroll_steps: number;
  device_id: string;
}

interface MetricsResponse {
  data: KeyboardMetrics[];
}

interface KeyboardMetricsDisplayProps {
  initialData: KeyboardMetrics[] | null;
}

export function KeyboardMetricsDisplay({
  initialData,
}: KeyboardMetricsDisplayProps) {
  const [metrics, setMetrics] = useState<KeyboardMetrics[]>(initialData || []);
  const [error, setError] = useState<string | null>(null);
  const [isUpdating, setIsUpdating] = useState(false);

  useEffect(() => {
    const fetchMetrics = async () => {
      setIsUpdating(true);
      try {
        const response = await fetch("/api/keyboard-metrics");
        if (!response.ok) {
          throw new Error("Failed to fetch metrics");
        }
        const data: MetricsResponse = await response.json();
        setMetrics(data.data);
        setError(null);
      } catch (err) {
        console.error("Error fetching keyboard metrics:", err);
        setError(err instanceof Error ? err.message : "An error occurred");
      } finally {
        setIsUpdating(false);
      }
    };

    // Start periodic updates after initial render (every 5 minutes)
    const interval = setInterval(fetchMetrics, 5 * 60 * 1000);
    return () => clearInterval(interval);
  }, []);

  if (error) {
    return <div className="p-4 text-red-500">Error: {error}</div>;
  }

  if (!metrics.length) {
    return (
      <div className="border border-neutral-800 p-4 md:p-6">
        <h2 className="text-xl md:text-2xl font-bold text-white mb-4 md:mb-6">
          <span className="text-textAccent mr-2">*</span>
          silly keyboard metrics{" "}
        </h2>
        <div className="text-gray-400">No data available</div>
      </div>
    );
  }

  const currentMetrics = metrics[0];

  const formatNumber = (num: number) => {
    return new Intl.NumberFormat().format(Math.round(num));
  };

  const formatDistance = (miles: number) => {
    return `${miles.toFixed(1)}mi`;
  };

  return (
    <div
      className={`border border-neutral-800 p-4 md:p-6 ${
        isUpdating ? "opacity-75 transition-opacity" : ""
      }`}
    >
      <h2 className="text-xl md:text-2xl font-bold text-white mb-4 md:mb-6">
        <span className="text-textAccent mr-2">*</span>
        silly keyboard metrics{" "}
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4">
        <div className="border border-neutral-800 p-3 md:p-4">
          <p className="text-gray-400 text-xs md:text-sm mb-1 md:mb-2">
            keypresses
          </p>
          <p className="text-white text-lg md:text-xl font-bold truncate">
            {formatNumber(currentMetrics.keypresses)}
          </p>
        </div>

        <div className="border border-neutral-800 p-3 md:p-4">
          <p className="text-gray-400 text-xs md:text-sm mb-1 md:mb-2">
            mouse clicks
          </p>
          <p className="text-white text-lg md:text-xl font-bold truncate">
            {formatNumber(currentMetrics.mouse_clicks)}
          </p>
        </div>

        <div className="border border-neutral-800 p-3 md:p-4">
          <p className="text-gray-400 text-xs md:text-sm mb-1 md:mb-2">
            mouse distance
          </p>
          <p className="text-white text-lg md:text-xl font-bold truncate">
            {formatDistance(currentMetrics.mouse_distance_mi)}
          </p>
        </div>

        <div className="border border-neutral-800 p-3 md:p-4">
          <p className="text-gray-400 text-xs md:text-sm mb-1 md:mb-2">
            scroll steps
          </p>
          <p className="text-white text-lg md:text-xl font-bold truncate">
            {formatNumber(currentMetrics.scroll_steps)}
          </p>
        </div>
      </div>
    </div>
  );
}
