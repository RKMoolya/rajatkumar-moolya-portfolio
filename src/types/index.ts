export interface Project {
  id: string;
  name: string;
  category: string;
  company?: string;
  timeline?: string;
  description: string;
  technologies: string[];
  contributions: string[];
  url?: string;
  featured: boolean;
  image?: string;
  overview?: string;
  challenge?: string;
  approach?: string;
  keyFeatures?: string[];
}

export interface Experience {
  id: string;
  title: string;
  company: string;
  location: string;
  startDate: string;
  endDate: string;
  responsibilities: string[];
}

export interface Education {
  id: string;
  degree: string;
  institution: string;
  location: string;
  startDate: string;
  endDate: string;
  score: string;
  scoreType: 'CGPA' | 'Percentage';
}

export interface Certification {
  id: string;
  name: string;
  issuer: string;
  date?: string;
}

export interface Skill {
  name: string;
  category: 'Frontend' | 'Backend' | 'State Management' | 'Programming' | 'Database' | 'Tools';
}

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
}
