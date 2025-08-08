"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useTheme } from "next-themes";
import Image from "next/image";
import { useEffect, useState } from "react";

export function Hero() {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-background pt-20 sm:pt-24 lg:pt-28 overflow-hidden transition-colors">
      {/* Container */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center justify-between gap-8 sm:gap-12 lg:gap-16">
        {/* Left */}
        <div className="flex-1 text-center lg:text-left w-full lg:max-w-2xl">
          <Button size="lg" className="rounded-full text-sm mb-6">
            Get Started <ArrowRight className="ml-2 h-4 w-4" />
          </Button>

          <div className="mb-6">
            <h1 className="font-bold leading-tight text-foreground text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl">
              <span className="block mb-2">Connecting You to</span>
              <span className="block text-primary">What Matters Nearby</span>
            </h1>
          </div>

          <p className="text-base sm:text-lg lg:text-xl text-muted-foreground max-w-sm sm:max-w-lg lg:max-w-xl mx-auto lg:mx-0 mb-8 leading-relaxed">
            Discover events, offers, and connections that bring your
            neighbourhood to life.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center sm:items-stretch">
            <Button size="lg" className="w-full sm:w-auto min-w-[160px]">
              Explore Now <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="w-full sm:w-auto min-w-[160px]"
            >
              Learn More
            </Button>
          </div>
        </div>

        {/* Right */}
        <div className="flex-1 flex justify-center lg:justify-end w-full mt-8 lg:mt-0">
          <div className="relative w-full max-w-[280px] sm:max-w-[320px] md:max-w-[380px] lg:max-w-[420px] xl:max-w-[480px] aspect-square rounded-2xl sm:rounded-3xl bg-background border border-border p-4 sm:p-6 transition-transform duration-300 hover:scale-105 shadow-lg hover:shadow-xl">
            <Image
              src={
                mounted && theme === "dark"
                  ? "/lightFavicon.svg"
                  : "/favicon.svg"
              }
              alt="Metahood"
              fill
              className="object-contain drop-shadow-lg"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
