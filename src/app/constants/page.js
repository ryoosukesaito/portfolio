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
    date: "February 2023 to April 2023",
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
    image: "/assets/realtime-chat.png",
    title: "Real Time Chat App",
    date: "February",
    description: `Real-time Chat App using Socket.io.`,
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
