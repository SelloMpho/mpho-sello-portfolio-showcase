import { useState } from 'react';
import { Mail, Phone, MapPin, Send, Linkedin, Github, Eye, EyeOff } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [showReferences, setShowReferences] = useState(false);
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    toast({
      title: "Message Sent!",
      description: "Thank you for your message. I'll get back to you soon.",
    });
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const references = [
    {
      name: "Dr. Mziwoxolo Gulwa",
      position: "Lecturer - ICT Department",
      institution: "Sol Plaatje University",
      email: "mziwoxolo.gulwa@spu.ac.za",
      phone: "+27 53 491 9329"
    },
    {
      name: "Mr. Lethabo Victor Molefe",
      position: "Senior Lecturer - ICT Department",
      institution: "Sol Plaatje University",
      email: "lethabo.molefe@spu.ac.za",
      phone: "+27 53 491 9360"
    },
    {
      name: "Mr. Mxolisi Mqhubeka",
      position: "Senior Lecturer - ICT Department",
      institution: "Sol Plaatje University",
      email: "mxolisi.mqhubeka@spu.ac.za",
      phone: "+27 53 491 9364"
    }
  ];

  return (
    <section id="contact" className="py-20 section-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gradient mb-4">
            Get In Touch
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Ready to collaborate or have questions? I'd love to hear from you. Let's connect and discuss opportunities.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <Card className="project-card">
              <CardHeader>
                <CardTitle>Contact Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="p-3 bg-skill-bg rounded-lg">
                    <Mail className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium">Email</p>
                    <p className="text-muted-foreground">mpho.sello@student.spu.ac.za</p>
                    <p className="text-muted-foreground">mphosello999@gmail.com</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="p-3 bg-skill-bg rounded-lg">
                    <Phone className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium">Phone</p>
                    <p className="text-muted-foreground">+27 79 950 8946</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="p-3 bg-skill-bg rounded-lg">
                    <MapPin className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium">Location</p>
                    <p className="text-muted-foreground">Kimberley, South Africa</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Social Links */}
            <Card className="project-card">
              <CardHeader>
                <CardTitle>Connect With Me</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex space-x-4">
                  <Button 
                    variant="outline" 
                    size="lg"
                    onClick={() => window.open('https://www.linkedin.com/in/mpho-sello-692193241', '_blank')}
                  >
                    <Linkedin className="h-5 w-5 mr-2" />
                    LinkedIn
                  </Button>
                  <Button 
                    variant="outline" 
                    size="lg"
                    onClick={() => window.open('https://github.com/SelloMpho?tab=projects', '_blank')}
                  >
                    <Github className="h-5 w-5 mr-2" />
                    GitHub
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* References */}
            <Card className="project-card">
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  Professional References
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => setShowReferences(!showReferences)}
                  >
                    {showReferences ? (
                      <EyeOff className="h-4 w-4" />
                    ) : (
                      <Eye className="h-4 w-4" />
                    )}
                  </Button>
                </CardTitle>
              </CardHeader>
              <CardContent>
                {showReferences ? (
                  <div className="space-y-4">
                    {references.map((ref, index) => (
                      <div key={index} className="border-l-4 border-primary pl-4">
                        <h4 className="font-semibold">{ref.name}</h4>
                        <p className="text-sm text-muted-foreground">{ref.position}</p>
                        <p className="text-sm text-muted-foreground">{ref.institution}</p>
                        <div className="mt-2 space-y-1">
                          <p className="text-xs text-muted-foreground">{ref.email}</p>
                          <p className="text-xs text-muted-foreground">{ref.phone}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <p className="text-muted-foreground">
                    Click to view professional references available upon request.
                  </p>
                )}
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <Card className="project-card">
            <CardHeader>
              <CardTitle>Send Me a Message</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2">
                      Full Name
                    </label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Your full name"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">
                      Email Address
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="your.email@example.com"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium mb-2">
                    Subject
                  </label>
                  <Input
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    placeholder="What's this about?"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Tell me about your project, opportunity, or question..."
                    rows={6}
                    required
                  />
                </div>

                <Button type="submit" className="w-full" size="lg">
                  <Send className="h-4 w-4 mr-2" />
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;