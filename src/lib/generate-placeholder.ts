import { getPlaiceholder } from "plaiceholder";

export async function generatePlaceholder(buffer: Buffer): Promise<string> {
  const { base64 } = await getPlaiceholder(buffer);
  return base64;
}
