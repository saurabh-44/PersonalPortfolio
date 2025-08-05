import { Briefcase, Calendar } from "lucide-react";
import { experience } from "@/lib/data";

const ExperienceSection = () => {
  return (
    <section id="experience" className="py-20 bg-gray-50 dark:bg-slate-900/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-2">Work Experience</h2>
          <div className="w-20 h-1 bg-primary mx-auto"></div>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="relative pl-8 border-l-2 border-primary">
            {experience.map((job, index) => (
              <div 
                key={index} 
                className={`timeline-item relative pl-6 ${
                  index === experience.length - 1 ? 'pb-0' : 'pb-16'
                }`}
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                  <h4 className="text-xl font-medium text-primary">{job.title}</h4>
                  <div className="text-sm font-medium bg-blue-100 dark:bg-blue-900/30 text-primary px-3 py-1 rounded-full mt-2 md:mt-0 inline-flex">
                    <Calendar className="mr-2 h-4 w-4" />
                    {job.period}
                  </div>
                </div>
                <p className="text-lg font-medium mb-1">{job.company}</p>
                <p className="text-gray-600 dark:text-gray-400 mb-4 text-sm">{job.location}</p>
                
                <ul className="list-disc pl-5 text-gray-700 dark:text-gray-300 space-y-2 mb-4">
                  {job.responsibilities.map((resp, idx) => (
                    <li key={idx}>{resp}</li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-2">
                  {job.technologies.map((tech, idx) => (
                    <span key={idx} className="inline-block bg-blue-100 dark:bg-blue-900/30 text-primary px-3 py-1 rounded-full text-sm">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
