import ProjectsContent from "@/components/projects/project-content";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "projects",
  description: "",
  openGraph: {
    images: [
      {
        url: "https://ethan-pineda.vercel.app/og/home?title=projects",
      },
    ],
  },
};

export default function ProjectsPage() {
  return <ProjectsContent />;
}
