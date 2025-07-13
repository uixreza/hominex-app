import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // basePath: "",
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "hominex.ir",
        port: "",
      },
    ],
  },
};

export default nextConfig;
