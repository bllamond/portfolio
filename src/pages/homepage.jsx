import React, { useState, useEffect } from "react";

import { faMailBulk } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faTwitter,
	faGithub,
	faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";

import Logo from "../components/common/logo";
import Footer from "../components/common/footer";
import NavBar from "../components/common/navBar";
import AllProjects from "../components/projects/allProjects";

import "./styles/homepage.css";

const Homepage = () => {
	// const [stayLogo, setStayLogo] = useState(false);
	// const [logoSize, setLogoSize] = useState(160);
	// const [oldLogoSize, setOldLogoSize] = useState(160);

	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	const [logoSize, setLogoSize] = useState(120);
	const [stayLogo, setStayLogo] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			const scroll = window.pageYOffset;

			if (scroll === 0) {
				setLogoSize(120);
				setStayLogo(false);
				return;
			}

			const newLogoSize = 120 - (scroll * 4) / 20;

			if (newLogoSize > 80) {
				setLogoSize(newLogoSize);
				setStayLogo(false);
			} else {
				setLogoSize(70);
				setStayLogo(true);
			}
		};

		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	const logoStyle = {
		display: "flex",
		position: stayLogo ? "fixed" : "relative",
		top: stayLogo ? "3vh" : "auto",
		zIndex: 999,
		border: stayLogo ? "1px solid white" : "none",
		borderRadius: stayLogo ? "50%" : "none",
		boxShadow: stayLogo ? "0px 4px 10px rgba(0, 0, 0, 0.25)" : "none",
	};

	return (
		<>
			<div className="page-content">
				<NavBar active="home" />
				<div className="content-wrapper">
					<div className="homepage-container">
						<div className="homepage-first-area">
							{/* <div className="homepage-logo-container">
								<div style={logoStyle}>
									<Logo width={logoSize} link={false} />
								</div>
							</div> */}
							<div className="homepage-first-area-left-side">
								<div className="title homepage-title">
									<span className="different">Hi there.</span>{" "}
									I'm Vinay
									<br />
									Software engineer mainly focused on Frontend
									Development
								</div>

								<div className="subtitle homepage-subtitle">
									{
										"A Designer who likes to build interactive things with code."
									}
								</div>

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
										href={
											"https://in.linkedin.com/in/vinaymalik18"
										}
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
							</div>

							{/* <div className="homepage-first-area-right-side">
								<div className="homepage-image-container">
									<div className="homepage-image-wrapper">
										<img
											src="temp3.jpg"
											alt="about"
											className="homepage-image"
										/>
									</div>
								</div>
							</div> */}
						</div>

						<div className="homepage-projects">
							<AllProjects />
						</div>

						<div className="page-footer">
							<Footer />
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Homepage;
