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

  return (
    <motion.article
      className={cn(bgColorClass, tokens.spacing.section.yLarge)}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: animations.durations.slow, delay: index * 0.1 }}
      aria-label={`Project: ${project.title}`}
    >
      <div className="container-custom px-4">
        <div className={cn('center-layout', tokens.layout.container.md)}>
          <motion.a
            href={`https://github.com/${project.id}`}
            target="_blank"
            className={cn(
              'inline-block text-black no-underline hover:underline',
              tokens.transitions.all,
              tokens.focus.default
            )}
            rel="noopener noreferrer"
            aria-label={`View ${project.title} source code on GitHub`}
            {...animations.cardHover}
            transition={{ type: 'spring', stiffness: 300 }}
          >
            <h2 className={cn(tokens.typography.display, tokens.spacing.mb.responsive.small)}>
              {project.title}
            </h2>
          </motion.a>
          <p
            className={cn(
              tokens.typography.bodyLarge,
              tokens.colors.text.secondary,
              tokens.spacing.mb.responsive.medium,
              tokens.layout.container.sm,
              tokens.layout.center
            )}
          >
            {project.description}
          </p>
          <motion.a
            href={project.appUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={cn('block', tokens.focus.default, tokens.radius.lg)}
            aria-label={`View live demo of ${project.title}`}
            {...animations.cardHover}
            transition={{ type: 'spring', stiffness: 300 }}
          >
            <motion.img
              src={project.imageUrl}
              alt={`Screenshot of ${project.title} application interface showing main features and design`}
              className="project-img max-w-3xl mx-auto shadow-lg rounded-lg"
              loading="lazy"
              decoding="async"
              style={{
                boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.08), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
              }}
              whileHover={{
                boxShadow:
                  '0 20px 25px -5px rgba(0, 0, 0, 0.12), 0 10px 10px -5px rgba(0, 0, 0, 0.06)',
              }}
            />
          </motion.a>
        </div>
      </div>
    </motion.article>
  );
}

export default ProjectDetail;
