import { createClient } from "@supabase/supabase-js";
import { NextResponse, type NextRequest } from "next/server";

const supabaseUrl = process.env.SUPABASE_URL!;
const supabaseKey = process.env.SUPABASE_ANON_KEY!;
const supabase = createClient(supabaseUrl, supabaseKey);

export async function GET() {
  try {
    const { data, error } = await supabase
      .from("current_location")
      .select("city, region, updated_at")
      .single();

    if (error) throw error;

    return NextResponse.json(
      {
        city: data.city,
        region: data.region,
        display: `${data.city}, ${data.region}`,
        updated_at: data.updated_at,
      },
      {
        headers: { "Cache-Control": "s-maxage=300, stale-while-revalidate" },
      }
    );
  } catch (error) {
    console.error("Failed to fetch location:", error);
    return NextResponse.json({
      city: "Chicago",
      region: "Illinois",
      display: "Chicago, Illinois",
      updated_at: null,
    });
  }
}

export async function PUT(request: NextRequest) {
  try {
    const { city, region } = await request.json();

    if (!city || !region) {
      return NextResponse.json(
        { success: false, error: "Missing city or region" },
        { status: 400 }
      );
    }

    const { data, error } = await supabase
      .from("current_location")
      .update({
        city,
        region,
        updated_at: new Date().toISOString(),
      })
      .eq("id", 1)
      .select()
      .single();

    if (error) throw error;

    return NextResponse.json({
      success: true,
      message: "Location updated successfully",
      location: {
        city: data.city,
        region: data.region,
        display: `${data.city}, ${data.region}`,
        updated_at: data.updated_at,
      },
    });
  } catch (error) {
    console.error("Failed to update location:", error);
    return NextResponse.json(
      { success: false, error: "Failed to update location" },
      { status: 500 }
    );
  }
}
