import { motion } from 'framer-motion';
import { Button } from '../components/Button';
import { ArrowRight } from 'lucide-react';
import { fadeInUp, staggerChildren } from '../lib/animations';

const technologies = [
  'React.js',
  'TypeScript', 
  'Tailwind CSS',
  'REST APIs'
];

const BrowserFrame = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40, rotateX: 10 }}
      animate={{ opacity: 1, y: 0, rotateX: 0 }}
      transition={{ duration: 0.8, delay: 0.4, ease: 'easeOut' }}
      className="browser-frame max-w-lg mx-auto"
      role="img"
      aria-label="Preview of featured project - MeBot.AI voice bot platform"
    >
      {/* Browser header */}
      <div className="browser-controls">
        <div className="flex items-center gap-2">
          <div className="browser-dot bg-text-muted" aria-hidden="true"></div>
          <div className="browser-dot bg-text-muted" aria-hidden="true"></div>
          <div className="browser-dot bg-text-muted" aria-hidden="true"></div>
        </div>
        <div className="text-xs text-text-muted font-mono tracking-wider">
          WORK
        </div>
      </div>
      
      {/* Browser content */}
      <div className="p-8 bg-surface-2 min-h-[300px] flex flex-col justify-center">
        <div className="space-y-4">
          <div className="section-label">01 / FEATURED PROJECT</div>
          <h3 className="text-2xl font-medium text-text-primary">
            MeBot.AI
          </h3>
          <p className="text-text-secondary text-sm leading-relaxed">
            AI voice bot platform built with React.js and Tailwind CSS
          </p>
          <div className="flex flex-wrap gap-2 pt-2" role="list" aria-label="Technologies used">
            {technologies.map((tech) => (
              <span
                key={tech}
                className="text-xs font-mono text-text-muted px-2 py-1 bg-border/50 rounded"
                role="listitem"
              >
                {tech}
              </span>
            ))}
          </div>
          <div className="flex items-center gap-2 pt-4 text-accent text-sm font-medium">
            <span>View project</span>
            <ArrowRight className="w-4 h-4" aria-hidden="true" />
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export const Hero = () => {
  return (
    <section 
      id="home" 
      className="relative section-spacing pt-32 pb-20 overflow-hidden"
      aria-labelledby="hero-heading"
    >
      <div className="container-editorial">
        <motion.div 
          variants={staggerChildren}
          initial="initial"
          animate="animate"
          className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center"
        >
          {/* Content */}
          <div className="text-center lg:text-left">
            {/* Label */}
            <motion.div
              variants={fadeInUp}
              className="section-label mb-8"
              aria-label="Professional role"
            >
              FRONTEND DEVELOPER
            </motion.div>

            {/* Main heading */}
            <motion.h1
              id="hero-heading"
              variants={fadeInUp}
              className="mb-8 leading-tight"
            >
              I build modern digital
              <br />
              experiences with thoughtful
              <br />
              interfaces and solid
              <br />
              <span className="text-accent">frontend engineering</span>
            </motion.h1>

            {/* Description */}
            <motion.p
              variants={fadeInUp}
              className="editorial-large mb-12 max-w-2xl mx-auto lg:mx-0"
            >
              I craft responsive, production-ready web applications with modern UI technologies and seamless API integrations.
            </motion.p>

            {/* Technology metadata */}
            <motion.div
              variants={fadeInUp}
              className="mb-12"
              aria-label="Primary technologies"
            >
              <div className="font-mono text-sm text-text-muted tracking-wider">
                React · TypeScript · Tailwind CSS
              </div>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              variants={fadeInUp}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-16"
            >
              <Button href="#work" variant="primary" size="lg" icon>
                View Work
              </Button>
              <Button href="#contact" variant="secondary" size="lg" icon>
                Contact Me
              </Button>
            </motion.div>

            {/* Location */}
            <motion.div
              variants={fadeInUp}
              className="font-mono text-xs text-text-muted tracking-widest uppercase"
            >
              Based in Pune, India
            </motion.div>
          </div>

          {/* Visual */}
          <div className="flex justify-center lg:justify-end">
            <BrowserFrame />
          </div>
        </motion.div>
      </div>
    </section>
  );
};
