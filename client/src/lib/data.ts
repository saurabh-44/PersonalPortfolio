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
    link: "https://www.coursera.org/account/accomplishments/verify/PUKLUJTCD4OO"
  },
  {
    name: "Data Analytics with Python",
    provider: "NPTEL",
    link: "https://archive.nptel.ac.in/content/noc/NOC24/SEM1/Ecertificates/106/noc24-cs20/Course/NPTEL24CS20S106960143230314023.pdf"
  },
  {
    name: "Databases and SQL for Data Science with Python",
    provider: "IBM",
    link: "https://www.coursera.org/account/accomplishments/verify/LZ24GVX6D5A2"
  },
  {
    name: "Introduction to Cybersecurity",
    provider: "Cisco",
    link: "https://auth.netacad.com/auth/realms/skillsforall/protocol/openid-connect/auth?client_id=b2e-marketplace&redirect_uri=https%3A%2F%2Fwww.netacad.com%2Fcertificates%3FissuanceId%3D6c1bedd5-9365-442b-b532-7b7b780a59cb%2F&state=6e3ec36f-2a49-490f-97a5-2ac62d5f2292&response_mode=fragment&response_type=code&scope=openid&nonce=3c4dc891-da78-45b1-a287-705c4e92d92b&ui_locales=en-US&code_challenge=FER3BV_QW1GXbcLjT6oIeKbwqjts_5a1cy5LVQU56hA&code_challenge_method=S256"
  },
  {
    name: "Full Stack Web Development",
    provider: "Udemy",
    link: "https://www.udemy.com/certificate/UC-39c57ce8-bc0d-44bb-a9de-b293111890b0/"
  },
];
