import type { Metadata } from "next";

import "@/styles/tailwind.css";

export const metadata: Metadata = {
  title: {
    template: "%s - Commoner",
    default: "Commoner - music from San Francisco",
  },
  description:
    "Commoner is an American band from San Francisco, California. Their music is a blend of folk, rock, and blood.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="h-full antialiased dark">
      <body className="flex h-full bg-zinc-50 dark:bg-black">
        HIHI {children}
      </body>
    </html>
  );
}
