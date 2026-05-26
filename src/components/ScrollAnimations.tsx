import { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

/**
 * Centralized GSAP ScrollTrigger animations + cinematic parallax engine.
 * - Any element with [data-parallax="<speed>"] gets a yPercent shift based on scroll.
 *   speed > 0 = moves slower (background), speed < 0 = moves opposite/foreground.
 * - Section headings, watermarks, and content reveal on scroll.
 */
const ScrollAnimations = () => {
  useEffect(() => {
    const ctx = gsap.context(() => {
      // -------- Global parallax engine --------
      const parallaxEls = gsap.utils.toArray<HTMLElement>('[data-parallax]');
      parallaxEls.forEach((el) => {
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

      const fadeUp = (el: Element | null, opts: gsap.TweenVars = {}) => {
        if (!el) return;
        gsap.from(el, {
          y: 60,
          opacity: 0,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: el,
            start: 'top 85%',
            toggleActions: 'play none none reverse',
          },
          ...opts,
        });
      };

      const stagger = (selector: string, opts: gsap.TweenVars = {}) => {
        const items = gsap.utils.toArray<Element>(selector);
        if (!items.length) return;
        gsap.from(items, {
          y: 80,
          opacity: 0,
          duration: 0.9,
          ease: 'power3.out',
          stagger: 0.12,
          scrollTrigger: {
            trigger: items[0],
            start: 'top 85%',
            toggleActions: 'play none none reverse',
          },
          ...opts,
        });
      };

      // Section headings — fade-up + horizontal slide
      gsap.utils.toArray<HTMLElement>('section h2.text-display').forEach((h) => {
        gsap.from(h, {
          y: 80,
          x: -40,
          opacity: 0,
          duration: 1.2,
          ease: 'power4.out',
          scrollTrigger: {
            trigger: h,
            start: 'top 85%',
            toggleActions: 'play none none reverse',
          },
        });
        const sub = h.parentElement?.querySelector('p');
        if (sub) {
          gsap.from(sub, {
            y: 40,
            opacity: 0,
            duration: 1,
            delay: 0.15,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: h,
              start: 'top 85%',
              toggleActions: 'play none none reverse',
            },
          });
        }
      });

      // About
      stagger('#about .space-y-8 > div');
      stagger('#about .space-y-6 > *', { x: 60, y: 0 });
      stagger('#about .mt-16 > div', { y: 40, stagger: 0.1 });

      // Projects — visible cards with subtle stagger
      gsap.set('#projects .grid > *', { opacity: 1, y: 0, clearProps: 'visibility' });
      gsap.from('#projects .grid > *', {
        y: 80,
        opacity: 0,
        scale: 0.96,
        duration: 1,
        ease: 'power3.out',
        stagger: 0.15,
        scrollTrigger: {
          trigger: '#projects .grid',
          start: 'top 80%',
          toggleActions: 'play none none reverse',
        },
      });

      // Certificates — staggered reveal
      stagger('#certificates .grid > a', { y: 60, scale: 0.95, stagger: 0.08 });

      // Education — alternating slide-in
      gsap.utils.toArray<HTMLElement>('#education .space-y-12 > div').forEach((row, i) => {
        gsap.from(row, {
          x: i % 2 === 0 ? -100 : 100,
          opacity: 0,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: row,
            start: 'top 80%',
            toggleActions: 'play none none reverse',
          },
        });
      });
      stagger('#education .mt-20 > *');

      // Skills — pin + marquee parallax (desktop only)
      const skillsSection = document.querySelector<HTMLElement>('#skills');
      if (skillsSection && window.innerWidth >= 768) {
        ScrollTrigger.create({
          trigger: skillsSection,
          start: 'top top',
          end: '+=80%',
          pin: true,
          pinSpacing: true,
        });
        const marquee = skillsSection.querySelector('.animate-marquee');
        if (marquee) {
          gsap.from(marquee, {
            xPercent: 5,
            scale: 0.95,
            opacity: 0.4,
            ease: 'none',
            scrollTrigger: {
              trigger: skillsSection,
              start: 'top top',
              end: '+=80%',
              scrub: true,
            },
          });
        }
      }

      // Contact
      stagger('#contact .grid > *', { y: 60, stagger: 0.15 });

      ScrollTrigger.refresh();
    });

    return () => ctx.revert();
  }, []);

  return null;
};

export default ScrollAnimations;
