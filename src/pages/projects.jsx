import React, { useEffect } from "react";

import NavBar from "../components/common/navBar";
import Footer from "../components/common/footer";
import Logo from "../components/common/logo";
import AllProjects from "../components/projects/allProjects";
import "./styles/projects.css";

const Projects = () => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);


	return (
		<>

			<div className="page-content">
				<NavBar active="projects" />
				<div className="content-wrapper">
					{/* <div className="projects-logo-container">
						<div className="projects-logo">
							<Logo width={46} />
						</div>
					</div> */}
					<div className="projects-container">

						<div className="projects-list">
							<AllProjects />
						</div>
					</div>
					<div className="page-footer">
						<Footer />
					</div>
				</div>
			</div>
		</>
	);
};

export default Projects;
