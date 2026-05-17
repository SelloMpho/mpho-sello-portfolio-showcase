import {
  FaPython,
  FaJava,
  FaJsSquare,
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaNodeJs,
  FaGitAlt
} from 'react-icons/fa';
import { SiTypescript } from 'react-icons/si';

const Skills = () => {
  const skills = [
    { icon: FaPython, name: 'Python', color: '#3776ab' },
    { icon: FaJava, name: 'Java', color: '#f89820' },
    { icon: FaJsSquare, name: 'JavaScript', color: '#f7df1e' },
    { icon: FaHtml5, name: 'HTML5', color: '#e34f26' },
    { icon: FaCss3Alt, name: 'CSS3', color: '#1572b6' },
    { icon: SiTypescript, name: 'TypeScript', color: '#3178c6' },
    { icon: FaReact, name: 'React', color: '#61dafb' },
    { icon: FaNodeJs, name: 'Node.js', color: '#339933' },
    { icon: FaGitAlt, name: 'Git', color: '#f05032' }
  ];

  // Duplicate the array for seamless loop
  const duplicatedSkills = [...skills, ...skills];

  return (
    <section id="skills" className="py-32 section-bg overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-display text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 text-gradient-animated">
            Skills & Technologies
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Programming languages and tools I work with
          </p>
        </div>

        {/* Marquee Container */}
        <div className="relative">
          {/* Gradient overlays for seamless edges */}
          <div className="absolute left-0 top-0 w-20 h-full bg-gradient-to-r from-background to-transparent z-10"></div>
          <div className="absolute right-0 top-0 w-20 h-full bg-gradient-to-l from-background to-transparent z-10"></div>
          
          <div className="flex animate-marquee space-x-12 md:space-x-16 lg:space-x-20">
            {duplicatedSkills.map((skill, index) => {
              const IconComponent = skill.icon;
              return (
                <div
                  key={`${skill.name}-${index}`}
                  className="flex-shrink-0 text-5xl md:text-7xl lg:text-8xl transition-all duration-300 hover:scale-110 cursor-pointer"
                  style={{ color: skill.color }}
                >
                  <IconComponent />
                </div>
              );
            })}
          </div>
        </div>

        {/* Skills Grid for smaller screens (optional fallback) */}
        <div className="mt-16 md:hidden">
          <div className="grid grid-cols-3 gap-8 max-w-md mx-auto">
            {skills.map((skill, index) => {
              const IconComponent = skill.icon;
              return (
                <div
                  key={skill.name}
                  className="flex justify-center items-center text-4xl transition-all duration-300 hover:scale-110 cursor-pointer"
                  style={{ color: skill.color }}
                >
                  <IconComponent />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;