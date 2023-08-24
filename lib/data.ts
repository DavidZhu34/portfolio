import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { GoArchive } from "react-icons/go";

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
    name: "Skills",
    hash: "#skills",
  },
] as const;

export const experiencesData = [
  {
    title: "Branch Metrics | Platform Engineer Intern",
    location: "Palo Alto, CA",
    description:
      "Interned for a unicorn startup that powers mobile links and cross-platform measurement. I designed a full-stack application for tracking and enabling feature flag management across internal microservices. ",
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
    title: "Go Overseas | User Analytics Intern",
    location: "Berkeley, CA",
    description:
      "My first internship was at a travel agency startup. I utilized Google Analytics and Jupyter to collect data and research the impact of internal content marketing strategies on the website's search engine optimization.",
    icon: React.createElement(CgWorkAlt),
    date: "May 2020 - Aug. 2020",
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
