import type { Metadata } from "next";
import { Suspense } from "react";

import { Providers } from "@/app/providers";
import { Layout } from "@/components/Layout";

import "@/styles/tailwind.css";

export const metadata: Metadata = {
  title: {
    template: "%s - Commoner",
    default: "Commoner - music from San Francisco",
  },
  description:
    "Commoner is an American band from San Francisco, California. Their music is a blend of folk, rock, and blood.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Providers>
        <div className="flex w-full">
          <Layout>{children}</Layout>
        </div>
      </Providers>
    </Suspense>
  );
}
