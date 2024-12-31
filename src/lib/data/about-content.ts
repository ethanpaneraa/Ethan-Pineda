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
    title: "Research: Safety-Based Wearable Technology",
    organization: "Ka moamoa Lab",
    role: "Research Assistant",
    period: "September 2023 - Present",
    location: "Evanston, IL",
    description:
      "Collaborated on safety-based wearable technology using machine learning for threat detection, developed a Flutter app for user alerts, and optimized processing for device efficiency.",
    category: "research",
    href: "https://kamoamoa.northwestern.edu",
  },
  {
    title: "Learning Analytics Platform",
    organization: "tiilt Lab",
    role: "Research Assistant",
    period: "March 2022 - Present",
    location: "Evanston, IL",
    description:
      "Worked with the BLINC project to improve a learning analytics platform for students and educators, spearheaded transition from Angular to React, and implemented new UI/UX features.",
    category: "research",
    href: "https://tiilt.northwestern.edu",
  },
];
