import { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

/** Elements already animated — guards against duplicate triggers per mount. */
const initAll = (processed: WeakSet<Element>) => {
  // -------- Global parallax engine --------
  gsap.utils.toArray<HTMLElement>('[data-parallax]').forEach((el) => {
    if (processed.has(el)) return;
    processed.add(el);
    const speed = parseFloat(el.dataset.parallax || '0.2');
    gsap.to(el, {
      yPercent: speed * 100,
      ease: 'none',
      scrollTrigger: {
        trigger: el,
        start: 'top bottom',
        end: 'bottom top',
        scrub: true,
      },
    });
  });

  // Watermark horizontal drift
  gsap.utils.toArray<HTMLElement>('[data-watermark]').forEach((el) => {
    if (processed.has(el)) return;
    processed.add(el);
    gsap.to(el, {
      xPercent: -15,
      ease: 'none',
      scrollTrigger: {
        trigger: el.closest('section') || el,
        start: 'top bottom',
        end: 'bottom top',
        scrub: true,
      },
    });
  });

  // Section headings — fade-up + horizontal slide
  gsap.utils.toArray<HTMLElement>('section h2.text-display').forEach((h) => {
    if (processed.has(h)) return;
    processed.add(h);
    gsap.from(h, {
      y: 24,
      x: -12,
      opacity: 0,
      duration: 0.7,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: h,
        start: 'top 85%',
        toggleActions: 'play none none reverse',
      },
    });
    const sub = h.parentElement?.querySelector('p');
    if (sub && !processed.has(sub)) {
      processed.add(sub);
      gsap.from(sub, {
        y: 14,
        opacity: 0,
        duration: 0.55,
        delay: 0.05,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: h,
          start: 'top 85%',
          toggleActions: 'play none none reverse',
        },
      });
    }
  });

  const stagger = (selector: string, opts: gsap.TweenVars = {}) => {
    const items = gsap.utils.toArray<Element>(selector).filter((el) => !processed.has(el));
    if (!items.length) return;
    items.forEach((el) => processed.add(el));
    gsap.from(items, {
      y: 28,
      opacity: 0,
      duration: 0.65,
      ease: 'power2.out',
      stagger: 0.08,
      scrollTrigger: {
        trigger: items[0],
        start: 'top 85%',
        toggleActions: 'play none none reverse',
      },
      ...opts,
    });
  };

  // About
  stagger('#about .space-y-8 > div');
  stagger('#about .space-y-6 > *', { x: 24, y: 0 });
  stagger('#about .mt-16 > div', { y: 18, stagger: 0.08 });

  // Projects — visible cards with subtle stagger
  const projectCards = gsap.utils.toArray<Element>('#projects .grid > *').filter((el) => !processed.has(el));
  if (projectCards.length) {
    projectCards.forEach((el) => processed.add(el));
    gsap.set(projectCards, { opacity: 1, y: 0, clearProps: 'visibility' });
    gsap.from(projectCards, {
      y: 28,
      opacity: 0,
      scale: 0.98,
      duration: 0.7,
      ease: 'power2.out',
      stagger: 0.1,
      scrollTrigger: {
        trigger: '#projects .grid',
        start: 'top 80%',
        toggleActions: 'play none none reverse',
      },
    });
  }

  // Certificates — staggered reveal
  stagger('#certificates .grid > div', { y: 18, scale: 0.98, stagger: 0.06 });

  // Education — alternating slide-in
  gsap.utils.toArray<HTMLElement>('#education .space-y-12 > div').forEach((row) => {
    if (processed.has(row)) return;
    processed.add(row);
    gsap.from(row, {
      x: gsap.utils.toArray<HTMLElement>('#education .space-y-12 > div').indexOf(row) % 2 === 0 ? -28 : 28,
      opacity: 0,
      duration: 0.7,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: row,
        start: 'top 80%',
        toggleActions: 'play none none reverse',
      },
    });
  });
  stagger('#education .mt-20 > *');

  // Skills — standard in-view reveal
  stagger('#skills .skills-grid > *', { y: 18, stagger: 0.06 });

  // Contact
  stagger('#contact .grid > *', { y: 18, stagger: 0.1 });

  ScrollTrigger.refresh();
};

/**
 * Centralized GSAP ScrollTrigger animations + parallax engine.
 * Re-runs (guarded) whenever new sections mount, so lazily-loaded
 * sections still get their reveal animations.
 */
const ScrollAnimations = () => {
  useEffect(() => {
    const processed = new WeakSet<Element>();
    const ctx = gsap.context(() => {});
    let frame = 0;
    let timer = 0;
    // Defer one frame so the first paint isn't blocked by animation setup.
    frame = requestAnimationFrame(() => ctx.add(() => initAll(processed)));

    // Lazily-mounted sections arrive later — pick them up when they do
    const mo = new MutationObserver(() => {
      window.clearTimeout(timer);
      timer = window.setTimeout(() => ctx.add(() => initAll(processed)), 100);
    });
    mo.observe(document.body, { childList: true, subtree: true });

    return () => {
      cancelAnimationFrame(frame);
      window.clearTimeout(timer);
      mo.disconnect();
      ctx.revert();
    };
  }, []);

  return null;
};

export default ScrollAnimations;
