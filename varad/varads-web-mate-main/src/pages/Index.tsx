import { useState, useCallback } from "react";
import IntroAnimation from "@/components/IntroAnimation";
import Navbar from "@/components/Navbar";
import {
  HeroSection,
  AboutSection,
  EducationSection,
  SkillsSection,
  ProjectsSection,
  InterestsSection,
  ContactSection,
} from "@/components/PortfolioSections";

const Index = () => {
  const [showMain, setShowMain] = useState(false);
  const handleComplete = useCallback(() => setShowMain(true), []);

  return (
    <>
      {!showMain && <IntroAnimation onComplete={handleComplete} />}
      {showMain && (
        <>
          <Navbar />
          <main>
            <HeroSection />
            <AboutSection />
            <EducationSection />
            <SkillsSection />
            <ProjectsSection />
            <InterestsSection />
            <ContactSection />
          </main>
          <footer className="py-8 text-center text-sm text-muted-foreground border-t border-border">
            © 2026 Varad Mate. Built with passion.
          </footer>
        </>
      )}
    </>
  );
};

export default Index;
