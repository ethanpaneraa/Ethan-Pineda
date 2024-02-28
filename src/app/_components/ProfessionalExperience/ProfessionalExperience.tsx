"use client"; 

import SectionHeader from "../ui/SectionHeader";
import FadeInSection from "../FadeInSection/FadeInSection";

interface ProfessionalExperienceObject {
    company: string;
    duration: string;
    title: string;
    link: string; 
    description: string; // Changed from Array<string> to string
};

export default function ProfessionalExperience() {

    const myProfessionalExperience: Array<ProfessionalExperienceObject> = [
        {
            company: "Salesforce",
            duration: "June 2023 - August 2023", 
            title: "Full Stack Software Engineer Intern",
            link: "https://www.salesforce.com/products/data/", 
            description: "Selected for Salesforce's FTL Program, led a team to develop a Telemedicine application using React.js and Node.js, and conducted Agile sprints and standups.",
        },
        {
            company: "Ka moamoa Lab", 
            duration: "September 2023 - Present",
            title: "Undergraduate Research Assistant",
            link: "https://kamoamoa.com/", 
            description: "Collaborated on safety-based wearable technology using machine learning for threat detection, developed a Flutter app for user alerts, and optimized processing for device efficiency.",
        }, 
        {
            company: "Technological Innovations for Inclusive Learning and Teaching (tiilt)",
            duration: "March 2022 - Present",
            title: "Undergraduate Research Assistant",
            link: "https://tiilt.northwestern.edu/", 
            description: "Worked with the BLINC project to improve a learning analytics platform, developed a new data structure in Racket, and contributed to a related paper.",
        },
        {
            company: "Northwestern University",
            duration: "June 2022 - Present", 
            title: "Undergraduate Teaching Assistant", 
            link: "https://www.mccormick.northwestern.edu/computer-science/", 
            description: "Supported 800+ students in Data Structures and Algorithms, contributed to grading and feedback, and received the Outstanding Peer Mentor Award.",
        },
        {
            company: "CodePath", 
            duration: "September 2023 - Present", 
            title: "Web Development Tech Fellow",
            link: "https://www.codepath.org/", 
            description: "Provided technical support for 70+ students in web development, facilitated issue resolution, and fostered a supportive educational environment.",
        }, 
        {
            company: "Ruta Health", 
            duration: "January 2023 - June 2023",
            title: "Student Software Engineering",
            link: "https://www.ycombinator.com/companies/ruta-health", 
            description: "Contributed to a healthcare startup by leading frontend development with React and Node.js, enhancing product performance and scalability.",
        }, 
    ];

    return (
        <>
            <div className="flex flex-col items-center justify-center min-h-screen text-paragraph-gray px-4 sm:px-6 lg:px-8 max-w-screen-xl mx-auto mb-10">
                <FadeInSection delay={100}>
                    <div className="text-left w-full">
                        <SectionHeader title="where-i-work" />
                    </div>
                        <ol className="relative border-s border-paragraph-gray dark:border-paragraph-gray">
                            {myProfessionalExperience.map((experience, index) => (
                                <li key={index} className="mb-10 ml-4 w-md">
                                    <div className="absolute w-3 h-3 bg-paragraph-gray rounded mt-1.5 -start-1.5 border border-orange dark:border-orange dark:bg-orange"></div>
                                    <div className="w-full sm:w-full md:w-5/6 lg:w-5/6 xl:w-5/6">
                                        <time className="mb-1 text-md font-normal text-sm leading-none text-paragraph-gray dark:text-paragraph-gray">{experience.duration}</time>
                                        <a href={experience.link} target="_blank"><h3 className="text-2xl font-bold text-orange">{experience.company}</h3></a>
                                        <h4 className="mb-1 text-lg font-medium text-paragraph-gray dark:text-paragraph-gray">{experience.title}</h4>
                                        <div className="mb-4">
                                            <span className="text-orange mr-2">▹</span>
                                            <span className="text-base font-normal text-paragraph-gray">{experience.description}</span>
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
