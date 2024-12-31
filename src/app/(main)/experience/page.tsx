import { ScrambleText } from "@/components/scramble-text";
import { ExperienceSection } from "@/components/experience/experience-section";
import { workExperience, involvementExperience } from "@/lib/data/experience";

export default function ExperiencePage() {
  return (
    <main className="max-w-4xl mx-auto px-4 py-8">
      <div className="space-y-6 mb-16">
        <h1 className="text-4xl font-bold text-white animate-fade-in">
          <span className="inline-block">
            <span className="text-textAccent mr-2">*</span>
            <ScrambleText text="experience" />
          </span>
        </h1>
        <p className="text-gray-300 leading-relaxed animate-fade-in-up">
          here's a comprehensive look at my professional experience and campus
          involvement. i've had the opportunity to work with amazing teams and
          contribute to meaningful projects.
        </p>
      </div>

      <div className="space-y-16">
        <ExperienceSection
          title="work experience"
          experiences={workExperience}
        />
        <ExperienceSection
          title="campus involvement"
          experiences={involvementExperience}
        />
      </div>
    </main>
  );
}
