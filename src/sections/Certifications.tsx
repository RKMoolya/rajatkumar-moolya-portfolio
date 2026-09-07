import { motion } from 'framer-motion';
import { SectionHeading } from '../components/SectionHeading';
import { certifications } from '../data/certifications';

export const Certifications = () => {
  return (
    <section className="py-20 md:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          label="Credentials"
          title="Certifications"
          description="Professional development and continuous learning"
        />

        <div className="max-w-4xl mx-auto grid sm:grid-cols-2 gap-6">
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="bg-dark-card border border-dark-border rounded-xl p-6 hover:border-accent/50 transition-all duration-300"
            >
              {/* Icon */}
              <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4">
                <svg
                  className="w-6 h-6 text-accent"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
                  />
                </svg>
              </div>

              {/* Content */}
              <h3 className="text-lg font-bold text-text-primary mb-2 leading-snug">
                {cert.name}
              </h3>
              <p className="text-text-secondary text-sm mb-1">{cert.issuer}</p>
              {cert.date && (
                <p className="text-text-secondary text-xs">{cert.date}</p>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
