import React from "react";

const NavBar = ({ active }) => {
	const handleScroll = (sectionId) => {
		const section = document.getElementById(sectionId);
		if (section) {
			const offset = 80; // Space above the section in pixels
			const top = section.getBoundingClientRect().top + window.scrollY - offset;
			window.scrollTo({ top, behavior: "smooth" });
		}
	};
	

	return (
		<div className="flex justify-center items-center">
			<nav className="fixed top-[4vh] z-50 flex justify-center items-center">
				<div className="bg-white shadow-lg rounded-full flex items-center px-8 py-3 sm:px-6 sm:py-2">
					<ul className="flex gap-8 list-none">
						<li
							className={`font-bold text-md ${
								active === "home" ? "text-teal-500" : "text-black"
							}`}
							onClick={() => handleScroll("hero-section")}
						>
							<span className="hover:text-teal-500 px-4 py-2 cursor-pointer">
								Home
							</span>
						</li>
						<li
							className={`font-bold text-md ${
								active === "about" ? "text-teal-500" : "text-black"
							}`}
							onClick={() => handleScroll("about-section")}
						>
							<span className="hover:text-teal-500 px-4 py-2 cursor-pointer">
								About
							</span>
						</li>
						<li
							className={`font-bold text-md ${
								active === "projects" ? "text-teal-500" : "text-black"
							}`}
							onClick={() => handleScroll("projects-section")}
						>
							<span className="hover:text-teal-500 px-4 py-2 cursor-pointer">
								Projects
							</span>
						</li>
						<li
							className={`font-bold text-md ${
								active === "contact" ? "text-teal-500" : "text-black"
							}`}
							onClick={() => handleScroll("contact-section")}
						>
							<span className="hover:text-teal-500 px-4 py-2 cursor-pointer">
								Contact
							</span>
						</li>
					</ul>
				</div>
			</nav>
		</div>
	);
};

export default NavBar;
