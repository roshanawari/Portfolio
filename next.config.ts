import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  /* config options here */
  // @ts-ignore
  turbopack: {
    // @ts-ignore
    root: __dirname,
  },
};

export default nextConfig;
