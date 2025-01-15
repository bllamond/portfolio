import React from 'react';
import { motion } from 'framer-motion';
import Project from './project';

const featuredProjects = [
  {
    title: "ConnectMe",
    description:
      "A platform allowing users to create and share customized landing pages, designed for seamless social media integration and increased personal branding.",
    linkText: "View Project",
    link: "https://connectme-v1.vercel.app/",
    languages: ["React", "Node.js", "CSS"],
  },
  {
    title: "FitBuddy",
    description: "A health companion app for generating personalized recipes based on user input like chronic diseases, dietary preferences, and nutritional goals.",
    linkText: "View Project",
    link: "https://fit-buddy-6w8r.onrender.com/",
    languages: ["Python", "Django", "HTML"],
  },
  {
    title: "FitBuddy",
    description: "A health companion app for generating personalized recipes based on user input like chronic diseases, dietary preferences, and nutritional goals.",
    linkText: "View Project",
    link: "https://fit-buddy-6w8r.onrender.com/",
    languages: ["Python", "Django", "HTML"],
  },
];

const otherProjects = [
  {
    title: "Trippins",
    description: "The go-to platform for pinning and sharing travel adventures with ease.",
    linkText: "View Project",
    link: "https://github.com/bllamond/tripPins",
    languages: ["JavaScript", "Express", "MongoDB"],
  },
  {
    title: "BlogApp",
    description:
      "Dynamic and user-friendly blog platform with an engaging and responsive user experience.",
    linkText: "View Project",
    link: "https://blog-website-bice-psi.vercel.app/",
    languages: ["React", "TailwindCSS", "Node.js"],
  },
  {
    title: "Todos",
    description: "Web service using ReactJS and Context API, featuring a user-friendly interface for task management.",
    linkText: "View Project",
    link: "https://todo-nine-eosin.vercel.app/",
    languages: ["React", "Context API", "CSS"],
  },
];

const AllProjects = () => {
  return (
    <section className="py-10 mb-20">
      <div className="container mx-auto px-12">
        <motion.h2 
          className="font-extrabold text-teal-600 text-xl text-center mb-2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
        >
          Featured Projects
        </motion.h2>
        <motion.h3 
          className="font-semibold text-center text-3xl mb-16 text-gray-800"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          Recent Highlights
        </motion.h3>
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          {featuredProjects.map((project, index) => (
            <Project
              key={index}
              title={project.title}
              description={project.description}
              linkText={project.linkText}
              link={project.link}
              languages={project.languages}
              isFeatured={true}
            />
          ))}
        </motion.div>

        <motion.h2 
          className="font-extrabold text-teal-600 text-xl text-center mt-24 mb-2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          Other Projects
        </motion.h2>
        <motion.h3 
          className="font-semibold text-center text-3xl mb-12 text-gray-800"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          Achievements and Explorations
        </motion.h3>
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
        >
          {otherProjects.map((project, index) => (
            <Project
              key={index}
              title={project.title}
              description={project.description}
              linkText={project.linkText}
              link={project.link}
              languages={project.languages}
              isFeatured={false}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default AllProjects;

