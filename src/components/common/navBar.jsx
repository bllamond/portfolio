import React, { useState } from "react";
import { Menu, X } from "lucide-react";

const NavBar = ({ active }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleScroll = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      const offset = 80; // Space above the section in pixels
      const top = section.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: "smooth" });
    }
    setIsMenuOpen(false); // Close mobile menu after clicking
  };

  const navItems = [
    { id: "home", label: "Home", section: "hero-section" },
    { id: "about", label: "About", section: "about-section" },
    { id: "projects", label: "Projects", section: "projects-section" },
    { id: "contact", label: "Contact", section: "contact-section" },
    {
      id: "resume",
      label: "Resume",
      href: "https://drive.google.com/file/d/1GQGphyD-87LY5iHcy6ieHprDa-W8Wxth/view", // Replace with your resume URL
    },
  ];

  return (
    <div className="flex justify-center items-center">
      <nav className="fixed top-[4vh] z-50 flex justify-center items-center w-full px-4 md:px-0">
        <div className="bg-white shadow-lg rounded-full flex items-center px-4 py-2 md:px-8 md:py-3">
          {/* Mobile menu button */}
          <button
            className="md:hidden mr-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          {/* Desktop menu */}
          <ul className="hidden md:flex gap-8 list-none">
            {navItems.map((item) => (
              <li
                key={item.id}
                className={`font-bold text-md ${
                  active === item.id ? "text-teal-500" : "text-black"
                }`}
              >
                {item.href ? (
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-teal-500 px-4 py-2 cursor-pointer"
                  >
                    {item.label}
                  </a>
                ) : (
                  <span
                    className="hover:text-teal-500 px-4 py-2 cursor-pointer"
                    onClick={() => handleScroll(item.section)}
                  >
                    {item.label}
                  </span>
                )}
              </li>
            ))}
          </ul>

          {/* Mobile menu */}
          {isMenuOpen && (
            <ul className="md:hidden absolute top-full left-0 right-0 bg-white shadow-lg rounded-b-lg mt-2 py-2">
              {navItems.map((item) => (
                <li
                  key={item.id}
                  className={`font-bold text-md ${
                    active === item.id ? "text-teal-500" : "text-black"
                  }`}
                >
                  {item.href ? (
                    <a
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block hover:text-teal-500 px-4 py-2 cursor-pointer"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item.label}
                    </a>
                  ) : (
                    <span
                      className="block hover:text-teal-500 px-4 py-2 cursor-pointer"
                      onClick={() => handleScroll(item.section)}
                    >
                      {item.label}
                    </span>
                  )}
                </li>
              ))}
            </ul>
          )}
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
