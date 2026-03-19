import {
  SiIbm,
  SiOracle,
  SiApachespark,
  SiGooglecloud,
} from 'react-icons/si';
import { FaAward, FaDatabase, FaCertificate, FaCloud } from 'react-icons/fa';

const Certificates = () => {
  const certificates = [
    { icon: FaCloud, name: 'Cloud Database', color: '#4285f4', pdf: '/certificates/CLOUD_DATABASE.pdf' },
    { icon: FaDatabase, name: 'Data Certificate', color: '#0f9d58', pdf: '/certificates/DataCertificate.pdf' },
    { icon: FaCertificate, name: 'eCertificate', color: '#f4b400', pdf: '/certificates/eCertificate.pdf' },
    { icon: FaAward, name: 'FNB App Awards 2025', color: '#00a4e4', pdf: '/certificates/FNB_App_of_the_Year_Awards_Academy_2025.pdf' },
    { icon: SiIbm, name: 'IBM Certificate', color: '#054ada', pdf: '/certificates/IBM_First_Certificate.pdf' },
    { icon: SiIbm, name: 'IBM Python', color: '#054ada', pdf: '/certificates/IBM_PY0101EN_Certificate_IBM_SkillsBuild.pdf' },
    { icon: SiOracle, name: 'Oracle Analytics Cloud', color: '#f80000', pdf: '/certificates/Oracle_Analytics_Cloud_22025.pdf' },
    { icon: SiApachespark, name: 'Spark Fundamentals', color: '#e25a1c', pdf: '/certificates/Spark_Fundamentals_I_Certificate.pdf' },
  ];

  const duplicatedCerts = [...certificates, ...certificates];

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

        {/* Marquee Container */}
        <div className="relative">
          <div className="absolute left-0 top-0 w-20 h-full bg-gradient-to-r from-background to-transparent z-10"></div>
          <div className="absolute right-0 top-0 w-20 h-full bg-gradient-to-l from-background to-transparent z-10"></div>

          <div className="flex animate-marquee space-x-12 md:space-x-16 lg:space-x-20">
            {duplicatedCerts.map((cert, index) => {
              const IconComponent = cert.icon;
              return (
                <a
                  key={`${cert.name}-${index}`}
                  href={cert.pdf}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-shrink-0 text-5xl md:text-7xl lg:text-8xl transition-all duration-300 hover:scale-110 cursor-pointer"
                  style={{ color: cert.color }}
                  title={cert.name}
                >
                  <IconComponent />
                </a>
              );
            })}
          </div>
        </div>

        {/* Grid for smaller screens */}
        <div className="mt-16 md:hidden">
          <div className="grid grid-cols-3 gap-8 max-w-md mx-auto">
            {certificates.map((cert) => {
              const IconComponent = cert.icon;
              return (
                <a
                  key={cert.name}
                  href={cert.pdf}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex justify-center items-center text-4xl transition-all duration-300 hover:scale-110 cursor-pointer"
                  style={{ color: cert.color }}
                  title={cert.name}
                >
                  <IconComponent />
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certificates;
