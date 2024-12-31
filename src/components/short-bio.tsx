import { ScrambleText } from "@/components/scramble-text";
import { MapPin, Building2 } from "lucide-react";

export default function ShortBio() {
  return (
    <div>
      <h1 className="text-2xl md:text-4xl font-bold mb-4 text-white animate-fade-in">
        <ScrambleText text="ethan pineda" />
      </h1>
      <div className="flex items-center gap-2 mb-4">
        <MapPin className="h-3 w-3 md:h-4 md:w-4" />
        <ScrambleText text="evanston, illinois" />
      </div>
      <div className="flex items-center gap-2 mb-4">
        <Building2 className="h-3 w-3 md:h-4 md:w-4" />
        <ScrambleText text="incoming software engineer @ salesforce" />
      </div>
      <p className="text-sm md:text-base leading-relaxed">
        hey there, i&apos;m a current undergraduate senior at northwestern
        university, concurrently pursuing a bachelors and masters degree in
        computer science with a minor in latino and latina studies. after
        graduation, i will be working as a software engineer at salesforce in
        san francisco starting in september twenty-twenty-five. i will be
        contributing to the data cloud platform.
        <br />
        <br />
        my interest lie in distributed systems, embedded systems, and computer
        systems. more generally, i&apos;m interested in building performant,
        scalable, and reliable systems that can be used to solve real-world
        problems.
      </p>
    </div>
  );
}
