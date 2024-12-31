import { Github, Linkedin, Mail, Instagram, Twitter } from "lucide-react";
import Link from "next/link";

interface SocialLink {
  href: string;
  icon: React.ComponentType<{ className: string }>;
  label: string;
}

const socialLinks: SocialLink[] = [
  {
    href: "https://www.instagram.com/ethanpinedaa/",
    icon: Instagram,
    label: "@ethanpinedaa",
  },
  {
    href: "https://x.com/EthanPaneraa",
    icon: Twitter,
    label: "@ethanpaneraa",
  },
  {
    href: "https://github.com/ethanpaneraa",
    icon: Github,
    label: "@ethanpaneraa",
  },
  {
    href: "https://www.linkedin.com/in/ethanpineda/",
    icon: Linkedin,
    label: "Ethan Pineda",
  },
  {
    href: "mailto:ethanpineda2025@northwestern.edu",
    icon: Mail,
    label: "ethanpineda2025 [at] northwestern [dot] edu",
  },
];

export function SocialLinks() {
  return (
    <div className="flex lg:flex-col gap-6 items-center lg:items-start">
      {socialLinks.map((link) => (
        <Link
          key={link.href}
          href={link.href}
          className="text-gray-400 hover:text-textAccent transition-colors flex items-center gap-2"
        >
          <link.icon className="w-5 h-5" />
          <span className="text-sm">{link.label}</span>
        </Link>
      ))}
    </div>
  );
}
