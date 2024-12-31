import { Github, Linkedin, Mail, Instagram, Twitter } from "lucide-react";
import Link from "next/link";

interface SocialLink {
  href: string;
  icon: React.ComponentType<{ className: string }>;
  label: string;
  mobileLabel?: string;
}

const socialLinks: SocialLink[] = [
  {
    href: "https://www.instagram.com/ethanpinedaa/",
    icon: Instagram,
    label: "@ethanpinedaa",
    mobileLabel: "@ethanpinedaa",
  },
  {
    href: "https://x.com/EthanPaneraa",
    icon: Twitter,
    label: "@ethanpaneraa",
    mobileLabel: "@ethanpaneraa",
  },
  {
    href: "https://github.com/ethanpaneraa",
    icon: Github,
    label: "@ethanpaneraa",
    mobileLabel: "@ethanpaneraa",
  },
  {
    href: "https://www.linkedin.com/in/ethanpineda/",
    icon: Linkedin,
    label: "Ethan Pineda",
    mobileLabel: "Ethan Pineda",
  },
  {
    href: "mailto:ethanpineda2025@northwestern.edu",
    icon: Mail,
    label: "ethanpineda2025 [at] northwestern [dot] edu",
    mobileLabel: "Email",
  },
];

export function SocialLinks() {
  return (
    <div className="flex flex-wrap lg:flex-col gap-4 lg:gap-6 items-center lg:items-start">
      {socialLinks.map((link) => (
        <Link
          key={link.href}
          href={link.href}
          className="text-gray-400 hover:text-textAccent transition-colors flex items-center gap-2 min-w-fit"
        >
          <link.icon className="w-5 h-5" />
          <span className="hidden lg:inline text-sm">{link.label}</span>
          <span className="lg:hidden text-sm">{link.mobileLabel}</span>
        </Link>
      ))}
    </div>
  );
}
