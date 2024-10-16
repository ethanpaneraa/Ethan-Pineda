"use client";

import SectionHeader from "../../ui/SectionHeader";
import FadeInSection from "../FadeInSection/FadeInSection";

interface ProfessionalExperienceObject {
  company: string;
  duration: string;
  location: string;
  title: string;
  link: string;
  description: string;
}

export default function ProfessionalExperience() {
  const myProfessionalExperience: Array<ProfessionalExperienceObject> = [
    {
      company: "Salesforce",
      duration: "June 2024 - September 2024",
      location: "San Francisco, CA",
      title: "Software Engineer Intern",
      link: "https://www.salesforce.com/products/data/",
      description: "Data Cloud Intern",
    },
    {
      company: "Salesforce",
      duration: "June - August 2023",
      location: "San Francisco, CA",
      title: "Full Stack Software Engineer Intern",
      link: "https://www.salesforce.com/products/data/",
      description:
        "Selected for Salesforce's FTL Program, led a team to develop a Telemedicine application using React.js and Node.js, and conducted Agile sprints and standups.",
    },
    {
      company: "Ka moamoa Lab",
      duration: "September 2023 - Present",
      location: "Evanston, IL",
      title: "Undergraduate Research Assistant",
      link: "https://kamoamoa.com/",
      description:
        "Collaborated on safety-based wearable technology using machine learning for threat detection, developed a Flutter app for user alerts, and optimized processing for device efficiency.",
    },
    {
      company:
        "Technological Innovations for Inclusive Learning and Teaching (tiilt)",
      duration: "March 2022 - Present",
      location: "Evanston, IL",
      title: "Undergraduate Research Assistant",
      link: "https://tiilt.northwestern.edu/",
      description:
        "Worked with the BLINC project to improve a learning analytics platform for students and educators, spearheaded transition from Angular to React, and implemented new UI/UX features.",
    },
    {
      company: "Northwestern University",
      duration: "June 2022 - Present",
      location: "Evanston, IL",
      title: "Undergraduate Teaching Assistant",
      link: "https://www.mccormick.northwestern.edu/computer-science/",
      description:
        "Supported 800+ students in Data Structures and Algorithms, contributed to grading and feedback, and received the Outstanding Peer Mentor Award in Fall 2022.",
    },
    {
      company: "CodePath",
      duration: "September 2023 - Present",
      location: "Remote",
      title: "Web Development Tech Fellow",
      link: "https://www.codepath.org/",
      description:
        "Provided technical support for 70+ students in web development, facilitated issue resolution, and fostered a supportive educational environment.",
    },
    {
      company: "Ruta Health",
      duration: "January - June 2023",
      location: "Evanston, IL",
      title: "Student Software Engineer Intern",
      link: "https://www.ycombinator.com/companies/ruta-health",
      description:
        "Contributed to a healthcare startup by leading frontend development with React and Node.js, enhancing product performance and scalability. ",
    },
  ];

  return (
    <>
      <div
        id="experience"
        className="mx-auto mb-10 flex min-h-screen flex-col items-center justify-center px-4 text-gray-600 sm:px-6 md:py-36 lg:px-8"
      >
        <FadeInSection delay={100}>
          <div className="text-paragraph-gray w-full max-w-screen-md text-left">
            <SectionHeader title="where-i-work" />
            <ol className="mx-auto">
              {myProfessionalExperience.map((experience, index) => (
                <li key={index} className="mb-10 flex">
                  {/* <time className="flex-shrink-0 w-1/3 md:w-1/4 text-left md:text-right text-md font-normal text-gray-500 pr-4">{experience.duration}</time> */}
                  <div className="text-md  text-paragraph-gray w-1/3 flex-shrink-0 flex-col pr-4 text-left font-normal md:w-1/4 md:text-right">
                    {/* <div className="w-3 h-3 bg-gray-500 rounded-full -left-1.5 top-1.5 border border-gray-300"></div> */}
                    <div className="flex flex-col text-sm">
                      <time className="mb-2 text-left md:text-right">
                        {experience.duration}
                      </time>
                      <span>{experience.location}</span>
                    </div>
                  </div>
                  <div className="border-bg-gray relative flex-grow border-l border-dashed pl-4">
                    {/* <div className="absolute w-3 h-3 bg-orange rounded -left-1.5 top-1.5 border border-orange"></div> */}
                    <div className="pl-4">
                      <a
                        href={experience.link}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <h3 className="text-orange text-xl font-bold">
                          {experience.company}
                        </h3>
                      </a>
                      <h4 className="text-paragraph-gray mb-1 text-lg font-medium">
                        {experience.title}
                      </h4>
                      <p className="text-paragraph-gray text-base font-normal">
                        {experience.description}
                      </p>
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
}
