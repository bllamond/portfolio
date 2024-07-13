import React, { useEffect } from "react";

import NavBar from "../components/common/navBar";
import Logo from "../components/common/logo";

import Footer from "../components/common/footer";

import "./styles/about.css";

const About = () => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	const about = {
		title: "Hi there! I'm Vinay Malik",
		description: "When it comes to business, first impressions matter, and good website design is the key to capitalizing on them. An excellent site is not judged solely on its looks, but on its functionality and usability as well. My experience as a programmer allows me to come up with intelligent solutions to technical challenges, while at the same time designing sleek and visually appealing websites. Aside from having extensive knowledge of recognized technical standards, I am conversant with modern building practices.",
	};
	return (
		<>
			

			<div className="page-content">
				<NavBar active="about" />
				<div className="content-wrapper">
					<div className="about-logo-container">
						<div className="about-logo">
							<Logo width={46} />
						</div>
					</div>

					<div className="about-container">
						<div className="about-main">
							<div className="about-right-side">
								<div className="about-title">
									I'm Vinay Malik.
									Nice to meet you.
								</div>

								
							</div>

							<div className="about-left-side">
								{/* <div className="about-image-container"> */}
								<div className="about-subtitle">
								I’m a Frontend Developer who enjoys solving complex problems, creating impactful and user-centered experiences across multiple platforms.
								<br />
								<br />
									{about.description}
								</div>
								{/* </div> */}

								{/* <div className="about-socials">
									<Socials />
								</div> */}
							</div>
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

export default About;
