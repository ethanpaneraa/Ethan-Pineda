import { technologies } from "@/lib/data/about-content";
import { TechnologyCard } from "./technology-card";

export function TechnologiesSection() {
  return (
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
  );
}
