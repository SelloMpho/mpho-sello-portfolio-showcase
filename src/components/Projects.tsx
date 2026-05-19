import { useState } from 'react';
import { ExternalLink, Github, Book, Scale, Heart, X } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { TweetCard } from '@/components/ui/tweet-card';

interface Project {
  id: number;
  title: string;
  description: string;
  longDescription: string;
  technologies: string[];
  features: string[];
  icon: React.ElementType;
  github?: string;
  demo?: string;
  category: string;
}

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const projects: Project[] = [
    {
      id: 1,
      title: "Tutorial Booking System",
      description: "A comprehensive web-based platform for managing tutorial sessions and bookings for students and tutors.",
      longDescription: "A full-stack web application designed to streamline the process of booking and managing tutorial sessions. The system allows students to search for available tutors, book sessions, and manage their learning schedule, while tutors can set their availability and track their sessions.",
      technologies: ["Python", "Django", "HTML", "CSS", "JavaScript", "SQLite"],
      features: [
        "User authentication and authorization",
        "Real-time booking system",
        "Payment integration",
        "Email notifications",
        "Rating and review system",
        "Calendar integration"
      ],
      icon: Book,
      github: "https://github.com/SelloMpho?tab=projects",
      demo: "https://tutorial-booking-demo.netlify.app",
      category: "Web Development"
    },
    {
      id: 2,
      title: "Legal Assistance Booking App",
      description: "Mobile-responsive application connecting clients with legal professionals for consultation and assistance.",
      longDescription: "A sophisticated booking platform that bridges the gap between clients seeking legal assistance and qualified legal professionals. The application features secure communication, document sharing, and appointment management capabilities.",
      technologies: ["JavaScript", "React", "Node.js", "MongoDB", "Express"],
      features: [
        "Client-lawyer matching system",
        "Secure document upload",
        "Video consultation integration",
        "Case management dashboard",
        "Billing and invoicing"
      ],
      icon: Scale,
      github: "https://github.com/SelloMpho?tab=projects",
      demo: "https://legal-assistance-demo.netlify.app",
      category: "Full-Stack Development"
    },
    {
      id: 3,
      title: "HerCycle Sanitary Services Donation Platform",
      description: "Higher Institutions-driven platform facilitating donations and distribution of sanitary products to underserved students.",
      longDescription: "A social impact application designed to address period poverty by connecting donors with students in need. The platform includes inventory management, distribution tracking, and impact analytics to ensure effective resource allocation.",
      technologies: ["Python", "Django", "PostgreSQL", "HTML", "CSS", "JavaScript"],
      features: [
        "Donation tracking system",
        "Inventory management",
        "Impact analytics dashboard",
        "Volunteer coordination",
        "SMS notifications"
      ],
      icon: Heart,
      github: "https://github.com/SelloMpho?tab=projects",
      demo: "https://sanitary-donation-demo.netlify.app",
      category: "Social Impact"
    }
  ];

  return (
    <section id="projects" className="py-32 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-display text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 text-gradient-animated">
            Featured Projects
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Explore some of my recent work and the technologies I've used to bring ideas to life
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => {
            const IconComponent = project.icon;
            return (
              <Backlight key={project.id} className="rounded-2xl h-full">
                <TweetCard className="h-full">
                  <Card
                    className="project-card cursor-pointer group h-full border-0 bg-transparent shadow-none rounded-2xl"
                    onClick={() => setSelectedProject(project)}
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <CardHeader>
                      <div className="flex items-center space-x-3 mb-4">
                        <div className="p-2 rounded-lg bg-skill-bg">
                          <IconComponent className="h-6 w-6 text-primary" />
                        </div>
                        <span className="text-sm text-muted-foreground font-medium">
                          {project.category}
                        </span>
                      </div>
                      <CardTitle className="group-hover:text-primary transition-colors duration-200">
                        {project.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <p className="text-muted-foreground">
                        {project.description}
                      </p>

                      <div className="flex flex-wrap gap-2">
                        {project.technologies.slice(0, 3).map((tech) => (
                          <span
                            key={tech}
                            className="px-2 py-1 bg-secondary text-secondary-foreground rounded text-xs font-medium"
                          >
                            {tech}
                          </span>
                        ))}
                        {project.technologies.length > 3 && (
                          <span className="px-2 py-1 bg-secondary text-secondary-foreground rounded text-xs font-medium">
                            +{project.technologies.length - 3} more
                          </span>
                        )}
                      </div>

                      <div className="flex space-x-3 pt-4">
                        {project.github && (
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={(e) => {
                              e.stopPropagation();
                              window.open(project.github, '_blank');
                            }}
                          >
                            <Github className="h-4 w-4 mr-2" />
                            Code
                          </Button>
                        )}
                        {project.demo && (
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={(e) => {
                              e.stopPropagation();
                              window.open(project.demo, '_blank');
                            }}
                          >
                            <ExternalLink className="h-4 w-4 mr-2" />
                            Demo
                          </Button>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                </TweetCard>
              </Backlight>
            );
          })}
        </div>

        {/* Project Detail Modal */}
        <Dialog open={!!selectedProject} onOpenChange={() => setSelectedProject(null)}>
          <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
            {selectedProject && (
              <>
                <DialogHeader>
                  <DialogTitle className="flex items-center space-x-3 text-2xl">
                    <selectedProject.icon className="h-8 w-8 text-primary" />
                    <span>{selectedProject.title}</span>
                  </DialogTitle>
                </DialogHeader>
                
                <div className="space-y-6">
                  <p className="text-muted-foreground text-lg leading-relaxed">
                    {selectedProject.longDescription}
                  </p>

                  <div>
                    <h4 className="font-semibold text-lg mb-3">Key Features</h4>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                      {selectedProject.features.map((feature, index) => (
                        <li key={index} className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-primary rounded-full"></div>
                          <span className="text-muted-foreground">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold text-lg mb-3">Technologies Used</h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.technologies.map((tech) => (
                        <span 
                          key={tech}
                          className="px-3 py-1 bg-skill-bg rounded-full text-sm font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex space-x-4 pt-4">
                    {selectedProject.github && (
                      <Button 
                        onClick={() => window.open(selectedProject.github, '_blank')}
                        className="flex-1"
                      >
                        <Github className="h-4 w-4 mr-2" />
                        View Source Code
                      </Button>
                    )}
                    {selectedProject.demo && (
                      <Button 
                        variant="outline"
                        onClick={() => window.open(selectedProject.demo, '_blank')}
                        className="flex-1"
                      >
                        <ExternalLink className="h-4 w-4 mr-2" />
                        Live Demo
                      </Button>
                    )}
                  </div>
                </div>
              </>
            )}
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
};

export default Projects;