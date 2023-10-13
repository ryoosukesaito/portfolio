import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiReact,
  SiNodedotjs,
  SiMongodb,
  SiMysql,
  SiRedux,
  SiGit,
  SiMui,
  SiTailwindcss,
  SiFigma,
} from "react-icons/si";

import { FaSass, FaFacebook, FaGithub, FaLinkedinIn } from "react-icons/fa";

export const SKILL_ICONS = {
  html: {
    icon: <SiHtml5 />,
    name: "HTML",
  },
  css: {
    icon: <SiCss3 />,
    name: "CSS",
  },
  javascript: {
    icon: <SiJavascript />,
    name: "JavaScript",
  },
  react: {
    icon: <SiReact />,
    name: "React",
  },
  node: {
    icon: <SiNodedotjs />,
    name: "Node",
  },
  mongo: {
    icon: <SiMongodb />,
    name: "MongoDB",
  },
  mysql: {
    icon: <SiMysql />,
    name: "MySQL",
  },
  redux: {
    icon: <SiRedux />,
    name: "Redux",
  },
  sass: {
    icon: <FaSass />,
    name: "Sass",
  },
  github: {
    icon: <SiGit />,
    name: "GitHub",
  },
  mui: {
    icon: <SiMui />,
    name: "Mui",
  },
  tailwind: {
    icon: <SiTailwindcss />,
    name: "Tailwind",
  },
  figma: {
    icon: <SiFigma />,
    name: "figma",
  },
};

export const PROJECTS = [
  {
    image: "/assets/whistleblow-admin.png",
    title: "Whistleblowing system",
    date: "2 Months",
    description: `A whistleblower application that allows anonymous
    submissions. Employees and HR people are target users.
    Employee reports and account data are encrypted and secured.
    Users can also post anonymously if they wish.`,
    tools: [
      "React.js",
      "Node.js",
      "MongoDB",
      "Redux toolkit",
      "Tailwind",
      "Nodemailer",
      "Bcrypt",
      "GridFs",
    ],
    url: "https://github.com/ryoosukesaito/Frontend-whistleblowing.git",
  },
  {
    image: "/assets/realtime-chat01.png",
    title: "Real Time Chat App",
    date: "1 week",
    description: `This web application is a chat application that reflects user activity in real-time.
    It shows messages sent and received, user login status, typing status, etc.
    It is my first full-stack project written using React and Node.
    It was a challenge for me to design a database that would separate chat groups for individual users and chat groups for all users.`,
    tools: [
      "React.js",
      "Node.js",
      "MongoDB",
      "Redux toolkit",
      "Tailwind",
      "Socket.io",
    ],
    url: "https://github.com/ryoosukesaito/Final-Node-MERN.git",
  },
  {
    image: "/assets/trello-clone-app.png",
    title: "Trello Clone App",
    date: "3days",
    description:
      "This is Todo App Implemented Authentication and attached Creator data into each ticket. New Account is creatable",
    tools: ["Typescript", "Tailwind", "Appwrite", "Zustand"],
    url: "https://github.com/ryoosukesaito/Trello-clone-app",
  },
  {
    image: "/assets/meal-ordering-app.png",
    title: "Meal ordering app",
    date: "Sep",
    description:
      "The application serves as an ordering platform for restaurants, catering to two distinct user groups: administrators and customers. Administrators possess the ability to oversee and manage the menu, while customers have the opportunity to make selections according to their preferences.",
    tools: [
      "Typescript",
      "Next.js",
      "firebase",
      "GraphQL",
      "Zustand",
      "Tailwind",
      "Cloudinary",
      "vercel",
      "render",
    ],
    url: "https://github.com/ryoosukesaito/Meal-ordering-app",
  },
  {
    image: "/assets/my_portfolio.png",
    title: "Portfolio",
    date: "May",
    description:
      "This is my portfolio, showcasing the projects I have worked on and my skills. This project is created using Next.js and designed in Figma.",
    tools: ["Next.js", "Tailwind"],
    url: "https://github.com/ryoosukesaito/portfolio.git",
  },
];

export const CONTACTS = [
  {
    icon: <FaGithub />,
    link: "https://github.com/ryoosukesaito",
  },
  {
    icon: <FaLinkedinIn />,
    link: "https://www.linkedin.com/in/ryosuke-saito-328967268/",
  },
  {
    icon: <FaFacebook />,
    link: "https://www.facebook.com/ryousuke.saito.18/",
  },
];
