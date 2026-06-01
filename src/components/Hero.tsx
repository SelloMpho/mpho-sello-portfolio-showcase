import { useEffect, useRef, useState } from 'react';
import { ArrowDown, Download, Github, Linkedin, Mail, Instagram } from 'lucide-react';
import { Button } from '@/components/ui/button';
import heroImage from '@/assets/portfolio-hero.jpg';
import TiltedCard from '@/components/TiltedCard';

const ROLES = [
  'Data Analyst',
  'PowerBI Developer',
  'Bussiness Intelligence Analyst',
];

const Hero = () => {
  const [roleIdx, setRoleIdx] = useState(0);
  const portraitRef = useRef<HTMLDivElement>(null);
  const glowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const id = setInterval(() => setRoleIdx((i) => (i + 1) % ROLES.length), 2400);
    return () => clearInterval(id);
  }, []);

  // Mouse-driven micro-parallax on hero portrait + glow
  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 2;
      const y = (e.clientY / window.innerHeight - 0.5) * 2;
      if (portraitRef.current) {
        portraitRef.current.style.transform = `translate3d(${x * 14}px, ${y * 14}px, 0)`;
      }
      if (glowRef.current) {
        glowRef.current.style.transform = `translate3d(${x * -30}px, ${y * -30}px, 0)`;
      }
    };
    window.addEventListener('mousemove', onMove, { passive: true });
    return () => window.removeEventListener('mousemove', onMove);
  }, []);

  const scrollTo = (sel: string) => {
    document.querySelector(sel)?.scrollIntoView({ behavior: 'smooth' });
  };

  const downloadResume = () => {
    const link = document.createElement('a');
    link.href = '/Mpho_Sello_Resume.html';
    link.download = 'Mpho_Sello_Resume.html';
    link.target = '_blank';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section
      id="home"
      className="relative min-h-screen w-full overflow-hidden bg-background"
    >
      {/* Background watermark typography (slow) */}
      <div
        data-parallax="0.4"
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-1/4 text-[18vw] font-bold text-foreground/[0.025] leading-none tracking-tighter select-none whitespace-nowrap text-center"
        style={{ fontFamily: '"Space Grotesk", sans-serif' }}
      >
        MPHO · SELLO
      </div>

      {/* Glow overlay (mouse-reactive) */}
      <div
        ref={glowRef}
        aria-hidden
        className="pointer-events-none absolute top-1/3 left-1/2 -translate-x-1/2 h-[80vh] w-[80vh] rounded-full blur-[120px] opacity-40 will-change-transform"
        style={{ background: 'radial-gradient(circle, hsl(190 90% 60% / 0.35), transparent 60%)' }}
      />

      {/* Top social row */}
      <div className="absolute top-20 left-0 right-0 z-20 px-6 sm:px-10 lg:px-16">
        <div className="flex items-center justify-between text-xs uppercase tracking-[0.25em] text-muted-foreground">
          <span className="hidden md:inline">Portfolio / 2026</span>
          <div className="flex items-center gap-5">
            <a href="https://www.linkedin.com/in/mpho-sello-692193241" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors">
              <Linkedin className="h-4 w-4" />
            </a>
            <a href="https://github.com/SelloMpho?tab=projects" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors">
              <Github className="h-4 w-4" />
            </a>
            <a href="#" className="hover:text-foreground transition-colors">
              <Instagram className="h-4 w-4" />
            </a>
            <a href="mailto:202324276@student.spu.ac.za" className="hover:text-foreground transition-colors">
              <Mail className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>

      {/* Split layout */}
      <div className="relative z-10 grid min-h-screen grid-cols-1 lg:grid-cols-12 items-center gap-8 px-6 sm:px-10 lg:px-16 pt-32 pb-24">
        {/* Left — Typography (layered parallax speeds) */}
        <div className="lg:col-span-7 space-y-10">
          <div data-parallax="0.08" className="animate-slide-in-left">
            <div className="flex items-center gap-3 text-xs uppercase tracking-[0.3em] text-muted-foreground mb-6">
              <span className="h-px w-10 bg-foreground/40" />
              Hi, I'm Mpho Sello
            </div>
            <h1 className="text-display text-[2.6rem] sm:text-[3.6rem] lg:text-[4.6rem] font-bold leading-[0.95]">
              I build <span className="italic font-light text-muted-foreground">intelligent</span>
              <br />
              digital
              <br />
              <span className="text-gradient">web apps.</span>
            </h1>
          </div>

          <div data-parallax="0.18" className="animate-slide-in-right flex items-center gap-4">
            <span className="h-px w-12 bg-foreground/30" />
            <div className="overflow-hidden h-7">
              <div
                className="transition-transform duration-700"
                style={{ transform: `translateY(-${roleIdx * 1.75}rem)` }}
              >
                {ROLES.map((r) => (
                  <div key={r} className="h-7 text-sm sm:text-base uppercase tracking-[0.25em] text-foreground/80">
                    {r}
                  </div>
                ))}
              </div>
            </div>
          </div>

          <p data-parallax="0.22" className="animate-scale-in max-w-xl text-base sm:text-lg text-muted-foreground leading-relaxed">
            Final-year ICT student passionate about creating innovative solutions through
            programming, web development, and data analysis. Welcome to my digital portfolio.
          </p>

          <div className="animate-scale-in flex flex-col sm:flex-row gap-4">
            <Button
              size="lg"
              variant="outline"
              className="magnetic-btn group rounded-none border-foreground/30 bg-transparent text-foreground hover:text-background px-8 h-14 text-sm uppercase tracking-[0.25em]"
              onClick={() => scrollTo('#projects')}
            >
              View Projects
              <ArrowDown className="ml-3 h-4 w-4 -rotate-45 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button
              size="lg"
              variant="ghost"
              className="rounded-none px-8 h-14 text-sm uppercase tracking-[0.25em] text-muted-foreground hover:text-foreground hover:bg-transparent"
              onClick={downloadResume}
            >
              <Download className="mr-3 h-4 w-4" />
              Resume
            </Button>
          </div>
        </div>

        {/* Right — Portrait with mouse parallax + scroll scale */}
        <div className="lg:col-span-5 relative animate-slide-in-right">
          <div
            ref={portraitRef}
            data-parallax="-0.12"
            className="relative w-full max-w-md mx-auto will-change-transform"
          >
            <TiltedCard
              imageSrc={heroImage}
              altText="Mpho Sello portrait"
              captionText="Mpho Sello — ICT"
              containerHeight="520px"
              containerWidth="100%"
              imageHeight="520px"
              imageWidth="390px"
              rotateAmplitude={12}
              scaleOnHover={1.08}
              showMobileWarning={false}
              showTooltip={true}
              displayOverlayContent={true}
              overlayContent={
                <div className="flex h-full w-full items-end p-5">
                  <div className="flex w-full items-center justify-between text-[10px] uppercase tracking-[0.3em] text-white/90">
                    <span>SPU · ICT</span>
                    <span>EST. 2027</span>
                  </div>
                </div>
              }
            />
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <button
        onClick={() => scrollTo('#about')}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 text-[10px] uppercase tracking-[0.3em] text-muted-foreground hover:text-foreground transition-colors"
        aria-label="Scroll to about"
      >
        Scroll
        <span className="h-10 w-px bg-gradient-to-b from-foreground/60 to-transparent animate-float" />
      </button>
    </section>
  );
};

export default Hero;
