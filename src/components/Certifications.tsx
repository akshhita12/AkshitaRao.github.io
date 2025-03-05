
import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Award, Calendar, ExternalLink } from 'lucide-react';

interface Certification {
  title: string;
  issuer: string;
  date: string;
  description: string;
  skills: string[];
  credentialUrl?: string;
}

const certifications: Certification[] = [
  {
    title: "AWS Certified Solutions Architect",
    issuer: "Amazon Web Services",
    date: "December 2022",
    description: "Validated expertise in designing distributed systems on AWS, including high-availability architectures and security best practices.",
    skills: ["Cloud Architecture", "AWS Services", "Security", "High Availability"],
    credentialUrl: "#"
  },
  {
    title: "TensorFlow Developer Certificate",
    issuer: "Google",
    date: "August 2022",
    description: "Demonstrated proficiency in building and training neural networks using TensorFlow for computer vision, NLP, and time series forecasting.",
    skills: ["Deep Learning", "Neural Networks", "TensorFlow", "Computer Vision"],
    credentialUrl: "#"
  },
  {
    title: "Professional Scrum Master I",
    issuer: "Scrum.org",
    date: "May 2022",
    description: "Certified professional with understanding of Scrum framework, values, and practices for effective agile team leadership.",
    skills: ["Agile Methodology", "Scrum", "Team Leadership", "Project Management"],
    credentialUrl: "#"
  },
  {
    title: "Frontend Web Developer Nanodegree",
    issuer: "Udacity",
    date: "January 2021",
    description: "Comprehensive program covering modern frontend development techniques, responsive design, and single-page applications.",
    skills: ["React", "JavaScript", "Responsive Design", "Web Accessibility"],
    credentialUrl: "#"
  }
];

const CertificationCard: React.FC<{ cert: Certification; index: number }> = ({ cert, index }) => {
  const cardRef = useRef(null);
  const isInView = useInView(cardRef, { once: false, amount: 0.2 });
  
  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -5 }}
      className="group"
    >
      <div className="glass-card h-full p-6 flex flex-col hover:shadow-neon-red/10 hover:border-neon-red/30 transition-all duration-300">
        <div className="flex items-start justify-between mb-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-neon-red">
              <Award className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-bold">{cert.title}</h3>
              <p className="text-sm text-foreground/70">{cert.issuer}</p>
            </div>
          </div>
          
          <div className="flex items-center text-xs text-foreground/60">
            <Calendar className="w-3 h-3 mr-1" />
            <span>{cert.date}</span>
          </div>
        </div>
        
        <p className="text-sm text-foreground/80 mb-4 flex-grow">{cert.description}</p>
        
        <div className="space-y-4">
          <div className="flex flex-wrap gap-2">
            {cert.skills.map((skill, i) => (
              <span 
                key={i} 
                className="px-2 py-1 bg-background/50 backdrop-blur-sm text-xs rounded-full text-foreground/70"
              >
                {skill}
              </span>
            ))}
          </div>
          
          {cert.credentialUrl && (
            <a 
              href={cert.credentialUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-sm text-neon-red hover:text-neon-pink transition-colors mt-2"
            >
              <span>View Credential</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
};

const Certifications: React.FC = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: false, amount: 0.1 });
  
  return (
    <section id="certifications" className="py-20 sm:py-32 relative bg-primary/5">
      <div 
        className="absolute top-1/3 right-1/4 w-72 h-72 bg-neon-red/10 rounded-full blur-3xl -z-10"
        style={{ opacity: isInView ? 0.6 : 0 }}
      />
      
      <div className="section-container" ref={sectionRef}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-3 py-1 text-sm font-medium bg-primary/10 rounded-full text-primary mb-4">
            Certifications
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Professional Certifications</h2>
          <p className="max-w-2xl mx-auto text-foreground/80">
            Industry-recognized certifications that validate my technical expertise and professional knowledge.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {certifications.map((cert, index) => (
            <CertificationCard key={index} cert={cert} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
