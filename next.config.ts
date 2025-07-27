import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ["cljjbeesmceflrymijcq.supabase.co"], // ✅ Add this
  },
  experimental: {
    serverActions: {
      bodySizeLimit: "10mb",
    },
  },
};

export default nextConfig;
