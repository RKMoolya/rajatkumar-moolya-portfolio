import { useState } from 'react';
import { SectionHeading } from '../components/SectionHeading';
import { ProjectCard } from '../components/ProjectCard';
import { ProjectModal } from '../components/ProjectModal';
import { projects } from '../data/projects';
import { Project } from '../types';

export const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const featuredProjects = projects.filter(p => p.featured);

  return (
    <>
      <section id="work" className="py-20 md:py-32 bg-dark-secondary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            label="Featured Work"
            title="Projects That Matter"
            description="Production-ready web applications built with modern technologies"
          />

          <div className="grid lg:grid-cols-2 gap-8 md:gap-10">
            {featuredProjects.map((project, index) => (
              <ProjectCard
                key={project.id}
                project={project}
                index={index}
                onClick={() => setSelectedProject(project)}
              />
            ))}
          </div>
        </div>
      </section>

      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </>
  );
};
