import { ChevronDown } from "lucide-react";
import { FaLinkedin, FaGithub, FaEnvelope, FaCode } from "react-icons/fa";
import { Button } from "@/components/ui/button";
import { personalInfo } from "@/lib/data";

const HeroSection = () => {
  return (
    <section id="hero" className="min-h-screen pt-24 flex items-center">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Hi, I'm <span className="text-primary">{personalInfo.name}</span>
            </h1>
            <h2 className="text-2xl md:text-3xl font-semibold text-gray-700 dark:text-gray-300 mb-6">
              {personalInfo.title}
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 mb-8 max-w-xl">
              I build scalable web applications with modern technologies.
              Passionate about clean code, user experience, and solving complex problems.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button 
                size="lg"
                asChild
                className="px-6 py-3 bg-primary hover:bg-primary/90 text-white rounded-lg shadow-lg transition-all hover:-translate-y-0.5"
              >
                <a href="#contact">Contact Me</a>
              </Button>
              <Button 
                size="lg"
                variant="outline"
                asChild
                className="px-6 py-3 border border-primary text-primary hover:bg-primary/10 rounded-lg transition-all hover:-translate-y-0.5"
              >
                <a href="/attached_assets/Software_Developer_CV.pdf" download>Download Resume</a>
              </Button>
            </div>
            <div className="flex space-x-4 mt-8">
              <a 
                href={personalInfo.social.linkedin}
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary transition-colors"
              >
                <FaLinkedin className="text-2xl" />
              </a>
              <a 
                href={personalInfo.social.github}
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary transition-colors"
              >
                <FaGithub className="text-2xl" />
              </a>
              <a 
                href={`mailto:${personalInfo.email}`}
                className="text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary transition-colors"
              >
                <FaEnvelope className="text-2xl" />
              </a>
              <a 
                href={personalInfo.social.leetcode}
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary transition-colors"
              >
                <FaCode className="text-2xl" />
              </a>
            </div>
          </div>
          <div className="order-1 lg:order-2 flex justify-center">
  <img 
    src="/attached_assets/HeroSection.png" 
    alt="Modern software development workspace" 
    className="rounded-xl shadow-2xl transform scale-130 w-auto h-auto"
    style={{ transformOrigin: 'center' }}
  />
</div>

        </div>
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 hidden md:block animate-bounce-slow">
          <a href="#about" className="text-gray-400 hover:text-primary">
            <ChevronDown className="h-8 w-8" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
