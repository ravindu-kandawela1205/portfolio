import First from '../assets/Images/p1.jpg';
import Animted from '../assets/Images/p2.jpg';
import Prot from '../assets/Images/p3.png';

import {
  RiFacebookBoxFill,
  RiGithubFill,
  RiLinkedinFill,
} from "@remixicon/react";

export const navItems = [
  {
    id: 1,
    label: "Home",
    href: "#home",
  },
  {
    id: 2,
    label: "About me",
    href: "#about",
  },
  {
    id: 3,
    label: "Resume",
    href: "#resume",
  },
  {
    id: 4,
    label: "Projects",
    href: "#projects",
  },
  {
    id: 5,
    label: "Contact",
    href: "#contact",
  },
];

export const heroIcons = [
  {
    id: 1,
    icon: RiLinkedinFill,
    href:"https://www.linkedin.com/in/ravindu-kandawela-9a64552a5/"
  },
  {
    id: 2,
    icon: RiFacebookBoxFill,
    href:"https://www.facebook.com/ravindu.lakshan.7923030/"
  },
  {
    id: 3,
    icon: RiGithubFill,
    href:"https://github.com/ravindu-kandawela1205"
  },
];

export const aboutItems = [
  {
    id: 1,
    label: "React & Next.js development",
  },
  {
    id: 2,
    label: "TypeScript & JavaScript (ES6+)",
  },
  {
    id: 3,
    label: "Responsive design & CSS frameworks",
  },
  {
    id: 4,
    label: "API integration & state management",
  },
  {
    id: 5,
    label: "Performance optimization",
  },
];

export const ResumeItems = [
  {
    id: 1,
    title: "Experience",
    list: [
      {
        role: "ICT Technician",
        label: "Ceylon Electricity Board (CEB)",
        time: "2023-2024",
      },
      {
        label: "mycompany",
        role: "Software Developer",
        time: "2024-2025",
      }
    ],
  },
  {
    id: 2,
    title: "Education",
    list: [
      {
        label: "Vocational Training Authority",
        role: "ICT NVQ Level 4",
        time: "2023-2024",
      },
      {
        label: "Technical College Of Galle",
        role: "Software Developer (NVQ Level 5)",
        time: "2024-2025",
      },
    ],
  },
];

export const ProjectsItems = [
  {
    id: 1,
    title: "first-website",
    src: First,
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur temporibus asperiores, quia adipisci repellendus",
  },
  {
    id: 2,
    title: "Animated-website",
    src: Animted,
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur temporibus asperiores, quia adipisci repellendus",
  },
  {
    id: 3,
    title: "Porfolio",
    src: Prot,
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur temporibus asperiores, quia adipisci repellendus",
  },
  {
    id: 4,
    title: "Porfolio 4",
    src:"",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur temporibus asperiores, quia adipisci repellendus",
  },
];

export const contactItems = [
  {
    id: 1,
    label: "Email:",
    link: "ravindukandawela@gmail.com",
  },
  {
    id: 2,
    label: "Phone:",
    link: "+94714257207",
  },
  {
    id: 3,
    label: "Location:",
    link: "Polgaswatta, Henegama , Akuressa",
  },
];