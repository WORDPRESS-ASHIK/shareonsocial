import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Allow Ngrok for HMR and Next.js dev resources
  // @ts-ignore - allowedDevOrigins is relatively new and might not be fully typed depending on the exact version
  allowedDevOrigins: [
    "noncollapsable-palacelike-junko.ngrok-free.dev",
    "localhost",
  ],

  // Bypass ngrok interstitial warning for internal API/data fetches
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          {
            key: "ngrok-skip-browser-warning",
            value: "69420",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
