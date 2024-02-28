"use client"; 

import SectionHeader from "../ui/SectionHeader";
import FadeInSection from "../FadeInSection/FadeInSection";
import exp from "constants";
interface ProfessionalExperienceObject {
    company: string;
    duration: string;
    title: string;
    link: string; 
    description: Array<string>;
};

export default function ProfessionalExperience() {

    const myProfessionalExperience: Array<ProfessionalExperienceObject> = [
        {
            company: "Salesforce",
            duration: "June 2023 - August 2023", 
            title: "Full Stack Software Engineer Intern",
            link: "https://www.salesforce.com/products/data/", 
            description: [
                "Selected into a cohort of 60 out of 2000 applicants into Salesforce FTL Program, an intensive 10-week internship focusing on full stack development including: front-end, back-end, testing, design, and deployment",
                "Led, planed, and developed within. A team of 3 a 4-week MVP in an Agile setting using React.js, Node.js, Express.js, and PostgresSQL to create Telemedicine applications for immigrants to the United States", 
                "Performed and led daily standups and weekly sprints, wrote and assigned user stories in backlog which allowed team to accomplish MVP and include stretch features in final product"
            ],
        },
        {
            company: "Ka moamoa Lab", 
            duration: "September 2023 - Present",
            title: "Undergraduate Research Assistant",
            link: "https://kamoamoa.com/", 
            description: [
                "Collaborated with PhD candidate Stefany Cruz on innovative safety-based wearable technology projects utilizing Machine Learning Sound Classification and Edge Impulse for real-time environmental threat detection",
                "Spearheaded the development of a mobile application using Flutter to interface with wearable device, enhancing user accessibility to safety alerts for dangerous sounds.", 
                "Engineered a solution to offload computational processing between the wearable technology and mobile application, optimizing battery life and device efficiency", 
            ],
        }, 
        {
            company: "Technological Innovations for Inclusive Learning and Teaching (tiilt)",
            duration: "March 2022 - Present",
            title: "Undergraduate Research Assistant",
            link: "https://tiilt.northwestern.edu/", 
            description: [
                "Partnered with the BLINC project to enhance and implement interactive and accessible front-end features to improve user experience for the real-time multimodal learning analytics platform with 50 daily users",
                "Developed a new data structure for the Racket programming language, which is a functional programming language",
                "Implemented the data structure in Racket and wrote a paper on the data structure"
            ],
        },
        {
            company: "Northwestern University",
            duration: "June 2022 - Present", 
            title: "Undergraduate Teaching Assistant", 
            link: "https://www.mccormick.northwestern.edu/computer-science/", 
            description: [
                "Dedicated 6-10 hours weekly for office hours to aid more than 800 students in Data Structures and Algorithms", 
                "Worked closely with Professor Vincent St. Amour, Sruti Bhagavatula, and Leif Rasmussen to give feedback and grades on student code and examinations", 
                "Awarded Outstanding Peer Mentor Award in recognition of high performance and dedication to student learning"
            ],
        },
        {
            company: "CodePath", 
            duration: "September 2023 - Present", 
            title: "Web Development Tech Fellow",
            link: "https://www.codepath.org/", 
            description: [
                "Delivered in-depth technical support for 70+ students focusing on sophisticated web development concepts, including the construction of web servers, organization of web data, and management of RESTful API interactions.",
                "Ensured prompt resolution of technical issues via Slack, assisting students with challenges in dynamic and relational data handling, mastering GitHub workflows, implementing authentication protocols, and adopting deployment methodologies.", 
                "Cultivated a nurturing educational atmosphere, building rapport with learners and facilitating their ongoing progress and mastery of course materials."
            ],
        }, 
        {
            company: "Ruta Health", 
            duration: "January 2023 - June 2023",
            title: "Student Software Engineering",
            link: "https://www.ycombinator.com/companies/ruta-health", 
            description: [
               "Worked with healthcare startup and actively contribute to the development and launch of beta product, including leading the development of a React frontend with a Node.js backend resulting in improved performance and scalability" 
            ],
        }, 
    ];


    return (
        <>
            <div className="flex flex-col items-center justify-center min-h-screen text-paragraph-gray px-4 sm:px-6 lg:px-8 max-w-screen-xl mx-auto" mb-10>
                <FadeInSection delay={100}>
                    <div className="text-left w-full">
                        <SectionHeader title="where-i-work" />
                    </div>
                        <ol className="relative border-s border-paragraph-gray dark:border-paragraph-gray">
                            {myProfessionalExperience.map((experience, index) => (
                                <li key={index} className="mb-10 ml-4 w-md">
                                    <div className="absolute w-3 h-3 bg-paragraph-gray rounded-full mt-1.5 -start-1.5 border border-orange dark:border-orange dark:bg-orange"></div>
                                    <div className="w-full sm:w-full md:w-5/6 lg:w-5/6 xl:w-5/6">
                                        <time className="mb-1 text-md font-normal text-sm leading-none text-paragraph-gray dark:text-paragraph-gray">{experience.duration}</time>
                                        <a href={experience.link} target="_blank"><h3 className="text-2xl font-bold text-orange">{experience.company}</h3></a>
                                        <h4 className="mb-1 text-lg font-medium text-paragraph-gray dark:text-paragraph-gray">{experience.title}</h4>
                                        {experience.description.map((desc, descIndex) => (
                                            <div key={descIndex} className="mb-4">
                                                <span className="text-orange mr-2">▹</span>
                                                <span className="text-base font-normal text-paragraph-gray">{desc}</span>
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