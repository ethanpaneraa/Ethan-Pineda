import { ScrambleText } from "@/components/scramble-text";
import { MapPin, Building2 } from "lucide-react";

export default function ShortBio() {
  return (
    <div className="bg-neutral-900 border border-white p-8 max-w-2xl">
      <h1 className="text-4xl font-bold mb-4 text-white animate-fade-in">
        <ScrambleText text="ethan pineda" />
      </h1>
      <div className="flex items-center gap-2 text-md text-white mb-4">
        <MapPin className="h-4 w-4" />
        <ScrambleText text="evanston, illinois" />
      </div>
      <div className="flex items-center gap-2 text-md text-white mb-4">
        <Building2 className="h-4 w-4" />
        <ScrambleText text="incoming software engineer @ salesforce" />
      </div>
      <p className="text-sm text-white leading-relaxed">
        hey there, i&apos;m a current undergraduate senior at northwestern
        university, concurrently pursuing a bachelors and masters degree in
        computer science with a minor in latino and latina studies. i will
        working as a software engineer at salesforce in san francisco starting
        in september twenty-twenty-five. i will be contributing to the data
        cloud platform.
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
