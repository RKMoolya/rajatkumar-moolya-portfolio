import { motion } from 'framer-motion';
import { Project } from '../types';

interface ProjectCardProps {
  project: Project;
  index: number;
  onClick: () => void;
}

export const ProjectCard = ({ project, index, onClick }: ProjectCardProps) => {
  return (
    <motion.article
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      whileHover={{ y: -10 }}
      onClick={onClick}
      className="group cursor-pointer bg-dark-card border border-dark-border rounded-2xl overflow-hidden hover:border-accent/50 transition-all duration-300"
    >
      {/* Image Placeholder */}
      <div className="relative h-64 md:h-80 bg-gradient-to-br from-accent/20 to-accent/5 overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center space-y-4 p-8">
            <div className="w-20 h-20 mx-auto bg-accent/20 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
              <svg className="w-10 h-10 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </div>
            <p className="text-text-secondary text-sm">
              Project Screenshot
            </p>
          </div>
        </div>
        
        {/* Hover overlay */}
        <div className="absolute inset-0 bg-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>

      {/* Content */}
      <div className="p-6 md:p-8">
        {/* Category */}
        <p className="text-accent text-sm font-medium tracking-wider uppercase mb-3">
          {project.category}
        </p>

        {/* Title */}
        <h3 className="text-2xl md:text-3xl font-bold text-text-primary mb-3 group-hover:text-accent transition-colors duration-300">
          {project.name}
        </h3>

        {/* Company */}
        {project.company && (
          <p className="text-text-secondary text-sm mb-4">
            {project.company}
          </p>
        )}

        {/* Description */}
        <p className="text-text-secondary mb-6 leading-relaxed line-clamp-3">
          {project.description}
        </p>

        {/* Technologies */}
        <div className="flex flex-wrap gap-2 mb-6">
          {project.technologies.slice(0, 4).map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 bg-dark-secondary border border-dark-border rounded-full text-xs text-text-secondary"
            >
              {tech}
            </span>
          ))}
          {project.technologies.length > 4 && (
            <span className="px-3 py-1 bg-dark-secondary border border-dark-border rounded-full text-xs text-text-secondary">
              +{project.technologies.length - 4} more
            </span>
          )}
        </div>

        {/* CTA */}
        <motion.div
          whileHover={{ x: 5 }}
          className="flex items-center text-accent font-medium group-hover:text-accent-light transition-colors duration-300"
        >
          View Project
          <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </motion.div>
      </div>
    </motion.article>
  );
};
