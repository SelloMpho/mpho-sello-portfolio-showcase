import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

interface NumberTickerProps {
  value: number;
  direction?: "up" | "down";
  delay?: number;
  className?: string;
  decimalPlaces?: number;
  startValue?: number;
}

/**
 * Count-up ticker that starts when scrolled into view.
 * Pure requestAnimationFrame implementation (no animation library).
 */
export function NumberTicker({
  value,
  direction = "up",
  delay = 0,
  className,
  decimalPlaces = 0,
  startValue = 0,
}: NumberTickerProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const [started, setStarted] = useState(false);
  const [display, setDisplay] = useState(direction === "down" ? value : startValue);

  useEffect(() => {
    if (!ref.current || started) return;
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          setStarted(true);
          observer.disconnect();
        }
      },
      { rootMargin: "0px" }
    );
    observer.observe(ref.current);
    return () => observer.disconnect();
  }, [started]);

  useEffect(() => {
    if (!started) return;
    const from = direction === "down" ? value : startValue;
    const to = direction === "down" ? startValue : value;
    let raf = 0;
    const timeout = setTimeout(() => {
      const duration = 1800;
      const t0 = performance.now();
      const tick = (t: number) => {
        const p = Math.min(1, (t - t0) / duration);
        // ease-out spring approximation
        const eased = 1 - Math.pow(2, -10 * p) * (p < 1 ? 1 : 0);
        setDisplay(from + (to - from) * eased);
        if (p < 1) raf = requestAnimationFrame(tick);
      };
      raf = requestAnimationFrame(tick);
    }, delay * 1000);
    return () => {
      clearTimeout(timeout);
      cancelAnimationFrame(raf);
    };
  }, [started, direction, delay, value, startValue]);

  return (
    <span
      ref={ref}
      className={cn("inline-block tabular-nums tracking-wider", className)}
    >
      {Intl.NumberFormat("en-US", {
        minimumFractionDigits: decimalPlaces,
        maximumFractionDigits: decimalPlaces,
      }).format(Number(display.toFixed(decimalPlaces)))}
    </span>
  );
}

export default NumberTicker;
