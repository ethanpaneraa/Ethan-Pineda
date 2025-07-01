import { LocationStatus } from "@/components/location/client";

interface LocationData {
  city: string;
  region: string;
  display: string;
  updated_at: string | null;
}

async function fetchLocationStatus(): Promise<LocationData | null> {
  try {
    const base = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";
    const response = await fetch(`${base}/api/location`, {
      next: { revalidate: 300 },
    });

    if (!response.ok) {
      throw new Error(`Location API responded with ${response.status}`);
    }

    const data = await response.json();

    return {
      city: data.city,
      region: data.region,
      display: data.display,
      updated_at: data.updated_at,
    };
  } catch (error) {
    console.error("Error fetching location status:", error);
    return null;
  }
}

export async function LocationStatusServer() {
  const initialData = await fetchLocationStatus();

  return <LocationStatus initialData={initialData} />;
}
