import * as React from "react";
import { cn } from "@/lib/utils";

interface TweetCardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

/**
 * TweetCard — minimal, magicui-inspired card surface with crisp border,
 * soft shadow, hover lift, and rounded corners. Used as a presentational
 * wrapper (not tied to Twitter/X data).
 */
export const TweetCard = React.forwardRef<HTMLDivElement, TweetCardProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          "relative overflow-hidden rounded-2xl border border-border/60 bg-card/80 backdrop-blur-sm",
          "shadow-[0_1px_2px_rgba(0,0,0,0.04),0_8px_24px_-12px_rgba(0,0,0,0.15)]",
          "transition-all duration-300 hover:-translate-y-1 hover:border-primary/40",
          "hover:shadow-[0_4px_8px_rgba(0,0,0,0.06),0_20px_40px_-16px_hsl(var(--primary)/0.25)]",
          className
        )}
        {...props}
      >
        {children}
      </div>
    );
  }
);
TweetCard.displayName = "TweetCard";

export default TweetCard;
