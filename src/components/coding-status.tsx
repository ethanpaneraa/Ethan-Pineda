"use client";
import { useEffect, useState } from "react";
import { Square } from "lucide-react";

interface CodingStatus {
  isActive: boolean;
  lastHeartbeat: string | null;
  currentEditor: string | null;
  currentProject: string | null;
  debug?: {
    heartbeatsCount: number;
    lastHeartbeatRaw: string | number | Date | null;
  };
}

export function CodingStatus() {
  const [status, setStatus] = useState<CodingStatus | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchStatus = async () => {
      try {
        const response = await fetch("/api/coding-status");
        const data = await response.json();

        if (!response.ok) {
          throw new Error(data.error || "Failed to fetch status");
        }

        console.log("Status data:", data);
        setStatus(data);
        setError(null);
      } catch (error) {
        console.error("Error fetching status:", error);
        setError(
          error instanceof Error ? error.message : "Failed to fetch status"
        );
      }
    };

    fetchStatus();
    const interval = setInterval(fetchStatus, 120 * 1000);

    return () => clearInterval(interval);
  }, []);

  if (error) {
    return <div className="text-red-500 text-sm">Error: {error}</div>;
  }

  if (!status) return null;

  return (
    <div className="space-y-2">
      <div className="flex items-center space-x-2">
        <Square
          className={`h-3 w-3 ${
            status.isActive ? "text-textAccent" : "text-gray-500"
          } ${status.isActive ? "animate-pulse" : ""}`}
          fill="currentColor"
        />
        <span className="text-sm ">
          {status.isActive ? (
            <>
              coding in{" "}
              <span className="text-textAccent font-semibold">
                {status.currentEditor || "editor"}
              </span>
              {status.currentProject && (
                <>
                  {" "}
                  on{" "}
                  <span className="text-textAccent font-semibold">
                    {status.currentProject}
                  </span>
                </>
              )}
            </>
          ) : (
            "not coding"
          )}
        </span>
      </div>
    </div>
  );
}
