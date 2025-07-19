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
    { icon: FaPython, name: 'Python' },
    { icon: FaJava, name: 'Java' },
    { icon: FaJsSquare, name: 'JavaScript' },
    { icon: FaHtml5, name: 'HTML5' },
    { icon: FaCss3Alt, name: 'CSS3' },
    { icon: SiTypescript, name: 'TypeScript' },
    { icon: FaReact, name: 'React' },
    { icon: FaNodeJs, name: 'Node.js' },
    { icon: FaGitAlt, name: 'Git' }
  ];

  // Duplicate the array for seamless loop
  const duplicatedSkills = [...skills, ...skills];

  return (
    <section id="skills" className="py-20 section-bg overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gradient mb-4">
            Skills & Technologies
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Programming languages and tools I work with
          </p>
        </div>

        {/* Marquee Container */}
        <div className="relative">
          <div className="flex animate-marquee space-x-16 md:space-x-24">
            {duplicatedSkills.map((skill, index) => {
              const IconComponent = skill.icon;
              return (
                <div
                  key={`${skill.name}-${index}`}
                  className="flex-shrink-0 text-6xl md:text-8xl text-primary/70 hover:text-primary transition-colors duration-300"
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