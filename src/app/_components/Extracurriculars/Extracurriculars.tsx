"use client"; 

import SectionHeader from "../ui/SectionHeader";
import FadeInSection from "../FadeInSection/FadeInSection";

interface ExtracurricularObject {
    organization: string;
    position: string;
    duration: string;
    link: string; 
    description: string; // Changed from Array<string> to string
};

export default function Extracurriculars() {

    const myExtracurriculars: Array<ExtracurricularObject> = [
        {
            organization: "Emerging Coders", 
            position: "Webmaster",
            duration: "September 2022 - Present", 
            link: "https://emerging-coders-website.vercel.app/", 
            description: "As the Webmaster, I developed and maintained our organization's website with Next.js and Tailwind CSS, led technical workshops, mentored over 50 students, and collaborated on events with sponsors.",
        },
        {
            organization: "The Society of Hispanic Professional Engineers (SHPE)",
            position: "MentorSHPE Chair", 
            duration: "March 2022 - Present", 
            link: "https://www.instagram.com/shpe_nu/", 
            description: "Directed the mentorship program for 75 Latine/Latinx engineering majors, boosting participation by 30% and organizing senior panels to enhance career readiness.",
        },
        {
            organization: "ColorStack at Northwestern", 
            position: "Founder and Treasurer",
            duration: "May 2023 - Present",
            link: "https://www.instagram.com/colorstacknu/", 
            description: "As Founder and Treasurer, I've helped to secure over $3,000 in funding and managed finances with a focus on corporate sponsorships to support our initiatives, visions, and goals.",
        },
        {
            organization: "Alianza - The Latinx Student Alliance",
            position: "Historian", 
            duration: "March 2022 - March 2023", 
            link: "https://www.instagram.com/nu_alianza/",
            description: "Recorded and maintained historical accounts of Alianza's events and Latinx history at Northwestern, involving extensive documentation and social media engagement.",
        },
    ];
    
    return (
        <>
            <div className="flex flex-col items-center justify-center min-h-screen text-paragraph-gray px-4 sm:px-6 lg:px-8 max-w-screen-xl mx-auto mb-10 mt-36">
                <FadeInSection delay={100}>
                    <div className="text-left w-full">
                        <SectionHeader title="my-involvement" />
                    </div>
                    <ol className="relative border-s border-paragraph-gray dark:border-paragraph-gray">
                        {myExtracurriculars.map((activity, index) => (
                            <li key={index} className="mb-10 ml-4 w-md">
                                <div className="absolute w-3 h-3 bg-paragraph-gray rounded mt-1.5 -start-1.5 border border-orange dark:orange dark:bg-orange"></div>
                                <div className="w-full sm:w-full md:w-5/6 lg:w-5/6 xl:w-5/6">
                                    <time className="mb-1 text-sm font-normal leading-none text-paragraph-gray dark:text-paragraph-gray">{activity.duration}</time>
                                    <a href={activity.link} target="_blank"><h3 className="text-2xl font-bold text-orange">{activity.organization}</h3></a>
                                    <h4 className="mb-1 text-lg font-medium text-paragraph-gray dark:text-paragraph-gray">{activity.position}</h4>
                                    <div className="mb-4">
                                        <span className="text-orange mr-2">▹</span>
                                        <span className="text-base font-normal text-paragraph-gray dark:text-paragraph-gray">{activity.description}</span>
                                    </div>
                                </div>
                            </li>
                        ))}
                    </ol>
                </FadeInSection>
            </div>
        </>
    );
};