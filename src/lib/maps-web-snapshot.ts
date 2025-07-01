import fs from "fs";
import jwa from "jwa";

const { sign } = jwa("ES256");
const keyId = process.env.MAPKIT_KEY_ID!;
const teamId = process.env.MAPKIT_TEAM_ID!;
const privKey = fs.readFileSync(process.env.MAPKIT_PRIVATE_KEY_PATH!, "utf-8");

export default function getMapsScreenshot(location: string): string {
  const params = Object.entries({
    z: 12,
    poi: 0,
    scale: 2,
    teamId,
    keyId,
    center: location,
    t: "mutedStandard",
    colorScheme: "dark",
  })
    .map(([k, v]) => `${k}=${encodeURIComponent(v as string)}`)
    .join("&");

  const path = `/api/v1/snapshot?${params}`;
  const signature = sign(path, privKey);
  console.log("Generated signature:", signature);
  return `https://snapshot.apple-mapkit.com${path}&signature=${signature}`;
}
