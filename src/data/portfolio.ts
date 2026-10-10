/**
 * Central portfolio data for Rajatkumar Moolya.
 * Every fact on the site comes from this file. Update it here and the whole site follows.
 */

export type Palette = { from: string; via: string; to: string; accent: string };

export const profile = {
  fullName: 'Rajatkumar Moolya',
  displayName: 'Rajatkumar Moolya',
  firstName: 'Rajatkumar',
  seriesTag: 'The Series',
  /** Fictional studio card shown at the very start of the opening sequence. */
  originalLabel: 'A Moolya Original',
  role: 'Frontend Developer',
  tagline: ['Frontend Developer', 'React.js', 'TypeScript'],
  intro:
    'A frontend developer crafting responsive, production-ready web applications with modern UI technologies, seamless API integrations, and AI-powered services.',
  location: 'Pune, India',
  email: 'rajatkumarmoolya@gmail.com',
  links: {
    linkedin: 'https://www.linkedin.com/in/rajatkumar-moolya-b70354281',
    github: 'https://github.com/RKMoolya',
  },
  resumePdf: '/assets/Rajat_Moolya_Resume.pdf',
  portrait: {
    src: '/assets/portrait-720.webp',
    srcSet: '/assets/portrait-420.webp 420w, /assets/portrait-720.webp 720w, /assets/portrait-1100.webp 1100w',
    alt: 'Portrait of Rajatkumar Moolya',
  },
  interests: ['System Design', 'Full-Stack Development', 'AI Integration'],
};

export const education = [
  {
    school: 'DY Patil University',
    place: 'Ambi, Pune',
    degree: 'B.Tech in Information Technology',
    period: 'August 2022 – June 2025',
    score: 'CGPA 8.26',
  },
  {
    school: 'Pimpri-Chinchwad Polytechnic',
    place: 'Nigdi, Pune',
    degree: 'Diploma in Electronics & Telecommunication',
    period: 'June 2019 – May 2022',
    score: 'Score 72.40%',
  },
];

export const experience = [
  {
    company: 'PureSoft Solutions LLP',
    role: 'Frontend Developer Intern',
    place: 'Pune, India',
    period: 'September 2025 – December 2025',
    points: [
      'Developed and deployed production-ready web applications for live clients including AI recruitment platforms and corporate portals.',
      'Translated approved Figma designs into functional, responsive interfaces using React.js, Tailwind CSS, and TypeScript.',
      'Integrated REST APIs, managed client-side state, and built modular component architectures across agile sprints.',
    ],
  },
];

export type Metric = { value: string; label: string };

export type Project = {
  id: string;
  title: string;
  year: string;
  genre: string;
  logline: string;
  stack: string[];
  build: string[];
  features: string[];
  metrics: Metric[];
  github?: string;
  link?: string;
  palette: Palette;
  motif: 'shield' | 'flow' | 'tenants';
};

export const projects: Project[] = [
  {
    id: 'pss-ai-recruiter',
    title: 'PSS AI Recruiter',
    year: '2025',
    genre: 'AI • Recruitment • Full-Stack',
    logline: 'An AI-powered recruitment automation platform streamlining resume screening and JD evaluation with Azure OpenAI.',
    stack: ['FastAPI', 'Python', 'React.js', 'TypeScript', 'Tailwind CSS', 'Azure OpenAI', 'MongoDB'],
    build: [
      'Built an AI-powered recruitment platform automating resume screening, job description evaluation, and candidate shortlisting with Python backend services and a modern React frontend.',
      'Integrated Azure OpenAI to parse resumes and JDs, extract key skills and experience, and generate ATS-based fit scores for hiring decisions.',
      'Developed modular FastAPI services for candidate and job management, evaluation workflows, report generation, and tenant-aware MongoDB models.',
      'Designed a responsive recruiter dashboard with role-based workflows for jobs, candidates, templates, screening results, and bulk resume/JD ingestion.',
    ],
    features: [
      'Azure OpenAI resume & JD parsing',
      'ATS-based candidate fit scoring',
      'Modular FastAPI services & MongoDB',
      'Role-based recruiter dashboard',
      'Bulk file & folder resume ingestion',
    ],
    metrics: [
      { value: 'AI', label: 'resume parsing' },
      { value: 'ATS', label: 'fit score generation' },
      { value: 'FastAPI', label: 'modular services' },
      { value: 'Live', label: 'in production' },
      { value: 'Azure', label: 'OpenAI integration' },
    ],
    link: 'https://recruitmentai.phylon.in/',
    palette: { from: '#04121f', via: '#0f4c6e', to: '#05080d', accent: '#4cc9ff' },
    motif: 'shield',
  },
  {
    id: 'cogneralabs-ai',
    title: 'CogneraLabs.AI',
    year: '2025',
    genre: 'Corporate • AI Solutions • Frontend',
    logline: 'A modern corporate website with modular reusable UI components, sleek animations, and responsive layouts.',
    stack: ['Vite', 'React.js', 'Tailwind CSS', 'TypeScript', 'EmailJS'],
    build: [
      'Developed a high-performance corporate website from approved Figma designs using Vite, React.js, and Tailwind CSS.',
      'Architected a modular component library ensuring design consistency, fast loading times, and full responsive support across all breakpoints.',
      'Integrated EmailJS for functional client inquiry delivery and contact form workflows without requiring dedicated backend servers.',
      'Crafted subtle micro-animations and transitions to enhance brand storytelling and user engagement.',
    ],
    features: [
      'Lightning-fast page loads with Vite',
      'Modular component architecture',
      'Functional contact form with EmailJS',
      'Responsive layout across all breakpoints',
      'Smooth interactive UI transitions',
    ],
    metrics: [
      { value: 'Vite', label: 'fast build & load' },
      { value: '100%', label: 'responsive design' },
      { value: 'EmailJS', label: 'serverless delivery' },
      { value: 'Live', label: 'in production' },
      { value: 'Modular', label: 'component system' },
    ],
    link: 'https://cogneralabs.ai/',
    palette: { from: '#1a0d02', via: '#8a4a07', to: '#0a0806', accent: '#ffb547' },
    motif: 'flow',
  },
  {
    id: 'behavioural-captcha',
    title: 'Behavioural CAPTCHA System',
    year: '2025',
    genre: 'Machine Learning • Security • Academic',
    logline: 'An ML-driven security system analysing user behavioral input patterns to distinguish humans from automated bots.',
    stack: ['Machine Learning', 'Python', 'Data Annotation', 'Data Preprocessing'],
    build: [
      'Collaborated in a team of 5 on academic research exploring machine learning models to detect human behavior patterns as an alternative to traditional CAPTCHAs.',
      'Contributed to the data collection pipeline, gathering and labeling behavioral interaction patterns and cursor movements.',
      'Supported data preprocessing workflows, model evaluation, and analysis of false positives and false negatives.',
    ],
    features: [
      'Behavioral pattern analysis',
      'Data-driven bot detection',
      'Data annotation & preprocessing',
      'Model evaluation and validation',
      'Collaborative team research',
    ],
    metrics: [
      { value: '5', label: 'research team size' },
      { value: 'ML', label: 'pattern analysis' },
      { value: 'Academic', label: 'DY Patil University' },
      { value: 'Security', label: 'bot detection' },
      { value: 'Data', label: 'preprocessing pipeline' },
    ],
    palette: { from: '#2a0610', via: '#7a0f24', to: '#0b0710', accent: '#ff3d5a' },
    motif: 'tenants',
  },
];

export type Achievement = {
  id: string;
  title: string;
  org: string;
  detail: string;
  laurel: string;
  link?: string;
};

export const achievements: Achievement[] = [
  {
    id: 'puresoft-intern',
    title: 'Production Frontend Developer',
    org: 'PureSoft Solutions LLP',
    detail: 'Developed and shipped production-ready client applications including PSS AI Recruiter and CogneraLabs.AI.',
    laurel: 'Client Production',
  },
  {
    id: 'live-products',
    title: 'Shipped 2 Live Products',
    org: 'Production Deployments',
    detail: 'Delivered recruitmentai.phylon.in and cogneralabs.ai with modern UI and seamless API integrations.',
    laurel: 'Live Products',
  },
  {
    id: 'dypu-ml',
    title: 'Machine Learning Research',
    org: 'DY Patil University',
    detail: 'Researched behavioural pattern recognition and bot detection in a 5-member collaborative engineering team.',
    laurel: 'Academic Research',
  },
];

export type Certification = { issuer: string; name: string; link?: string };

export const certifications: Certification[] = [
  { issuer: 'PureSoft Solutions LLP', name: 'Internship Offer Certificate — Frontend Developer Intern' },
  { issuer: 'TechnoHacks EduTech', name: 'Web Development Internship Certificate' },
  { issuer: 'DYPU-KRITI & Spartificial', name: 'Machine Learning Certification' },
  { issuer: 'Diamond Mindglance Institute', name: 'Core Java Programming' },
];

export type Skill = { name: string; mono: string; note?: string };
export type SkillCategory = { id: string; title: string; subtitle: string; skills: Skill[] };

export const skillCategories: SkillCategory[] = [
  {
    id: 'frontend',
    title: 'Frontend',
    subtitle: 'Core UI & Web Technologies',
    skills: [
      { name: 'React.js', mono: 'Re', note: 'Primary' },
      { name: 'TypeScript', mono: 'Ts' },
      { name: 'JavaScript', mono: 'Js' },
      { name: 'Tailwind CSS', mono: 'Tw' },
      { name: 'HTML5', mono: 'Ht' },
      { name: 'CSS3', mono: 'Cs' },
      { name: 'Vite', mono: 'Vt' },
    ],
  },
  {
    id: 'state-api',
    title: 'State & APIs',
    subtitle: 'Data flow and server communication',
    skills: [
      { name: 'REST APIs', mono: 'Ap' },
      { name: 'Redux', mono: 'Rx' },
      { name: 'Axios', mono: 'Ax' },
      { name: 'EmailJS', mono: 'Em' },
      { name: 'FastAPI', mono: 'Fa' },
    ],
  },
  {
    id: 'programming',
    title: 'Programming & DB',
    subtitle: 'Languages and persistence',
    skills: [
      { name: 'Java', mono: 'Jv' },
      { name: 'Python', mono: 'Py' },
      { name: 'SQL', mono: 'Sq' },
      { name: 'MySQL', mono: 'My' },
      { name: 'PostgreSQL', mono: 'Pg' },
      { name: 'MongoDB', mono: 'Mg' },
    ],
  },
  {
    id: 'tools',
    title: 'Tools & DevOps',
    subtitle: 'Workflow and analytics',
    skills: [
      { name: 'Git', mono: 'Gt' },
      { name: 'GitHub', mono: 'Gh' },
      { name: 'GitLab', mono: 'Gl' },
      { name: 'Power BI', mono: 'Bi' },
    ],
  },
  {
    id: 'interests',
    title: 'Interests & Focus',
    subtitle: 'Continual growth',
    skills: [
      { name: 'System Design', mono: 'Sd' },
      { name: 'Full-Stack Development', mono: 'Fs' },
      { name: 'AI Integration', mono: 'Ai' },
    ],
  },
];

export const skillEvidence: Record<string, string[]> = {
  'React.js': ['PSS AI Recruiter', 'CogneraLabs.AI', 'PureSoft Internship'],
  TypeScript: ['PSS AI Recruiter', 'CogneraLabs.AI'],
  'Tailwind CSS': ['PSS AI Recruiter', 'CogneraLabs.AI'],
  Vite: ['CogneraLabs.AI'],
  'FastAPI': ['PSS AI Recruiter'],
  'REST APIs': ['PSS AI Recruiter', 'Client Integrations'],
  Redux: ['Client Applications'],
  Java: ['Core Java Certification'],
  Python: ['PSS AI Recruiter', 'Behavioural CAPTCHA System'],
  MongoDB: ['PSS AI Recruiter'],
  MySQL: ['Database Management'],
  PostgreSQL: ['Database Management'],
  'Git / GitHub': ['Production & Team Workflows', 'github.com/RKMoolya'],
  'Machine Learning': ['Behavioural CAPTCHA System', 'DYPU Certification'],
};

export type Episode = {
  code: string;
  title: string;
  description: string;
  tags: string[];
  runtime: string;
  palette: Palette;
};

export type Season = {
  number: number;
  title: string;
  period: string;
  synopsis: string;
  episodes: Episode[];
};

const crimson: Palette = { from: '#24060b', via: '#6e0d1d', to: '#09070a', accent: '#ff3d5a' };
const amber: Palette = { from: '#1c1003', via: '#6b3c06', to: '#0a0806', accent: '#ffb547' };
const ocean: Palette = { from: '#04121f', via: '#0f4c6e', to: '#05080d', accent: '#4cc9ff' };
const violet: Palette = { from: '#120822', via: '#3d1a6e', to: '#07060c', accent: '#b98bff' };
const jade: Palette = { from: '#03150f', via: '#0d5a40', to: '#050a08', accent: '#46e3a8' };

export const seasons: Season[] = [
  {
    number: 1,
    title: 'The Foundation',
    period: '2019 – 2022',
    synopsis: 'Diploma in Electronics & Telecommunication at Pimpri-Chinchwad Polytechnic, Nigdi, Pune.',
    episodes: [
      {
        code: 'S01 E01',
        title: 'The Technical Roots',
        description: 'Diploma in Electronics & Telecommunication at PCP, finishing with a 72.40% score.',
        tags: ['Diploma', 'PCP', 'Pune'],
        runtime: 'Jun 2019 – May 2022',
        palette: amber,
      },
    ],
  },
  {
    number: 2,
    title: 'The Engineer',
    period: '2022 – 2025',
    synopsis: 'B.Tech in Information Technology at DY Patil University, Ambi, Pune — software engineering, data, and ML research.',
    episodes: [
      {
        code: 'S02 E01',
        title: 'The Degree',
        description: 'Bachelor of Technology in Information Technology at DY Patil University — CGPA 8.26.',
        tags: ['B.Tech IT', 'DY Patil', 'CGPA 8.26'],
        runtime: 'Aug 2022 – Jun 2025',
        palette: violet,
      },
      {
        code: 'S02 E02',
        title: 'The Research Project',
        description: 'Behavioural CAPTCHA System — ML-driven bot detection with a collaborative team of 5.',
        tags: ['Machine Learning', 'Research', 'Team of 5'],
        runtime: 'Aug 2024 – Apr 2025',
        palette: crimson,
      },
    ],
  },
  {
    number: 3,
    title: 'Building for Production',
    period: '2025 – Present',
    synopsis: 'Frontend Developer Intern at PureSoft Solutions LLP — shipping live client applications and AI-powered interfaces.',
    episodes: [
      {
        code: 'S03 E01',
        title: 'The Developer',
        description: 'Frontend internship at PureSoft Solutions LLP translating Figma designs to robust React interfaces.',
        tags: ['PureSoft', 'React.js', 'Tailwind CSS'],
        runtime: 'Sep 2025 – Dec 2025',
        palette: ocean,
      },
      {
        code: 'S03 E02',
        title: 'The AI Recruiter',
        description: 'Shipped PSS AI Recruiter — full recruitment automation with Azure OpenAI, FastAPI, and React.',
        tags: ['Azure OpenAI', 'FastAPI', 'Production'],
        runtime: '2025',
        palette: violet,
      },
      {
        code: 'S03 E03',
        title: 'Live in Production',
        description: 'Shipped CogneraLabs.AI corporate web portal with Vite, modular components, and EmailJS.',
        tags: ['Vite', 'Production', 'EmailJS'],
        runtime: '2025',
        palette: jade,
      },
    ],
  },
];

export type TopPick = { label: string; title: string; detail: string; palette: Palette };

export const topPicks: TopPick[] = [
  { label: 'Primary Stack', title: 'React & TypeScript', detail: 'Component architecture, responsive UI, Tailwind CSS', palette: ocean },
  { label: 'The AI Original', title: 'PSS AI Recruiter', detail: 'Azure OpenAI • FastAPI • Live deployment', palette: ocean },
  { label: 'Live Website', title: 'CogneraLabs.AI', detail: 'Vite • Modular components • EmailJS', palette: amber },
  { label: 'The Internship', title: 'PureSoft Solutions', detail: 'Frontend Developer Intern • Live client products', palette: violet },
  { label: 'Academic High', title: 'B.Tech in IT', detail: 'DY Patil University • CGPA 8.26', palette: jade },
  { label: 'Next Chapter', title: 'Full-Stack & AI', detail: 'FastAPI, System Design, AI integration', palette: crimson },
];

/** Slides for the "▶ Play Intro" cinematic sequence. */
export type IntroSlide = { kicker: string; title: string; lines: string[]; chips?: string[] };

export const introSlides: IntroSlide[] = [
  {
    kicker: 'Education',
    title: 'B.Tech in IT',
    lines: ['DY Patil University, Pune', 'August 2022 – June 2025'],
    chips: ['CGPA 8.26', 'Diploma 72.4%'],
  },
  {
    kicker: 'Core Stack',
    title: 'React & Modern Frontend',
    lines: ['React.js, TypeScript, Tailwind CSS, Vite', 'REST APIs, Redux, Axios, EmailJS'],
    chips: ['React.js', 'TypeScript', 'Tailwind', 'Vite', 'REST'],
  },
  {
    kicker: 'Experience',
    title: 'PureSoft Solutions LLP',
    lines: ['Frontend Developer Intern', 'September 2025 – December 2025', 'Built & deployed production applications for clients'],
  },
  {
    kicker: 'Live Products',
    title: 'Two Shipped Originals',
    lines: ['PSS AI Recruiter — recruitment automation with Azure OpenAI', 'CogneraLabs.AI — corporate website in production'],
  },
];

export type ProfileId = 'rajat' | 'recruiter' | 'developer' | 'creative';
export type SectionId = 'about' | 'journey' | 'originals' | 'picks' | 'skills' | 'moments' | 'story';

export const viewerProfiles: {
  id: ProfileId;
  name: string;
  blurb: string;
  color: string;
  order: SectionId[];
}[] = [
  {
    id: 'rajat',
    name: 'Rajatkumar',
    blurb: 'The full series, in order',
    color: '#e5132b',
    order: ['about', 'journey', 'originals', 'picks', 'skills', 'moments', 'story'],
  },
  {
    id: 'recruiter',
    name: 'Recruiter',
    blurb: 'Resume, experience & skills first',
    color: '#4cc9ff',
    order: ['story', 'moments', 'skills', 'originals', 'about', 'journey', 'picks'],
  },
  {
    id: 'developer',
    name: 'Developer',
    blurb: 'Projects, stack & code first',
    color: '#46e3a8',
    order: ['originals', 'skills', 'journey', 'moments', 'about', 'picks', 'story'],
  },
  {
    id: 'creative',
    name: 'Creative',
    blurb: 'The story arc & highlights first',
    color: '#ffb547',
    order: ['journey', 'picks', 'originals', 'moments', 'about', 'skills', 'story'],
  },
];

export const sectionMeta: Record<SectionId, { nav: string; card: string; meta: string; palette: Palette }> = {
  about: { nav: 'About', card: 'About Me', meta: 'The Pilot • Education & journey', palette: violet },
  journey: { nav: 'Journey', card: 'My Journey', meta: `${seasons.length} Seasons • ${seasons.reduce((n, s) => n + s.episodes.length, 0)} Episodes`, palette: amber },
  originals: { nav: 'Originals', card: 'My Projects', meta: `${projects.length} Originals • 2025`, palette: crimson },
  picks: { nav: 'Top Picks', card: 'Top Picks', meta: `Top ${topPicks.length} from the resume`, palette: jade },
  skills: { nav: 'Skills', card: 'My Skills', meta: `${skillCategories.length} Categories`, palette: ocean },
  moments: { nav: 'Moments', card: 'Highlights', meta: `${achievements.length} Moments • ${certifications.length} Certifications`, palette: crimson },
  story: { nav: 'Resume', card: 'The Full Story', meta: 'Resume • View & download', palette: violet },
};
