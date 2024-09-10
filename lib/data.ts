import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { GoArchive } from "react-icons/go";
import branch from "@/public/branch.png";
import nextjsboard from "@/public/nextjsboard.png";
import pacman from "@/public/pacman.png";
import bearmaps from "@/public/bearmaps.png";
import git from "@/public/git.png";
import enigma from "@/public/enigma.png"
import algoverse from "@/public/algoverse.png"

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
] as const;

export const experiencesData = [
  {
    title: "Product Manager | Algoverse AI Research",
    location: "",
    description:
      "Currently building the next generation of AI Researchers through the Algoverse AI Research Program, a 12-week program for high school and college students to receive mentorship from PhD AI researchers at top universities.",
    icon: React.createElement(FaReact),
    date: "Apr. 2024 - Present",
  },
  {
    title: "Branch Metrics | Software Engineer Intern",
    location: "Palo Alto, CA",
    description:
      "Interned for a unicorn startup that powers mobile links and cross-platform measurement. I designed a full-stack application for tracking and enabling feature flag management across internal microservices.",
    icon: React.createElement(FaReact),
    date: "May 2023 – Aug. 2023",
  },
  {
    title: "RheoSense | Software Engineer Intern",
    location: "San Ramon, CA",
    description:
      "Interned for a biotech manufacturing company, where I built a diagnostic tool that parsed diagnostic logs to track product health. I also wrote scripts for automating data transfers between AWS and internal dashboards.  ",
    icon: React.createElement(GoArchive),
    date: "May 2022 - Aug. 2022",
  },
  {
    title: "Berkeley SkyDeck | Web Development Intern",
    location: "Berkeley, CA",
    description:
      "Interned for Berkeley's startup incubator, where I maintained their website and internal dashboards. I also developed web pages for their European cohort expansion campaign.",
    icon: React.createElement(GoArchive),
    date: "Apr. 2022 - Aug. 2022",
  },
  {
    title: "Converse | Contract Project Manager",
    location: "Remote",
    description:
      "A business consulting project I led in collaboration with Converse shoes to rebrand their Chuck 70s product line for millennial and Gen-Z consumers. Managing 9 analysts, we utilized Berkeley's market research databases to formulate actionable go-to-market strategies, addressing customer pain points, resulting in two successful deliverables with Converse’s upper management.",
    icon: React.createElement(CgWorkAlt),
    date: "Aug. 2019 - Dec. 2019",
  },
  {
    title: "Go Overseas | User Analytics Intern",
    location: "Berkeley, CA",
    description:
      "My first internship was at a travel agency startup. I utilized Google Analytics and Jupyter to collect data and research the impact of internal content marketing strategies on the website's search engine optimization.",
    icon: React.createElement(CgWorkAlt),
    date: "May 2019 - Aug. 2019",
  },
] as const;

export const projectsData = [
  {
    title: "Algoverse AI Research 🔎",
    description:
      "Website for Algoverse AI Research. <a href='https://algoverseairesearch.org/' target='_blank'>https://algoverseairesearch.org/</a>",
    tags: ["Next.js", "Tailwind", "Framer Motion", "Google Analytics"],
    imageUrl: algoverse,
    href: "https://algoverseairesearch.org/"
  },
  {
    title: "Financial Dashboard 📈",
    description:
      "A mock Financial dashboard built with assets provided by the Next.js Fullstack Course by Vercel. Includes Authentication, CRUD functionality, and optimized rendering.",
    tags: ["Next.js", "Tailwind", "PostgreSQL"],
    imageUrl: nextjsboard,
    href: "https://nextjs-dashboard-mhjsoal4q-davidzhu34s-projects.vercel.app/"
  },
  {
    title: "Flipper 🐬",
    description:
      "My Fullstack project at Branch. Flipper is an internal dashboard that manages internal microservices. Figma mockup: <a href='https://tinyurl.com/flipperproj' target='_blank'>tinyurl.com/flipperproj</a>",
    tags: ["React", "Express", "Axios", "Javascript", "Kubernetes"],
    imageUrl: branch,
    href: "https://tinyurl.com/flipperproj"
  },
  {
    title: "AI Pac-Man 🕹️",
    description:
      "An undergraduate project from CS188: Intro to AI. I created a bot for Pac-man that maximizes its score using an SAT solver.",
    tags: ["Python", "AI", "Machine Learning"],
    imageUrl: pacman,
  },
  {
    title: "Bearmaps 🗺️",
    description:
      "I created an interactive map of Berkeley, CA that routes the shortest path from point A to B, an undergrad project from CS61B: Data Structures.",
    tags: ["Java"],
    imageUrl: bearmaps,
  },
  {
    title: "Gitlet 🚀",
    description:
      "A simpler version of Linus Torvalds' Git system, built using Java, an undergrad project from CS61B: Data Structures.",
    tags: ["Java"],
    imageUrl: git,
    href: "https://github.com/DavidZhu34/Gitlet"
  },
  {
    title: "Enigma 🌐",
    description:
      "An application for encoding and decoding messages using the Enigma algorithms from World War II, an undergrad project from CS61B: Data Structures.",
    tags: ["Java"],
    imageUrl: enigma,
  },

] as const; 

export const skillsData = [
  
  "A/B Testing",
  "Google Analytics",
  "Data Visualization",
  "Attribution Marketing",
  "Cloudflare",
  "Python",
  "JavaScript/TypeScript",
  "Java",
  "SQL",
  "React",
  "Next.js",
  "Git",
  "Tailwind",
  "AWS",
  "Framer Motion",
  "Kubernetes",
] as const;
