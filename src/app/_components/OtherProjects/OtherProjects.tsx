"use client"; 

import FadeInSection from "../FadeInSection/FadeInSection";
import SectionHeader from "../../ui/SectionHeader";
import GitHubIcon from '@mui/icons-material/GitHub';
import OpenInBrowserIcon from '@mui/icons-material/OpenInBrowser';

interface Project {
    title: string; 
    tech: string[]; 
    github?: string; 
    external?: string; 
    description: string;
};

export default function OtherProjects() {

    const myOtherProjects: Array<Project> = [
        {
            title: "Audio Heads", 
            tech: ["React", "Vite", "Supabase"], 
            github: "https://github.com/ethanpaneraa/audio-heads", 
            external: "https://ethanpaneraa.github.io/audio-heads/",
            description: "A simple web app that allows users to make posts and comments, and share their opinions on music. Final project for CodePath Web 102 course.",
        }, 
        {
            title: "EMCO Website Documentation",
            tech: ["Next.js (React)", "Tailwind CSS", "MDX"],
            github: "https://github.com/Emerging-Coders-Repositories/emerging-coders-website-documentation",
            external: "https://emerging-coders-website-documentation-fxxzuu0t6-ethanpaneraa.vercel.app/", 
            description: "Documentation for the Emerging Coders Website. ",
        },
        {
            title: "Ruta Health",
            tech: ["React", "HTML/CSS"], 
            github: "https://github.com/ethanpaneraa/Ruta-Health",
            external: "https://ethanpaneraa.github.io/Ruta-Health/", 
            description: "A landing page for Ruta Health, a startup that allows patients to ask questions to doctors in a similar modeality to Reddit or Quora.",
        },
        {
            title: "Terrenos", 
            tech: ["C#", "Unity"],
            github: "https://github.com/ethanpaneraa/Terrenos", 
            external: "", 
            description: "A 2D hybird between popular games Minecraft and Terria mixed with RPG game elements. Built with Antonio Rocha and Arturo Fonseca", 
        },
        {
            title: "Unity Flight Simulator", 
            tech: ["C#", "Unity"],
            github: "https://github.com/ethanpaneraa/Unity-Flight-Sim", 
            external: "", 
            description: "Realistic Unity flight simulator, playable with keyboard/controllers",
        }, 
        {
            title: "Naive Bayes Classifier",
            tech: ["Python", "NumPy", "Sci-kit Learn"],
            github: "", 
            external: "",
            description: "A simple Naive Bayes Classifier built from scratch to classify emails as spam or not spam.  ",
        },
    ];

    return (
        <>
        <div className="flex flex-col items-center justify-center text-paragraph-gray px-4 sm:px-6 lg:px-8 mx-auto mt-10 mb-10 md:py-36">
            <FadeInSection delay={100}>
                <div className="text-left w-full max-w-screen-lg">
                    <div className="text-left w-full">
                        <SectionHeader title="other-projects"/>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                    {myOtherProjects.map((project, index) => (
                    <div key={index} className="flex flex-col bg-card-background rounded-lg shadow-md overflow-hidden transform transition-all hover:-translate-y-2 duration-300 p-6">
                        <div className="flex justify-between items-start mb-4">
                            <h3 className="text-xl font-bold text-orange">{project.title}</h3>
                            <div className="flex items-center gap-2">
                                {project.github && (
                                    <a
                                        href={project.github}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-paragraph-gray"
                                    >
                                        <GitHubIcon className="h-6 w-6 text-paragraph-gray" />
                                    </a>
                                )}
                                {project.external && (
                                    <a
                                        href={project.external}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-paragraph-gray"
                                    >
                                        <OpenInBrowserIcon className="h-6 w-6 text-paragraph-gray" />
                                    </a>
                                )}
                            </div>
                        </div>
                        <p className="mt-2 text-base text-paragraph-gray">{project.description}</p>
                        <ul className="mt-4">
                            {project.tech.map((technology, techIndex) => (
                                <li key={techIndex} className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{technology}</li>
                                ))}
                        </ul>
                    </div>
                        ))}

                    </div>
                </div>
            </FadeInSection>
        </div>
    </>
    );
};