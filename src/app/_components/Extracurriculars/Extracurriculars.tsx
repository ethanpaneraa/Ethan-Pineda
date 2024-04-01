"use client"; 

import SectionHeader from "../../ui/SectionHeader";
import FadeInSection from "../FadeInSection/FadeInSection";

interface ExtracurricularObject {
    organization: string;
    position: string;
    duration: string;
    location: string; 
    link: string; 
    description: string;
};

export default function Extracurriculars() {

    const myExtracurriculars: Array<ExtracurricularObject> = [
        {
            organization: "Develop and Innovate for Social Change (DISC)",
            position: "Technical Lead", 
            duration: "March 2024 - Present", 
            location: "Evanston, IL", 
            link: "https://www.instagram.com/disc_nu/",
            description: "Organize Fall Workshops and Studios during Winter and Spring, bringing specialized knowledge in software development for guidance and mentorship of project teams.", 
        },
        {
            organization: "Emerging Coders", 
            position: "Webmaster",
            duration: "September 2022 - Present", 
            location: "Evanston, IL",
            link: "https://emerging-coders-website.vercel.app/", 
            description: "Developed and maintained our organization's website with Next.js and Tailwind CSS, led technical workshops, mentored over 50 students, and collaborated on events with sponsors.",
        },
        {
            organization: "The Society of Hispanic Professional Engineers (SHPE)",
            position: "MentorSHPE Chair", 
            duration: "March 2022 - March 2024", 
            location: "Evanston, IL",
            link: "https://www.instagram.com/shpe_nu/", 
            description: "Directed the mentorship program for 75 Latine/Latinx engineering majors, boosting participation by 30% and organizing senior panels to enhance career readiness.",
        },
        {
            organization: "ColorStack at Northwestern", 
            position: "Founder and Treasurer",
            duration: "May 2023 - Present",
            location: "Evanston, IL",
            link: "https://www.instagram.com/colorstacknu/", 
            description: "As Founder and Treasurer, I've helped to secure over $3,000 in funding and managed finances with a focus on corporate sponsorships to support our initiatives, visions, and goals.",
        },
        {
            organization: "Alianza - The Latinx Student Alliance",
            position: "Historian", 
            duration: "March 2022 - March 2023", 
            location: "Evanston, IL",
            link: "https://www.instagram.com/nu_alianza/",
            description: "Recorded and maintained historical accounts of Alianza's events and Latinx history at Northwestern, involving extensive documentation and social media engagement.",
        },
    ];
    
    return (
        <>
            <div id="organizations" className="flex flex-col items-center justify-center  text-paragraph-gray px-4 sm:px-6 lg:px-8 mx-auto mb-10 md:py-36">
                <FadeInSection delay={100}>
                    <div className="text-left w-full max-w-screen-md">
                        <div className="text-left w-full">
                            <SectionHeader title="my-involvement" />
                        </div>
                        <ol className="mx-auto">
                            {myExtracurriculars.map((org, index) => (
                                <li key={index} className="mb-10 flex">
                                    {/* <time className="flex-shrink-0 w-1/3 md:w-1/4 text-left md:text-right text-md font-normal text-gray-500 pr-4">{experience.duration}</time> */}
                                    <div className="flex-shrink-0  flex-col w-1/3 md:w-1/4 text-left md:text-right text-md font-normal text-paragraph-gray pr-4">
                                        {/* <div className="w-3 h-3 bg-gray-500 rounded-full -left-1.5 top-1.5 border border-gray-300"></div> */}
                                        <div className="flex flex-col text-sm">
                                            <time className="text-left md:text-right mb-2">{org.duration}</time>
                                            <span>{org.location}</span>
                                        </div>
                                    </div>
                                    <div className="relative flex-grow border-l border-dashed border-bg-gray pl-4">
                                        {/* <div className="absolute w-3 h-3 bg-orange rounded -left-1.5 top-1.5 border border-orange"></div> */}
                                        <div className="pl-4">
                                            <a href={org.link} target="_blank" rel="noopener noreferrer">
                                                <h3 className="text-xl font-bold text-orange">{org.organization}</h3>
                                            </a>
                                            <h4 className="mb-1 text-lg font-medium text-paragraph-gray">{org.position}</h4>
                                            <p className="text-base font-normal text-paragraph-gray">{org.description}</p>
                                        </div>
                                    </div>
                                </li>
                            ))}
                        </ol>
                    </div>
                </FadeInSection>
            </div>
        </>
    );
};