import { Award, CheckCircle, ExternalLink } from "lucide-react";
import { certifications } from "@/lib/data";

const CertificationsSection = () => {
  return (
    <section id="certifications" className="py-20 bg-gray-50 dark:bg-slate-900/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-2">Certifications</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-8"></div>
          <p className="max-w-2xl mx-auto text-gray-600 dark:text-gray-400">
            Professional certifications that highlight my expertise and continuous learning.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto mb-10">
          <div className="bg-blue-50 dark:bg-blue-900/10 rounded-xl p-6 border border-blue-100 dark:border-blue-800/30">
            <div className="flex items-center text-xl text-primary font-semibold mb-5 gap-3">
              <Award className="h-7 w-7" />
              <h3 className="text-xl">Certifications</h3>
            </div>
            
            <ul className="space-y-4">
              {certifications.map((cert, index) => (
                <li key={index} className="flex items-start">
                  <CheckCircle className="text-green-500 mt-1 mr-3 h-5 w-5 flex-shrink-0" />
                  <div>
                    <div className="font-medium">{cert.name} - {cert.provider}</div>
                    <a 
                      href={cert.link} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center mt-1 text-sm text-primary hover:underline"
                    >
                      View Certificate <ExternalLink className="ml-1 h-3 w-3" />
                    </a>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CertificationsSection;