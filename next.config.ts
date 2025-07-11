import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // basePath: "",
  reactStrictMode: true,
  images: {
    domains: [
      "hominex.ir",
      "https://hominex.ir",
      "hominex.ir/blog",
      "https://hominex.ir/blog",
    ],
  },
};

export default nextConfig;
