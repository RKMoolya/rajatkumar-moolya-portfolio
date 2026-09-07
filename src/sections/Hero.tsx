import { motion } from 'framer-motion';
import { Button } from '../components/Button';

const technologies = [
  'React.js',
  'TypeScript',
  'Tailwind CSS',
  'JavaScript',
  'REST APIs',
  'Figma',
];

const HeroVisual = () => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, delay: 0.3 }}
      className="relative"
    >
      {/* Main card */}
      <motion.div
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
        className="relative bg-gradient-to-br from-dark-card to-dark-secondary border border-dark-border rounded-2xl p-6 md:p-8 shadow-2xl"
      >
        <div className="space-y-4">
          <div className="flex items-center space-x-3">
            <div className="w-3 h-3 bg-red-500 rounded-full" />
            <div className="w-3 h-3 bg-yellow-500 rounded-full" />
            <div className="w-3 h-3 bg-green-500 rounded-full" />
          </div>

          <div className="space-y-3">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: '100%' }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="h-2 bg-accent/20 rounded"
            >
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: '70%' }}
                transition={{ delay: 1, duration: 0.8 }}
                className="h-full bg-accent rounded"
              />
            </motion.div>

            <div className="text-text-primary font-bold text-lg md:text-xl">
              RAJATKUMAR
            </div>
            <div className="text-text-secondary text-sm md:text-base">
              Frontend Developer
            </div>

            <div className="space-y-2 pt-4">
              {['React.js', 'TypeScript', 'Tailwind CSS', 'REST APIs', 'Responsive UI'].map(
                (tech, index) => (
                  <motion.div
                    key={tech}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 1.2 + index * 0.1 }}
                    className="flex items-center justify-between text-sm"
                  >
                    <span className="text-text-secondary">{tech}</span>
                    <motion.span
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: 1.5 + index * 0.1 }}
                      className="text-green-500"
                    >
                      ✓
                    </motion.span>
                  </motion.div>
                )
              )}
            </div>
          </div>
        </div>

        {/* Floating elements */}
        <motion.div
          animate={{ y: [0, -15, 0], rotate: [0, 5, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute -top-4 -right-4 w-16 h-16 bg-accent/20 rounded-lg backdrop-blur-sm border border-accent/30"
        />
        
        <motion.div
          animate={{ y: [0, 15, 0], rotate: [0, -5, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
          className="absolute -bottom-4 -left-4 w-12 h-12 bg-accent-light/20 rounded-full backdrop-blur-sm border border-accent-light/30"
        />
      </motion.div>

      {/* Glow effect */}
      <div className="absolute inset-0 bg-accent/5 blur-3xl rounded-full" />
    </motion.div>
  );
};

export const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 pb-16 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-accent/5 via-transparent to-transparent" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-accent text-sm md:text-base font-semibold tracking-widest uppercase mb-4"
            >
              FRONTEND DEVELOPER
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-text-primary mb-6 leading-tight"
            >
              Building modern web experiences with{' '}
              <span className="text-gradient">React</span>.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-text-secondary text-lg md:text-xl mb-8 max-w-2xl mx-auto lg:mx-0"
            >
              I build responsive, production-ready web applications with React, modern UI
              technologies, and seamless API integrations.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8"
            >
              <Button href="#work" size="lg">
                View My Work
              </Button>
              <Button href="#contact" variant="outline" size="lg">
                Let's Connect
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="flex flex-wrap gap-3 justify-center lg:justify-start text-sm text-text-secondary"
            >
              {technologies.map((tech, index) => (
                <motion.span
                  key={tech}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.7 + index * 0.1 }}
                  className="px-3 py-1 bg-dark-card border border-dark-border rounded-full"
                >
                  {tech}
                </motion.span>
              ))}
            </motion.div>
          </motion.div>

          {/* Visual */}
          <div className="flex justify-center lg:justify-end">
            <HeroVisual />
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 border-2 border-text-secondary rounded-full flex justify-center"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1.5 h-3 bg-text-secondary rounded-full mt-2"
          />
        </motion.div>
      </motion.div>
    </section>
  );
};
