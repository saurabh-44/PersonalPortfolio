export interface PersonalInfo {
  name: string;
  title: string;
  email: string;
  phone: string;
  location: string;
  education: {
    degree: string;
    institution?: string;
  };
  social: {
    linkedin: string;
    github: string;
    leetcode: string;
    twitter?: string;
  };
}

export interface Experience {
  title: string;
  company: string;
  period: string;
  location: string;
  responsibilities: string[];
  technologies: string[];
}

export interface Education {
  degree: string;
  institution: string;
  period: string;
  grade: string;
  gradeLabel: string;
  location: string;
}

export interface Project {
  title: string;
  date: string;
  description: string;
  image: string;
  technologies: string[];
  githubLink?: string;
  liveLink?: string;
}

export interface Skill {
  name: string;
  level: number;
}

export interface ContactFormData {
  name: string;
  email: string;
  message: string;
}
