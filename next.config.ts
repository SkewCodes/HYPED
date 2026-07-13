import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/manifesto",
        destination: "/story",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
