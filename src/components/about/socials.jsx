import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
	faTwitter,
	faGithub,
	faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

import "./styles/socials.css";

const Socials = () => {

	const socials = {
		twitter: "https://twitter.com/vinaym_18",
		github: "https://github.com/bllamond",
		linkedin: "https://linkedin.com/in/vinaymalik18",
		instagram: "https://instagram.com/",
	}
	return (
		<div className="socials">

			

			<div className="social">
				<a
					href={socials.linkedin}
					target="_blank"
					rel="noreferrer"
				>
					<div className="social-icon">
						<FontAwesomeIcon
							icon={faLinkedin}
							className="social-icon"
						/>
					</div>
					<div className="social-text">Follow on LinkedIn</div>
				</a>
			</div>


			<div className="social">
				<a href={socials.github} target="_blank" rel="noreferrer">
					<div className="social-icon">
						<FontAwesomeIcon
							icon={faGithub}
							className="social-icon"
						/>
					</div>
					<div className="social-text">Follow on GitHub</div>
				</a>
			</div>


			<div className="social">
				<a href={socials.twitter} target="_blank" rel="noreferrer">
					<div className="social-icon">
						<FontAwesomeIcon
							icon={faTwitter}
							className="social-icon"
						/>
					</div>
					<div className="social-text">Follow on Twitter</div>
				</a>
			</div>
			
			<div className="email">
				<div className="email-wrapper">
					<a
						href={`mailto:mail@vinaymalik1729@gmail.com`}
						target="_blank"
						rel="noreferrer"
					>
						<div className="social-icon">
							<FontAwesomeIcon icon={faEnvelope} />
						</div>

						<div className="social-text">{`vinaymalik1729@gmail.com`}</div>
					</a>
				</div>
			</div>
		</div>
	);
};

export default Socials;
