import { MapPin, GraduationCap, Briefcase, Phone } from "lucide-react";
import { personalInfo } from "@/lib/data";

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-slate-900/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-2">About Me</h2>
          <div className="w-20 h-1 bg-primary mx-auto"></div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <img 
              src="https://images.unsplash.com/photo-1564865878688-9a244444042a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&h=980" 
              alt="Developer workspace with code on screen" 
              className="rounded-xl shadow-xl w-full" 
            />
          </div>
          
          <div>
            <h3 className="text-2xl font-semibold mb-6">Passionate Software Developer</h3>
            <p className="text-gray-700 dark:text-gray-300 mb-6">
              I'm a Computer Science Engineering student with a passion for building scalable and user-friendly web applications. 
              My journey in software development has equipped me with strong problem-solving skills and a deep understanding of modern web technologies.
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-8">
              I specialize in the MERN stack (MongoDB, Express.js, React.js, Node.js) and enjoy creating seamless user experiences. 
              I'm constantly learning and exploring new technologies to improve my skill set.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <div className="flex items-center bg-gray-100 dark:bg-slate-800 px-4 py-2 rounded-full">
                <Briefcase className="text-primary mr-2 h-5 w-5" />
                <span>Software Developer</span>
              </div>
              <div className="flex items-center bg-gray-100 dark:bg-slate-800 px-4 py-2 rounded-full">
                <GraduationCap className="text-primary mr-2 h-5 w-5" />
                <span>Computer Science</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
