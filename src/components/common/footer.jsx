import React from "react";

const Footer = () => {
  return (
    <footer className=" py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center">
          {/* Footer Links */}
          <nav className="mb-6">
            <ul className="flex flex-wrap justify-center space-x-6">
              <li>
                <a
                  href="#hero-section"
                  className="text-gray-600 hover:text-teal-600 transition-colors duration-300 text-sm font-medium"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#about-section"
                  className="text-gray-600 hover:text-teal-600 transition-colors duration-300 text-sm font-medium"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#projects-section"
                  className="text-gray-600 hover:text-teal-600 transition-colors duration-300 text-sm font-medium"
                >
                  Projects
                </a>
              </li>
              <li>
                <a
                  href="#contact-section"
                  className="text-gray-600 hover:text-teal-600 transition-colors duration-300 text-sm font-medium"
                >
                  Contact
                </a>
              </li>
            </ul>
          </nav>

          {/* Footer Credits */}
          <div className="text-gray-500 text-sm text-center">
            &copy; {new Date().getFullYear()} Vinay Malik. All Rights Reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

