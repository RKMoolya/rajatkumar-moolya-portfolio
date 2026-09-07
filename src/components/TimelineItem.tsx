import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface TimelineItemProps {
  title: string;
  organization: string;
  location: string;
  date: string;
  details: string[] | ReactNode;
  index: number;
}

export const TimelineItem = ({
  title,
  organization,
  location,
  date,
  details,
  index,
}: TimelineItemProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      className="relative pl-8 pb-12 border-l-2 border-dark-border last:pb-0 hover:border-accent/50 transition-colors duration-300"
    >
      {/* Dot */}
      <motion.div
        whileHover={{ scale: 1.3 }}
        className="absolute -left-2 top-0 w-4 h-4 bg-accent rounded-full border-4 border-dark-bg"
      />

      {/* Content */}
      <div className="bg-dark-card border border-dark-border rounded-xl p-6 md:p-8 hover:border-accent/30 transition-all duration-300">
        <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
          <div className="mb-3 md:mb-0">
            <h3 className="text-xl md:text-2xl font-bold text-text-primary mb-2">
              {title}
            </h3>
            <p className="text-accent font-medium mb-1">{organization}</p>
            <p className="text-text-secondary text-sm">{location}</p>
          </div>
          <span className="inline-block px-4 py-2 bg-dark-secondary border border-dark-border rounded-lg text-text-secondary text-sm font-medium whitespace-nowrap">
            {date}
          </span>
        </div>

        {/* Details */}
        {Array.isArray(details) ? (
          <ul className="space-y-2">
            {details.map((detail, i) => (
              <li key={i} className="flex items-start text-text-secondary">
                <svg
                  className="w-5 h-5 text-accent mr-3 mt-0.5 flex-shrink-0"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                <span>{detail}</span>
              </li>
            ))}
          </ul>
        ) : (
          <div className="text-text-secondary">{details}</div>
        )}
      </div>
    </motion.div>
  );
};
