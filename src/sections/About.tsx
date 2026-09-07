import { motion } from 'framer-motion';
import { SectionHeading } from '../components/SectionHeading';

export const About = () => {
  return (
    <section id="about" className="py-20 md:py-32 bg-dark-secondary">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="A frontend developer who enjoys turning ideas into working products."
        />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <div className="grid md:grid-cols-2 gap-8">
            {/* Left Column */}
            <div className="space-y-6 text-text-secondary leading-relaxed">
              <p>
                I'm <span className="text-text-primary font-semibold">Rajatkumar Moolya</span>, a Frontend Developer based in Pune, Maharashtra. I specialize in building responsive, modern web applications using React.js and contemporary frontend technologies.
              </p>

              <p>
                My approach combines clean code with thoughtful user experiences. I believe every interface should be intuitive, every interaction meaningful, and every line of code purposeful.
              </p>

              <p>
                From converting Figma designs into pixel-perfect implementations to integrating REST APIs for dynamic functionality, I handle the complete frontend development cycle.
              </p>
            </div>

            {/* Right Column */}
            <div className="space-y-6 text-text-secondary leading-relaxed">
              <p>
                Through my internship at PureSoft Solutions LLP, I've gained hands-on experience developing production applications for real clients, collaborating within professional development teams, and working with modern Git workflows.
              </p>

              <p>
                Beyond frontend development, I'm interested in AI and machine learning applications. I've contributed to research projects exploring behavioral analysis and participated in ML certification programs.
              </p>

              <p>
                I enjoy building products that solve real problems, learning new technologies, and continuously improving my craft as a developer.
              </p>
            </div>
          </div>

          {/* Personal Touch */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="mt-12 p-6 md:p-8 bg-dark-card border border-dark-border rounded-2xl"
          >
            <p className="text-text-secondary text-center md:text-left italic">
              "The best interfaces are invisible—they just work. My goal is to build experiences so intuitive that users never have to think about the technology behind them."
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
