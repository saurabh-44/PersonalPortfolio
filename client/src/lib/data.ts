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
    linkedin: "https://linkedin.com/in/saurabh-yadav-dev",
    github: "https://github.com/saurabh-44",
    leetcode: "https://leetcode.com/u/saurabh2244/",
  },
};

export const experience: Experience[] = [
  {
    title: "Software Developer Intern",
    company: "1stop.ai",
    period: "Dec 2024 - Mar 2025",
    location: "Bengaluru, Karnataka",
    responsibilities: [
      "Architected 15+ scalable REST APIs using the MVC pattern, ensuring 99.8% uptime for daily active users.",
      "Led backend development for 3+ collaborative projects, managing API design and feature implementation.",
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
    location: "Vadodara",
    responsibilities: [
      "Engineered 5+ responsive React applications with 95% cross-browser compatibility and a mobile-first design.",
      "Enhanced SEO performance, increasing organic traffic by 25% through optimization techniques.",
      "Participated in agile development processes, including daily stand-ups and sprint planning.",
      "Collaborated with the marketing team to implement SEO best practices.",
    ],
    technologies: ["React", "Redux", "TypeScript", "HTML/CSS", "Responsive Design", "SEO"],
  },
];



export const projects: Project[] = [
  {
    title: "Acadion –  EdTech Platform",
    date: "Jul 2025",
    description: "A full-stack EdTech Platform built with a responsive user interface, real-time dashboards, and dedicated roles for Admin, Instructor, and Student. It features secure authentication using JWT and OTP, role-based access control, Razorpay integration for payments, and Cloudinary for media management. The platform was deployed on AWS EC2 and Vercel, tested by 50+ users, and optimized for performance with a 40% faster load time.",
    image: "/attached_assets/Acadion_image.png",
    technologies: ["React", "Node", "Express", "MongoDB", "JWT", "Cloudinary", "Razorpay", "AWS EC2", "Vercel",],
    githubLink: "https://github.com/saurabh-44/Acadion",
    liveLink: "https://acadion-ashy.vercel.app/",
  },
  {
    title: "JobNova - Job Portal Application",
    date: "Mar 2025",
    description: "Designed and developed a full-stack web application that helps users track and manage applications efficiently. The system includes real-time notifications, a powerful search feature, and an application tracking dashboard. It ensures secure access with role-based permissions and runs with 99.8% uptime. Optimized database performance reduced latency by 45%, and the platform was successfully deployed on the Render cloud platform.",
    image: "/attached_assets/Jobnova1.png",
    technologies: ["Javascript", "React", "Node", "Express", "MongoDB", "JWT", "Cloudinary", "Render"],
    githubLink: "https://github.com/saurabh-44/JobNova",
    liveLink: "https://jobnova.onrender.com/",
  },
  {
    title: "FixPilot– Code Reviewer",
    date: "Nov 2024",
    description: "Fixpilot is an AI-powered code review tool built with the MERN stack and integrated with the Google Gemini API. It allows users to submit raw code and receive instant, AI-generated feedback and suggestions for improvement. Featuring a clean and user-friendly interface, the tool was tested with over 100 code snippets and deployed on Vercel for seamless access and performance.",
    image: "/attached_assets/FIxPilot.png",
    technologies: ["Javascript", "Google Gemini API", "React", "Node", "Express", "Postman", "Vercel"],
    githubLink: "https://github.com/saurabh-44/FixPilot",
    liveLink: "https://fix-pilot.vercel.app/",
  },
  {
    title: "CashFlow - Finance Tracker",
    date: "Apr 2024",
    description: "CashFlow is a real-time personal finance tracker that helps users manage their expenses through smart categorization and interactive analytics. It features a responsive user interface with budgeting tools, visual reports, and secure user authentication using Firebase. The application is deployed on Vercel, offering fast and reliable performance across devices.",
    image: "/attached_assets/cashflow.png",
    technologies: ["Javascript", "React", "Redux" , "Firebase Auth", "Frestore Database"],
    githubLink: "https://github.com/saurabh-44/cashFlow.png",
    liveLink: "https://cashflow-sepia.vercel.app/",
  },
  {
    title: "ThreadLink - Chat App",
    date: "Feb 2024",
    description: "Threadlink is a real-time chat application that enables private messaging between users with secure authentication. Built using Socket.io, it features instant communication, online user visibility, and a smooth user experience for seamless conversations. The app ensures secure and responsive messaging across devices.",
    image: "/attached_assets/Threadlink.png",
    technologies: ["Javasript", "React", "Node", "Express", "Socket.io", "MongoDB"],
    githubLink: "https://github.com/saurabh-44/ThreadLink",
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
