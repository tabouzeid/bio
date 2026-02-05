import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail } from 'lucide-react';
import { animations, tokens, cn } from '../../../design-system';

function Footer() {
  const links = [
    {
      name: 'GitHub',
      url: 'https://github.com/tabouzeid',
      icon: Github,
    },
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/taherabouzeid/',
      icon: Linkedin,
    },
    {
      name: 'Email',
      url: 'mailto:tabouzeid@gmail.com',
      icon: Mail,
    },
  ];

  return (
    <div className="bg-primary-light">
      <div className="container-custom px-4">
        <footer className={cn('text-center', tokens.spacing.section.y)} role="contentinfo">
          <div
            className={cn(
              'flex justify-center',
              tokens.spacing.gap.responsive.small,
              tokens.spacing.mb.medium
            )}
          >
            {links.map((site) => {
              const Icon = site.icon;
              return (
                <motion.a
                  key={site.name}
                  href={site.url}
                  target="_blank"
                  className={cn('icon-btn', tokens.colors.text.secondary)}
                  rel="noopener noreferrer"
                  aria-label={`Visit ${site.name}`}
                  {...animations.iconButton}
                >
                  <Icon className="w-5 h-5 sm:w-6 sm:h-6" />
                </motion.a>
              );
            })}
          </div>
          <p className="text-gray-700 text-sm sm:text-base">
            © {new Date().getFullYear()}{' '}
            <a
              href="https://github.com/tabouzeid"
              className={cn('hover:underline', tokens.colors.text.secondary, tokens.typography.weight.medium)}
            >
              Taher Abouzeid
            </a>
            . All rights reserved.
          </p>
        </footer>
      </div>
    </div>
  );
}

export default Footer;
