import { Service } from '../types';

export const services: Service[] = [
  {
    id: 'frontend-dev',
    title: 'Frontend Development',
    description: 'React.js, TypeScript, JavaScript, reusable components and modern frontend architecture.',
    icon: 'code',
  },
  {
    id: 'responsive-ui',
    title: 'Responsive UI',
    description: 'Mobile-first layouts, responsive design, animations and cross-device experiences.',
    icon: 'device',
  },
  {
    id: 'api-integration',
    title: 'API Integration',
    description: 'REST APIs, Axios, data handling and frontend/backend integration.',
    icon: 'api',
  },
  {
    id: 'ui-implementation',
    title: 'UI Implementation',
    description: 'Converting approved Figma designs into functional, responsive web interfaces.',
    icon: 'design',
  },
];
