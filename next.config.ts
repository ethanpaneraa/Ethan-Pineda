import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "snapshot.apple-mapkit.com",
        port: "",
        pathname: "/api/v1/snapshot",
      },
    ],
  },
};

export default nextConfig;
