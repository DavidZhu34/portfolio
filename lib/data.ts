import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { GoArchive } from "react-icons/go";
import branch from "@/public/branch.png";
import pacman from "@/public/pacman.png";
import bearmaps from "@/public/bearmaps.png";

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
    title: "Flipper 🐬",
    description:
      "My intern project at Branch Metrics. Flipper uses feature flags to enable and rollout microservices to consumers on a percentage basis. Figma mockup: tinyurl.com/flipperproj",
    tags: ["React", "Express", "Axios", "Emotion.css", "Kubernetes"],
    imageUrl: branch,
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
] as const; 

export const skillsData = [
  "Python",
  "Java",
  "C",
  "C#",
  "C++",
  "SQL",
  "Go",
  "Kotlin",
  "JavaScript",
  "TypeScript",
  "React",
  "HTML",
  "CSS",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "MongoDB",
  "Redux",
  "Express",
  "Angular",
  "Webpack",
  "PostgreSQL",
  "Firebase",
  "AWS",
  "Framer Motion",
] as const;
