import React from "react";
import { motion } from "framer-motion";
import { faMailBulk } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faTwitter,
	faGithub,
	faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";

import NavBar from "../components/common/navBar";
import "./styles/homepage.css";
import AllProjects from "../components/projects/allProjects";
import Footer from "../components/common/footer";

const Homepage = () => {
	return (
		<>
			<div className="page-content">
				<NavBar active="home" />
				<div className="content-wrapper">
					<div className="homepage-container">
						<motion.div
							className="intro-section"
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.8 }}
						>
							<h1 className="intro-title">
								<span className="highlight-text">Hi there.</span> I’m{" "}
								<span className="name-highlight ">Vinay</span>,
								<br />
								a <span className="">Software Engineer</span> mainly focused {" "}
								<br />
								<span className="">on web development.</span>
							</h1>

							<p className="intro-subtitle">
								A Designer who likes to build interactive things with code.
							</p>

							<motion.a
								href={`mailto:${"vinaymalik1729@gmail.com"}`}
								className="availability-button"
								whileHover={{ scale: 1.05 }}
								whileTap={{ scale: 0.95 }}
							>
								✨ Available For New Project
							</motion.a>

							<div className="homepage-socials">
								<a
									href={"https://x.com/vinaym_18"}
									target="_blank"
									rel="noreferrer"
								>
									<FontAwesomeIcon
										icon={faTwitter}
										className="homepage-social-icon"
									/>
								</a>
								<a
									href={"https://github.com/bllamond"}
									target="_blank"
									rel="noreferrer"
								>
									<FontAwesomeIcon
										icon={faGithub}
										className="homepage-social-icon"
									/>
								</a>
								<a
									href={"https://in.linkedin.com/in/vinaymalik18"}
									target="_blank"
									rel="noreferrer"
								>
									<FontAwesomeIcon
										icon={faLinkedinIn}
										className="homepage-social-icon"
									/>
								</a>
								<a
									href={`mailto:${"vinaymalik1729@gmail.com"}`}
									target="_blank"
									rel="noreferrer"
								>
									<FontAwesomeIcon
										icon={faMailBulk}
										className="homepage-social-icon"
									/>
								</a>
							</div>
						</motion.div>
					</div>
					<div className="homepage-projects">
							<AllProjects />
						</div>

						<div className="page-footer">
							<Footer />
						</div>
				</div>
			</div>
		</>
	);
};

export default Homepage;
