import Link from "next/link";
import { AgeCounter } from "@/components/age-counter";
import ASCIIBackground from "@/components/ascii-hero-background";
import { HomeKeyboardNavigation } from "@/components/home-keyboard-navigation";

const workLinks = [
  { href: "/experience", label: "experience" },
  { href: "/projects", label: "selected projects" },
  { href: "/tools", label: "tools I use" },
  { href: "https://ethanpinedaa.blog/", label: "writing" },
];

const socialLinks = [
  { href: "https://github.com/ethanpaneraa", label: "github" },
  { href: "https://www.linkedin.com/in/ethanpineda/", label: "linkedin" },
  { href: "mailto:ethanpineda2025@northwestern.edu", label: "email" },
];

export default function Home() {
  return (
    <main className="portfolio-home">
      <HomeKeyboardNavigation />
      <ASCIIBackground
        className="portfolio-ascii"
        renderHeightOffsetVw={7.5}
      />
      <header className="portfolio-hero" aria-labelledby="home-heading">
        <h1 id="home-heading">
          ethan is building
          <br />
          <Link href="https://www.salesforce.com/agentforce/">agentforce.</Link>
        </h1>
      </header>

      <section className="portfolio-content">
        <AgeCounter />
        <p className="portfolio-status">
          BASED IN SAN FRANCISCO, CALIFORNIA. SOFTWARE ENGINEER AT SALESFORCE
          DATA 360.
        </p>

        <footer className="portfolio-footer">
          <div>
            <p className="no-margins">
              <Link href="/about">MORE ABOUT ETHAN</Link>
            </p>
            <p className="no-margins">
              <Link href="/projects">VIEW PROJECTS</Link>
            </p>
          </div>

          <div>
            SELECTED WORK
            <ul className="portfolio-list portfolio-vertical-list">
              {workLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href}>{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>
        </footer>

        <footer className="portfolio-footer portfolio-socials">
          <div>
            <ul className="portfolio-horizontal-list">
              {socialLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href}>{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="no-margins">SAN FRANCISCO / CA</p>
          </div>
        </footer>
      </section>
    </main>
  );
}
