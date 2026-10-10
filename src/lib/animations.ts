// Editorial animation utilities - minimal and purposeful

export const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5, ease: 'easeOut' }
};

export const fadeIn = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  transition: { duration: 0.6, ease: 'easeOut' }
};

export const staggerChildren = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

export const scaleOnHover = {
  whileHover: { scale: 1.03 },
  transition: { duration: 0.2 }
};

export const slideOnHover = {
  whileHover: { x: 4 },
  transition: { duration: 0.2 }
};

// Reduced motion variants for accessibility
export const getReducedMotionVariant = (variant: any) => {
  if (typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    return {
      initial: variant.initial?.opacity ? { opacity: 0 } : {},
      animate: variant.animate?.opacity ? { opacity: 1 } : {},
      transition: { duration: 0.01 }
    };
  }
  return variant;
};