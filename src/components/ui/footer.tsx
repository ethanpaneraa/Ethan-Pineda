import Link from "next/link";

interface SocialLink {
  href: string;
  title: string;
}

const socialLinks: SocialLink[] = [
  {
    href: "https://www.instagram.com/ethanpinedaa/",
    title: "instagram",
  },
  {
    href: "https://x.com/EthanPaneraa",
    title: "twitter",
  },
  {
    href: "https://github.com/ethanpaneraa",
    title: "github",
  },
  {
    href: "https://www.linkedin.com/in/ethanpineda/",
    title: "linkedin",
  },
  {
    href: "mailto:ethanpineda2025@northwestern.edu",
    title: "email",
  },
];

export function Footer() {
  return (
    <section className="animate-fade-in-up max-w-5xl mx-auto py-8 md:py-12 px-4">
      <div className="border-t border-neutral-700 pt-8 md:pt-12">
        <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-6 md:gap-0">
          <h2 className="text-xl md:text-2xl font-bold flex items-center text-white">
            <span className="text-textAccent mr-2">*</span> links
          </h2>
          <nav className="flex flex-wrap gap-6 text-sm">
            {socialLinks.map((link, index) => (
              <Link
                key={index}
                href={link.href}
                className="text-gray-400 hover:text-textAccent transition-colors duration-200"
              >
                {link.title}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </section>
  );
}
