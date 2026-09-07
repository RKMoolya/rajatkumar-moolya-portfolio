import { motion, AnimatePresence } from 'framer-motion';
import { Project } from '../types';
import { useEffect } from 'react';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal = ({ project, onClose }: ProjectModalProps) => {
  useEffect(() => {
    if (project) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [project]);

  if (!project) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          transition={{ duration: 0.3 }}
          onClick={(e) => e.stopPropagation()}
          className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-dark-secondary border border-dark-border rounded-2xl shadow-2xl"
        >
          {/* Close button */}
          <button
            onClick={onClose}
            className="sticky top-4 right-4 float-right z-10 w-10 h-10 bg-dark-card hover:bg-dark-border rounded-full flex items-center justify-center text-text-secondary hover:text-text-primary transition-colors duration-300"
            aria-label="Close modal"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          <div className="p-6 md:p-10">
            {/* Header */}
            <div className="mb-8">
              <p className="text-accent text-sm font-medium tracking-wider uppercase mb-3">
                {project.category}
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-4">
                {project.name}
              </h2>
              {project.company && (
                <p className="text-text-secondary mb-4">
                  {project.company} {project.timeline && `• ${project.timeline}`}
                </p>
              )}
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 bg-accent/10 border border-accent/30 rounded-full text-sm text-accent"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Overview */}
            {project.overview && (
              <div className="mb-8">
                <h3 className="text-xl font-bold text-text-primary mb-3">Overview</h3>
                <p className="text-text-secondary leading-relaxed">{project.overview}</p>
              </div>
            )}

            {/* The Challenge */}
            {project.challenge && (
              <div className="mb-8">
                <h3 className="text-xl font-bold text-text-primary mb-3">The Challenge</h3>
                <p className="text-text-secondary leading-relaxed">{project.challenge}</p>
              </div>
            )}

            {/* The Approach */}
            {project.approach && (
              <div className="mb-8">
                <h3 className="text-xl font-bold text-text-primary mb-3">The Approach</h3>
                <p className="text-text-secondary leading-relaxed">{project.approach}</p>
              </div>
            )}

            {/* My Contribution */}
            <div className="mb-8">
              <h3 className="text-xl font-bold text-text-primary mb-4">My Contribution</h3>
              <ul className="space-y-2">
                {project.contributions.map((contribution, index) => (
                  <li key={index} className="flex items-start text-text-secondary">
                    <svg className="w-5 h-5 text-accent mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>{contribution}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Key Features */}
            {project.keyFeatures && project.keyFeatures.length > 0 && (
              <div className="mb-8">
                <h3 className="text-xl font-bold text-text-primary mb-4">Key Features</h3>
                <ul className="grid sm:grid-cols-2 gap-3">
                  {project.keyFeatures.map((feature, index) => (
                    <li key={index} className="flex items-start text-text-secondary">
                      <svg className="w-5 h-5 text-accent mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Project Link */}
            {project.url && !project.url.includes('[ADD') && (
              <div>
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-6 py-3 bg-accent hover:bg-accent-light text-white font-medium rounded-lg transition-colors duration-300"
                >
                  View Live Project
                  <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              </div>
            )}
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};
