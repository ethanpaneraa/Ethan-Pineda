import { WakapiStatsDisplay } from "@/components/wakatime/client";

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

async function fetchWakapiStats(): Promise<WakaTimeStats | null> {
  try {
    const API_KEY = process.env.WAKAAPI_KEY;
    const WAKAPI_URL = process.env.WAKAPI_URL || "https://wakapi.dev";

    if (!API_KEY) {
      console.error("WakaAPI key is not configured");
      return null;
    }

    const response = await fetch(
      `${WAKAPI_URL}/api/compat/wakatime/v1/users/current/stats/last_7_days`,
      {
        headers: {
          Authorization: `Basic ${Buffer.from(API_KEY).toString("base64")}`,
          Accept: "application/json",
        },
        next: {
          revalidate: 3600,
        },
      }
    );

    if (!response.ok) {
      throw new Error(`Wakapi API responded with ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching Wakapi data:", error);
    return null;
  }
}

export default async function WakapiStats() {
  const initialData = await fetchWakapiStats();

  return <WakapiStatsDisplay initialData={initialData} />;
}
