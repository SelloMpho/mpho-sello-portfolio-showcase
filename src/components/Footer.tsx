import { Heart, Github, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden border-t border-border/40 bg-background/60 backdrop-blur-xl text-foreground py-16">
      {/* Ambient parallax glows */}
      <div
        aria-hidden
        data-parallax="-0.2"
        className="pointer-events-none absolute -top-32 -left-32 h-[28rem] w-[28rem] rounded-full blur-[120px] opacity-30"
        style={{ background: 'radial-gradient(circle, hsl(190 90% 55% / 0.55), transparent 60%)' }}
      />
      <div
        aria-hidden
        data-parallax="-0.3"
        className="pointer-events-none absolute -bottom-40 -right-32 h-[30rem] w-[30rem] rounded-full blur-[140px] opacity-25"
        style={{ background: 'radial-gradient(circle, hsl(280 80% 60% / 0.5), transparent 60%)' }}
      />

      {/* Watermark */}
      <div
        aria-hidden
        data-watermark
        className="pointer-events-none absolute inset-x-0 -bottom-10 text-center text-[18vw] font-black tracking-tighter leading-none text-foreground/[0.04] select-none whitespace-nowrap"
      >
        MPHO SELLO
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">
          {/* Brand */}
          <div data-parallax="0.08">
            <h3 className="text-2xl font-bold mb-4 text-gradient">Mpho Sello</h3>
            <p className="text-muted-foreground mb-5 leading-relaxed">
              Aspiring ICT Professional passionate about creating innovative
              solutions through technology and programming.
            </p>
            <div className="flex space-x-3">
              <a
                href="https://www.linkedin.com/in/mpho-sello-692193241"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-lg border border-border/50 bg-card/40 backdrop-blur-md hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-300"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="https://github.com/SelloMpho?tab=projects"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-lg border border-border/50 bg-card/40 backdrop-blur-md hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-300"
              >
                <Github className="h-5 w-5" />
              </a>
              <a
                href="mailto:202324276@spu.ac.za"
                className="p-2.5 rounded-lg border border-border/50 bg-card/40 backdrop-blur-md hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-300"
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div data-parallax="0.14">
            <h4 className="font-semibold mb-4 text-foreground">Quick Links</h4>
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
                    className="text-muted-foreground hover:text-primary transition-colors duration-200"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div data-parallax="0.2">
            <h4 className="font-semibold mb-4 text-foreground">Get In Touch</h4>
            <div className="space-y-2 text-muted-foreground">
              <p>202324276@spu.ac.za</p>
              <p>+27 67 668 7955</p>
              <p>Bloemfontein, South Africa</p>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-border/40 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-muted-foreground text-sm mb-3 md:mb-0">
            © {currentYear} Mpho Sello. All rights reserved.
          </p>
          <div className="flex items-center text-sm text-muted-foreground">
            <span>Made with</span>
            <Heart className="h-4 w-4 mx-1.5 text-primary fill-primary/40" />
            <span>using React & Tailwind CSS</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
