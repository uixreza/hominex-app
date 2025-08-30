const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "api-hominex.ir",
        pathname: "/storage/properties/**",
      },
      {
        protocol: "https",
        hostname: "via.placeholder.com",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
