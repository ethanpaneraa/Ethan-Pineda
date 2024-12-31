import { ScrambleText } from "@/components/scramble-text";
import { TechnologiesSection } from "@/components/about/technologies-section";
import { ExperienceGrid } from "@/components/about/experience-grid";

export default function AboutContent() {
  return (
    <main className="flex flex-col gap-16">
      <section className="space-y-6">
        <h1 className="text-4xl font-bold text-white mb-4 animate-fade-in">
          <span className="inline-block">
            <span className="text-textAccent mr-2">*</span>
            <ScrambleText text="about me" />
          </span>
        </h1>

        <div className="space-y-4">
          <p className="leading-relaxed animate-fade-in-up">
            during my undergraduate career, i have contributed to a large range
            of projects and initiatives that have had a positive impact on the
            northwestern community. i have developed tools to support student
            organizations, collaborated on research that combines technology and
            social good, and have served on the executive boards of groups such
            as emerging coders, develop and innovate for social change, and
            mayfest productions.
          </p>
        </div>
      </section>

      <TechnologiesSection />
      <ExperienceGrid />
    </main>
  );
}
