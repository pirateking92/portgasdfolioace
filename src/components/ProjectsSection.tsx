"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import { motion, useInView } from "framer-motion";

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tag: string[];
  gitUrl: string;
  previewUrl: string;
}

const projectsData: Project[] = [
  {
    id: 1,
    title: "Makers Data Migration",
    description: "Migration from old to new system - Python, SQL",
    image: "",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/pirateking92/app_data_scraping",
    previewUrl: "",
  },
  {
    id: 4,
    title: "Wordpress CMS/NextJS Portfolio",
    description:
      "Bespoke portfolio website made with Typescript, NextJS, utlising a Wordpress CMS for a backend",
    image: "/images/sepysite.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/pirateking92/seportfolio2",
    previewUrl: "https://sepybaghaei.co.uk/",
  },
  {
    id: 2,
    title: "Marathon Parser",
    description: "Marathon Results App",
    image: "/images/marathonParser.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/pirateking92/marathonParser",
    previewUrl: "https://marathon-parser.vercel.app/",
  },
  {
    id: 3,
    title: "Cassandra",
    description: "Tarot Card Reading Web App - Go Backend, SvelteKit Frontend",
    image: "images/CassandraScreenshot.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/pirateking92/teamtarot",
    previewUrl: "https://cassandratarot.onrender.com/",
  },
];

const ProjectsSection: React.FC = () => {
  const [tag] = useState<string>("All");

  // Create a ref to attach to the ul element
  const ref = useRef<HTMLUListElement>(null);

  // Use the useInView hook with the ref to check if the element is in view
  const isInView = useInView(ref, { once: true });

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag),
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.5 }}
      transition={{ duration: 0.5 }}
      className="col-span-8 flex flex-col items-center sm:items-start sm:text-left text-center justify-self-center sm:justify-self-start"
    >
      <section id="projects">
        <h2 className="text-left text-6xl font-bold text-white mt-4 mb-8 md:mb-12">
          My Projects
        </h2>
        <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
          {/* <ProjectTag
            onClick={() => handleTagChange("All")}
            name="All"
            isSelected={tag === "All"}
          />
          <ProjectTag
            onClick={() => handleTagChange("Web")}
            name="Web"
            isSelected={tag === "Web"}
          />
          <ProjectTag
            onClick={() => handleTagChange("Mobile")}
            name="Mobile"
            isSelected={tag === "Mobile"}
          /> */}
        </div>

        {/* Attach the ref to the ul element */}
        <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
          {filteredProjects.map((project, index) => (
            <motion.li
              key={index}
              variants={cardVariants}
              initial="initial"
              // Use isInView to determine whether to animate or not
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
    </motion.div>
  );
};

export default ProjectsSection;
