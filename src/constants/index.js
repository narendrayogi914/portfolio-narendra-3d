import {
  backend,
  web,
  javascript,
  html,
  css,
  reactjs,
  tailwind,
  nodejs,
  mongodb,
  git,
  starbucks,
  shopify,
  jobit,
  tripguide,
  threejs,
  Netflix,
  Anydiscount,
  PortFolio,
  mobileApp,
  Server,
  Automation,
  Premad,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Mobile App Development ",
    icon: mobileApp,
  },
  {
    title: "Backend Development",
    icon: Server,
  },
  {
    title: "Automation Swervices using n8n",
    icon: Automation,
  },

  {
    title: "Web Development",
    icon: web,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },

  {
    name: "React JS",
    icon: reactjs,
  },

  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  // {
  //   name: "Three JS",
  //   icon: threejs,
  // },
  {
    name: "git",
    icon: git,
  },
];

const experiences = [
  {
    title: "React Native Developer",
    company_name: "Premad Software Solutions",
    icon: Premad,
    iconBg: "#FFFFFF",
    date: "January 2025 - Present",
    points: [
      "Developing and maintaining high-performance mobile applications using React Native and JavaScript (TypeScript).",
      "Collaborating with UI/UX designers and backend teams to build smooth, scalable, and user-friendly experiences.",
      "Implementing real-time features such as chat, notifications, and data synchronization using Firebase and WebSockets.",
      "Debugging, optimizing performance, and improving app reliability across Android and iOS platforms.",
      "Integrating REST APIs and third-party services like Razorpay, Google Fit, and Firebase for enhanced app functionality.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Kiyyex ",
    description: " Kiyyex – All-in-One Management App for PGs, Libraries & Gyms Kiyyex is a powerful, flexible management app designed for PG (Paying Guest) owners, Library managers, and Gym owners. Whether you run one location or multiple branches, Kiyyex helps you manage customers, staff, payments, and operations—all from your phone ",
    tags: [
      {
        name: "HTML",
        color: "blue-text-gradient",
      },
      {
        name: "CSS",
        color: "green-text-gradient",
      },
      {
        name: "JS",
        color: "pink-text-gradient",
      },
    ],
    image: PortFolio,
    source_code_link:
      "https://play.google.com/store/apps/details?id=com.kiyyex",
  },
  {
    name: " MError: Mental wellbeing ",
    description: "Discover Yourself with MError – Self-Awareness & Growth Ever felt lost, overwhelmed, or unsure about your emotions and decisions? MError helps you explore your mind, understand your emotions, and improve self-awareness—all in a fun and interactive way! ✨: Swipe-Based Personality & Self-Discovery Tests – Engage with assessments designed to uncover insights about your emotions, decision-making, confidence, and more.",
    tags: [
      {
        name: "HTML",
        color: "blue-text-gradient",
      },
      {
        name: "CSS",
        color: "green-text-gradient",
      },
      {
        name: "JS",
        color: "pink-text-gradient",
      },
    ],
    image: Netflix,
    source_code_link: "https://play.google.com/store/apps/details?id=com.merrorhealth",
  },
  {
    name: "AnyDiscount Website Clone ",
    description: "Clonnig the AnyDiscount Website Home Page UI",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: Anydiscount,
    source_code_link: "https://github.com/narendrayogi914/AnyDiscount-Clone",
  },
];

export { services, technologies, experiences, testimonials, projects };
