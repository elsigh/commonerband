import type { NextConfig } from "next";
//import { withRouteBundleAnalyzer } from "@vercel/route-bundle-analyzer/plugins/next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  experimental: {
    ppr: true,
    //reactCompiler: true,
    //turbopackPersistentCaching: true,
    clientSegmentCache: true,
    viewTransition: true,
    cacheComponents: true,
  },
};

module.exports = nextConfig;

// @ts-ignore
// const routeBundleNextConfig = withRouteBundleAnalyzer({
//   enabled: process.env.ROUTE_BUNDLE_ANALYZER_DISABLED !== "true",
// })(nextConfig);

// module.exports = routeBundleNextConfig;
