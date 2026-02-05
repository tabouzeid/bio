import React from 'react';
import { Helmet } from 'react-helmet-async';

export interface SEOProps {
  title?: string;
  description?: string;
  image?: string;
  url?: string;
  type?: 'website' | 'article';
  author?: string;
  keywords?: string[];
  noIndex?: boolean;
}

const SEO: React.FC<SEOProps> = ({
  title = 'Taher Abouzeid - Software Engineer',
  description = 'Portfolio of Taher Abouzeid, a software engineer based in New York, USA. Passionate about coding and creating innovative web applications.',
  image = '/assets/img/me.jpg',
  url = 'https://taherabouzeid.com',
  type = 'website',
  author = 'Taher Abouzeid',
  keywords = [
    'software engineer',
    'web development',
    'portfolio',
    'react',
    'javascript',
    'typescript',
    'new york',
  ],
  noIndex = false,
}) => {
  const fullTitle = title.includes('Taher Abouzeid') ? title : `${title} | Taher Abouzeid`;
  const fullImageUrl = image.startsWith('http') ? image : `${url}${image}`;

  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="title" content={fullTitle} />
      <meta name="description" content={description} />
      <meta name="author" content={author} />
      <meta name="keywords" content={keywords.join(', ')} />

      {/* Robots */}
      {noIndex && <meta name="robots" content="noindex, nofollow" />}

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={fullImageUrl} />
      <meta property="og:site_name" content="Taher Abouzeid Portfolio" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={url} />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={fullImageUrl} />
      <meta name="twitter:creator" content="@taherabouzeid" />

      {/* Canonical URL */}
      <link rel="canonical" href={url} />

      {/* Additional Meta Tags */}
      <meta name="theme-color" content="#a0daff" />
      <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    </Helmet>
  );
};

export default SEO;
