"use client";

import InfiniteMarquee from "@/components/ui/infiniteMarquee";

export function Marquee() {
  const marqueeText = [
    "EVENTS.",
    "OFFERS.",
    "COMMUNITY",
    "CONNECT",
    "DISCOVER.",
    "NEARBY",
    "METAHOOD.",
    "LOCAL",
    "NETWORK.",
    "EXPLORE",
    "SHARE.",
    "ENGAGE",
  ];

  return (
    <section className="w-full border-y border-border/20">
      <InfiniteMarquee
        text={marqueeText}
        speed={70}
        pauseOnHover={true}
        reverse={false}
        repeat={4}
        gap="1rem"
        className="bg-gradient-to-r from-background via-background/95 to-background"
      />
    </section>
  );
}
