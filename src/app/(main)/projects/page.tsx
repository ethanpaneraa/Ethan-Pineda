"use client";
import { ScrambleText } from "@/components/scramble-text";
import { projectItems } from "@/lib/data/projects";
import { ProjectCard } from "@/components/projects/project-card";
import type { ProjectCategory } from "@/lib/data/projects";
import { useState } from "react";

export default function ProjectsPage() {
  const [selectedCategory, setSelectedCategory] = useState<
    ProjectCategory | "all"
  >("all");

  const categories: Record<ProjectCategory, string> = {
    webApplications: "web apps",
    dataVisualization: "data viz",
    gamesDevelopment: "game dev",
    machineLearning: "ml",
    documentation: "docs",
  };

  const filteredCategories =
    selectedCategory === "all"
      ? (Object.entries(projectItems) as [
          ProjectCategory,
          (typeof projectItems)[ProjectCategory]
        ][])
      : ([[selectedCategory, projectItems[selectedCategory]]] as [
          ProjectCategory,
          (typeof projectItems)[ProjectCategory]
        ][]);

  return (
    <main className="max-w-4xl mx-auto px-4 py-8">
      <div className="space-y-6 mb-16">
        <h1 className="text-4xl font-bold text-white animate-fade-in">
          <span className="inline-block">
            <span className="text-textAccent mr-2">*</span>
            <ScrambleText text="projects" />
          </span>
        </h1>
        <p className="text-gray-300 leading-relaxed animate-fade-in-up">
          here's a collection of projects i've worked on, ranging from web
          applications and games to machine learning experiments. each project
          represents a unique challenge and learning experience.
        </p>
      </div>

      <div className="mb-12">
        <h2 className="text-2xl font-bold text-white mb-6">
          <span className="text-textAccent mr-2">*</span>
          filter by category
        </h2>
        <div className="flex flex-wrap gap-4">
          <button
            onClick={() => setSelectedCategory("all")}
            className={`px-4 py-2 border text-sm transition-colors ${
              selectedCategory === "all"
                ? "border-accent text-accent"
                : "border-gray-800 text-gray-400 hover:border-accent/50 hover:text-accent"
            }`}
          >
            all
          </button>
          {Object.entries(categories).map(([key, label]) => (
            <button
              key={key}
              onClick={() => setSelectedCategory(key as ProjectCategory)}
              className={`px-4 py-2 border text-sm transition-colors ${
                selectedCategory === key
                  ? "border-accent text-accent"
                  : "border-gray-800 text-gray-400 hover:border-accent/50 hover:text-accent"
              }`}
            >
              {label}
            </button>
          ))}
        </div>
      </div>

      <div className="space-y-16">
        {filteredCategories.map(([category, categoryProjects]) => (
          <section key={category}>
            <h2 className="text-2xl font-bold text-white mb-6">
              <span className="text-textAccent mr-2">*</span>
              {categories[category]}
            </h2>
            <div className="space-y-6">
              {categoryProjects.map((project) => (
                <ProjectCard key={project.title} {...project} />
              ))}
            </div>
          </section>
        ))}
      </div>
    </main>
  );
}
