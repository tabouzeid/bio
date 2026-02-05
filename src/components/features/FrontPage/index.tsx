import React from 'react';
import { motion } from 'framer-motion';
import { Section, Container, Heading } from '../../ui';
import { animations, tokens, cn } from '../../../design-system';
import SEO from '../../SEO';
import StructuredData from '../../SEO/StructuredData';

function FrontPage() {
  return (
    <motion.div {...animations.pageEntry}>
      <SEO
        title="Taher Abouzeid - Software Engineer"
        description="Portfolio of Taher Abouzeid, a software engineer based in New York, USA. Passionate about coding and creating innovative web applications."
        url="https://taherabouzeid.com/"
        image="/assets/img/me.jpg"
        keywords={[
          'taher abouzeid',
          'software engineer',
          'web developer',
          'portfolio',
          'react developer',
          'javascript',
          'typescript',
          'new york developer',
        ]}
      />
      <StructuredData type="person" />
      {/* Hero Section */}
      <Section background="primary" ariaLabel="Introduction">
        <Container>
          <div className="text-center">
            <Heading level={1} variant="hero" animate className={tokens.spacing.mb.responsive.small}>
              I'm Taher.
            </Heading>
            <motion.p
              className={cn(tokens.typography.sectionTitle, tokens.colors.text.secondary)}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: animations.durations.slow, delay: 0.4 }}
              role="doc-subtitle"
            >
              a software engineer
            </motion.p>
          </div>

          <motion.div
            className="flex justify-center mt-12"
            {...animations.scaleIn}
          >
            <img
              src="./assets/img/background.png"
              className="w-full max-w-3xl h-auto mx-auto px-4"
              alt="Abstract geometric illustration representing creativity and development"
              loading="eager"
              decoding="async"
            />
          </motion.div>
        </Container>
      </Section>

      {/* About Me Section */}
      <Section padding="large" ariaLabel="About me">
        <Container maxWidth="small">
          <motion.article className="text-center" {...animations.fadeInView}>
            <img
              src="./assets/img/me.jpg"
              className={cn('avatar', 'w-28 h-28 sm:w-32 sm:h-32', tokens.layout.center, tokens.spacing.mb.medium)}
              alt="Portrait of Taher Abouzeid, software engineer"
              loading="lazy"
              decoding="async"
            />
            <Heading level={2} variant="section" className={tokens.spacing.mb.responsive.small}>
              Hi
            </Heading>
            <p className={cn(tokens.typography.bodyLarge, tokens.colors.text.tertiary)}>
              I'm a software engineer based in New York, USA. I have a passion for coding and love
              to create new sites
            </p>
          </motion.article>
        </Container>
      </Section>
    </motion.div>
  );
}

export default FrontPage;
