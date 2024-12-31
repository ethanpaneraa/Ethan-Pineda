import { NextResponse } from "next/server";

export async function GET() {
  try {
    const API_KEY = process.env.WAKAAPI_KEY;
    const WAKAPI_URL = process.env.WAKAPI_URL || "https://wakapi.dev";

    if (!API_KEY) {
      console.error("WakaAPI key is not configured");
      return NextResponse.json(
        { error: "API key not configured" },
        { status: 500 }
      );
    }

    const response = await fetch(
      `${WAKAPI_URL}/api/compat/wakatime/v1/users/current/stats/today`,
      {
        headers: {
          Authorization: `Basic ${Buffer.from(API_KEY).toString("base64")}`,
          Accept: "application/json",
        },
        next: {
          revalidate: 300,
        },
      }
    );

    if (!response.ok) {
      throw new Error(`Wakapi API responded with ${response.status}`);
    }

    const data = await response.json();

    const isActive = data.data?.total_seconds > 0;
    const currentEditor = data.data?.editors?.[0]?.name || null;
    const currentProject = data.data?.projects?.[0]?.name || null;

    return NextResponse.json({
      isActive,
      currentEditor,
      currentProject,
      totalToday: data.data?.total_seconds || 0,
      lastUpdate: data.data?.end || null,
    });
  } catch (error) {
    console.error("Error in Wakapi status route:", error);
    return NextResponse.json(
      { error: "Failed to fetch status" },
      { status: 500 }
    );
  }
}
