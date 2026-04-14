export const ME = {
  name: "Amr Moussa Ahmed",
  role: "React Web Developer",
  tagline: "Building modern, responsive, and user-focused web applications.",
  about: "I'm an entry-level React developer passionate about building fast, accessible, and user-friendly web applications. With a strong foundation in JavaScript and React, I thrive on creating clean, efficient code that delivers exceptional user experiences. My problem-solving mindset drives me to continuously learn and grow, seeking out new challenges and collaborating with dynamic teams.",
  email: "amr.mousaahmed@gmail.com",
  linkedin: "https://www.linkedin.com/in/amr-moussa-ahmed/",
  location: "Giza, Egypt",
  phone: "+201127205795",
};

export const ACC = ["#7C5CFC","#FF5E84","#00E5BE","#FF9F43","#4D96FF","#FF6B6B"];

export const SKILLS_CORE = [
  { name:"React", desc:"Hooks, state management, component architecture", icon:"⚛", c:"#61DBFB" },
  { name:"JavaScript ES6+", desc:"Async/await, DOM manipulation, event handling", icon:"JS", c:"#FFD93D" },
  { name:"HTML5", desc:"Semantic elements, accessibility, SEO", icon:"H5", c:"#FF6B6B" },
  { name:"CSS3", desc:"Flexbox, Grid, animations, responsive design", icon:"C3", c:"#4D96FF" },
  { name:"Tailwind CSS", desc:"Utility classes, dark mode, responsive design", icon:"TW", c:"#00E5BE" },
  { name:"Bootstrap", desc:"Grid system, components, theming", icon:"BS", c:"#7C5CFC" },
];

export const SKILLS_TOOLS = [
  { name:"Git & GitHub", desc:"Branching, collaboration, version control", icon:"⎇", c:"#FF9F43" },
  { name:"Vite / Netlify", desc:"Fast builds, deployment, CI/CD", icon:"⚡", c:"#7C5CFC" },
  { name:"Firebase", desc:"Auth, Firestore, hosting", icon:"🔥", c:"#FF5E84" },
  { name:"Linux", desc:"Ubuntu / Fedora, terminal workflows", icon:"🐧", c:"#00E5BE" },
  { name:"VS Code", desc:"Extensions, debugging, formatting", icon:"</>", c:"#4D96FF" },
  { name:"Figma (Basic)", desc:"Wireframing, design systems", icon:"✦", c:"#FF6B6B" },
];

export const SKILLS_SOON = ["TypeScript","Next.js","Express.js","MySQL / MSSQL"];
export const NETWORKING = ["TCP/IP","Subnetting","DHCP","VLANs","OSPF Routing","InterVLAN Routing","SSH","Network Security"];

export const PROJECTS = [
  {
    name:"Hospital Management System",
    type:"University Project",
    desc:"A full-featured hospital management system handling patients, staff, appointments and medical records. Built with Java and MS SQL Server to streamline clinical workflows.",
    tech:["Java","MS SQL Server","OOP"],
    accent:"#FF5E84", g1:"#FF5E84", g2:"#8B0038", icon:"🏥",
  },
  {
    name:"Pharmacy Web Design",
    type:"Educational Project",
    desc:"A responsive pharmacy website UI with product listings, a clean layout and interactive elements. Focuses on UI/UX best practices and accessibility standards.",
    tech:["HTML5","CSS3","JavaScript"],
    accent:"#00E5BE", g1:"#00E5BE", g2:"#006655", icon:"💊",
  },
  {
    name:"TODO List App",
    type:"Educational Project",
    desc:"A modern task manager with add, edit, delete and filter functionality. Built with React hooks, styled with Tailwind CSS. Data persists via local storage.",
    tech:["React","Tailwind CSS","Local Storage"],
    accent:"#7C5CFC", g1:"#7C5CFC", g2:"#2a0099", icon:"✅",
  },
  {
    name:"E-Commerce Store",
    type:"Web Application",
    desc:"A full-featured online shopping experience with product listings, cart management, search & filter, and a clean checkout flow. Built with React and styled with Tailwind CSS, powered by a Firebase backend.",
    tech:["React","Tailwind CSS","Firebase","REST APIs"],
    accent:"#FF9F43", g1:"#FF9F43", g2:"#8B4500", icon:"🛍",
  },
];

export const EXPERIENCE = [
  {
    role:"React Developer (Trainee)",
    company:"Digital Egypt Pioneers Initiative / Yat Learning Solutions",
    period:"Nov 2025 – Present",
    location:"Cairo",
    desc:"Front-end React web development trainee building real-world applications and learning modern development workflows.",
    c:"#7C5CFC",
  },
  {
    role:"Network Infrastructure (Summer Training)",
    company:"NTI – National Telecommunication Institute",
    period:"Aug 2025 – Sep 2025",
    location:"Cairo, Egypt",
    desc:"Hands-on training covering TCP/IP, VLANs, routing protocols, subnetting, OSPF and network security basics.",
    c:"#00E5BE",
  },
];

export const EDUCATION = {
  degree:"B.Sc. Computer Science",
  school:"Modern Academy for Computer Science and Technology",
  period:"2024 – 2028",
  journey:[
    { n:1, t:"Self-Taught Developer", d:"Intensive self-study, online courses and official docs" },
    { n:2, t:"Hands-on Projects", d:"Built portfolio projects from scratch, applied real skills" },
    { n:3, t:"Continuous Learning", d:"Staying current with modern frontend trends and tools" },
  ],
  values:[
    { icon:"📖", t:"Readability", d:"Clean, easy-to-maintain code" },
    { icon:"⚡", t:"Performance", d:"Fast, efficient user experiences" },
    { icon:"♿", t:"Accessibility", d:"Inclusive apps for everyone" },
  ],
  courses:[
    "Web Development Track – Google Developer Groups (GDG)",
    "Network Infrastructure Training – NTI",
    "Enactus Modern Academy – 2-week Brainstorm Camp",
  ],
};

export const SECTIONS = ["hero","about","skills","projects","experience","education","contact"] as const;
export const LABELS = ["Home","About","Skills","Projects","Experience","Education","Contact"];
