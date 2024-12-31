import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import type { ExperienceItem } from "@/lib/data/experience";

export function ExperienceCard({
  title,
  organization,
  role,
  period,
  location,
  description,
  href,
}: ExperienceItem) {
  return (
    <div className="group relative border-l border-neutral-700 pl-6 pb-8">
      <div className="absolute w-3 h-3 bg-textAccent -left-[6px] top-2 transition-all group-hover:scale-110" />

      <div className="space-y-2">
        <div className="flex items-start justify-between">
          <div>
            <h3 className="text-lg font-bold text-white group-hover:text-textAccent transition-colors">
              {title}
            </h3>
            <p className="text-base text-gray-300">{organization}</p>
          </div>
          {href && (
            <Link
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-textAccent transition-colors"
            >
              <ArrowUpRight className="w-5 h-5" />
            </Link>
          )}
        </div>

        <div className="flex flex-wrap gap-x-4 text-sm text-gray-400">
          <span>{role}</span>
          <span>•</span>
          <span>{period}</span>
          <span>•</span>
          <span>{location}</span>
        </div>

        <p className="text-gray-300 text-sm leading-relaxed">{description}</p>
      </div>
    </div>
  );
}
