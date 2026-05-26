import { useEffect, useRef } from 'react';

/**
 * Fixed cinematic background:
 *  - Soft gradient orbs (cyan + magenta) that drift slowly
 *  - Thin grid overlay
 *  - Cursor-following glow for immersion
 */
const AmbientBackground = () => {
  const cursorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = cursorRef.current;
    if (!el) return;
    let raf = 0;
    let tx = window.innerWidth / 2;
    let ty = window.innerHeight / 2;
    let cx = tx;
    let cy = ty;

    const onMove = (e: MouseEvent) => {
      tx = e.clientX;
      ty = e.clientY;
    };
    const loop = () => {
      cx += (tx - cx) * 0.08;
      cy += (ty - cy) * 0.08;
      el.style.transform = `translate3d(${cx - 300}px, ${cy - 300}px, 0)`;
      raf = requestAnimationFrame(loop);
    };
    window.addEventListener('mousemove', onMove, { passive: true });
    raf = requestAnimationFrame(loop);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('mousemove', onMove);
    };
  }, []);

  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      {/* Grid overlay */}
      <div
        className="absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage:
            'linear-gradient(to right, hsl(0 0% 100% / 0.4) 1px, transparent 1px), linear-gradient(to bottom, hsl(0 0% 100% / 0.4) 1px, transparent 1px)',
          backgroundSize: '64px 64px',
          maskImage: 'radial-gradient(ellipse at center, black 30%, transparent 75%)',
          WebkitMaskImage: 'radial-gradient(ellipse at center, black 30%, transparent 75%)',
        }}
      />

      {/* Gradient orbs */}
      <div
        data-parallax="-0.15"
        className="absolute -top-40 -left-40 h-[42rem] w-[42rem] rounded-full blur-[140px] opacity-30"
        style={{ background: 'radial-gradient(circle, hsl(190 90% 55% / 0.6), transparent 60%)' }}
      />
      <div
        data-parallax="-0.25"
        className="absolute top-1/3 -right-40 h-[36rem] w-[36rem] rounded-full blur-[140px] opacity-25"
        style={{ background: 'radial-gradient(circle, hsl(280 80% 60% / 0.55), transparent 60%)' }}
      />
      <div
        data-parallax="-0.1"
        className="absolute bottom-0 left-1/3 h-[30rem] w-[30rem] rounded-full blur-[120px] opacity-20"
        style={{ background: 'radial-gradient(circle, hsl(220 90% 55% / 0.5), transparent 60%)' }}
      />

      {/* Cursor follow glow */}
      <div
        ref={cursorRef}
        className="absolute h-[600px] w-[600px] rounded-full blur-[120px] opacity-20 will-change-transform"
        style={{ background: 'radial-gradient(circle, hsl(190 100% 70% / 0.5), transparent 60%)' }}
      />
    </div>
  );
};

export default AmbientBackground;
