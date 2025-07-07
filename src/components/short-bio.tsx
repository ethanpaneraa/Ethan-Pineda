import { ScrambleText } from "@/components/scramble-text";
import { MapPin, Building2 } from "lucide-react";
import { CodingStatusServer } from "@/components/coding-status";
import Link from "next/link";

export default function ShortBio() {
  return (
    <div className="space-y-3 md:space-y-4">
      <h1 className="text-xl sm:text-2xl md:text-4xl font-bold text-white animate-fade-in">
        <ScrambleText text="ethan pineda" />
      </h1>

      <div className="flex items-center gap-2">
        <MapPin className="h-3 w-3 md:h-4 md:w-4 flex-shrink-0" />
        <span className="text-sm sm:text-base">
          <ScrambleText text="evanston, illinois" />
        </span>
      </div>

      <div className="flex items-center gap-2">
        <Building2 className="h-3 w-3 md:h-4 md:w-4 flex-shrink-0" />
        <span className="text-sm sm:text-base">
          <ScrambleText text="incoming software engineer @ salesforce" />
        </span>
      </div>

      <div className="flex items-center gap-2">
        <CodingStatusServer />
      </div>

      <div className="text-xs sm:text-sm md:text-base space-y-4 leading-relaxed">
        <p>
          i&apos;m a software engineer and a recent graduate from northwestern
          university where i did my undergraduate studies in computer science
          and latino and latina studies. now, i work full time as a software
          engineer at salesforce data cloud. i have a huge passion for building
          software. many of the things that i build are open source are can be
          found in the{" "}
          <Link href="/projects" className="text-textAccent">
            projects page
          </Link>{" "}
          on my website.
        </p>
        <p>
          my interest in software engineering lie in distributed systems,
          embedded systems, and computer systems. more generally, i&apos;m
          interested in building performant, scalable, and reliable systems.
        </p>
        <p>
          if you&apos;d like to get in touch, ask me a question, or just to say
          hi, then you can find my contact info on the{" "}
          <Link href="about" className="text-textAccent">
            about page
          </Link>
        </p>
      </div>
    </div>
  );
}
