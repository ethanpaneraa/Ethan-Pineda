import { LayoutTemplate, Server, Container } from "lucide-react";
import type { ExperienceItem } from "@/lib/data/experience";
import type { ProjectItem } from "@/lib/data/projects";
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

export const projectItems: ProjectItem[] = [
  {
    title: "Mayfest Productions Learning App",
    role: "Full Stack Developer",
    description:
      "A full-stack web app that allows for new members to the technology team of Mayfest Productions to learn about the organization and its technology stack.",
    achievements: [
      "Connected with Spotify API to display personalized playlists and userdata",
      "Created a reciept-like system for users to download an image to share their music taste on social media",
    ],
    technologies: ["Next.js", "Tailwind CSS", "shadcn/ui", "Spotify API"],
    href: "https://mayfest-learning-app.vercel.app/",
  },
  {
    title: "HomeHeart",
    role: "Full Stack Developer",
    description:
      "A telemedicine platform that connects immigrant patients to mental health specialists from their native countries.",
    achievements: [
      "Built a scalable telemedicine platform connecting immigrants with native-speaking mental health specialists",
      "Implemented secure video conferencing and scheduling features",
      "Developed machine learning algorithms for specialist matching",
    ],
    technologies: [
      "React",
      "Node.js",
      "Express",
      "PostgreSQL",
      "Python",
      "Flask",
      "Sci-kit Learn",
    ],
    href: "https://github.com/orgs/FTL-HomeHeart/repositories",
  },
];
