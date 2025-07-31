"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-background pt-16 overflow-hidden transition-colors">

      {/* Container */}
      <div className="container mx-auto px-6 flex flex-col lg:flex-row items-center justify-between gap-12 relative z-10">
        
        {/* Left */}
        <div className="flex-1 text-center lg:text-left max-w-2xl">
          <div className="inline-flex items-center bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-medium mb-6">
            Neighbourhoods <ArrowRight className="ml-2 h-4 w-4" />
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-foreground leading-tight mb-6">
            Curated <span className="text-primary">Local Life</span> at Your Fingertips
          </h1>

          <p className="text-lg text-muted-foreground max-w-xl mx-auto lg:mx-0 mb-8">
            Neighbourhoods curates a gateway to local events, offers, and community life.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <Button size="lg" className="bg-primary text-primary-foreground cursor-pointer">
              Explore Now <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button size="lg" variant="outline" className="border-primary text-primary cursor-pointer">
              Learn More
            </Button>
          </div>
        </div>

        {/* Right */}
        <div className="flex-1 flex justify-center lg:justify-end">
          <div className="relative w-[20rem] sm:w-[24rem] md:w-[28rem] lg:w-[32rem] rounded-3xl bg-background border border-border p-6 hover:scale-105 transition-transform duration-500">
            <img
              src="/favicon.svg"
              alt="Neighbourhoods"
              className="w-full h-full object-contain drop-shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
}