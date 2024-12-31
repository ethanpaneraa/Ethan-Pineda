import { ScrambleText } from "@/components/scramble-text";
import Image from "next/image";
import Link from "next/link";
import { Github, Linkedin, Mail, Instagram, Twitter } from "lucide-react";

export default function AboutPage() {
  return (
    <div className="flex flex-col lg:flex-row gap-16 items-start">
      <div className="flex-1 space-y-8">
        <h1 className="text-4xl font-bold text-white mb-4 animate-fade-in">
          <span className="inline-block">
            <ScrambleText text="about me" />
          </span>
        </h1>

        <div className="space-y-4">
          <p className="leading-relaxed animate-fade-in-up">
            i&apos;m a senior at northwestern university pursuing a b.a/m.s in
            computer science with a minor in latino and latina studies. my work
            and interest focuses on building technical systems that can scale,
            are reliable, and exploring the role of technology in fostering
            inclusion and community impact. i am also passionate about education
            in the technology space.
          </p>
          <p className="leading-relaxed animate-fade-in-up">
            during my undergraduate career, i have contributed to a large range
            of projects and initiatives that have had a positive impact on the
            northwestern community. i have developed tools to support student
            organizations, collaborated on research that combines technology and
            social good, and have served on the executive boards of groups such
            as emerging coders, develop and innovate for social change, and
            mayfest productions. in these roles, i have led efforts to create
            inclusive spaces and accessible opportunities for students in tech.
            these roles have allowed me to mentor underrepresented students,
            advocate for equity, and bring tech-driven solutions to campus-wide
            events.
            <br />
            <br />i have also been a undergraduate teaching assistant for over
            one-thousand students in the northwestern department of computer
            science. i have also been a tech-fellow for the codepath
            organization, where i have worked with over three-hundred students
            in web development and technical-interview preparation.
            <br />
            <br />
            education is a passion of mine, and i hope to empower students to
            pursue technical careers and to make a positive impact in the world.
          </p>
          <p className="leading-relaxed animate-fade-in-up">
            when i&apos;m not working, i enjoy exploring my home city, chicago.
            i also reading books on technology, self-improvement, and latine
            literature that examines themes of immigration, policing, and
            advocacy, especially as they relate to the chicago experience.
          </p>
        </div>
      </div>

      <div className="flex flex-col gap-8 w-full lg:w-auto">
        <div className="aspect-square w-full lg:w-[500px] relative rounded-xl overflow-hidden">
          <Image
            src="/me-dithered-image.png"
            alt="Profile picture"
            fill
            quality={100}
            sizes="(max-width: 768px) 100vw, 500px"
            className="object-cover"
            priority
          />
        </div>

        <div className="flex lg:flex-col gap-6 items-center lg:items-start">
          <Link
            href="https://www.instagram.com/ethanpinedaa/"
            className="text-gray-400 hover:text-textAccent transition-colors flex items-center gap-2"
          >
            <Instagram className="w-5 h-5" />
            <span className="text-sm">@ethanpinedaa</span>
          </Link>
          <Link
            href="https://x.com/EthanPaneraa"
            className="text-gray-400 hover:text-textAccent transition-colors flex items-center gap-2"
          >
            <Twitter className="w-5 h-5" />
            <span className="text-sm">@ethanpaneraa</span>
          </Link>
          <Link
            href="https://github.com/ethanpaneraa"
            className="text-gray-400 hover:text-textAccent transition-colors flex items-center gap-2"
          >
            <Github className="w-5 h-5" />
            <span className="text-sm">@ethanpaneraa</span>
          </Link>
          <Link
            href="https://www.linkedin.com/in/ethanpineda/"
            className="text-gray-400 hover:text-textAccent transition-colors flex items-center gap-2"
          >
            <Linkedin className="w-5 h-5" />
            <span className="text-sm">Ethan Pineda</span>
          </Link>
          <Link
            href="mailto:ethanpineda2025@northwestern.edu"
            className="text-gray-400 hover:text-textAccent transition-colors flex items-center gap-2"
          >
            <Mail className="w-5 h-5" />
            <span className="text-sm">
              ethanpineda2025 [at] northwestern [dot] edu
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
}
