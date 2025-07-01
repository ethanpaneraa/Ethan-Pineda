import { ScrambleText } from "@/components/scramble-text";
import { MapPin, Building2 } from "lucide-react";
import { CodingStatusServer } from "@/components/coding-status";

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
          hey there, i&apos;m a current undergraduate senior at northwestern
          university, concurrently pursuing a bachelors and masters degree in
          computer science with a minor in latino and latina studies. after
          graduation, i will be working as a software engineer at salesforce in
          san francisco starting in september twenty-twenty-five. i will be
          contributing to the data cloud platform.
        </p>
        <p>
          my interest lie in distributed systems, embedded systems, and computer
          systems. more generally, i&apos;m interested in building performant,
          scalable, and reliable systems that can be used to solve real-world
          problems.
        </p>
      </div>
    </div>
  );
}
