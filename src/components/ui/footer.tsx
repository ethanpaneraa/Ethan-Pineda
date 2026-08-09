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
    <section className="editorial-footer">
      <div>
        <p>CONNECT</p>
        <nav>
            {socialLinks.map((link, index) => (
              <Link
                key={index}
                href={link.href}
              >
                {link.title}
              </Link>
            ))}
        </nav>
      </div>
    </section>
  );
}
