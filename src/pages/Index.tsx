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
import SmoothScroll from '@/components/SmoothScroll';
import ScrollProgress from '@/components/ScrollProgress';
import AmbientBackground from '@/components/AmbientBackground';

const Index = () => {
  return (
    <div className="relative min-h-screen bg-background overflow-x-hidden">
      <SmoothScroll />
      <ScrollProgress />
      <AmbientBackground />
      <ScrollAnimations />
      <div className="relative z-10">
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
    </div>
  );
};

export default Index;
