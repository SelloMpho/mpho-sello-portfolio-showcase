import { useEffect, useRef } from 'react';
import { Globe, Heart, MessageCircle, User } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { NumberTicker } from '@/components/ui/number-ticker';
import aboutPortrait from '@/assets/about-portrait.png';

const About = () => {
  const portraitRef = useRef<HTMLDivElement>(null);
  const portraitImageRef = useRef<HTMLDivElement>(null);
  const portraitGlowRef = useRef<HTMLDivElement>(null);

  // Mouse-reactive micro-parallax (mirrors Hero portrait behavior)
  useEffect(() => {
    const container = portraitRef.current;
    if (!container) return;
    let raf = 0;
    let tx = 0, ty = 0, gx = 0, gy = 0;
    const handle = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      const cx = rect.left + rect.width / 2;
      const cy = rect.top + rect.height / 2;
      const dx = (e.clientX - cx) / rect.width;
      const dy = (e.clientY - cy) / rect.height;
      tx = dx * 14;
      ty = dy * 14;
      gx = dx * 28;
      gy = dy * 28;
      if (!raf) {
        raf = requestAnimationFrame(() => {
          if (portraitImageRef.current) {
            portraitImageRef.current.style.transform = `translate3d(${tx}px, ${ty}px, 0) scale(1.05)`;
          }
          if (portraitGlowRef.current) {
            portraitGlowRef.current.style.transform = `translate3d(${gx}px, ${gy}px, 0)`;
          }
          raf = 0;
        });
      }
    };
    window.addEventListener('mousemove', handle);
    return () => {
      window.removeEventListener('mousemove', handle);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  const languages = ['English', 'Sesotho', 'Xhosa'];
  const softSkills = [
    'Problem Solving',
    'Team Collaboration',
    'Critical Thinking',
    'Communication',
    'Adaptability',
    'Time Management'
  ];


  return (
    <section id="about" className="relative py-32 section-bg overflow-hidden">
      {/* Editorial watermark */}
      <div
        data-watermark
        aria-hidden
        className="pointer-events-none absolute -top-10 left-0 right-0 text-[20vw] font-bold text-foreground/[0.025] leading-none tracking-tighter whitespace-nowrap select-none"
        style={{ fontFamily: '"Space Grotesk", sans-serif' }}
      >
        PROFILE — ABOUT
      </div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-display text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 text-gradient-animated">
            About Me
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Get to know more about my background, skills, and passion for technology
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Portrait — mirrors hero image treatment + parallax */}
          <div
            ref={portraitRef}
            data-parallax="-0.15"
            className="relative animate-slide-in-left order-1 [perspective:1200px]"
          >
            {/* Ambient glow that follows the cursor */}
            <div
              ref={portraitGlowRef}
              aria-hidden
              className="pointer-events-none absolute -inset-10 -z-10 rounded-[2rem] bg-[radial-gradient(circle_at_center,hsl(var(--primary)/0.35),transparent_60%)] blur-3xl transition-transform duration-500 ease-out will-change-transform"
            />
            <div className="relative rounded-2xl overflow-hidden shadow-2xl ring-1 ring-border/40">
              <div
                ref={portraitImageRef}
                className="relative aspect-[4/5] w-full transition-transform duration-500 ease-out will-change-transform"
                style={{
                  backgroundImage: `url(${aboutPortrait})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  transform: 'scale(1.05)',
                }}
              >
                <div className="absolute inset-0 bg-background/20"></div>
              </div>
            </div>
            {/* Floating accents like Hero — layered parallax depths */}
            <div data-parallax="0.35" className="absolute -top-6 -left-6 w-20 h-20 bg-primary/10 rounded-full animate-float hidden lg:block"></div>
            <div data-parallax="0.5" className="absolute -bottom-6 -right-6 w-16 h-16 bg-accent/10 rounded-full animate-float hidden lg:block" style={{ animationDelay: '1s' }}></div>
            <div data-parallax="0.2" className="absolute top-1/2 -right-4 w-12 h-12 bg-primary/5 rounded-full animate-float hidden lg:block" style={{ animationDelay: '2s' }}></div>
          </div>


          {/* Profile Section — right */}
          <div className="space-y-8 order-2">
            <div className="animate-slide-up">
              <h3 className="text-2xl font-bold mb-6 flex items-center">
                <User className="mr-3 h-6 w-6 text-primary" />
                Profile Summary
              </h3>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                I'm a dedicated final-year ICT student at Sol Plaatje University with a passion 
                for technology and innovation. My journey in information and communication technology 
                has equipped me with a diverse skill set spanning programming, web development, 
                and data analysis.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                I thrive on solving complex problems through code, data analysis, and 
                creating digital solutions that make a meaningful impact. 
                My goal is to leverage technology to build applications and 
                uncover insights through data that improve people's lives and 
                contribute to the digital transformation of our society.
              </p>
            </div>

            {/* Languages */}
            <div className="animate-slide-up">
              <h4 className="text-xl font-semibold mb-4 flex items-center">
                <Globe className="mr-3 h-5 w-5 text-primary" />
                Languages
              </h4>
              <div className="flex flex-wrap gap-3">
                {languages.map((language) => (
                  <span 
                    key={language}
                    className="px-4 py-2 bg-skill-bg rounded-full text-sm font-medium"
                  >
                    {language}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Skills Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

            <Card className="project-card">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Heart className="mr-3 h-5 w-5 text-primary" />
                  Core Values
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Continuous learning and growth</li>
                  <li>• Innovation through technology</li>
                  <li>• Collaborative problem-solving</li>
                  <li>• Ethical and responsible development</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="project-card">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <MessageCircle className="mr-3 h-5 w-5 text-primary" />
                  Soft Skills
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-3">
                  {softSkills.map((skill) => (
                    <div 
                      key={skill}
                      className="flex items-center space-x-2"
                    >
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      <span className="text-sm text-muted-foreground">{skill}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
        </div>


        {/* Stats Section */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="text-3xl font-bold text-primary mb-2 flex items-center justify-center">
              <NumberTicker value={4} />+
            </div>
            <div className="text-sm text-muted-foreground">Programming Languages</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary mb-2 flex items-center justify-center">
              <NumberTicker value={10} />+
            </div>
            <div className="text-sm text-muted-foreground">Projects Completed</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary mb-2 flex items-center justify-center">
              <NumberTicker value={3} />+
            </div>
            <div className="text-sm text-muted-foreground">Years of Study</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary mb-2 flex items-center justify-center">
              <NumberTicker value={5} />+
            </div>
            <div className="text-sm text-muted-foreground">Certifications</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;