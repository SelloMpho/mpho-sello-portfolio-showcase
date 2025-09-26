import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { FiArrowUpRight } from "react-icons/fi";
import { Button } from "@/components/ui/button";

const IMG_PADDING = 12;

interface TextParallaxContentProps {
  imgUrl: string;
  subheading: string;
  heading: string;
  children: React.ReactNode;
}

interface StickyImageProps {
  imgUrl: string;
}

interface OverlayCopyProps {
  subheading: string;
  heading: string;
}

const TextParallaxContent = ({ imgUrl, subheading, heading, children }: TextParallaxContentProps) => {
  return (
    <div
      style={{
        paddingLeft: IMG_PADDING,
        paddingRight: IMG_PADDING,
      }}
    >
      <div className="relative h-[150vh]">
        <StickyImage imgUrl={imgUrl} />
        <OverlayCopy heading={heading} subheading={subheading} />
      </div>
      {children}
    </div>
  );
};

const StickyImage = ({ imgUrl }: StickyImageProps) => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["end end", "end start"],
  });

  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.85]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  return (
    <motion.div
      style={{
        backgroundImage: `url(${imgUrl})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: `calc(100vh - ${IMG_PADDING * 2}px)`,
        top: IMG_PADDING,
        scale,
      }}
      ref={targetRef}
      className="sticky z-0 overflow-hidden rounded-3xl"
    >
      <motion.div
        className="absolute inset-0 bg-background/70"
        style={{
          opacity,
        }}
      />
    </motion.div>
  );
};

const OverlayCopy = ({ subheading, heading }: OverlayCopyProps) => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [250, -250]);
  const opacity = useTransform(scrollYProgress, [0.25, 0.5, 0.75], [0, 1, 0]);

  return (
    <motion.div
      style={{
        y,
        opacity,
      }}
      ref={targetRef}
      className="absolute left-0 top-0 flex h-screen w-full flex-col items-center justify-center text-foreground"
    >
      <p className="mb-2 text-center text-xl md:mb-4 md:text-3xl font-medium">
        {subheading}
      </p>
      <p className="text-center text-4xl font-bold md:text-7xl text-gradient-animated">
        {heading}
      </p>
    </motion.div>
  );
};

const ProjectContent = () => {
  const scrollToProjects = () => {
    const element = document.getElementById('projects');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 px-4 pb-24 pt-12 md:grid-cols-12">
      <h2 className="col-span-1 text-3xl font-bold md:col-span-4 text-foreground">
        Building Tomorrow's Solutions
      </h2>
      <div className="col-span-1 md:col-span-8">
        <p className="mb-4 text-xl text-muted-foreground md:text-2xl">
          As a final-year ICT student, I focus on creating innovative solutions through 
          modern web technologies, data analysis, and problem-solving approaches that 
          make a real difference.
        </p>
        <p className="mb-8 text-xl text-muted-foreground md:text-2xl">
          Every project is an opportunity to learn, grow, and contribute to the digital landscape.
        </p>
        <Button onClick={scrollToProjects} className="portfolio-gradient text-lg px-8 py-6">
          View Projects <FiArrowUpRight className="inline ml-2" />
        </Button>
      </div>
    </div>
  );
};

const SkillContent = () => {
  const scrollToSkills = () => {
    const element = document.getElementById('skills');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 px-4 pb-24 pt-12 md:grid-cols-12">
      <h2 className="col-span-1 text-3xl font-bold md:col-span-4 text-foreground">
        Technical Expertise
      </h2>
      <div className="col-span-1 md:col-span-8">
        <p className="mb-4 text-xl text-muted-foreground md:text-2xl">
          Proficient in modern programming languages and frameworks including Python, 
          Java, JavaScript, React, and more. Always eager to learn new technologies 
          and apply them to real-world challenges.
        </p>
        <p className="mb-8 text-xl text-muted-foreground md:text-2xl">
          From frontend development to data analysis, I bring versatility to every project.
        </p>
        <Button onClick={scrollToSkills} className="portfolio-gradient text-lg px-8 py-6">
          Explore Skills <FiArrowUpRight className="inline ml-2" />
        </Button>
      </div>
    </div>
  );
};

const ExperienceContent = () => (
  <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 px-4 pb-24 pt-12 md:grid-cols-12">
    <h2 className="col-span-1 text-3xl font-bold md:col-span-4 text-foreground">
      Academic Journey
    </h2>
    <div className="col-span-1 md:col-span-8">
      <p className="mb-4 text-xl text-muted-foreground md:text-2xl">
        Currently pursuing my ICT degree with a focus on practical application 
        and industry-relevant skills. Each course and project adds to my growing 
        expertise in technology solutions.
      </p>
      <p className="mb-8 text-xl text-muted-foreground md:text-2xl">
        Combining theoretical knowledge with hands-on experience to prepare for the future.
      </p>
    </div>
  </div>
);

export const TextParallaxContentExample = () => {
  return (
    <div className="bg-background">
      <TextParallaxContent
        imgUrl="https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?q=80&w=2669&auto=format&fit=crop&ixlib=rb-4.0.3"
        subheading="Innovation"
        heading="Projects"
      >
        <ProjectContent />
      </TextParallaxContent>
      <TextParallaxContent
        imgUrl="https://images.unsplash.com/photo-1515879218367-8466d910aaa4?q=80&w=2669&auto=format&fit=crop&ixlib=rb-4.0.3"
        subheading="Expertise"
        heading="Skills"
      >
        <SkillContent />
      </TextParallaxContent>
      <TextParallaxContent
        imgUrl="https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3"
        subheading="Growth"
        heading="Experience"
      >
        <ExperienceContent />
      </TextParallaxContent>
    </div>
  );
};

export default TextParallaxContentExample;