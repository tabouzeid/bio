import React from 'react';
import { Helmet } from 'react-helmet-async';

interface StructuredDataProps {
  type?: 'person' | 'portfolio';
}

const StructuredData: React.FC<StructuredDataProps> = ({ type = 'person' }) => {
  const personSchema = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Taher Abouzeid',
    url: 'https://taherabouzeid.com',
    image: 'https://taherabouzeid.com/assets/img/me.jpg',
    jobTitle: 'Software Engineer',
    worksFor: {
      '@type': 'Organization',
      name: 'Independent',
    },
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'New York',
      addressRegion: 'NY',
      addressCountry: 'US',
    },
    email: 'mailto:tabouzeid@gmail.com',
    sameAs: [
      'https://github.com/tabouzeid',
      'https://www.linkedin.com/in/taherabouzeid/',
    ],
    knowsAbout: [
      'Software Engineering',
      'Web Development',
      'React',
      'JavaScript',
      'TypeScript',
      'Frontend Development',
    ],
  };

  const websiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Taher Abouzeid Portfolio',
    url: 'https://taherabouzeid.com',
    description:
      'Portfolio of Taher Abouzeid, a software engineer based in New York, USA.',
    author: {
      '@type': 'Person',
      name: 'Taher Abouzeid',
    },
  };

  const profilePageSchema = {
    '@context': 'https://schema.org',
    '@type': 'ProfilePage',
    mainEntity: personSchema,
    breadcrumb: {
      '@type': 'BreadcrumbList',
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          name: 'Home',
          item: 'https://taherabouzeid.com',
        },
      ],
    },
  };

  return (
    <Helmet>
      <script type="application/ld+json">{JSON.stringify(personSchema)}</script>
      <script type="application/ld+json">{JSON.stringify(websiteSchema)}</script>
      {type === 'person' && (
        <script type="application/ld+json">{JSON.stringify(profilePageSchema)}</script>
      )}
    </Helmet>
  );
};

export default StructuredData;
