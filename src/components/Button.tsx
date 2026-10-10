import { ReactNode } from 'react';
import { ArrowRight } from 'lucide-react';

interface ButtonProps {
  children: ReactNode;
  variant?: 'primary' | 'secondary';
  size?: 'sm' | 'md' | 'lg';
  onClick?: () => void;
  href?: string;
  className?: string;
  icon?: boolean;
}

export const Button = ({
  children,
  variant = 'primary',
  size = 'md',
  onClick,
  href,
  className = '',
  icon = false,
}: ButtonProps) => {
  const baseStyles = 'inline-flex items-center justify-center font-medium rounded transition-all duration-200 ease-out focus-visible:focus-visible group';
  
  const variants = {
    primary: 'btn-primary',
    secondary: 'btn-secondary',
  };
  
  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  };

  const classes = `${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`;

  const content = (
    <>
      <span className="flex items-center gap-2">
        {children}
        {icon && (
          <ArrowRight className="w-4 h-4 arrow" />
        )}
      </span>
    </>
  );

  if (href) {
    return (
      <a
        href={href}
        className={classes}
        target={href.startsWith('http') ? '_blank' : undefined}
        rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
      >
        {content}
      </a>
    );
  }

  return (
    <button
      onClick={onClick}
      className={classes}
    >
      {content}
    </button>
  );
};
