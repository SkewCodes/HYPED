import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "i.ytimg.com",
      },
      {
        protocol: "https",
        hostname: "*.googleusercontent.com",
      },
    ],
  },
  async redirects() {
    return [
      {
        source: "/manifesto",
        destination: "/story",
        permanent: true,
      },
      {
        source: "/products",
        destination: "/max",
        permanent: true,
      },
      {
        source: "/ecosystem",
        destination: "/max",
        permanent: true,
      },
      {
        source: "/partners",
        destination: "/max",
        permanent: true,
      },
      {
        source: "/network",
        destination: "/max",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
