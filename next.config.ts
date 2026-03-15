import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "iilm.edu",
        pathname: "**",
      },
      {
        protocol: "https",
        hostname: "*.iilm.edu",
        pathname: "**",
      },
    ],
  },
};

export default nextConfig;
