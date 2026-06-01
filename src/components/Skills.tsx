import type { ComponentType } from 'react';
import {
  FaPython,
  FaJava,
  FaJsSquare,
  FaHtml5,
  FaCss3Alt,
  FaChartBar,
  FaDatabase,
  FaFileExcel,
  FaReact,
  FaNodeJs,
  FaGitAlt
} from 'react-icons/fa';
import { SiTypescript } from 'react-icons/si';

type SkillItem = {
  icon: ComponentType<{ className?: string }>;
  name: string;
  color: string;
};

const LogoLoop = ({
  items,
  speedSeconds = 26,
}: {
  items: SkillItem[];
  speedSeconds?: number;
}) => {
  const loopItems = [...items, ...items];

  return (
    <div className="relative overflow-hidden rounded-2xl border border-border/50 bg-card/20 backdrop-blur-sm">
      <div className="pointer-events-none absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-background to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-background to-transparent" />
      <div
        className="flex w-max items-center gap-3 py-4 px-3 motion-reduce:transform-none hover:[animation-play-state:paused]"
        style={{ animation: `marquee ${speedSeconds}s linear infinite` }}
      >
        {loopItems.map((item, idx) => {
          const Icon = item.icon;
          return (
            <div
              key={`${item.name}-${idx}`}
              className="flex items-center gap-2 rounded-full border border-border/60 bg-background/30 px-4 py-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              <Icon className="h-4 w-4" style={{ color: item.color }} aria-hidden />
              <span className="whitespace-nowrap">{item.name}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

const Skills = () => {
  const skills: SkillItem[] = [
    { icon: FaPython, name: 'Python', color: '#3776ab' },
    { icon: FaJava, name: 'Java', color: '#f89820' },
    { icon: FaJsSquare, name: 'JavaScript', color: '#f7df1e' },
    { icon: FaHtml5, name: 'HTML5', color: '#e34f26' },
    { icon: FaCss3Alt, name: 'CSS3', color: '#1572b6' },
    { icon: SiTypescript, name: 'TypeScript', color: '#3178c6' },
    { icon: FaDatabase, name: 'SQL', color: '#336791' },
    { icon: FaChartBar, name: 'Power BI', color: '#f2c811' },
    { icon: FaFileExcel, name: 'Excel', color: '#217346' },
    { icon: FaReact, name: 'React', color: '#61dafb' },
    { icon: FaNodeJs, name: 'Node.js', color: '#339933' },
    { icon: FaGitAlt, name: 'Git', color: '#f05032' }
  ];

  return (
    <section id="skills" className="relative py-32 section-bg overflow-hidden">
      <div
        data-watermark
        aria-hidden
        className="pointer-events-none absolute -top-10 left-0 right-0 text-[20vw] font-bold text-foreground/[0.025] leading-none tracking-tighter whitespace-nowrap select-none"
        style={{ fontFamily: '"Space Grotesk", sans-serif' }}
      >
        SKILLS — TOOLS
      </div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-display text-4xl sm:text-5xl lg:text-6xl font-bold mb-4 text-gradient">
            Skills & Technologies
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Programming languages and tools I work with
          </p>
        </div>

        <div className="mb-10">
          <LogoLoop items={skills} />
        </div>
      </div>
    </section>
  );
};

export default Skills;
