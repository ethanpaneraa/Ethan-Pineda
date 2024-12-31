import { ScrambleText } from "@/components/scramble-text";
import {
  Code2,
  Box,
  Server,
  Globe,
  LayoutTemplate,
  FileCode,
  Database,
  Container,
} from "lucide-react";
import { SectionList } from "@/components/section-list";

interface TechnologyCardProps {
  title: string;
  description: string;
  category: string;
  icon: React.ReactNode;
  link?: string;
}

function TechnologyCard({
  title,
  description,
  icon,
  link,
}: TechnologyCardProps) {
  const CardWrapper = ({ children }: { children: React.ReactNode }) => {
    if (link) {
      return (
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="block group border border-neutral-700 p-4 transition-colors hover:text-textAccent hover:border-neutral-600"
        >
          {children}
        </a>
      );
    }
    return (
      <div className="group border border-neutral-700 p-4 transition-colors hover:text-textAccent">
        {children}
      </div>
    );
  };

  return (
    <CardWrapper>
      <div className="flex items-start justify-between mb-2">
        <div>
          <h3 className="text-lg font-bold text-white group-hover:text-textAccent transition-colors">
            {title}
          </h3>
        </div>
        <div className="text-gray-400 group-hover:text-textAccent transition-colors">
          {icon}
        </div>
      </div>
      <div className="text-gray-300 space-y-0.5">
        {description.split(", ").map((tech, index) => (
          <div key={index} className="text-sm">
            <span className="text-xs">■</span> {tech.toLowerCase()}
          </div>
        ))}
      </div>
    </CardWrapper>
  );
}

const technologies = [
  {
    title: "frontend",
    description: "React, Next.js, TypeScript, JavaScript",
    icon: <LayoutTemplate size={20} />,
  },
  {
    title: "backend",
    description: "Python, Java, Rust, Go",
    icon: <Server size={20} />,
  },
  {
    title: "infra",
    description: "PostgreSQL, Redis, Docker, AWS",
    icon: <Container size={20} />,
  },
];

const workItems = [
  {
    title: "leapflow",
    role: "co-founder and cto",
    period: "may 2024 - present",
    description:
      "leading engineering to build ai agents for automating repetitive tasks in existing software",
    href: "https://leapflow.tech",
  },
  {
    title: "dimension",
    role: "full-stack engineer",
    period: "nov 2023 - jan 2024",
    description:
      "contributed to a large-scale t3 stack app. worked on real-time presence and chat features",
    href: "https://dimension.dev",
  },
];

const projectItems = [
  {
    title: "create-t3-app",
    role: "creator and maintainer",
    description:
      "open-source project for initializing full-stack next.js apps. 24k+ stars, 200+ contributors",
    href: "https://create.t3.gg",
  },
  {
    title: "mini-git",
    role: "creator",
    description: "simplified version of git from scratch",
    href: "https://github.com/nexxeln/mini-git",
  },
];

export default function AboutContent() {
  return (
    <div className="flex flex-col gap-16">
      <div className="space-y-6">
        <h1 className="text-4xl font-bold text-white mb-4 animate-fade-in">
          <span className="inline-block">
            <span className="text-textAccent mr-2">*</span>
            <ScrambleText text="about me" />
          </span>
        </h1>

        <div className="space-y-0">
          <p className="leading-relaxed animate-fade-in-up">
            during my undergraduate career, i have contributed to a large range
            of projects and initiatives that have had a positive impact on the
            northwestern community. i have developed tools to support student
            organizations, collaborated on research that combines technology and
            social good, and have served on the executive boards of groups such
            as emerging coders, develop and innovate for social change, and
            mayfest productions. in these roles, i have led efforts to create
            inclusive spaces and accessible opportunities for students in tech.
            these roles have allowed me to mentor underrepresented students,
            advocate for equity, and bring tech-driven solutions to campus-wide
            events.
          </p>
        </div>
      </div>

      <div className="space-y-0">
        <h2 className="text-2xl font-bold text-white animate-fade-in mb-4">
          technologies i work with
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 animate-fade-in-up">
          {technologies.map((tech) => (
            <TechnologyCard key={tech.title} {...tech} />
          ))}
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
        <SectionList
          title="work"
          items={workItems}
          viewAllHref="experience"
          viewAllText="all experiences"
        />
        <SectionList
          title="projects"
          items={projectItems}
          viewAllHref="/projects"
          viewAllText="all projects"
        />
      </div>
    </div>
  );
}
