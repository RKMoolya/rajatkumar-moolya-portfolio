import { motion } from 'framer-motion';
import { SectionHeading } from '../components/SectionHeading';

export const Introduction = () => {
  return (
    <section className="py-20 md:py-32 bg-dark-secondary">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="I build interfaces that feel as good as they work."
        />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <div className="space-y-6 text-text-secondary text-lg leading-relaxed">
            <p>
              As a <span className="text-text-primary font-semibold">Frontend Developer</span>, I specialize in building responsive, production-ready web applications using modern technologies like React.js, TypeScript, and Tailwind CSS.
            </p>

            <p>
              I focus on creating clean, maintainable component-based architectures that scale. From translating Figma designs into pixel-perfect interfaces to integrating REST APIs for seamless data flow, I handle the complete frontend development lifecycle.
            </p>

            <p>
              Through hands-on internship experience at <span className="text-text-primary font-semibold">PureSoft Solutions LLP</span>, I've contributed to production-ready web applications for live clients, collaborating with designers and senior developers to deliver polished user experiences across all devices.
            </p>

            <p>
              I believe great interfaces combine aesthetics with functionality—ensuring every interaction is smooth, every layout is responsive, and every line of code serves a purpose.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
