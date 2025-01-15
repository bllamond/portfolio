import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faTwitter,
	faGithub,
	faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";
import NavBar from "../components/common/navBar";
import AllProjects from "../components/projects/allProjects";
import Footer from "../components/common/footer";

const Homepage = () => {
	return (
		<>
			<div className="flex flex-col min-h-screen bg-white">
				
				<NavBar active="home" />

				
				<div className="flex flex-col flex-grow">
					{/* Hero Section */}
					<div
						id="hero-section"
						className="flex flex-col lg:flex-row justify-between items-center gap-24 p-10 lg:p-20"
					>
						<div className="flex flex-col items-start pt-20 pl-28 pr-20 space-y-8">
							<motion.div
								className="space-y-6"
								initial={{ opacity: 0, y: 20 }}
								animate={{ opacity: 1, y: 0 }}
								transition={{ duration: 0.8 }}
							>
								<p className="text-lg text-teal-600">
									Hi, my name is
								</p>
								<h1 className="text-7xl font-extrabold text-gray-800">
									Vinay Malik.
								</h1>
								<h2 className="text-7xl font-bold text-gray-700">
									I build things for the web.
								</h2>
								<p className="text-lg text-gray-600 max-w-3xl pb-6">
									I’m a{" "}
									<span className="font-semibold">
										software engineer
									</span>{" "}
									and a fourth-year undergraduate student at{" "}
									<span className="font-semibold">
										IIIT Kota
									</span>
									, specializing in crafting exceptional
									digital experiences.
								</p>
								<motion.a
									href={`mailto:${"vinaymalik1729@gmail.com"}`}
									className="inline-block px-6 py-3 text-white bg-teal-600 hover:bg-teal-700 rounded-md shadow-md transform transition-all duration-150 hover:scale-105 active:scale-95"
									whileHover={{ scale: 1.05 }}
									whileTap={{ scale: 0.95 }}
								>
									✨ Excited to Collaborate on New Projects
								</motion.a>
							</motion.div>
						</div>
					</div>

					{/* About Me Section */}
					<div id="about-section" className="mt-16 pl-20 lg:px-48">
						<h2 className="text-3xl font-bold text-teal-600 mb-8">
							About Me
						</h2>
						<div className="max-w-xl text-left">
							<p className="text-lg text-gray-700 leading-relaxed mb-6">
								Hi, I'm Vinay Malik, a passionate software
								engineer and a fourth-year undergraduate student
								at IIIT Kota. I have a strong foundation in
								computer science, and I focus on building web
								applications that provide seamless user
								experiences.
							</p>
							<p className="text-lg text-gray-700 leading-relaxed mb-6">
								I specialize in frontend development and strive
								to create engaging and intuitive interfaces. I
								am constantly exploring new technologies and
								looking for opportunities to learn and grow.
								Outside of coding, I enjoy collaborating on
								open-source projects and exploring design
								trends.
							</p>
							<p className="text-lg text-gray-700 leading-relaxed">
								I'm always open to collaborating with others,
								sharing ideas, and taking on new challenges.
								Feel free to connect with me and let's build
								something amazing together!
							</p>
						</div>
					</div>

					{/* Projects Section */}
					<div id="projects-section" className="mt-36 px-8 lg:px-32">
						<h2 className="text-3xl font-bold text-teal-600 mb-8 text-center">
							Some Things I’ve Built
						</h2>
						<AllProjects />
					</div>
					<div id="contact-section" className="mt-32 mb-36 px-8 lg:px-32">
						<div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <motion.h2 
            className="text-3xl sm:text-4xl font-bold text-gray-800 mb-2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            Get In Touch
          </motion.h2>
          <motion.h3 
            className="text-2xl sm:text-3xl font-semibold text-teal-600 mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
          >
            Let's build something amazing together!
          </motion.h3>
          <motion.p 
            className="text-lg text-gray-600 mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.5 }}
          >
            Any questions? Connect through social media.
          </motion.p>
        </motion.div>

        <motion.div 
          className="flex justify-center space-x-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.5 }}
        >
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-teal-600 transition-colors duration-300">
            <FontAwesomeIcon icon={faLinkedinIn} size="2x" />
          </a>
          <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-teal-600 transition-colors duration-300">
            <FontAwesomeIcon icon={faGithub} size="2x" />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-teal-600 transition-colors duration-300">
            <FontAwesomeIcon icon={faTwitter} size="2x" />
          </a>
        </motion.div>
      </div>
					</div>
				</div>

				{/* Footer Section */}
				<Footer />

				{/* Left Fixed Icons */}
				<div className="fixed bottom-0 left-20 flex flex-col items-center">
					<a
						href="https://github.com"
						className="text-teal-600 hover:text-teal-700 transition-all mb-4"
					>
						<FontAwesomeIcon icon={faGithub} size="lg" />
					</a>
					<a
						href="https://linkedin.com"
						className="text-teal-600 hover:text-teal-700 transition-all mb-4"
					>
						<FontAwesomeIcon icon={faLinkedinIn} size="lg" />
					</a>
					<a
						href="https://twitter.com"
						className="text-teal-600 hover:text-teal-700 transition-all mb-4"
					>
						<FontAwesomeIcon icon={faTwitter} size="lg" />
					</a>
					<div className="w-[1px] h-32 bg-teal-600"></div>
				</div>

				{/* Right Fixed Email */}
				<div className="fixed bottom-0 right-0 flex flex-col items-center">
					<a
						href="mailto:vinaymalik1729@gmail.com"
						className="text-teal-600 hover:text-teal-700 transition-all rotate-90 text-sm mb-24"
					>
						vinaymalik1729@gmail.com
					</a>
					<div className="w-[1px] h-32 bg-teal-600"></div>
				</div>
			</div>
		</>
	);
};

export default Homepage;
