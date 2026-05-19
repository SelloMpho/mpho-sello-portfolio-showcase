import * as React from "react";
import { cn } from "@/lib/utils";

interface BacklightProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  /** Glow color (any valid CSS color). Defaults to a primary-tinted gradient. */
  colorFrom?: string;
  colorTo?: string;
  /** Blur radius in px */
  blur?: number;
  /** Glow opacity 0-1 */
  opacity?: number;
}

/**
 * Backlight — wraps children with an animated, blurred gradient glow behind it.
 * Inspired by magicui's Backlight component.
 */
export const Backlight = React.forwardRef<HTMLDivElement, BacklightProps>(
  (
    {
      children,
      className,
      colorFrom = "hsl(var(--primary))",
      colorTo = "hsl(var(--accent))",
      blur = 40,
      opacity = 0.55,
      ...props
    },
    ref
  ) => {
    return (
      <div
        ref={ref}
        className={cn("relative isolate group", className)}
        {...props}
      >
        <div
          aria-hidden
          className="pointer-events-none absolute -inset-1 -z-10 rounded-[inherit] opacity-0 transition-opacity duration-1000 ease-out group-hover:opacity-100 animate-backlight-pulse"
          style={{
            background: `conic-gradient(from 0deg, ${colorFrom}, ${colorTo}, ${colorFrom})`,
            filter: `blur(${blur}px)`,
            opacity,
          }}
        />
        {children}
      </div>
    );
  }
);
Backlight.displayName = "Backlight";

export default Backlight;
