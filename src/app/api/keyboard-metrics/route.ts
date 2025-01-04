import { createClient } from "@supabase/supabase-js";
import { NextResponse } from "next/server";

const supabaseUrl = process.env.SUPABASE_URL!;
const supabaseKey = process.env.SUPABASE_ANON_KEY!;
const supabase = createClient(supabaseUrl, supabaseKey);

export async function GET() {
  try {
    const { data, error } = await supabase.rpc("get_total_metrics", {
      p_device_id: process.env.DEVICE_ID || "default",
    });

    if (error) throw error;

    return NextResponse.json({ data });
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
  } catch (error) {
    return NextResponse.json(
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      { error: "Failed to fetch metrics" },
      { status: 500 }
    );
  }
}
