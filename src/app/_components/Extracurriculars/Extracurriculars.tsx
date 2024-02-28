"use client"; 

import SectionHeader from "../ui/SectionHeader";
import FadeInSection from "../FadeInSection/FadeInSection";

interface ExtracurricularObject {
    organization: string;
    position: string;
    duration: string;
    link: string; 
    description: Array<string>;
};

export default function Extracurriculars() {

    const myExtracurriculars: Array<ExtracurricularObject> = [
        {
            organization: "Emerging Coders", 
            position: "Webmaster",
            duration: "September 2022 - Present", 
            link: "https://emerging-coders-website.vercel.app/", 
            description: [
                "Developed and maintained the organization's website using Next.js, Tailwind CSS, and Vercel",
                "Directed technical workshop series and mentored more than 50 students in full-stack development, cloud computing, and data structures and algorithms",
                "Collaborated with other Computer Science organizations and company sponsors to host joint events and workshops revolving around technical development and career readiness"
            ],
        },
        {
            organization: "The Society of Hispanic Professional Engineers (SHPE)",
            position: "MentorSHPE Chair", 
            duration: "March 2022 - Present", 
            link: "https://www.instagram.com/shpe_nu/", 
            description: [
                "Directed mentorship program for 75 first-generation and low-income Latinx engineering/STEM majors",
                "Increased overall participation in program by 30% through more emphasis on recruitment of first-year students",
                "Organize event panel for graduating seniors to share their experiences at Northwestern for an audience of 40 people"
            ],
        },
        {
            organization: "ColorStack at Northwestern", 
            position: "Founder and Treasurer",
            duration: "May 2023 - Present",
            link: "https://www.instagram.com/colorstacknu/", 
            description: [
                "Successfully secured over $3,000 in funding from various organizations and companies.",
                "Coordinated and managed the organization's finances, with a focus on obtaining corporate sponsorships to support our initiatives",
            ],
        },
        {
            organization: "Alianza - The Latinx Student Alliance",
            position: "Historian", 
            duration: "March 2022 - March 2023", 
            link: "https://www.instagram.com/nu_alianza/",
            description: [
                "Supervise recording of flyers, social media post, and advertisements of events and meetings associated with Alianza",
                "Maintain an account of Latinx history at Northwestern and its broader community",
            ],
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
                                <div className="absolute w-3 h-3 bg-paragraph-gray rounded-full mt-1.5 -start-1.5 border border-orange dark:orange dark:bg-orange"></div>
                                <div className="w-full">
                                    <time className="mb-1 text-sm font-normal leading-none text-paragraph-gray dark:text-paragraph-gray">{activity.duration}</time>
                                    <a href={activity.link} target="_blank"><h3 className="text-2xl font-bold text-orange">{activity.organization}</h3></a>
                                    <h4 className="mb-1 text-lg font-medium text-paragraph-gray dark:text-paragraph-gray">{activity.position}</h4>
                                    {activity.description.map((desc, descIndex) => (
                                        <div key={descIndex} className="mb-4">
                                            <span className="text-orange mr-2">▹</span>
                                            <span className="text-base font-normal text-paragraph-gray dark:text-paragraph-gray">{desc}</span>
                                        </div>
                                    ))}
                                </div>
                            </li>
                        ))}
                    </ol>
                </FadeInSection>
            </div>
        </>
    );
};