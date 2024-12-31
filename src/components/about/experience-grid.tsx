import { SectionList } from "@/components/section-list";
import { workItems, projectItems } from "@/lib/data/about-content";

export function ExperienceGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
      <SectionList
        title="work"
        items={workItems}
        viewAllHref="/experience"
        viewAllText="all experiences"
      />
      <SectionList
        title="projects"
        items={projectItems}
        viewAllHref="/projects"
        viewAllText="all projects"
      />
    </div>
  );
}
