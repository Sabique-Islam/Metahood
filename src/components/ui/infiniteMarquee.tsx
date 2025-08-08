"use client";

import React from "react";
import { cn } from "@/lib/utils";

interface InfiniteMarqueeProps {
  text: string[];
  speed?: number;
  className?: string;
}

const InfiniteMarquee: React.FC<InfiniteMarqueeProps> = ({
  text,
  speed = 30,
  className = "",
}) => {
  const createMarqueeContent = () => {
    return text.map((word, index) => {
      const isOutlined = index % 3 === 1; // Every 3rd word is outlined

      return (
        <span
          key={index}
          className="inline-block mx-6 lg:mx-8 text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-oswald font-bold uppercase tracking-tight transition-all duration-300"
          style={
            isOutlined
              ? {
                  color: "transparent",
                  WebkitTextStroke: "2px var(--foreground)",
                }
              : {
                  color: "var(--foreground)",
                }
          }
        >
          {word}
        </span>
      );
    });
  };

  return (
    <div
      className={cn(
        "w-full overflow-hidden bg-background/80 backdrop-blur-sm py-12 md:py-16 lg:py-20 relative",
        "before:absolute before:left-0 before:top-0 before:z-10 before:h-full before:w-24 lg:before:w-32",
        "before:bg-gradient-to-r before:from-background before:via-background/80 before:to-transparent",
        "after:absolute after:right-0 after:top-0 after:z-10 after:h-full after:w-24 lg:after:w-32",
        "after:bg-gradient-to-l after:from-background after:via-background/80 after:to-transparent",
        className
      )}
    >
      <div
        className="flex whitespace-nowrap animate-marquee"
        style={{
          animationDuration: `${speed}s`,
          animationTimingFunction: "linear",
          animationIterationCount: "infinite",
        }}
      >
        <div className="flex shrink-0 items-center">
          {createMarqueeContent()}
        </div>
        <div className="flex shrink-0 items-center">
          {createMarqueeContent()}
        </div>
        <div className="flex shrink-0 items-center">
          {createMarqueeContent()}
        </div>
      </div>
    </div>
  );
};

export default InfiniteMarquee;
