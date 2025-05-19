import { PersonalInfo, Experience, Education, Project, Skill } from "./types";

export const personalInfo: PersonalInfo = {
  name: "Saurabh Yadav",
  title: "Software Developer",
  email: "imsaurabh978@gmail.com",
  phone: "+91-8004064120",
  location: "Vadodara, Gujarat, India",
  education: {
    degree: "B.Tech in CSE",
    institution: "Parul Institute of Technology",
  },
  social: {
    linkedin: "https://linkedin.com/in/",
    github: "https://github.com/",
    leetcode: "https://leetcode.com/",
  },
};

export const experience: Experience[] = [
  {
    title: "Software Developer Intern",
    company: "1stop.ai",
    period: "Dec 2024 - Mar 2025",
    location: "Bengaluru, Karnataka",
    responsibilities: [
      "Developed scalable APIs integrated with React.js for jobnova, a job portal application.",
      "Built admin and recruiter dashboards for managing job postings, candidate applications, and system analytics.",
      "Integrated JWT-based authentication and role-based authorization to ensure secure access control.",
      "Executed unit testing with Vitest and Jest, reducing bugs by 40% significantly improving software stability.",
      "Learned essential practices for code optimization, debugging, and deployment in a real-world project.",
    ],
    technologies: ["React.js", "Node.js", "Typescript", "MongoDB", "Jest", "Vitest"],
  },
  {
    title: "Web Developer",
    company: "ByteXL",
    period: "May 2024 - June 2024",
    location: "Remote",
    responsibilities: [
      "Developed responsive web applications using React, Redux, and TypeScript.",
      "Implemented responsive designs for mobile and desktop platforms.",
      "Participated in agile development processes, including daily stand-ups and sprint planning.",
      "Collaborated with the marketing team to implement SEO best practices.",
    ],
    technologies: ["React", "Redux", "TypeScript", "HTML/CSS", "Responsive Design", "SEO"],
  },
];

export const education: Education[] = [
  {
    degree: "B.Tech in Computer Science and Engineering",
    institution: "Parul Institute of Technology",
    period: "2021 - 2025",
    grade: "7.79",
    gradeLabel: "CGPA",
    location: "Vadodara, Gujarat",
  },
  {
    degree: "Class 12th",
    institution: "Jay Abla J Jeevan Inter College",
    period: "2019",
    grade: "71.4%",
    gradeLabel: "Percentage",
    location: "Ayodhya, UP",
  },
  {
    degree: "Class 10th",
    institution: "Tiny Tots Sr. Sec School",
    period: "2017",
    grade: "10",
    gradeLabel: "CGPA",
    location: "Ayodhya, UP",
  },
];

export const projects: Project[] = [
  {
    title: "Acadion - LMS Platform",
    date: "Aug 2024",
    description: "A feature-rich ed-tech platform for creating and consuming educational content with secure authentication and payment processing.",
    image: "https://images.unsplash.com/photo-1522881193457-37ae97c905bf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
    technologies: ["React", "Node", "Express", "MongoDB", "Cloudinary", "Stripe"],
    githubLink: "#",
    liveLink: "#",
  },
  {
    title: "WebMart - E-Commerce",
    date: "May 2024",
    description: "A full-stack e-commerce platform with user authentication, product management, and secure payment processing via PayPal.",
    image: "https://images.unsplash.com/photo-1516321497487-e288fb19713f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
    technologies: ["React", "Node", "Express", "MongoDB", "Cloudinary", "PayPal API"],
    githubLink: "#",
    liveLink: "#",
  },
  {
    title: "ThreadLink - Chat App",
    date: "Feb 2024",
    description: "Real-time chat application with user authentication, private messaging, and online user visibility using Socket.io.",
    image: "https://images.unsplash.com/photo-1554177255-61502b352de3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
    technologies: ["React", "Node", "Express", "Socket.io", "MongoDB"],
    githubLink: "#",
    liveLink: "#",
  },
  {
    title: "CashFlow - Finance Tracker",
    date: "Dec 2023",
    description: "Personal finance tracker with secure authentication, budgeting tools, and real-time data syncing with Firebase.",
    image: "https://images.unsplash.com/photo-1560472355-536de3962603?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
    technologies: ["React", "Redux", "Firebase", "Authentication"],
    githubLink: "#",
    liveLink: "#",
  },
];

export const skills = {
  languages: [
    { name: "JavaScript", level: 90 },
    { name: "HTML/CSS", level: 85 },
    { name: "C/C++", level: 75 },
    { name: "Java", level: 70 },
    { name: "SQL", level: 80 },
  ],
  frameworks: [
    { name: "React.js", level: 85 },
    { name: "Node.js", level: 80 },
    { name: "Express.js", level: 80 },
    { name: "MongoDB", level: 75 },
    { name: "Git/GitHub", level: 85 },
  ],
};

export const certifications = [
  {
    name: "Software Engineering: Software Design and Project Management",
    provider: "Coursera",
    link: "https://www.coursera.org/account/accomplishments/"
  },
  {
    name: "Data Analytics with Python",
    provider: "NPTEL",
    link: "https://nptel.ac.in/noc/Ecertificate/"
  },
  {
    name: "Databases and SQL for Data Science with Python",
    provider: "IBM",
    link: "https://www.coursera.org/account/accomplishments/"
  },
  {
    name: "Introduction to Cybersecurity",
    provider: "Cisco",
    link: "https://www.netacad.com/portal/certificate-verification"
  },
  {
    name: "Full Stack Web Development",
    provider: "Udemy",
    link: "https://www.udemy.com/certificate/"
  },
];
