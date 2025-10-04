import { StarBackground } from "@/components/StarBackground";
import { ThemeToggle } from "@/components/ThemeToggle";
import { Navbar } from "@/components/Navbar";
import { HeroSection } from "../components/HeroSection";
import { AboutSection } from "../components/AboutSection";
import { SkillSection } from "../components/SkillSection";
import { ProjectsSection } from "../components/ProjectsSection";
import { ContactSection } from "../components/ContactSection";
import { Footer } from "../components/Footer";
import Education from "../components/Education";


export const Home=()=>{
    return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
    <ThemeToggle />
    <StarBackground />
    <Navbar />
    <main>
        <HeroSection />
        <AboutSection />
        <SkillSection />
        <ProjectsSection />
        <Education />
        <ContactSection />
    </main>
    <Footer />
    </div>
    );
};
