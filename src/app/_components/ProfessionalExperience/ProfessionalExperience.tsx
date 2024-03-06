"use client"; 

import SectionHeader from "../../ui/SectionHeader";
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
            description: "Worked with the BLINC project to improve a learning analytics platform for students and educators, spearheaded transition from Angular to React, and implemented new UI/UX features.",
        },
        {
            company: "Northwestern University",
            duration: "June 2022 - Present", 
            title: "Undergraduate Teaching Assistant", 
            link: "https://www.mccormick.northwestern.edu/computer-science/", 
            description: "Supported 800+ students in Data Structures and Algorithms, contributed to grading and feedback, and received the Outstanding Peer Mentor Award in Fall 2022.",
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
            description: "Contributed to a healthcare startup by leading frontend development with React and Node.js, enhancing product performance and scalability. ",
        }, 
    ];

    return (
    <>
        <div id="experience" className="flex flex-col items-center justify-center min-h-screen px-4 sm:px-6 lg:px-8 mx-aut text-paragraph-gray mb-10 md:py-36">
            <FadeInSection delay={100}>
                <div className="text-left w-full max-w-screen-lg">
                    <SectionHeader title="where-i-work" />
                    <ol className="relative border-l border-paragraph-gray dark:border-paragraph-gray mx-auto">
                        {myProfessionalExperience.map((experience, index) => (
                            <li key={index} className="mb-10 pl-4">
                                <div className="absolute w-3 h-3 bg-paragraph-gray rounded mt-1.5 -start-1.5 border border-orange dark:orange dark:bg-orange"></div>
                                <div className="w-full xl:w-11/12">
                                    <time className="mb-1 text-md font-normal leading-none text-paragraph-gray">{experience.duration}</time>
                                    <a href={experience.link} target="_blank" rel="noopener noreferrer">
                                        <h3 className="text-2xl font-bold text-orange">{experience.company}</h3>
                                    </a>
                                    <h4 className="mb-1 text-lg font-medium text-paragraph-gray">{experience.title}</h4>
                                    <p className="mb-4 text-base font-normal text-paragraph-gray">{experience.description}</p>
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
