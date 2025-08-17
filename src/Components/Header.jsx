import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { logos, socialMediaUrl } from "../Details.jsx";

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const { linkdein, github } = socialMediaUrl;
  const toggleClass = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="bg-light-background dark:bg-dark-background shadow-md">
      <div className="container mx-auto md:flex justify-between py-4 max-width px-4">
        <div className="flex justify-between items-center">
          <NavLink 
            to="/" 
            className="flex items-center group"
            onClick={() => setIsOpen(false)} // Close mobile menu when logo is clicked
          >
            <img 
              className="w-20 h-20 hover:scale-105 transition-transform duration-200 cursor-pointer" 
              src={logos.logogradient} 
              alt="Portfolio Logo - Click to go home" 
              title="Go to Home Page"
            />
          </NavLink>
          <button 
            onClick={toggleClass} 
            className="md:hidden p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6 stroke-dark-heading dark:stroke-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
        <nav className={`${!isOpen ? "hidden md:flex" : "block md:flex"} w-full md:w-auto mt-4 md:mt-0`}>
          <ul className="flex flex-col md:flex-row md:items-center md:space-x-8 space-y-2 md:space-y-0">
            <li>
              <NavLink 
                to="/" 
                onClick={toggleClass}
                className={({ isActive }) => 
                  `block px-4 py-2 rounded-md text-dark-heading dark:text-light-content transition-colors duration-200 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-50 dark:hover:bg-gray-800
                  ${isActive ? 'text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/30' : ''}`
                }
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink 
                to="/about" 
                onClick={toggleClass}
                className={({ isActive }) => 
                  `block px-4 py-2 rounded-md text-dark-heading dark:text-light-content transition-colors duration-200 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-50 dark:hover:bg-gray-800
                  ${isActive ? 'text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/30' : ''}`
                }
              >
                About
              </NavLink>
            </li>
            <li>
              <NavLink 
                to="/technologies" 
                onClick={toggleClass}
                className={({ isActive }) => 
                  `block px-4 py-2 rounded-md text-dark-heading dark:text-light-content transition-colors duration-200 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-50 dark:hover:bg-gray-800
                  ${isActive ? 'text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/30' : ''}`
                }
              >
                Technologies
              </NavLink>
            </li>
            <li>
              <NavLink 
                to="/projects" 
                onClick={toggleClass}
                className={({ isActive }) => 
                  `block px-4 py-2 rounded-md text-dark-heading dark:text-light-content transition-colors duration-200 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-50 dark:hover:bg-gray-800
                  ${isActive ? 'text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/30' : ''}`
                }
              >
                Projects
              </NavLink>
            </li>
            <li>
              <NavLink 
                to="/contact" 
                onClick={toggleClass}
                className={({ isActive }) => 
                  `block px-4 py-2 rounded-md text-dark-heading dark:text-light-content transition-colors duration-200 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-50 dark:hover:bg-gray-800
                  ${isActive ? 'text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/30' : ''}`
                }
              >
                Contact
              </NavLink>
            </li>
          </ul>
          <div className="flex items-center space-x-4 mt-4 md:mt-0 justify-center md:justify-end">
            <a 
              href={linkdein} 
              target="_blank" 
              rel="noreferrer noopener"
              className="p-2 text-blue-600 hover:text-blue-700 hover:bg-blue-50 dark:hover:bg-blue-900/20 rounded-md transition-all duration-200 hover:scale-105"
              aria-label="LinkedIn Profile"
            >
              <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </a>
            <a 
              href={github} 
              target="_blank" 
              rel="noreferrer noopener"
              className="p-2 text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-800 rounded-md transition-all duration-200 hover:scale-105"
              aria-label="GitHub Profile"
            >
              <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
}

export default Header;
