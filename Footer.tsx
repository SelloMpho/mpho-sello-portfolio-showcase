import { Heart, Github, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground text-background py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="text-xl font-bold mb-4">Mpho Sello</h3>
            <p className="text-muted mb-4">
              Aspiring ICT Professional passionate about creating innovative 
              solutions through technology and programming.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://www.linkedin.com/in/mpho-sello-692193241" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 bg-background/10 hover:bg-background/20 rounded-lg transition-colors duration-200"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a 
                href="https://github.com/SelloMpho?tab=projects" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 bg-background/10 hover:bg-background/20 rounded-lg transition-colors duration-200"
              >
                <Github className="h-5 w-5" />
              </a>
              <a 
                href="mailto:mpho.sello@student.spu.ac.za"
                className="p-2 bg-background/10 hover:bg-background/20 rounded-lg transition-colors duration-200"
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {[
                { href: '#about', label: 'About Me' },
                { href: '#projects', label: 'Projects' },
                { href: '#skills', label: 'Skills' },
                { href: '#education', label: 'Education' },
                { href: '#contact', label: 'Contact' }
              ].map((link) => (
                <li key={link.href}>
                  <button
                    onClick={() => {
                      const element = document.querySelector(link.href);
                      if (element) {
                        element.scrollIntoView({ behavior: 'smooth' });
                      }
                    }}
                    className="text-muted hover:text-background transition-colors duration-200"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold mb-4">Get In Touch</h4>
            <div className="space-y-2 text-muted">
              <p>202324276@spu.ac.za</p>
              <p>+27 67 668 7955</p>
              <p>Bloemfontein, South Africa</p>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-background/20 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-muted text-sm mb-4 md:mb-0">
            © {currentYear} Mpho Sello. All rights reserved.
          </p>
          <div className="flex items-center text-sm text-muted">
            <span>Made with</span>
            <Heart className="h-4 w-4 mx-1 text-red-400" />
            <span>using React & Tailwind CSS</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;