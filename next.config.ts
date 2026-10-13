import type { NextConfig } from "next"

const nextConfig: NextConfig = {
  images: {
    // Placeholder photos only; remove once every photo is served from /public.
    remotePatterns: [
      { protocol: "https", hostname: "picsum.photos" },
      { protocol: "https", hostname: "fastly.picsum.photos" },
    ],
  },
}

export default nextConfig
