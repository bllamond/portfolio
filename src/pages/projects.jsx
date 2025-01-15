import React, { useEffect } from "react";

import NavBar from "../components/common/navBar";
import Footer from "../components/common/footer";
import AllProjects from "../components/projects/allProjects";

const Projects = () => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	return (
		<>
			<div className="">
				<NavBar active="projects" />
				<div className="">
					{/* <div className="projects-logo-container">
						<div className="projects-logo">
							<Logo width={46} />
						</div>
					</div> */}
					<div className="projects-container flex flex-col pt-10 pb-0">

						<div className="">
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
