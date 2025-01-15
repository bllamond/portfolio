import React, { useEffect } from "react";

import NavBar from "../components/common/navBar";
import Footer from "../components/common/footer";
import Socials from "../components/about/socials";

import "./styles/contact.css";

const Contact = () => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	return (
		<>
			<div className="page-content">
				<NavBar active="contact" />
				<div className="content-wrapper">
					{/* <div className="contact-logo-container">
						<div className="contact-logo">
							<Logo width={46} />
						</div>
					</div> */}

					<div className="contact-container">
						<div className="title contact-title">
						Let's build something amazing together!

						</div>

						<div className="subtitle contact-subtitle">
							{/* Shoot me an email if you think we're a great fit and
							would like to work with me and let's have a great
							time while we're at it. */}
							Any Questions? Connect through social media.
						</div>
					</div>

					<div className="socials-container">
						<div className="contact-socials">
							<Socials />
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

export default Contact;
