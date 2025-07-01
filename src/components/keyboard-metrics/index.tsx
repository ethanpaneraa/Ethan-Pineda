import { createClient } from "@supabase/supabase-js";
import { KeyboardMetricsDisplay } from "@/components/keyboard-metrics/client";

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

async function fetchKeyboardMetrics(): Promise<KeyboardMetrics[] | null> {
  try {
    const supabaseUrl = process.env.SUPABASE_URL!;
    const supabaseKey = process.env.SUPABASE_ANON_KEY!;

    if (!supabaseUrl || !supabaseKey) {
      console.error("Missing Supabase credentials");
      return null;
    }

    const supabase = createClient(supabaseUrl, supabaseKey);

    const { data, error } = await supabase.rpc("get_total_metrics", {
      p_device_id: process.env.DEVICE_ID || "default",
    });

    if (error) {
      console.error("Supabase error:", error);
      return null;
    }

    return data;
  } catch (error) {
    console.error("Error fetching keyboard metrics:", error);
    return null;
  }
}

export default async function KeyboardMetrics() {
  const initialData = await fetchKeyboardMetrics();

  return <KeyboardMetricsDisplay initialData={initialData} />;
}
