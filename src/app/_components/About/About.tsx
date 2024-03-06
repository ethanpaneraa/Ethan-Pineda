"use client";
import FadeInSection from "../FadeInSection/FadeInSection";
import SectionHeader from "../../ui/SectionHeader";
export default function About() {
    const myTechStack: string[] = [
        "TypeScript",
        "React",
        "Node.js",
        "Express",
        "Next.js",
        "Python",
    ];

    return (
        <div className="flex flex-col items-center justify-center  text-paragraph-gray px-4 sm:px-6 lg:px-8 max-w-screen-xl mx-auto mt-10 mb-10">
            <FadeInSection delay={100}>
                <div className="text-left w-full">
                    <SectionHeader title="about-me" />
                </div>
                <div className="mt-5 w-full flex flex-col md:flex-row justify-center items-center md:items-start text-md">
                    <div className="w-full mb-6 md:mb-0 md:pr-4 lg:pr-8">
                        <p className="mb-4">I am currently a third-year at
                            <a href="https://www.northwestern.edu/about/" target="_blank" className="text-orange font-semibold">
                                {" "}Northwestern University
                            </a>
                            {" "}where I am pursuing my Bachelors of Arts in {""}
                            <strong className="text-orange">Computer Science</strong> with minors in <strong className="text-orange font-semibold">Data Science</strong> and <strong className="text-orange font-semibold">Latino/Latina Studies</strong>.
                        </p>
                        <p className="mb-4">
                            After my studies, I hope to work as a <strong className="text-orange font-semibold">Full-Stack Software Engineer</strong> with a focus on building scalable, performant, and user-friendly applications.
                        </p>
                        <p className="mb-4">
                            At Northwestern, I&apos;ve had the privilege of working with various research groups and professors, I also serve on the executive board of multiple different student organizations that are aimed at enhancing diversity and inclusion in tech, and interned at amazing companies, including <a className="text-orange font-semibold">Salesforce</a>, where I was a Software Engineer Intern and will be returning to for the summer of 2024!
                        </p>
                        <div className="text-left mb-5">
                            <p>Here are a few technologies I have been working with recently:</p>
                            <ul className="list-none grid grid-cols-2 gap-5 pt-5 lg:place-items-start max-w-xs">
                            {myTechStack.map((tech, index) => (
                                <FadeInSection key={index} delay={(index + 1) * 100}>
                                    <li className="relative pl-5 text-base text-paragraph-gray before:content-['▹'] before:absolute before:text-orange before:left-0 text-left">
                                        {tech}
                                    </li>
                                </FadeInSection>
                            ))}
                        </ul>
                        </div>
                        <p className="mb-5 pt-5">
                            Outside of coding and school, I enjoy biking around Chicago, reading, trying new restaurants, and spending time with friends and family. Most importantly to me, you&apos;ll find me mentoring and supporting underrepresented students in tech, as well as working with non-profits.
                        </p>
                    </div>
                    <div className="flex justify-center lg:pl-10 mb-6 md:mb-0">
                        <img src="/yo.jpeg" className="max-w-xs md:max-w-18 h-auto rounded-lg shadow-lg border-none hover:translate-y-[-7px] transition duration-300"/>
                    </div>
                </div>
            </FadeInSection>
        </div>
    );
}
