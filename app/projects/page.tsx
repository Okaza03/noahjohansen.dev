import React from "react";
import ProjectCard from "@/components/ProjectCard";

const projects = [
  {
    title: "Project One",
    description: "Description of project one.",
    image: "/images/project1.jpg",
  },
  {
    title: "Project Two",
    description: "Description of project two.",
    image: "/images/project2.jpg",
  },
];

const ProjectsPage: React.FC = () => {
  return (
    <section className="min-h-screen text-white py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-5xl font-bold mb-12 text-center">My Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              title={project.title}
              description={project.description}
              image={project.image}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsPage;
