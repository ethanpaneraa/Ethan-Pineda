import { ExperienceCard } from "./experience-card";
import type { ExperienceItem } from "@/lib/data/experience";

interface ExperienceSectionProps {
  title: string;
  experiences: ExperienceItem[];
}

export function ExperienceSection({
  title,
  experiences,
}: ExperienceSectionProps) {
  return (
    <section>
      <h2 className="text-2xl font-bold text-white mb-8">{title}</h2>
      <div className="relative">
        {experiences.map((experience, index) => (
          <ExperienceCard
            key={`${experience.organization}-${index}`}
            {...experience}
          />
        ))}
      </div>
    </section>
  );
}
