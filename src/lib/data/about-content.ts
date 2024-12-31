import { LayoutTemplate, Server, Container } from "lucide-react";
import type { ExperienceItem } from "@/lib/data/experience";
export const technologies = [
  {
    title: "frontend",
    description: "React, Next.js, TypeScript, JavaScript",
    icon: LayoutTemplate,
  },
  {
    title: "backend",
    description: "Python, Java, Rust, Go",
    icon: Server,
  },
  {
    title: "infra",
    description: "PostgreSQL, Redis, Docker, AWS",
    icon: Container,
  },
];

export const workItems: ExperienceItem[] = [
  {
    title: "Software Engineer Intern",
    organization: "Salesforce",
    role: "Data Cloud Intern",
    period: "June 2024 - September 2024",
    location: "San Francisco, CA",
    description:
      "Data Cloud Intern working on building and scaling data infrastructure solutions.",
    category: "work",
    href: "https://www.salesforce.com",
  },
  {
    title: "Full Stack Software Engineer Intern",
    organization: "Salesforce",
    role: "FTL Program Intern",
    period: "June 2023 - August 2023",
    location: "San Francisco, CA",
    description:
      "Selected for Salesforce's FTL Program, led a team to develop a Telemedicine application using React.js and Node.js, and conducted Agile sprints and standups.",
    category: "work",
    href: "https://www.salesforce.com",
  },
];

export const projectItems: ExperienceItem[] = [
  {
    title: "HomeHeart Telemedicine Platform",
    organization: "Salesforce",
    role: "FTL Program Intern",
    period: "June 2023 - August 2023",
    location: "San Francisco, CA",
    description:
      "Built a scalable telemedicine platform connecting immigrants with native-speaking mental health specialists.",
    category: "work",
    href: "https://github.com/orgs/FTL-HomeHeart/repositories",
  },
  {
    title: "Full-Stack Project Template",
    organization: "Develop & Innovate for Social Change",
    role: "Technical Lead",
    period: "May 2024 - Present",
    location: "Evanston, IL",
    description:
      "Developed a full-stack template for students to use in the DISCover program to build their client projects.",
    category: "work",
    href: "https://github.com/disc-template?tab=repositories",
  },
];
