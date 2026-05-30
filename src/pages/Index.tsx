import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Narrative from '@/components/Narrative';
import Projects from '@/components/Projects';
import AnalyticsShowcase from '@/components/AnalyticsShowcase';
import Skills from '@/components/Skills';
import Certificates from '@/components/Certificates';
import Education from '@/components/Education';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import ScrollAnimations from '@/components/ScrollAnimations';
import SmoothScroll from '@/components/SmoothScroll';
import ScrollProgress from '@/components/ScrollProgress';
import AmbientBackground from '@/components/AmbientBackground';
import WebGLBackdrop from '@/components/WebGLBackdrop';

const Index = () => {
  return (
    <div className="relative min-h-screen bg-background overflow-x-hidden">
      <SmoothScroll />
      <ScrollProgress />
      <WebGLBackdrop />
      <AmbientBackground />
      <ScrollAnimations />
      <div className="relative z-10">
        <Navigation />
        <Hero />
        <About />
        <Narrative />
        <Projects />
        <AnalyticsShowcase />
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
