import React from "react";
import { Link } from "react-router-dom";

import "./styles/logo.css";

const Logo = (props) => {
	let { width, link } = props;

	if (link === undefined) {
		link = true;
	}

	const imageElement = (
		<img src='public\temp31.jpg' alt="logo" className="logo" width={width} />
	);

	return (
		<>
			{link ? <Link to="/">{imageElement}</Link> : imageElement}
		</>
	);
};

export default Logo;
