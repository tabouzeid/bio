// Type definitions for the portfolio application

export interface Project {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  bgColor: string;
  appUrl: string;
}

export interface SectionProps {
  children: React.ReactNode;
  className?: string;
  background?: 'white' | 'primary';
  padding?: 'default' | 'small' | 'large';
  animate?: boolean;
  ariaLabel?: string;
}

export interface ContainerProps {
  children: React.ReactNode;
  className?: string;
  maxWidth?: 'default' | 'small' | 'medium' | 'large';
}

export interface HeadingProps {
  level?: 1 | 2 | 3 | 4 | 5 | 6;
  children: React.ReactNode;
  className?: string;
  variant?: 'default' | 'hero' | 'display' | 'section';
  animate?: boolean;
}

export interface ProjectDetailProps {
  project: Project;
  index?: number;
}
