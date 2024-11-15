import React from "react";

import Project from "./project";

import "./styles/allProjects.css";

const projects = [
	{
		title: "ConnectMe",
		description:
			"A platform allowing users to create and share customized landing pages, designed for seamless social media integration and increase personal branding.",
		logo: "https://cdn.jsdelivr.net/npm/programming-languages-logos/src/python/python.png",
		linkText: "View Project",
		link: "https://connectme-v1.vercel.app/",
	},
	{
		title: "FitBuddy",
		description:
			"A health companion app for generating personalized recipes based on user input like chronic diseases, dietary preferences, and nutritional goals.",
		logo: "https://cdn.jsdelivr.net/npm/programming-languages-logos/src/python/python.png",
		linkText: "View Project",
		link: "https://fit-buddy-6w8r.onrender.com/",
	},
	{
		title: "Trippins",
		description:
			"The go-to platform for pinning and sharing travel adventures with ease.",
		logo: "https://cdn.jsdelivr.net/npm/programming-languages-logos/src/python/python.png",
		linkText: "View Project",
		link: "https://github.com/bllamond/tripPins",
	},

	{
		title: "BlogApp",
		description:
			"Dynamic and user-friendly blog platform with an engaging and responsive user experience.",
		logo: "https://cdn.jsdelivr.net/npm/programming-languages-logos/src/javascript/javascript.png",
		linkText: "View Project",
		link: "https://blog-website-bice-psi.vercel.app/",
	},

	

	{
		title: "Todos",
		description:
			"Web service using ReactJS and Context API, featuring a user-friendly interface for task management.",
		logo: "https://cdn.jsdelivr.net/npm/programming-languages-logos/src/html/html.png",
		linkText: "View Project",
		link: "https://todo-nine-eosin.vercel.app/",
	},
]
const AllProjects = () => {
	return (
		<>
		<h5 className="ptitle-highlight">
				Highlighted Projects
		</h5>
		<h3 className="ptitle">
			What I've been working on	
		</h3>
		<div className="all-projects-container">
			{projects.map((project, index) => (
				<div className="all-projects-project" key={index}>
					<Project
						logo={project.logo}
						title={project.title}
						description={project.description}
						linkText={project.linkText}
						link={project.link}
						/>
				</div>
			))}
		</div>
		</>
	);
};

export default AllProjects;
