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

  if (error) {
    return <div className="text-red-500 text-sm">Error: {error}</div>;
  }

  if (!location) return null;

  return (
    <div className="space-y-2">
      <div className="flex items-center space-x-2">
        <span className="text-sm">
          currently in{" "}
          <span className="text-textAccent font-semibold">
            {location.display}
          </span>
        </span>
      </div>
    </div>
  );
}
