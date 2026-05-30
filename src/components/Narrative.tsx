import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

/**
 * Cinematic pinned-scroll narrative.
 * Four chapters cross-fade as the viewport stays pinned, each with
 * a mix-blend headline, supporting copy, and chapter counter.
 */
const CHAPTERS = [
  {
    n: '01',
    kicker: 'Engineering',
    title: 'Software\nthat thinks.',
    body: 'I build production-grade web platforms — React, TypeScript, Django, Node — engineered for clarity, scale, and the people who depend on them every day.',
  },
  {
    n: '02',
    kicker: 'Intelligence',
    title: 'Data\nthat speaks.',
    body: 'From raw signals to executive dashboards — Python, SQL, Power BI. I translate noisy data into decisions a leadership team can act on by Monday.',
  },
  {
    n: '03',
    kicker: 'Systems',
    title: 'Operations\nthat compound.',
    body: 'ERP, workflow automation, and integrations that turn slow manual processes into systems your business outgrows the need to think about.',
  },
  {
    n: '04',
    kicker: 'Outcome',
    title: 'A modern\ndigital partner.',
    body: 'One developer. Three disciplines. Built to ship cinematic interfaces, intelligent backends, and the analytics that prove the work.',
  },
];

const Narrative = () => {
  const wrap = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const root = wrap.current;
    if (!root) return;
    const ctx = gsap.context(() => {
      const chapters = gsap.utils.toArray<HTMLElement>('.chapter');
      const total = chapters.length;
      // Set initial state — first visible
      gsap.set(chapters, { autoAlpha: 0, y: 60 });
      gsap.set(chapters[0], { autoAlpha: 1, y: 0 });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: root,
          start: 'top top',
          end: () => `+=${total * window.innerHeight}`,
          pin: true,
          scrub: 0.6,
          anticipatePin: 1,
        },
      });

      for (let i = 1; i < total; i++) {
        tl.to(chapters[i - 1], { autoAlpha: 0, y: -60, duration: 1 }, i)
          .fromTo(
            chapters[i],
            { autoAlpha: 0, y: 60 },
            { autoAlpha: 1, y: 0, duration: 1 },
            i,
          );
      }

      // Progress bar
      gsap.to('.narrative-progress', {
        scaleX: 1,
        ease: 'none',
        scrollTrigger: {
          trigger: root,
          start: 'top top',
          end: () => `+=${total * window.innerHeight}`,
          scrub: true,
        },
      });
    }, root);

    return () => ctx.revert();
  }, []);

  return (
    <section id="story" ref={wrap} className="relative h-screen w-full overflow-hidden">
      {/* Watermark */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-10 text-[16vw] leading-none font-bold tracking-tighter text-foreground/[0.04] whitespace-nowrap select-none text-center"
        style={{ fontFamily: '"Space Grotesk", sans-serif' }}
      >
        N · A · R · R · A · T · I · V · E
      </div>

      {/* Chapter counter */}
      <div className="absolute top-24 left-6 sm:left-10 lg:left-16 z-20 flex items-center gap-3 text-[10px] uppercase tracking-[0.4em] text-muted-foreground">
        <span className="h-px w-10 bg-accent" />
        Chapter
      </div>

      {/* Progress bar */}
      <div className="absolute bottom-10 left-6 right-6 sm:left-10 sm:right-10 lg:left-16 lg:right-16 z-20 h-px bg-foreground/15 origin-left">
        <div className="narrative-progress h-full w-full origin-left scale-x-0 bg-gradient-to-r from-accent via-primary to-accent" />
      </div>

      {/* Chapters stacked */}
      <div className="relative z-10 h-full w-full">
        {CHAPTERS.map((c) => (
          <article
            key={c.n}
            className="chapter absolute inset-0 flex h-full w-full items-center px-6 sm:px-10 lg:px-16"
          >
            <div className="grid w-full grid-cols-1 items-center gap-8 lg:grid-cols-12">
              <div className="lg:col-span-2 flex items-baseline gap-4">
                <span
                  className="text-display text-[7rem] sm:text-[9rem] font-bold leading-none text-foreground/10 mix-blend-difference"
                  style={{ fontFamily: '"Space Grotesk", sans-serif' }}
                >
                  {c.n}
                </span>
              </div>
              <div className="lg:col-span-7">
                <div className="mb-6 flex items-center gap-3 text-xs uppercase tracking-[0.35em] text-accent">
                  <span className="h-px w-8 bg-accent" />
                  {c.kicker}
                </div>
                <h2
                  className="text-display text-[2.6rem] sm:text-[4.5rem] lg:text-[6rem] font-bold leading-[0.95] whitespace-pre-line mix-blend-difference text-foreground"
                  style={{ fontFamily: '"Space Grotesk", sans-serif' }}
                >
                  {c.title}
                </h2>
              </div>
              <div className="lg:col-span-3">
                <p className="text-base sm:text-lg leading-relaxed text-muted-foreground max-w-sm">
                  {c.body}
                </p>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Narrative;
