import { GraduationCap, Calendar, MapPin } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

interface EducationItem {
  institution: string;
  degree: string;
  period: string;
  status: string;
  location: string;
  description: string;
  achievements?: string[];
}

const Education = () => {
  const educationHistory: EducationItem[] = [
    {
      institution: "Sol Plaatje University",
      degree: "Diploma in Information and Communication Technology",
      period: "2023 - Present",
      status: "Final Year",
      location: "Kimberley, South Africa",
      description: "Comprehensive ICT program focusing on software and application development, database management, web technologies, and data analysis.",
      achievements: [
        "Specialization in Software and Application Development",
        "Database Management Systems",
        "Web Development Technologies",
        "Data Analysis and Design"
      ]
    },
    {
      institution: "Motheo TVET College",
      degree: "National Certificate in Motor trade",
      period: "2020 - 2021",
      status: "Completed N4",
      location: "Bloemfontein, South Africa",
      description: "Technical and vocational education focusing on motor trade theory certification.",
      achievements: [
        "Engine Systems and Components",
        "Vehicle Electrical and Electronic Systems",
        "Transmission and Drivetrain Systems",
        "Vehicle Safety, Suspension, and Braking Systems"
      ]
    },
    {
      institution: "Bainsvlei Combined School",
      degree: "National Senior Certificate ",
      period: "2019",
      status: "Completed",
      location: "Bainsvlei, South Africa",
      description: "Completed secondary education with focus on Mathematics and Science subjects",
      achievements: [
        "Mathematics",
        "Physical Science",
        "Life Science",
        "English First Language"
      ]
    }
  ];

  return (
    <section id="education" className="py-32 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-display text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 text-gradient-animated">
            Education Journey
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            My academic path and the knowledge foundation that shapes my expertise
          </p>
        </div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-border md:transform md:-translate-x-0.5"></div>

          <div className="space-y-12">
            {educationHistory.map((item, index) => (
              <div
                key={item.institution}
                className={`relative flex items-center ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                } flex-col md:items-start`}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                {/* Timeline Node */}
                <div className="absolute left-8 md:left-1/2 w-4 h-4 bg-primary rounded-full border-4 border-background md:transform md:-translate-x-2 z-10"></div>

                {/* Content Card */}
                <div className={`w-full md:w-5/12 ml-16 md:ml-0 ${
                  index % 2 === 0 ? 'md:mr-8' : 'md:ml-8'
                }`}>
                  <Card className="project-card animate-slide-up">
                    <CardContent className="p-6">
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex-1">
                          <h3 className="text-xl font-bold text-foreground mb-2">
                            {item.institution}
                          </h3>
                          <h4 className="text-lg font-semibold text-primary mb-2">
                            {item.degree}
                          </h4>
                        </div>
                        <div className="flex-shrink-0 ml-4">
                          <GraduationCap className="h-8 w-8 text-primary" />
                        </div>
                      </div>

                      <div className="space-y-3 mb-4">
                        <div className="flex items-center text-sm text-muted-foreground">
                          <Calendar className="h-4 w-4 mr-2" />
                          <span>{item.period}</span>
                          <span className="mx-2">•</span>
                          <span className="px-2 py-1 bg-skill-bg rounded-full text-xs font-medium">
                            {item.status}
                          </span>
                        </div>
                        <div className="flex items-center text-sm text-muted-foreground">
                          <MapPin className="h-4 w-4 mr-2" />
                          <span>{item.location}</span>
                        </div>
                      </div>

                      <p className="text-muted-foreground mb-4 leading-relaxed">
                        {item.description}
                      </p>

                      {item.achievements && (
                        <div>
                          <h5 className="font-semibold mb-2 text-sm">Key Subjects/Areas:</h5>
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                            {item.achievements.map((achievement, achievementIndex) => (
                              <div 
                                key={achievementIndex}
                                className="flex items-center space-x-2"
                              >
                                <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                                <span className="text-sm text-muted-foreground">
                                  {achievement}
                                </span>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}
                    </CardContent>
                  </Card>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Additional Academic Info */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card className="project-card text-center">
            <CardContent className="pt-6">
              <div className="text-3xl font-bold text-primary mb-2">3+</div>
              <div className="text-sm text-muted-foreground">Years of ICT Education</div>
            </CardContent>
          </Card>
          <Card className="project-card text-center">
            <CardContent className="pt-6">
              <div className="text-3xl font-bold text-primary mb-2">15+</div>
              <div className="text-sm text-muted-foreground">Technical Courses Completed</div>
            </CardContent>
          </Card>
          <Card className="project-card text-center">
            <CardContent className="pt-6">
              <div className="text-3xl font-bold text-primary mb-2">5+</div>
              <div className="text-sm text-muted-foreground">Industry Certifications</div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Education;