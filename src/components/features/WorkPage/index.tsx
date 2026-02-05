import React from 'react';
import { motion } from 'framer-motion';
import ProjectDetail from '../ProjectDetail';
import { projects } from '../../../data/projects';
import { animations, tokens, cn } from '../../../design-system';
import SEO from '../../SEO';

function WorkPage() {
  return (
    <motion.div {...animations.pageEntry}>
      <SEO
        title="My Work - Portfolio Projects"
        description="Browse my portfolio of web development projects and applications. Showcasing expertise in React, TypeScript, and modern web technologies."
        url="https://taherabouzeid.com/work"
        image="/assets/img/background.png"
        keywords={[
          'portfolio',
          'web development projects',
          'react projects',
          'software engineering',
          'web applications',
          'taher abouzeid projects',
        ]}
      />
      {/* Hero Section */}
      <section className="bg-primary-light" aria-label="Page header">
        <div className="container-custom">
          <div className={cn('text-center', tokens.spacing.section.y)}>
            <motion.h1 className={tokens.typography.hero} {...animations.fadeUp}>
              Work.
            </motion.h1>
          </div>
        </div>
      </section>

      {/* Intro Section */}
      <section
        className={cn('container-custom px-4', tokens.spacing.section.yLarge)}
        aria-label="Introduction to portfolio"
      >
        <motion.div
          className={cn('center-layout', tokens.layout.container.sm)}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: animations.durations.slow, delay: 0.4 }}
        >
          <motion.img
            src="./assets/img/pencil.svg"
            className={cn('w-12 h-12 sm:w-16 sm:h-16', tokens.layout.center, tokens.spacing.mb.medium)}
            alt=""
            role="presentation"
            loading="lazy"
            decoding="async"
            animate={{ rotate: [0, -10, 10, -10, 0] }}
            transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
          />
          <h2 className={cn(tokens.typography.sectionTitle, tokens.spacing.mb.small)}>
            What I've been up to.
          </h2>
          <p className={cn(tokens.typography.bodyLarge, tokens.colors.text.tertiary)}>
            Here's a selection of some of my work.
          </p>
        </motion.div>
      </section>

      {/* Projects */}
      <section aria-label="Portfolio projects">
        {projects.map((project, index) => (
          <ProjectDetail key={project.id} project={project} index={index} />
        ))}
      </section>
    </motion.div>
  );
}

export default WorkPage;
