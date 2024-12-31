import { Building2, GraduationCap, Users, BookOpen, Heart } from "lucide-react";

export interface ExperienceItem {
  title: string;
  organization: string;
  role: string;
  period: string;
  location: string;
  description: string;
  category: "work" | "research" | "teaching" | "leadership";
  href?: string;
}

export const workExperience: ExperienceItem[] = [
  {
    title: "Software Engineer Intern",
    organization: "Salesforce",
    role: "Data Cloud Intern",
    period: "June 2024 - September 2024",
    location: "San Francisco, CA",
    description:
      "Data Cloud Intern working on building and scaling data infrastructure solutions.",
    category: "work",
    href: "https://www.salesforce.com",
  },
  {
    title: "Full Stack Software Engineer Intern",
    organization: "Salesforce",
    role: "FTL Program Intern",
    period: "June 2023 - August 2023",
    location: "San Francisco, CA",
    description:
      "Selected for Salesforce's FTL Program, led a team to develop a Telemedicine application using React.js and Node.js, and conducted Agile sprints and standups.",
    category: "work",
    href: "https://www.salesforce.com",
  },
  {
    title: "Undergraduate Research Assistant",
    organization: "Ka moamoa Lab",
    role: "Research Assistant",
    period: "September 2023 - Present",
    location: "Evanston, IL",
    description:
      "Collaborated on safety-based wearable technology using machine learning for threat detection, developed a Flutter app for user alerts, and optimized processing for device efficiency.",
    category: "research",
    href: "https://kamoamoa.northwestern.edu",
  },
  {
    title: "Undergraduate Research Assistant",
    organization:
      "Technological Innovations for Inclusive Learning and Teaching (tiilt)",
    role: "Research Assistant",
    period: "March 2022 - Present",
    location: "Evanston, IL",
    description:
      "Worked with the BLINC project to improve a learning analytics platform for students and educators, spearheaded transition from Angular to React, and implemented new UI/UX features.",
    category: "research",
    href: "https://tiilt.northwestern.edu",
  },
  {
    title: "Undergraduate Teaching Assistant",
    organization: "Northwestern University",
    role: "Teaching Assistant",
    period: "June 2022 - Present",
    location: "Evanston, IL",
    description:
      "Supported 800+ students in Data Structures and Algorithms, contributed to grading and feedback, and received the Outstanding Peer Mentor Award in Fall 2022.",
    category: "teaching",
    href: "https://www.mccormick.northwestern.edu/computer-science/",
  },
  {
    title: "Web Development Tech Fellow",
    organization: "CodePath",
    role: "Technical Instructor",
    period: "September 2023 - Present",
    location: "Remote",
    description:
      "Provided technical support for 70+ students in web development, facilitated issue resolution, and fostered a supportive educational environment.",
    category: "teaching",
    href: "https://www.codepath.org",
  },
  {
    title: "Student Software Engineer Intern",
    organization: "Ruta Health",
    role: "Frontend Engineer",
    period: "January 2023 - June 2023",
    location: "Evanston, IL",
    description:
      "Contributed to a healthcare startup by leading frontend development with React and Node.js, enhancing product performance and scalability.",
    category: "work",
    href: "https://www.rutahealth.com",
  },
];

export const involvementExperience: ExperienceItem[] = [
  {
    title: "Technical & Engineering Director",
    organization: "Mayfest Productions",
    role: "Executive Board Member",
    period: "June 2024 - Present",
    location: "Evanston, IL",
    description:
      "Mayfest Productions is a student-run organization that plans and executes Dillo Day, the largest student-run music festival in the nation at Northwestern University.",
    category: "leadership",
    href: "https://mayfestproductions.org",
  },
  {
    title: "Vice President",
    organization: "Emerging Coders",
    role: "Founding Executive Board",
    period: "May 2024 - Present",
    location: "Evanston, IL",
    description:
      "Emerging Coders is a student organization that aims to provide a supportive community for students interested in computer science and technology.",
    category: "leadership",
    href: "https://emergingcoders.org",
  },
  {
    title: "Technical Lead",
    organization: "Develop and Innovate for Social Change (DISC)",
    role: "Leadership Team",
    period: "March 2024 - Present",
    location: "Evanston, IL",
    description:
      "Organize Fall Workshops and Studios during Winter and Spring, bringing specialized knowledge in software development for guidance and mentorship of project teams.",
    category: "leadership",
    href: "https://nudisc.org",
  },
  {
    title: "Webmaster",
    organization: "Emerging Coders",
    role: "Founding Executive Board",
    period: "September 2022 - March 2024",
    location: "Evanston, IL",
    description:
      "Developed and maintained our organization's website with Next.js and Tailwind CSS, led technical workshops, mentored over 50 students, and collaborated on events with sponsors.",
    category: "leadership",
    href: "https://emergingcoders.org",
  },
  {
    title: "MentorSHPE Chair",
    organization: "The Society of Hispanic Professional Engineers (SHPE)",
    role: "Executive Board Member",
    period: "March 2022 - March 2024",
    location: "Evanston, IL",
    description:
      "Directed the mentorship program for 75 Latine/Latinx engineering majors, boosting participation by 30% and organizing senior panels to enhance career readiness.",
    category: "leadership",
    href: "https://nushpe.northwestern.edu",
  },
  {
    title: "Founder and Treasurer",
    organization: "ColorStack at Northwestern",
    role: "Executive Board",
    period: "May 2023 - May 2024",
    location: "Evanston, IL",
    description:
      "As Founder and Treasurer, I've helped to secure over $3,000 in funding and managed finances with a focus on corporate sponsorships to support our initiatives, visions, and goals.",
    category: "leadership",
    href: "https://www.colorstack.org",
  },
  {
    title: "Historian",
    organization: "Alianza - The Latinx Student Alliance",
    role: "Executive Board Member",
    period: "March 2022 - March 2023",
    location: "Evanston, IL",
    description:
      "Recorded and maintained historical accounts of Alianza's events and Latinx history at Northwestern, involving extensive documentation and social media engagement.",
    category: "leadership",
    href: "https://www.northwestern.edu/alianza",
  },
];
