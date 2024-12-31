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
    return NextResponse.json(data);
  } catch (error) {
    console.error("Error in WakaAPI route:", error);
    return NextResponse.json(
      { error: "Failed to fetch Wakapi data" },
      { status: 500 }
    );
  }
}
