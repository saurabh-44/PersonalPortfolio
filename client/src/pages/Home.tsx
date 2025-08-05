import { useEffect } from "react";
import { Download } from "lucide-react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ExperienceSection from "@/components/ExperienceSection";
import ProjectsSection from "@/components/ProjectsSection";
import SkillsSection from "@/components/SkillsSection";
import ContactSection from "@/components/ContactSection";
import CertificationsSection from "@/components/CertificationsSection";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";

const Home = () => {
  // Set page title when component mounts
  useEffect(() => {
    document.title = "Saurabh Yadav | Software Developer";
    // Add meta description
    const metaDescription = document.createElement('meta');
    metaDescription.name = 'description';
    metaDescription.content = 'Professional portfolio of Saurabh Yadav, a Software Developer specializing in full-stack web development with React, Node.js, and MongoDB.';
    document.head.appendChild(metaDescription);
    
    // Add Open Graph tags
    const ogTitle = document.createElement('meta');
    ogTitle.setAttribute('property', 'og:title');
    ogTitle.content = 'Saurabh Yadav | Software Developer';
    document.head.appendChild(ogTitle);
    
    const ogDescription = document.createElement('meta');
    ogDescription.setAttribute('property', 'og:description');
    ogDescription.content = 'Professional portfolio showcasing my projects, skills, and experience as a Software Developer.';
    document.head.appendChild(ogDescription);
    
    const ogType = document.createElement('meta');
    ogType.setAttribute('property', 'og:type');
    ogType.content = 'website';
    document.head.appendChild(ogType);
    
    // Clean up
    return () => {
      document.head.removeChild(metaDescription);
      document.head.removeChild(ogTitle);
      document.head.removeChild(ogDescription);
      document.head.removeChild(ogType);
    };
  }, []);
  
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <ExperienceSection />
      <ProjectsSection />
      <AboutSection />
      <SkillsSection />
      <CertificationsSection />
      <ContactSection />
      <Footer />
      
      {/* Download Resume Floating Button */}
      <Button
        asChild
        className="fixed bottom-6 right-6 bg-primary hover:bg-primary/90 text-white p-4 rounded-full shadow-lg transition-transform hover:scale-110 z-10"
        size="icon"
        aria-label="Download Resume"
      >
        <a href="/attached_assets/Software_Developer_CV.pdf" download>
          <Download className="h-5 w-5" />
        </a>
      </Button>
    </div>
  );
};

export default Home;
