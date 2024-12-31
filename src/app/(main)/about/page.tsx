import AboutContent from "@/components/about/about-content";
import { ProfileImage } from "@/components/about/project-image";
import { SocialLinks } from "@/components/about/social-links";
import { Item, SectionList } from "@/components/section-list";
const workItems: Item[] = [
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

export default function AboutPage() {
  return (
    <>
      <div className="flex flex-col lg:flex-row gap-16">
        <div className="flex-1">
          <AboutContent />
        </div>
        <div className="flex flex-col gap-8 w-full lg:w-auto">
          <ProfileImage />
          <SocialLinks />
        </div>
      </div>
    </>
  );
}
