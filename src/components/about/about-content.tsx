import { ScrambleText } from "@/components/scramble-text";
import { TechnologiesSection } from "@/components/about/technologies-section";
import { ExperienceGrid } from "@/components/about/experience-grid";
import Link from "next/link";

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
            i&apos;m a first-generation mexican-american software engineer, born
            and raised in the west side of chicago. i am the first in my family
            to pursue a career in technology as a software engineer and many of
            the things that i have done in my life have been too pave the way
            for others like me.
            <br />
            <br />
            because of so, during my time as an undergraduate, i had the
            privilege of contributing to a wide range of projects, initiatives,
            and organizations that have had a a positive impact on the
            northwestern community. i do all of this in the hopes of empowering
            the next generation of underrepresented students in the technology
            industry and to give back to my community.
          </p>
          <p className="leading-relaxed animate-fade-in-up">
            i take great pride in my work and where i come from. and i carry
            that everywhere i go. my goal is that the work that i do will
            inspire others to pursue their passions, and to never give up on
            themselves, no matter the challenges they may face.
          </p>
          <p className="leading-relaxed animate-fade-in-up">
            if you or your organization is interested in collaborating with me,
            or you just want to talk to me,{" "}
            <Link
              href="https://cal.com/ethanpineda/30min"
              target="_blank"
              className="text-textAccent"
            >
              book a time with me
            </Link>
            . i am always open to talking to new people and learning about your
            story.
          </p>
          <p className="leading-relaxed animate-fade-in-up">
            you can find my contact information on this page and if you&apos;
            would like to learn more about my technical skills, you can continue
            to read below or checkout the{" "}
            <Link href="/projects" className="text-textAccent underine">
              things that i&apos;ve built
            </Link>
          </p>
        </div>
      </section>

      <TechnologiesSection />
      <ExperienceGrid />
    </main>
  );
}
