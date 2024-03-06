"use client";

import SectionHeader from "../../ui/SectionHeader";
import FadeInSection from "../FadeInSection/FadeInSection";
import GitHubIcon from '@mui/icons-material/GitHub';
import OpenInBrowserIcon from '@mui/icons-material/OpenInBrowser';

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
      title: "HomeHeart", 
      tech: ["React", "Node.js", "Express", "PostgresSQL", "Python", "Flask", "Sci-kit Learn"],
      github: "https://github.com/FTL-HomeHeart/Homeheart-Project", 
      external: "https://www.homeheart.org/",
      description: "A telemedicine platform that connects immigrant patients to mental health speciliast from their native countries. Built with Richmond Akondo and Nathnael Mekonnen.",
      image: "/HomeHeart.png"
    },
    {
      title: "Instagram Clone", 
      tech: ["Next.js (React)", "Tailwind CSS", "Node.js", "Express", "AWS"],
      github: "https://github.com/ethanpaneraa/comp-sci-310-final-project-instagram-clone", 
      external: "https://homeheartuiethan.onrender.com/",
      description: "A full-stack Instagram clone with user authentication, image uploading, and an image feed where users can like and comment on posts as well as follow other users.",
      image: "/InstagramClone.png"
    },
  {
      title: "Emerging Coders Website", 
      tech: ["Next.js (React)", "Tailwind CSS", "Node.js", "Express", "Supabase"],
      github: "https://github.com/Emerging-Coders-Repositories/Emerging-Coders-Website",
      external: "https://emerging-coders-website.vercel.app/",
      description: "The official website for the Emerging Coders student organization at Northwestern University.",
      image: "/EmergingCodersWebsite.png"
    },
    {
      title: "Chicago Crime Interactive Map", 
      tech: ["JavaScript", "HTML/CSS", "D3.js", "jQuery"],
      github: "https://github.com/ethanpaneraa/comp-sci-333-final",
      description: "An interactive map of Chicago crime data from 2012 - 2016 broken down by ward, crime type, and frequency. ",
      image: "/DataVisFinal.png"
    }, 
  ];

    
    return (
      <>
        <div id="projects" className="flex flex-col items-center justify-center text-paragraph-gray px-4 sm:px-6 lg:px-8 mx-auto mb-10 md:py-36">
          <FadeInSection delay={100}>
            <div className="text-left w-full max-w-screen-lg">
              <div className="text-left w-full">
                <SectionHeader title="things-i-built"/>
              </div>
                <div className="flex flex-col -m-4">
                  {myFeaturedProjects.map((project, index) => (
                    <div key={index} className="p-4 w-full xl:w-11/12">
                      <div className="h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left">
                        <div className="flex-shrink-0 w-full sm:w-48 sm:h-full h-64 relative mb-4 sm:mb-0">
                          <img src={project.image} alt={project.title} className="rounded-lg sm:w-48" />
                        </div>
                        <div className="flex-grow sm:pl-8">
                          <h2 className="title-font font-semibold text-lg text-orange">{project.title}</h2>
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
                                <GitHubIcon className="ml-2 w-5 h-5" />
                              </a>
                            )}
                            {project.external && (
                              <a href={project.external} className="ml-4 text-orange inline-flex items-center">
                                Visit
                                <OpenInBrowserIcon className="ml-2 h-6 w-6" />
                              </a>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
            </div>
          </FadeInSection>
        </div>
      </>
    );
  }