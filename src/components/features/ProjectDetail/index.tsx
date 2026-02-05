import React from 'react';
import { motion } from 'framer-motion';
import { ProjectDetailProps } from '../../../types';
import { animations, tokens, cn } from '../../../design-system';

const bgColorMap: Record<string, string> = {
  red: 'bg-bg-tint-red',
  goldenrod: 'bg-bg-tint-gold',
  'rgba(0, 255, 38, 0.838)': 'bg-bg-tint-green',
  'rgba(242, 255, 0, 0.838)': 'bg-bg-tint-gold',
  bronze: 'bg-bg-tint-bronze',
};

function ProjectDetail({ project, index = 0 }: ProjectDetailProps) {
  const bgColorClass = bgColorMap[project.bgColor] || 'bg-gray-100';
  const isEven = index % 2 === 0;

  return (
    <motion.article
      className={cn(bgColorClass, 'py-16 md:py-24')}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: animations.durations.slow, delay: 0.2 }}
      aria-label={`Project: ${project.title}`}
    >
      <div className="container-custom px-4">
        <div className="max-w-7xl mx-auto">
          <div className={cn(
            'grid md:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center',
            isEven ? '' : 'md:grid-flow-dense'
          )}>
            {/* Image */}
            <motion.div
              className={cn(isEven ? '' : 'md:col-start-2')}
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <a
                href={project.appUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={cn('block', tokens.focus.default)}
                aria-label={`View live demo of ${project.title}`}
              >
                <img
                  src={project.imageUrl}
                  alt={`Screenshot of ${project.title} application interface showing main features and design`}
                  className="w-full h-auto rounded-lg shadow-lg"
                  loading="lazy"
                  decoding="async"
                />
              </a>
            </motion.div>

            {/* Content */}
            <div className={cn(isEven ? '' : 'md:col-start-1 md:row-start-1')}>
              <motion.div
                initial={{ opacity: 0, x: isEven ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <h2 className={cn(tokens.typography.display, 'mb-4')}>
                  {project.title}
                </h2>
                <p className={cn(tokens.typography.bodyLarge, tokens.colors.text.tertiary, 'mb-6 leading-relaxed')}>
                  {project.description}
                </p>
                <div className="flex gap-6 text-sm font-medium">
                  <a
                    href={project.appUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={cn(
                      tokens.colors.text.secondary,
                      'hover:text-gray-900 underline decoration-2 underline-offset-4',
                      tokens.transitions.colors
                    )}
                  >
                    View Project →
                  </a>
                  <a
                    href={`https://github.com/${project.id}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={cn(
                      tokens.colors.text.secondary,
                      'hover:text-gray-900 underline decoration-2 underline-offset-4',
                      tokens.transitions.colors
                    )}
                  >
                    GitHub →
                  </a>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </motion.article>
  );
}

export default ProjectDetail;
