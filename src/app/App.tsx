import { Navigation } from './components/Navigation';
import { HeroSection } from './components/HeroSection';
import { AboutSection } from './components/AboutSection';
import { TechStackSection } from './components/TechStackSection';
import { ProjectsSection } from './components/ProjectsSection';
import { StatsSection } from './components/StatsSection';
import { ExperienceSection } from './components/ExperienceSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-900 to-black text-white">
      <Navigation />
      <HeroSection />
      <AboutSection />
      <TechStackSection />
      <ProjectsSection />
      <StatsSection />
      <ExperienceSection />
      <ContactSection />
      <Footer />
    </div>
  );
}
