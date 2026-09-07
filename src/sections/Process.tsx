import { motion } from 'framer-motion';
import { SectionHeading } from '../components/SectionHeading';

const processSteps = [
  { name: 'Figma', icon: '🎨' },
  { name: 'Understand Design', icon: '🔍' },
  { name: 'Component Architecture', icon: '🧩' },
  { name: 'React Implementation', icon: '⚛️' },
  { name: 'API Integration', icon: '🔌' },
  { name: 'Responsive Testing', icon: '📱' },
  { name: 'Deployment', icon: '🚀' },
];

export const Process = () => {
  return (
    <section className="py-20 md:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          label="Development Workflow"
          title="From design to production."
          description="A systematic approach to building modern web applications"
        />

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-dark-border md:left-1/2 md:transform md:-translate-x-1/2" />

            {processSteps.map((step, index) => (
              <motion.div
                key={step.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`relative flex items-center mb-12 ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Content */}
                <div className={`flex-1 ${index % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12 md:text-left'}`}>
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    className="inline-block bg-dark-card border border-dark-border rounded-xl px-6 py-4 hover:border-accent/50 transition-all duration-300"
                  >
                    <p className="text-text-primary font-semibold text-lg">
                      {step.name}
                    </p>
                  </motion.div>
                </div>

                {/* Icon */}
                <motion.div
                  whileHover={{ scale: 1.2, rotate: 10 }}
                  className="absolute left-4 md:left-1/2 md:transform md:-translate-x-1/2 w-16 h-16 bg-accent rounded-full flex items-center justify-center text-2xl shadow-lg z-10"
                >
                  {step.icon}
                </motion.div>

                {/* Spacer for desktop layout */}
                <div className="hidden md:block flex-1" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
