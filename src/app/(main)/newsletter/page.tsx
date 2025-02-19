import type { Metadata } from "next";
import Newsletter from "@/components/Newsletter";

export const metadata: Metadata = {
  title: "Newsletter - Commoner",
  description: "Stay up to date with Commoner's shows and releases",
};

export default function NewsletterPage() {
  return (
    <div className="max-w-xl mx-auto mt-12">
      <Newsletter />
    </div>
  );
}
