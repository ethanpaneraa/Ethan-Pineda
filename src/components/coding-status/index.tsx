import { CodingStatus } from "@/components/coding-status/client";

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

async function fetchCodingStatus(): Promise<CodingStatus | null> {
  try {
    const API_KEY = process.env.WAKAAPI_KEY;
    const WAKAPI_URL = process.env.WAKAPI_URL || "https://wakapi.dev";
    if (!API_KEY) {
      console.error("WakaAPI key is not configured");
      return null;
    }

    const response = await fetch(
      `${WAKAPI_URL}/api/compat/wakatime/v1/users/current/stats/today`,
      {
        headers: {
          Authorization: `Basic ${Buffer.from(API_KEY).toString("base64")}`,
          Accept: "application/json",
        },
      }
    );

    if (!response.ok) {
      throw new Error(`Wakapi API responded with ${response.status}`);
    }

    const data = await response.json();
    const projectsLength = data.data?.projects?.length || 0;
    const isActive = data.data?.total_seconds > 0;
    const currentEditor = data.data?.editors?.[0]?.name || null;
    const currentProject =
      data.data?.projects?.[projectsLength - 1]?.name || null;

    return {
      isActive,
      currentEditor,
      currentProject,
      lastHeartbeat: data.data?.end || null,
    };
  } catch (error) {
    console.error("Error fetching coding status:", error);
    return null;
  }
}

export async function CodingStatusServer() {
  const initialData = await fetchCodingStatus();

  return <CodingStatus initialData={initialData} />;
}
