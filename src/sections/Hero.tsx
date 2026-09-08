import { motion } from 'framer-motion';
import { Button } from '../components/Button';
import { Code2, Sparkles, Zap, Palette } from 'lucide-react';

const technologies = [
  { name: 'React.js', icon: Code2 },
  { name: 'TypeScript', icon: Zap },
  { name: 'Tailwind CSS', icon: Palette },
  { name: 'REST APIs', icon: Code2 },
];

const HeroVisual = () => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8, rotateY: -30 }}
      animate={{ opacity: 1, scale: 1, rotateY: 0 }}
      transition={{ duration: 1, ease: [0.6, -0.05, 0.01, 0.99] }}
      className="relative"
    >
      {/* Main floating card with glassmorphism */}
      <motion.div
        animate={{
          y: [0, -15, 0],
          rotateX: [0, 2, 0],
          rotateY: [0, -2, 0],
        }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
        className="relative glass-card p-8 md:p-10 shadow-2xl glow-purple"
        style={{
          transformStyle: 'preserve-3d',
        }}
      >
        {/* Animated gradient border */}
        <div className="absolute inset-0 bg-gradient-to-r from-primary-500 via-accent-500 to-cta-500 rounded-2xl opacity-20 blur-xl" />
        
        <div className="relative space-y-6">
          {/* Header with animated dots */}
          <div className="flex items-center space-x-3">
            {[...Array(3)].map((_, i) => (
              <motion.div
                key={i}
                className="w-3 h-3 rounded-full"
                style={{
                  background: `linear-gradient(135deg, ${
                    i === 0 ? '#a855f7' : i === 1 ? '#3b82f6' : '#d946ef'
                  }, transparent)`,
                }}
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.7, 1, 0.7],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: i * 0.3,
                }}
              />
            ))}
          </div>

          {/* Animated progress bar */}
          <div className="space-y-3">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: '100%' }}
              transition={{ delay: 0.5, duration: 1.5, ease: 'easeOut' }}
              className="h-2 bg-white/10 rounded-full overflow-hidden"
            >
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: '85%' }}
                transition={{ delay: 1, duration: 1, ease: 'easeOut' }}
                className="h-full bg-gradient-to-r from-primary-500 via-accent-500 to-cta-500 rounded-full relative overflow-hidden"
              >
                <motion.div
                  className="absolute inset-0 bg-white/30"
                  animate={{ x: ['-100%', '200%'] }}
                  transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
                />
              </motion.div>
            </motion.div>

            <div className="text-white font-bold text-xl md:text-2xl font-display gradient-text">
              RAJATKUMAR
            </div>
            <div className="text-slate-400 text-base md:text-lg flex items-center gap-2">
              Frontend Developer
              <motion.span
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
              >
                <Sparkles className="w-4 h-4 text-cta-400" />
              </motion.span>
            </div>

            {/* Skill checklist with icons */}
            <div className="space-y-3 pt-4">
              {technologies.map((tech, index) => {
                const Icon = tech.icon;
                return (
                  <motion.div
                    key={tech.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 1.5 + index * 0.15 }}
                    className="flex items-center justify-between group"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary-500/20 to-cta-500/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                        <Icon className="w-4 h-4 text-primary-400" />
                      </div>
                      <span className="text-slate-300 text-sm md:text-base">{tech.name}</span>
                    </div>
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: 1.8 + index * 0.15, type: 'spring' }}
                      className="w-6 h-6 rounded-full bg-gradient-to-br from-primary-500 to-cta-500 flex items-center justify-center"
                    >
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    </motion.div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Floating particles */}
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 rounded-full bg-gradient-to-br from-primary-400 to-cta-400"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              x: [0, Math.random() * 20 - 10, 0],
              opacity: [0, 1, 0],
              scale: [0, 1.5, 0],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </motion.div>

      {/* Orbiting elements */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
        className="absolute inset-0 -z-10"
      >
        <div className="absolute top-0 left-1/2 w-3 h-3 rounded-full bg-gradient-to-br from-primary-500 to-primary-600 glow-purple" />
        <div className="absolute bottom-0 right-1/2 w-3 h-3 rounded-full bg-gradient-to-br from-cta-500 to-cta-600 glow-pink" />
      </motion.div>
    </motion.div>
  );
};

export const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-24 pb-20 overflow-hidden">
      {/* Animated mesh background */}
      <div className="absolute inset-0 mesh-background opacity-50" />
      
      {/* Animated grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000,transparent)]" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.6, -0.05, 0.01, 0.99] }}
            className="text-center lg:text-left"
          >
            {/* Label with shimmer */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-full glass-card shimmer-effect"
            >
              <Sparkles className="w-4 h-4 text-cta-400" />
              <span className="text-sm font-semibold text-slate-300 tracking-wider uppercase">
                Frontend Developer
              </span>
            </motion.div>

            {/* Main heading with gradient */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold font-display mb-6 leading-tight"
            >
              Building modern{' '}
              <span className="inline-block">
                <span className="gradient-text">web experiences</span>
                <motion.span
                  className="inline-block ml-2"
                  animate={{ rotate: [0, 14, -8, 14, -4, 10, 0] }}
                  transition={{ duration: 2.5, repeat: Infinity, repeatDelay: 3 }}
                >
                  👋
                </motion.span>
              </span>
              <br />
              with{' '}
              <span className="relative inline-block">
                <span className="text-gradient-purple">React</span>
                <motion.span
                  className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-primary-500 to-cta-500 rounded-full"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ delay: 1, duration: 0.8 }}
                />
              </span>
            </motion.h1>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-lg md:text-xl text-slate-400 mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed"
            >
              I craft responsive, production-ready web applications with modern UI technologies and seamless API integrations. Let's build something amazing together.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-10"
            >
              <Button href="#work" variant="primary" size="lg" icon>
                View My Work
              </Button>
              <Button href="#contact" variant="outline" size="lg">
                Let's Connect
              </Button>
            </motion.div>

            {/* Tech badges with icons */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7, duration: 0.8 }}
              className="flex flex-wrap gap-3 justify-center lg:justify-start"
            >
              {['React.js', 'TypeScript', 'Tailwind', 'Vite', 'Framer Motion'].map((tech, index) => (
                <motion.span
                  key={tech}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  whileHover={{ scale: 1.1, y: -2 }}
                  transition={{ delay: 0.8 + index * 0.1 }}
                  className="px-4 py-2 glass-card text-sm text-slate-300 hover:text-white rounded-lg transition-all cursor-default"
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

      {/* Animated scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.8 }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 12, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          className="flex flex-col items-center gap-2"
        >
          <span className="text-xs text-slate-500 uppercase tracking-wider">Scroll</span>
          <div className="w-6 h-10 border-2 border-slate-700 rounded-full flex justify-center p-2">
            <motion.div
              animate={{ y: [0, 12, 0], opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
              className="w-1.5 h-3 bg-gradient-to-b from-primary-500 to-cta-500 rounded-full"
            />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};
