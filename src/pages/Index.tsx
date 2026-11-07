import { lazy } from 'react';
import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import About from '@/components/About';
import DeferredSection from '@/components/DeferredSection';
import ScrollAnimations from '@/components/ScrollAnimations';
import ScrollProgress from '@/components/ScrollProgress';
import AmbientBackground from '@/components/AmbientBackground';

const Projects = lazy(() => import('@/components/Projects'));
const Skills = lazy(() => import('@/components/Skills'));
const Certificates = lazy(() => import('@/components/Certificates'));
const Education = lazy(() => import('@/components/Education'));
const Contact = lazy(() => import('@/components/Contact'));
const Footer = lazy(() => import('@/components/Footer'));

const Index = () => {
  return (
    <div className="relative min-h-screen bg-background overflow-x-hidden">
      <ScrollProgress />
      <AmbientBackground />
      <ScrollAnimations />
      <div className="relative z-10">
        <Navigation />
        <Hero />
        <About />
        <DeferredSection id="projects" Component={Projects} minHeightClass="min-h-[1250px] lg:min-h-[950px]" />
        <DeferredSection id="skills" Component={Skills} minHeightClass="min-h-[650px]" />
        <DeferredSection id="certificates" Component={Certificates} minHeightClass="min-h-[1200px] lg:min-h-[1000px]" />
        <DeferredSection id="education" Component={Education} minHeightClass="min-h-[2000px] lg:min-h-[1600px]" />
        <DeferredSection id="contact" Component={Contact} minHeightClass="min-h-[1500px] lg:min-h-[1200px]" />
        <DeferredSection id="footer" Component={Footer} minHeightClass="min-h-[420px]" />
      </div>
    </div>
  );
};

export default Index;
