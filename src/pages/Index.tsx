import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Projects from '@/components/Projects';
import Skills from '@/components/Skills';
import Certificates from '@/components/Certificates';
import Education from '@/components/Education';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import ScrollAnimations from '@/components/ScrollAnimations';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <ScrollAnimations />
      <Navigation />
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Certificates />
      <Education />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
