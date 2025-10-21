import type { NextConfig } from "next";
//import { withRouteBundleAnalyzer } from "@vercel/route-bundle-analyzer/plugins/next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  reactCompiler: true,
  cacheComponents: true,
  experimental: {
    clientSegmentCache: true,
    viewTransition: true,
    //turbopackPersistentCaching: true,
  },
};

module.exports = nextConfig;

// @ts-ignore
// const routeBundleNextConfig = withRouteBundleAnalyzer({
//   enabled: process.env.ROUTE_BUNDLE_ANALYZER_DISABLED !== "true",
// })(nextConfig);

// module.exports = routeBundleNextConfig;
