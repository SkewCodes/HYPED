import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/manifesto",
        destination: "/story",
        permanent: true,
      },
      {
        source: "/ecosystem",
        destination: "/partners",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
