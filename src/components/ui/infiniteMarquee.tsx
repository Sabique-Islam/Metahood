"use client";

import React from "react";
import { cn } from "@/lib/utils";
import { ComponentPropsWithoutRef } from "react";

interface InfiniteMarqueeProps extends ComponentPropsWithoutRef<"div"> {
  /**
   * Array of text to display in the marquee
   */
  text: string[];
  /**
   * Animation duration in seconds
   * @default 40
   */
  speed?: number;
  /**
   * Optional CSS class name to apply custom styles
   */
  className?: string;
  /**
   * Whether to reverse the animation direction
   * @default false
   */
  reverse?: boolean;
  /**
   * Whether to pause the animation on hover
   * @default true
   */
  pauseOnHover?: boolean;
  /**
   * Gap between repeated content items
   * @default "1rem"
   */
  gap?: string;
  /**
   * Number of times to repeat the content for seamless loop
   * @default 4
   */
  repeat?: number;
}

const InfiniteMarquee: React.FC<InfiniteMarqueeProps> = ({
  text,
  speed = 40,
  className = "",
  reverse = false,
  pauseOnHover = true,
  gap = "1rem",
  repeat = 4,
  ...props
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
      {...props}
      className={cn(
        "w-full overflow-hidden bg-background/80 backdrop-blur-sm py-12 md:py-16 lg:py-20 relative",
        "before:absolute before:left-0 before:top-0 before:z-10 before:h-full before:w-24 lg:before:w-32",
        "before:bg-gradient-to-r before:from-background before:via-background/80 before:to-transparent",
        "after:absolute after:right-0 after:top-0 after:z-10 after:h-full after:w-24 lg:after:w-32",
        "after:bg-gradient-to-l after:from-background after:via-background/80 after:to-transparent",
        "group",
        className
      )}
      style={{
        "--duration": `${speed}s`,
        "--gap": gap,
      } as React.CSSProperties}
    >
      <div className="flex overflow-hidden [gap:var(--gap)]">
        {Array(repeat)
          .fill(0)
          .map((_, i) => (
            <div
              key={i}
              className={cn(
                "flex shrink-0 justify-around whitespace-nowrap [gap:var(--gap)]",
                "animate-marquee-infinite flex-row",
                {
                  "group-hover:[animation-play-state:paused]": pauseOnHover,
                  "[animation-direction:reverse]": reverse,
                }
              )}
            >
              {createMarqueeContent()}
            </div>
          ))}
      </div>
    </div>
  );
};

export default InfiniteMarquee;
