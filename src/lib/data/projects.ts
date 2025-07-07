interface ProjectCardProps {
  title: string;
  description: string;
  role: string;
  period?: string;
  achievements: string[];
  technologies: string[];
  href: string;
}

export type ProjectCategory =
  | "webApplications"
  | "dataVisualization"
  | "gamesDevelopment"
  | "machineLearning"
  | "documentation";

export type ProjectItems = {
  [K in ProjectCategory]: ProjectCardProps[];
};

export interface ProjectItem {
  title: string;
  role: string;
  description: string;
  achievements: string[];
  technologies: string[];
  href: string;
}

export const projectItems: ProjectItems = {
  webApplications: [
    {
      title: "Mayfest Productions Learning App",
      role: "Full Stack Developer",
      description:
        "A full-stack web app that allows for new members to the technology team of Mayfest Productions to learn about the organization and its technology stack.",
      achievements: [
        "Connected with Spotify API to display personalized playlists and userdata",
        "Created a reciept-like system for users to download an image to share their music taste on social media",
      ],
      technologies: ["Next.js", "Tailwind CSS", "shadcn/ui", "Spotify API"],
      href: "https://mayfest-learning-app.vercel.app/",
    },
    {
      title: "Full-Stack Project Template",
      role: "Lead Developer",
      description:
        "A full-stack project template that focuses on developer experience and productivity and the essentials for a modern web application.",
      achievements: [
        "Designed and developed the project template",
        "Implemented user authentication and authorization using HTTP cookies",
        "Used by 6+ student projects at Northwestern University",
      ],
      technologies: [
        "React",
        "JavaScript",
        "Node.js",
        "Express",
        "Supabase",
        "Styled Components",
      ],
      href: "https://github.com/disc-template?tab=repositories",
    },
    {
      title: "HomeHeart",
      role: "Full Stack Developer",
      description:
        "A telemedicine platform that connects immigrant patients to mental health specialists from their native countries.",
      achievements: [
        "Built a scalable telemedicine platform connecting immigrants with native-speaking mental health specialists",
        "Implemented secure video conferencing and scheduling features",
        "Developed machine learning algorithms for specialist matching",
      ],
      technologies: [
        "React",
        "Node.js",
        "Express",
        "PostgreSQL",
        "Python",
        "Flask",
        "Sci-kit Learn",
      ],
      href: "https://github.com/orgs/FTL-HomeHeart/repositories",
    },
    {
      title: "Instagram Clone",
      role: "Full Stack Developer",
      description:
        "A full-stack Instagram clone with user authentication, image uploading, and an image feed where users can like and comment on posts as well as follow other users.",
      achievements: [
        "Implemented comprehensive user authentication system",
        "Built real-time image feed with like and comment functionality",
        "Developed user following system with activity tracking",
      ],
      technologies: ["Next.js", "Tailwind CSS", "Node.js", "Express", "AWS"],
      href: "https://github.com/ethanpaneraa/comp-sci-310-final-project-instagram-clone",
    },
    {
      title: "DISC 2024 Fall Workshop Series Website",
      role: "Lead Developer",
      description:
        "The official website for the DISC Fall 2024 Workshop series. Teaching absolute beginners how to become full-stack developers.",
      achievements: [
        "Lead a 10-week long workshop series teaching students how to become full-stack developers using industry-ready technologies (React, Node.js, Express, PostgreSQL, Supabase) with an average of 20+ attendees per workshop",
        "Created a website to host all workshop materials and resources",
        "Created over 10+ demo projects, videos, tutorials, and resources for students to learn from all available on the website",
      ],
      technologies: [
        "Next.js",
        "TypeScript",
        "shadcn/ui",
        "MDX",
        "Tailwind CSS",
      ],
      href: "https://disc-nu.github.io/disc-website/",
    },
    {
      title: "Develop & Innovate for Social Change Website",
      role: "Lead Developer",
      description:
        "The official website for the Develop & Innovate for Social Change student organization at Northwestern University.",
      achievements: [
        "Designed and developed the organization's main web presence",
        "Created Beatiful Interface for DISCover Program, a program that connects students with non-profits with a total of 100+ applicants and 5+ non-profits",
        "Implemented newletter sign-up form for organization updates",
      ],
      technologies: [
        "Next.js",
        "TypeScript",
        "shadcn/ui",
        "framer-motion",
        "Tailwind CSS",
      ],
      href: "https://disc-nu.github.io/disc-website/",
    },
    {
      title: "Emerging Coders Website",
      role: "Lead Developer",
      description:
        "The official website for the Emerging Coders student organization at Northwestern University.",
      achievements: [
        "Designed and developed the organization's main web presence",
        "Implemented pages to fetch up-to-date internships and full-time job postings",
        "Created responsive design for optimal viewing across devices",
      ],
      technologies: [
        "Next.js",
        "Tailwind CSS",
        "Node.js",
        "Express",
        "Supabase",
      ],
      href: "https://emerging-coders-repositories.github.io/Emerging-Coders-Website/",
    },
  ],
  dataVisualization: [
    {
      title: "Chicago Crime Interactive Map",
      role: "Frontend Developer",
      description:
        "An interactive map of Chicago crime data from 2012 - 2016 broken down by ward, crime type, and frequency.",
      achievements: [
        "Visualized complex crime data using D3.js",
        "Implemented interactive filtering and sorting capabilities",
        "Optimized performance for handling large datasets",
      ],
      technologies: ["JavaScript", "HTML/CSS", "D3.js", "jQuery"],
      href: "https://github.com/ethanpaneraa/comp-sci-333-final",
    },
  ],
  gamesDevelopment: [
    {
      title: "Terrenos",
      role: "Game Developer",
      description:
        "A 2D hybrid between popular games Minecraft and Terraria mixed with RPG game elements.",
      achievements: [
        "Developed procedural world generation system",
        "Implemented RPG mechanics and combat system",
        "Collaborated with team members on game design",
      ],
      technologies: ["C#", "Unity"],
      href: "https://github.com/ethanpaneraa/Terrenos",
    },
    {
      title: "Unity Flight Simulator",
      role: "Game Developer",
      description:
        "Realistic Unity flight simulator, playable with keyboard/controllers",
      achievements: [
        "Implemented realistic flight physics",
        "Created responsive control system for multiple input methods",
        "Designed immersive flight environments",
      ],
      technologies: ["C#", "Unity"],
      href: "https://github.com/ethanpaneraa/Unity-Flight-Sim",
    },
  ],
  machineLearning: [
    {
      title: "Naive Bayes Classifier",
      role: "ML Engineer",
      description:
        "A simple Naive Bayes Classifier built from scratch to classify emails as spam or not spam.",
      achievements: [
        "Implemented Naive Bayes algorithm from scratch",
        "Achieved high accuracy in spam classification",
        "Optimized model performance and preprocessing pipeline",
      ],
      technologies: ["Python", "NumPy", "Sci-kit Learn"],
      href: "#",
    },
  ],
  documentation: [
    {
      title: "DISC Documentation",
      role: "Technical Writer",
      description: "Documentation for all of DISC's websites/projects.",
      achievements: [
        "Created comprehensive documentation for website maintenance",
        "Wrote clear technical guides for future technical leads of DISC",
        "Created Github Action to automatically deploy documentation",
      ],
      technologies: [
        "Docusaurus",
        "Markdown",
        "GitHub Pages",
        "GitHub Actions",
      ],
      href: "https://emerging-coders-website-documentation.vercel.app/",
    },
    {
      title: "EMCO Website Documentation",
      role: "Technical Writer",
      description: "Documentation for the Emerging Coders Website.",
      achievements: [
        "Created comprehensive documentation for website maintenance",
        "Wrote clear technical guides for future developers",
        "Established documentation standards for the organization",
      ],
      technologies: ["Next.js", "Tailwind CSS", "MDX"],
      href: "https://emerging-coders-website-documentation.vercel.app/",
    },
  ],
};
