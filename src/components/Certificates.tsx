import { FaExternalLinkAlt } from 'react-icons/fa';

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
    <section id="certificates" className="py-20 section-bg overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gradient mb-4">
            Certificates & Awards
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Professional certifications and achievements
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {certificates.map((cert) => (
            <a
              key={cert.name}
              href={cert.pdf}
              target="_blank"
              rel="noopener noreferrer"
              className="group block rounded-xl overflow-hidden border border-border bg-card shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
            >
              <div className="relative w-full h-56 bg-muted">
                <iframe
                  src={`${cert.pdf}#toolbar=0&navpanes=0&scrollbar=0`}
                  title={cert.name}
                  className="w-full h-full pointer-events-none"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-transparent group-hover:bg-foreground/5 transition-colors duration-300" />
              </div>
              <div className="p-4 flex items-center justify-between gap-2">
                <span className="text-sm font-medium text-foreground truncate">
                  {cert.name}
                </span>
                <FaExternalLinkAlt className="text-xs text-muted-foreground group-hover:text-primary transition-colors flex-shrink-0" />
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certificates;
