import { Code, Database, Globe, Wrench } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

interface Skill {
  name: string;
  level: number;
  category: string;
  learning?: boolean;
}

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: Code,
      skills: [
        { name: "Python", level: 90, category: "programming" },
        { name: "Java", level: 85, category: "programming" },
        { name: "JavaScript", level: 80, category: "programming" },
        { name: "SQL", level: 85, category: "programming" }
      ]
    },
    {
      title: "Web Development",
      icon: Globe,
      skills: [
        { name: "HTML5", level: 95, category: "web" },
        { name: "CSS3", level: 90, category: "web" },
        { name: "Django", level: 85, category: "web" },
        { name: "React", level: 60, category: "web", learning: true }
      ]
    },
    {
      title: "Data & Analytics",
      icon: Database,
      skills: [
        { name: "SQL", level: 85, category: "data" },
        { name: "Power BI", level: 50, category: "data", learning: true },
        { name: "Data Analysis", level: 75, category: "data" },
        { name: "Database Design", level: 80, category: "data" }
      ]
    },
    {
      title: "Tools & Software",
      icon: Wrench,
      skills: [
        { name: "VS Code", level: 95, category: "tools" },
        { name: "Jupyter Notebook", level: 85, category: "tools" },
        { name: "Figma", level: 70, category: "tools" },
        { name: "Git", level: 80, category: "tools" }
      ]
    }
  ];

  const getSkillColor = (level: number) => {
    if (level >= 80) return 'bg-primary';
    if (level >= 60) return 'bg-accent';
    return 'bg-muted-foreground';
  };

  return (
    <section id="skills" className="py-20 section-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gradient mb-4">
            Skills & Expertise
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            A comprehensive overview of my technical skills and proficiency levels
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map((category, categoryIndex) => {
            const IconComponent = category.icon;
            return (
              <Card 
                key={category.title} 
                className="project-card h-full"
                style={{ animationDelay: `${categoryIndex * 0.1}s` }}
              >
                <CardHeader>
                  <CardTitle className="flex items-center space-x-3">
                    <div className="p-2 rounded-lg bg-skill-bg">
                      <IconComponent className="h-6 w-6 text-primary" />
                    </div>
                    <span>{category.title}</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    {category.skills.map((skill, skillIndex) => (
                      <div key={skill.name} className="space-y-2">
                        <div className="flex justify-between items-center">
                          <span className="font-medium flex items-center">
                            {skill.name}
                            {skill.learning && (
                              <span className="ml-2 px-2 py-1 bg-accent/20 text-accent text-xs rounded-full">
                                Learning
                              </span>
                            )}
                          </span>
                          <span className="text-sm text-muted-foreground">
                            {skill.level}%
                          </span>
                        </div>
                        <div className="w-full bg-secondary rounded-full h-2 overflow-hidden">
                          <div
                            className={`h-full rounded-full transition-all duration-1000 ease-out ${getSkillColor(skill.level)}`}
                            style={{
                              width: `${skill.level}%`,
                              animationDelay: `${(categoryIndex * 0.1) + (skillIndex * 0.05)}s`
                            }}
                          ></div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Certifications Section */}
        <div className="mt-20">
          <h3 className="text-2xl font-bold text-center mb-8">Certifications</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              "Data Science Fundamentals",
              "Python for Data Science",
              "SQL Database Management",
              "Web Development Essentials",
              "Big Data Analytics"
            ].map((cert, index) => (
              <Card key={cert} className="project-card text-center">
                <CardContent className="pt-6">
                  <div className="w-16 h-16 bg-skill-bg rounded-full flex items-center justify-center mx-auto mb-4">
                    <Database className="h-8 w-8 text-primary" />
                  </div>
                  <h4 className="font-semibold mb-2">{cert}</h4>
                  <p className="text-sm text-muted-foreground">Big Data University</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;