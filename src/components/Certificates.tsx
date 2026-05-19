import { FaExternalLinkAlt, FaFilePdf } from 'react-icons/fa';
import { TweetCard } from '@/components/ui/tweet-card';

const Certificates = () => {
  const certificates = [
    { name: 'Cloud Database', pdf: '/certificates/CLOUD_DATABASE.pdf' },
    { name: 'Data Certificate', pdf: '/certificates/DataCertificate.pdf' },
    { name: 'eCertificate', pdf: '/certificates/eCertificate.pdf' },
    { name: 'FNB App Awards 2025', pdf: '/certificates/FNB_App_of_the_Year_Awards_Academy_2025.pdf' },
    { name: 'IBM Certificate', pdf: '/certificates/IBM_First_Certificate.pdf' },
    { name: 'IBM Python (SkillsBuild)', pdf: '/certificates/IBM_PY0101EN_Certificate_IBM_SkillsBuild.pdf' },
    { name: 'Oracle Analytics Cloud', pdf: '/certificates/Oracle_Analytics_Cloud_22025.pdf' },
    { name: 'Spark Fundamentals I', pdf: '/certificates/Spark_Fundamentals_I_Certificate.pdf' },
  ];

  return (
    <section id="certificates" className="py-32 section-bg overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-display text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 text-gradient-animated">
            Certificates & Awards
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Professional certifications and achievements
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {certificates.map((cert) => (
            <Backlight key={cert.name} className="rounded-2xl">
              <TweetCard className="group h-full">
                <a
                  href={cert.pdf}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block"
                >
                  <div className="relative w-full h-56 bg-muted overflow-hidden">
                    <object
                      data={`${cert.pdf}#toolbar=0&navpanes=0&scrollbar=0&view=FitH`}
                      type="application/pdf"
                      className="w-full h-full pointer-events-none"
                      aria-label={cert.name}
                    >
                      <div className="w-full h-full flex flex-col items-center justify-center gap-3 bg-gradient-to-br from-primary/10 to-accent/10 p-4 text-center">
                        <FaFilePdf className="text-5xl text-primary" />
                        <span className="text-sm font-medium text-foreground">
                          {cert.name}
                        </span>
                        <span className="text-xs text-muted-foreground">
                          Click to view certificate
                        </span>
                      </div>
                    </object>
                    <div className="absolute inset-0 bg-transparent group-hover:bg-foreground/5 transition-colors duration-300" />
                  </div>
                  <div className="p-4 flex items-center justify-between gap-2">
                    <span className="text-sm font-medium text-foreground truncate">
                      {cert.name}
                    </span>
                    <FaExternalLinkAlt className="text-xs text-muted-foreground group-hover:text-primary transition-colors flex-shrink-0" />
                  </div>
                </a>
              </TweetCard>
            </Backlight>
          ))}
        </div>

        <p className="text-center text-sm text-muted-foreground mt-8">
          If previews don't load, your browser extension (e.g. ad-blocker) may be blocking PDF embeds. Click any card to open the full certificate.
        </p>
      </div>
    </section>
  );
};

export default Certificates;
