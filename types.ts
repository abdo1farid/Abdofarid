
export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  tags: string[];
  link: string;
  github: string;
}

export interface Skill {
  name: string;
  level: number;
  icon: string;
  category: 'Frontend' | 'Backend' | 'Tools' | 'Design';
}

export interface Message {
  role: 'user' | 'model';
  text: string;
}

export interface Experience {
  company: string;
  role: string;
  period: string;
  description: string[];
}
