"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "Site usando React/Nextjs - Talita Rodrigues",
    description: "Site institucional",
    image: "/images/projects/1.png",
    tag: ["Todos", "React"],
    gitUrl: "https://github.com/lauraxavier/talita-rodrigues",
    previewUrl: "https://talitarodrigues.vercel.app/",
  },
  {
    id: 2,
    title: "WebApp - React/Nodejs - Events SaaS",
    description: "WebApp de eventos e palestras",
    image: "/images/projects/2.png",
    tag: ["Todos", "React"],
    gitUrl: "https://github.com/lauraxavier/EventiFy-Front",
  },
  {
    id: 3,
    title: "Site - React/Nextjs - Laura Xavier",
    description: "Portfólio",
    image: "/images/projects/3.png",
    tag: ["Todos", "React"],
    gitUrl: "https://github.com/lauraxavier/portfolio-lauraXavier",
    previewUrl: "/",
  },
  {
    id: 4,
    title: "Webapp - React - iList",
    description: "WebApp do aplicativo iList",
    image: "/images/projects/4.png",
    tag: ["Todos", "React"],
    gitUrl: "/",
  },
  {
    id: 5,
    title: "Site - Wordpress - Maiêutica",
    description: "Site institucional",
    image: "/images/projects/5.png",
    tag: ["Todos"],
    previewUrl: "https://www.maieutica.com.br/",
  },
  {
    id: 6,
    title: "Site - Wordpress - Resgatah",
    description: "Site institucional",
    image: "/images/projects/6.png",
    tag: ["Todos"],
    previewUrl: "https://resgatah.com.br",
  },
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("Todos");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section
      id="projects"
      className="flex justify-center items-center min-h-screen lg:pt-14 flex-col"
    >
      <h2 className="text-center text-4xl font-bold mt-4 mb-14 md:mb-12">
        Meus Projetos
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6 mb-3">
        <ProjectTag
          onClick={handleTagChange}
          name="Todos"
          isSelected={tag === "Todos"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="React"
          isSelected={tag === "React"}
        />
      </div>
      <ul
        ref={ref}
        className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-20"
      >
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;
