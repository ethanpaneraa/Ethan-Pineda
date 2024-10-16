export interface Extracurricular {
  organization: string;
  position: string;
  duration: string;
  location: string;
  link: string;
  description: string;
}

export async function getExtracurriculars(): Promise<Extracurricular[]> {
  return [
    {
      organization: "Develop and Innovate for Social Change (DISC)",
      position: "Technical Lead",
      duration: "March 2024 - Present",
      location: "Evanston, IL",
      link: "https://www.instagram.com/disc_nu/",
      description:
        "Organize Fall Workshops and Studios during Winter and Spring, bringing specialized knowledge in software development for guidance and mentorship of project teams.",
    },
    {
      organization: "Emerging Coders",
      position: "Founding Executive Board & Vice President",
      duration: "September 2022 - Present",
      location: "Evanston, IL",
      link: "https://emerging-coders-website.vercel.app/",
      description:
        "Take point in organizing workshops, tech talks, and collaborations with other organizations to foster a supportive community for underrepresented students in tech. Developed and maintained our organization's website with Next.js and Tailwind CSS, led technical workshops, mentored over 50 students, and collaborated on events with sponsors.",
    },
    {
      organization: "The Society of Hispanic Professional Engineers (SHPE)",
      position: "MentorSHPE Chair",
      duration: "March 2022 - March 2024",
      location: "Evanston, IL",
      link: "https://www.instagram.com/shpe_nu/",
      description:
        "Directed the mentorship program for 75 Latine/Latinx engineering majors, boosting participation by 30% and organizing senior panels to enhance career readiness.",
    },
    {
      organization: "ColorStack at Northwestern",
      position: "Founder and Treasurer",
      duration: "May 2023 - May 2024",
      location: "Evanston, IL",
      link: "https://www.instagram.com/colorstacknu/",
      description:
        "As Founder and Treasurer, I've helped to secure over $3,000 in funding and managed finances with a focus on corporate sponsorships to support our initiatives, visions, and goals.",
    },
    {
      organization: "Alianza - The Latinx Student Alliance",
      position: "Historian",
      duration: "March 2022 - March 2023",
      location: "Evanston, IL",
      link: "https://www.instagram.com/nu_alianza/",
      description:
        "Recorded and maintained historical accounts of Alianza's events and Latinx history at Northwestern, involving extensive documentation and social media engagement.",
    },
  ];
}
