import { Skill } from '../types';

export const skills: Skill[] = [
  // Frontend
  { name: 'React.js', category: 'Frontend' },
  { name: 'React Native', category: 'Frontend' },
  { name: 'JavaScript', category: 'Frontend' },
  { name: 'TypeScript', category: 'Frontend' },
  { name: 'HTML5', category: 'Frontend' },
  { name: 'CSS3', category: 'Frontend' },
  { name: 'Tailwind CSS', category: 'Frontend' },
  { name: 'Vite', category: 'Frontend' },
  
  // Backend / Integration
  { name: 'REST APIs', category: 'Backend' },
  { name: 'Axios', category: 'Backend' },
  { name: 'EmailJS', category: 'Backend' },
  
  // State Management
  { name: 'Redux', category: 'State Management' },
  
  // Programming
  { name: 'Java', category: 'Programming' },
  { name: 'SQL', category: 'Programming' },
  
  // Database
  { name: 'MySQL', category: 'Database' },
  { name: 'PostgreSQL', category: 'Database' },
  
  // Tools
  { name: 'Git', category: 'Tools' },
  { name: 'GitHub', category: 'Tools' },
  { name: 'GitLab', category: 'Tools' },
  { name: 'Power BI', category: 'Tools' },
];

export const skillCategories = [
  'Frontend',
  'Backend',
  'State Management',
  'Programming',
  'Database',
  'Tools',
] as const;
