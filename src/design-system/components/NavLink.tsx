import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { navLink } from '../animations/presets';
import { cn, colors, transitions, typography } from '../constants/tokens';

export interface NavLinkProps {
  to: string;
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

const NavLink: React.FC<NavLinkProps> = ({ to, children, className = '', onClick }) => {
  const combinedClassName = cn(
    colors.text.secondary,
    colors.interactive.hover,
    transitions.colors,
    typography.body,
    'md:text-lg',
    typography.weight.medium,
    'no-underline',
    className
  );

  return (
    <motion.div {...navLink}>
      <Link to={to} className={combinedClassName} onClick={onClick}>
        {children}
      </Link>
    </motion.div>
  );
};

export default NavLink;
