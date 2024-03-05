"use client";

import SectionHeader from "../ui/SectionHeader";
import FadeInSection from "../FadeInSection/FadeInSection";
import { useRef } from "react";

interface Project {
  title: string;
  tech: string[];
  github?: string;
  external?: string;
  description: string;
  image: string;
}

export default function FeaturedProjects() {
    const myFeaturedProjects: Array<Project>= [
        {
            title: "Instagram Clone", 
            tech: ["Next.js (React)", "Tailwind CSS", "Node.js", "Express", "AWS"],
            github: "https://github.com/ethanpaneraa/comp-sci-310-final-project-instagram-clone", 
            external: "https://www.youtube.com/watch?v=RQouj55P76w",
            description: "A full-stack Instagram clone with user authentication, image uploading, and image feed.",
            image: "/InstagramClone.png"
        },
        {
            title: "Emerging Coders Website", 
            tech: ["Next.js (React)", "Tailwind CSS", "Node.js", "Express", "Supabase"],
            github: "https://github.com/Emerging-Coders-Repositories/Emerging-Coders-Website",
            external: "https://emerging-coders-website.vercel.app/",
            description: "The official website for the Emerging Coders student organization at Northwestern University. ",
            image: "/EmergingCodersWebsite.png"
        },
        {
          title: "Chicago Crime Interactive Map", 
          tech: ["JavaScript", "HTML/CSS", "D3.js", "jQuery"],
          github: "https://github.com/ethanpaneraa/comp-sci-333-final",
          description: "An interactive map of Chicago crime data from 2012 - 2016 broken down by ward, crime type, and frequency. ",
          image: "/DataVisFinal.png"
        }, 
        {
          title: "Terrenos", 
          tech: ["C#", "Unity"],
          github: "https://github.com/ethanpaneraa/Terrenos", 
          external: "", 
          description: "A 2D hybird between popular games Minecraft and Terria mixed with RPG game elements. Built with Antonio Rocha and Arturo Fonseca", 
          image: "/Terrenos.png"
        },
    ];

    
    return (
      <>
        <div className="flex flex-col items-center justify-center min-h-screen text-paragraph-gray px-4 sm:px-6 lg:px-8 max-w-screen-xl mx-auto">
          <FadeInSection delay={100}>
            <div className="text-left w-full">
              <SectionHeader title="things-i-built"/>
            </div>
              <div className="flex flex-col -m-4">
                {myFeaturedProjects.map((project, index) => (
                  <div key={index} className="p-4 sm:w-full md:w-5/6 lg:w-5/6 xl:w-5/6">
                    <div className="h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left">
                      <div className="flex-shrink-0 w-full sm:w-48 sm:h-full h-64 relative mb-4 sm:mb-0">
                        <img src={project.image} alt={project.title} className="rounded-lg sm:w-48" />
                      </div>
                      <div className="flex-grow sm:pl-8">
                        <h2 className="title-font font-medium text-lg text-orange">{project.title}</h2>
                        <p className="mb-2">{project.description}</p>
                        <div className="flex-wrap mb-4">
                          {project.tech.map((tech, i) => (
                            <span key={i} className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{tech}</span>
                          ))}
                        </div>
                        <div className="flex justify-center sm:justify-start items-center">
                          {project.github && (
                            <a href={project.github} className="text-orange inline-flex items-center md:mb-2 lg:mb-0">
                              GitHub
                              <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                                <path d="M5 12h14M12 5l7 7-7 7"></path>
                              </svg>
                            </a>
                          )}
                          {project.external && (
                            <a href={project.external} className="ml-4 text-orange inline-flex items-center">
                              Visit
                              <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                                <path d="M5 12h14M12 5l7 7-7 7"></path>
                              </svg>
                            </a>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
          </FadeInSection>
        </div>
      </>
    );
  }