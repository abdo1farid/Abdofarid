
import { Project, Skill, Experience } from './types';

export const PROJECTS: Project[] = [
  {
    id: '1',
    title: 'GreenConnect',
    description: 'An advanced IoT-powered application developed for urban park management, featuring real-time environmental monitoring and sustainable technology integration.',
    image: 'btp.png',
    tags: ['React', 'IoT', 'TypeScript', 'BTP'],
    link: 'https://btp-lemon.vercel.app',
    github: 'https://github.com/BioTechPark/BTP'
  },
  {
    id: '2',
    title: 'AstroSolve',
    description: 'Created for the NASA Space Apps Challenge, this project utilizes complex data analysis to identify potential exoplanets and classify celestial bodies.',
    image: 'astrosolve.png',
    tags: ['NASA Space Apps', 'Python', 'Data Science', 'Algorithms'],
    link: 'https://astrosolveprjct.vercel.app/',
    github: 'https://github.com/abdo1farid/astrosolveprjct'
  },
  {
    id: '3',
    title: 'Codify',
    description: 'An innovative education platform (currently in development) redefining how programming is taught through interactive, adaptive learning paths.',
    image: 'https://images.unsplash.com/photo-1587620962725-abab7fe55159?auto=format&fit=crop&q=80&w=800&h=500',
    tags: ['Next.js', 'Tailwind', 'PostgreSQL', 'Development'],
    link: '#',
    github: ''
  }
];

export const SKILLS: Skill[] = [
  { name: 'React', level: 95, icon: 'https://cdn.simpleicons.org/react/61DAFB', category: 'Frontend' },
  { name: 'TypeScript', level: 92, icon: 'https://cdn.simpleicons.org/typescript/3178C6', category: 'Frontend' },
  { name: 'Flutter', level: 85, icon: 'https://cdn.simpleicons.org/flutter/02569B', category: 'Frontend' },
  { name: 'HTML5', level: 98, icon: 'https://cdn.simpleicons.org/html5/E34F26', category: 'Frontend' },
  { name: 'CSS3', level: 95, icon: 'https://cdn.simpleicons.org/css3/1572B6', category: 'Frontend' },
  
  { name: 'Python', level: 90, icon: 'https://cdn.simpleicons.org/python/3776AB', category: 'Backend' },
  { name: 'Java', level: 88, icon: 'https://cdn.simpleicons.org/openjdk/FF3E00', category: 'Backend' },
  { name: 'PHP', level: 80, icon: 'https://cdn.simpleicons.org/php/777BB4', category: 'Backend' },
  { name: 'SQL', level: 85, icon: 'https://cdn.simpleicons.org/postgresql/4169E1', category: 'Backend' },
  
  { name: 'C++', level: 85, icon: 'https://cdn.simpleicons.org/cplusplus/00599C', category: 'Tools' },
  { name: 'C#', level: 82, icon: 'https://cdn.simpleicons.org/csharp/239120', category: 'Tools' },
  { name: 'C', level: 80, icon: 'https://cdn.simpleicons.org/c/A8B9CC', category: 'Tools' },
  { name: 'JavaScript', level: 95, icon: 'https://cdn.simpleicons.org/javascript/F7DF1E', category: 'Frontend' }
];

export const EXPERIENCES: Experience[] = [
  {
    company: 'Master Developer',
    role: 'Founder & Lead Engineer',
    period: '2024 - Present',
    description: [
      'Founded the Master Developer team focused on high-quality engineering and creative digital solutions.',
      'Leading a group of talented developers to transform visionary ideas into functional realities.',
      'Check out our collective work at masterdeveloper.vercel.app.'
    ]
  },
  {
    company: 'YTCA (Second Edition)',
    role: '1st Place Winner',
    period: '2023 - 2024',
    description: [
      'Participated in the YTCA second edition.',
      "Worked on 'Park Urbain connecté' (Connected Urban Park).",
      'Our team won the first place for this innovative project.'
    ]
  },
  {
    company: 'UM6P YTCA & YouCode Hackathon',
    role: 'Hackathon First Place Winner',
    period: '2022 - 2023',
    description: [
      'Participated in the YTCA competition with a team at UM6P.',
      'Developed a project focused on improving agriculture management.',
      'Participated in the YouCode National Hackathon and won the first place.',
      'Participated at FLL (First Lego League) during this season.'
    ]
  },
  {
    company: 'FLL (First Lego League)',
    role: 'Regional Competition Winner',
    period: '2020 - 2022',
    description: [
      'Participated in the tech competition FLL (First Lego League).',
      'Our team won in the region competition in the year 2022.'
    ]
  }
];
