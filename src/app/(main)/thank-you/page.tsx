import type { Metadata } from "next";

import { SimpleLayout } from "@/components/SimpleLayout";

export const metadata: Metadata = {
  title: "You’re subscribed",
  description: "Thanks for subscribing to my newsletter.",
};

export default function ThankYou() {
  return (
    <SimpleLayout
      title="Thanks for subscribing."
      intro="I’ll send you an email when we have a show, release new music. You can unsubscribe at any time, no hard feelings."
    />
  );
}
