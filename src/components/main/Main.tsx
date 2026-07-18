import { HeroSection } from "./HeroSection";
import { AboutSection } from "../sections/AboutSection";
import { StackSection } from "../sections/StackSection";
import { ExperienceSection } from "../sections/ExperienceSection";
import { ProjectsSection } from "../sections/ProjectsSection";
import { ArchitectureSection } from "../sections/ArchitectureSection";
import { ContactSection } from "../sections/ContactSection";

export function Main() {
  return (
    <main>
      <HeroSection />
      <AboutSection />
      <StackSection />
      <ExperienceSection />
      <ProjectsSection />
      <ArchitectureSection />
      <ContactSection />
    </main>
  );
}
