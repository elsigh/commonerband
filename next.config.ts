//const MillionLint = require("@million/lint");
//import { withRouteBundleAnalyzer } from "@vercel/route-bundle-analyzer/plugins/next";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  experimental: {
    ppr: true,
    //reactCompiler: false,
    //turbo: true,
  },
};

// @ts-ignore
// const routeBundleNextConfig = withRouteBundleAnalyzer({
//   enabled: process.env.ROUTE_BUNDLE_ANALYZER_DISABLED !== "true",
// })(nextConfig);

// module.exports = routeBundleNextConfig;

module.exports = nextConfig;
