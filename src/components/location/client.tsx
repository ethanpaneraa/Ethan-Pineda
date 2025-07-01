"use client";

import { useEffect, useState } from "react";

interface LocationData {
  city: string;
  region: string;
  display: string;
  updated_at: string | null;
}

interface LocationStatusClientProps {
  initialData: LocationData | null;
}

export function LocationStatus({ initialData }: LocationStatusClientProps) {
  const [location, setLocation] = useState<LocationData | null>(initialData);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchLocation = async () => {
      try {
        const response = await fetch("/api/location");
        const data = await response.json();

        if (!response.ok) {
          throw new Error(data.error || "Failed to fetch location");
        }

        setLocation(data);
        setError(null);
      } catch (error) {
        console.error("Error fetching location:", error);
        setError(
          error instanceof Error ? error.message : "Failed to fetch location"
        );
      }
    };

    const interval = setInterval(fetchLocation, 300 * 1000);

    return () => clearInterval(interval);
  }, []);

  const handleLocationClick = () => {
    if (!location) return;
    const query = `${location.city}, ${location.region}`;
    const encodedQuery = encodeURIComponent(query);
    const mapsAppUrl = `maps://?q=${encodedQuery}`;
    const webMapsUrl = `https://maps.apple.com/?q=${encodedQuery}`;

    const isAppleDevice = /iPad|iPhone|iPod|Macintosh/.test(
      navigator.userAgent
    );

    if (isAppleDevice) {
      window.location.href = mapsAppUrl;
      setTimeout(() => {
        window.open(webMapsUrl, "_blank");
      }, 1000);
    } else {
      window.open(webMapsUrl, "_blank");
    }
  };

  if (error) {
    return <div className="text-red-500 text-sm">Error: {error}</div>;
  }

  if (!location) return null;

  return (
    <div className="space-y-2">
      <div className="flex items-center space-x-2">
        <span className="text-sm">
          currently in{" "}
          <button
            onClick={handleLocationClick}
            className="text-textAccent font-semibold hover:underline cursor-pointer transition-all duration-200 hover:opacity-80"
            title={`Open ${location.display} in Apple Maps`}
          >
            {location.display}
          </button>
        </span>
      </div>
    </div>
  );
}
