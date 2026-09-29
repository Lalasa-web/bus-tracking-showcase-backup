import { motion } from 'framer-motion';
import type { ReactNode } from 'react';
import { cn } from '../../lib/utils';

interface CardProps {
  children: ReactNode;
  className?: string;
  hoverEffect?: boolean;
}

export function Card({ children, className, hoverEffect = true }: CardProps) {
  return (
    <motion.div
      className={cn(
        "glass-card p-6 overflow-hidden relative group",
        hoverEffect && "hover:border-primary-500/30 transition-colors duration-500",
        className
      )}
      whileHover={hoverEffect ? { y: -5 } : {}}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-primary-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      <div className="relative z-10">
        {children}
      </div>
    </motion.div>
  );
}
