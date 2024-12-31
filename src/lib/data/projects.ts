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

export const projectItems: ProjectItems = {
  webApplications: [
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
      href: "#",
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
      href: "#",
    },
    {
      title: "Emerging Coders Website",
      role: "Lead Developer",
      description:
        "The official website for the Emerging Coders student organization at Northwestern University.",
      achievements: [
        "Designed and developed the organization's main web presence",
        "Implemented content management system for easy updates",
        "Created responsive design for optimal viewing across devices",
      ],
      technologies: [
        "Next.js",
        "Tailwind CSS",
        "Node.js",
        "Express",
        "Supabase",
      ],
      href: "#",
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
      href: "#",
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
      href: "#",
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
      href: "#",
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
      title: "EMCO Website Documentation",
      role: "Technical Writer",
      description: "Documentation for the Emerging Coders Website.",
      achievements: [
        "Created comprehensive documentation for website maintenance",
        "Wrote clear technical guides for future developers",
        "Established documentation standards for the organization",
      ],
      technologies: ["Next.js", "Tailwind CSS", "MDX"],
      href: "#",
    },
  ],
};
