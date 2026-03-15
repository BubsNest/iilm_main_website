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
      {
        protocol: "https",
        hostname: "iilm.edu.in",
        pathname: "**",
      },
      {
        protocol: "https",
        hostname: "iilm.ac.in",
        pathname: "**",
      },
      {
        protocol: "https",
        hostname: "iilmlr.ac.in",
        pathname: "**",
      },
      {
        protocol: "https",
        hostname: "iilmlko.ac.in",
        pathname: "**",
      },
      {
        protocol: "https",
        hostname: "www.iilmlko.ac.in",
        pathname: "**",
      },
      {
        protocol: "https",
        hostname: "iilmjaipur.ac.in",
        pathname: "**",
      },
    ],
  },
};

export default nextConfig;
