import { motion } from 'framer-motion';
import { SectionHeading } from '../components/SectionHeading';
import { skills, skillCategories } from '../data/skills';

export const Skills = () => {
  return (
    <section id="skills" className="py-20 md:py-32 bg-dark-secondary">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          label="Technical Expertise"
          title="Skills & Technologies"
          description="Modern tools and technologies I work with"
        />

        <div className="max-w-6xl mx-auto space-y-12">
          {skillCategories.map((category, categoryIndex) => {
            const categorySkills = skills.filter(skill => skill.category === category);
            
            if (categorySkills.length === 0) return null;

            return (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
              >
                <h3 className="text-xl md:text-2xl font-bold text-text-primary mb-6">
                  {category}
                </h3>
                
                <div className="flex flex-wrap gap-3">
                  {categorySkills.map((skill, skillIndex) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{
                        duration: 0.3,
                        delay: categoryIndex * 0.1 + skillIndex * 0.05,
                      }}
                      whileHover={{ scale: 1.1, y: -5 }}
                      className="px-4 py-2 bg-dark-card border border-dark-border rounded-lg text-text-secondary hover:text-text-primary hover:border-accent/50 hover:bg-accent/5 transition-all duration-300 font-medium"
                    >
                      {skill.name}
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
