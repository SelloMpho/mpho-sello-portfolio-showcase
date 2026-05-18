import { useEffect, useState } from 'react';
import { ArrowDown, Download, Github, Linkedin, Mail, Instagram } from 'lucide-react';
import { Button } from '@/components/ui/button';
import heroImage from '@/assets/portfolio-hero.jpg';
import TiltedCard from '@/components/TiltedCard';

const ROLES = [
  'Full Stack Developer',
  'Data Analyst',
  'UI/UX Enthusiast',
  'Future ERP Specialist',
];

const Hero = () => {
  const [roleIdx, setRoleIdx] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setRoleIdx((i) => (i + 1) % ROLES.length), 2400);
    return () => clearInterval(id);
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
      {/* Ambient radial glow */}
      <div className="pointer-events-none absolute -top-1/3 left-1/2 -translate-x-1/2 h-[120vh] w-[120vh] rounded-full bg-[radial-gradient(circle,_hsl(0_0%_100%/0.06),_transparent_60%)]" />

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
        {/* Left — Typography */}
        <div className="lg:col-span-7 space-y-10">
          <div className="animate-slide-in-left">
            <div className="flex items-center gap-3 text-xs uppercase tracking-[0.3em] text-muted-foreground mb-6">
              <span className="h-px w-10 bg-foreground/40" />
              Hi, I'm Mpho Sello
            </div>
            <h1 className="text-display text-[3rem] sm:text-[4.5rem] lg:text-[6.5rem] font-bold leading-[0.95]">
              I build <span className="italic font-light text-muted-foreground">intelligent</span>
              <br />
              digital
              <br />
              <span className="text-gradient-animated">experiences.</span>
            </h1>
          </div>

          <div className="animate-slide-in-right flex items-center gap-4">
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

          <p className="animate-scale-in max-w-xl text-base sm:text-lg text-muted-foreground leading-relaxed">
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

        {/* Right — Portrait */}
        <div className="lg:col-span-5 relative animate-slide-in-right">
          <div className="relative aspect-[3/4] w-full max-w-md mx-auto">
            <div className="absolute -inset-4 border border-foreground/10" />
            <div className="absolute inset-0 overflow-hidden">
              <img
                src={heroImage}
                alt="Mpho Sello portrait"
                className="grayscale-image h-full w-full object-cover scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />
              <div className="absolute inset-0 bg-gradient-to-r from-background/40 via-transparent to-transparent" />
            </div>
            {/* Corner ticks */}
            <span className="absolute -top-2 -left-2 h-4 w-4 border-t border-l border-foreground/60" />
            <span className="absolute -top-2 -right-2 h-4 w-4 border-t border-r border-foreground/60" />
            <span className="absolute -bottom-2 -left-2 h-4 w-4 border-b border-l border-foreground/60" />
            <span className="absolute -bottom-2 -right-2 h-4 w-4 border-b border-r border-foreground/60" />
          </div>
          <div className="mt-6 flex items-center justify-between text-[10px] uppercase tracking-[0.3em] text-muted-foreground max-w-md mx-auto">
            <span>SPU · ICT</span>
            <span>EST. 2027</span>
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
