import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface SectionHeadingProps {
  label?: string;
  title: string | ReactNode;
  description?: string;
  align?: 'left' | 'center';
}

export const SectionHeading = ({
  label,
  title,
  description,
  align = 'center',
}: SectionHeadingProps) => {
  const alignClass = align === 'center' ? 'text-center' : 'text-left';

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className={`mb-12 md:mb-16 ${alignClass}`}
    >
      {label && (
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-accent text-sm font-medium tracking-wider uppercase mb-4"
        >
          {label}
        </motion.p>
      )}
      
      <motion.h2
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3 }}
        className="text-3xl md:text-4xl lg:text-5xl font-bold text-text-primary mb-4"
      >
        {title}
      </motion.h2>
      
      {description && (
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="text-text-secondary text-lg max-w-2xl mx-auto"
        >
          {description}
        </motion.p>
      )}
    </motion.div>
  );
};
