import React, { useRef, useEffect } from "react";
import { NavLink } from "react-router-dom";
import gsap from "gsap";
import { personalDetails, socialMediaUrl } from "../Details.jsx";

function Home() {
  const { name, tagline, img, about } = personalDetails;
  const { github, linkdein } = socialMediaUrl;
  const h11 = useRef();
  const h12 = useRef();
  const h13 = useRef();
  const h14 = useRef();
  const myimageref = useRef();
  const buttonsRef = useRef();
  useEffect(() => {
    const tl = gsap.timeline();
    tl.from(
      h11.current,
      {
        x: "-100%",
        delay: 0.2,
        opacity: 0,
        duration: 0.6,
        ease: "Power3.easeOut",
      },
      "<"
    )
      .from(
        h12.current,
        {
          x: "-100%",
          delay: 0.1,
          opacity: 0,
          duration: 0.8,
          ease: "Power3.easeOut",
        },
        "<"
      )
      .from(
        h13.current,
        {
          x: "-100%",
          delay: 0.05,
          opacity: 0,
          duration: 0.8,
          ease: "Power3.easeOut",
        },
        "<"
      )
      .from(
        h14.current,
        {
          y: "50px",
          opacity: 0,
          duration: 0.6,
          ease: "Power3.easeOut",
        },
        "-=0.4"
      )
      .from(
        buttonsRef.current,
        {
          y: "50px",
          opacity: 0,
          duration: 0.6,
          ease: "Power3.easeOut",
        },
        "-=0.4"
      )
      .from(
        myimageref.current,
        {
          x: "200%",
          delay: 0.1,
          opacity: 0,
          duration: 0.8,
          ease: "Power3.easeOut",
        },
        "<"
      );
  }, []);

  return (
    <main className="container mx-auto max-width pt-10 pb-20">
      {/* Hero Section */}
      <div className="flex items-center justify-center min-h-[80vh]">
        <div className="grid md:grid-cols-2 gap-8 items-center w-full">
          {/* Left Content */}
          <div className="space-y-6">
            {/* Greeting */}
            <div className="space-y-2">
              <h1
                ref={h11}
                className="text-lg md:text-xl text-gray-600 dark:text-gray-400 font-medium"
              >
                Hi there! 👋 I'm
              </h1>
              
              {/* Name with gradient */}
              <h1
                ref={h12}
                className="text-4xl md:text-6xl xl:text-7xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 bg-clip-text text-transparent leading-tight"
              >
                {name}
              </h1>
              
              {/* Tagline */}
              <h2
                ref={h13}
                className="text-2xl md:text-3xl xl:text-4xl text-dark-heading dark:text-light-heading font-semibold leading-relaxed"
              >
                {tagline}
              </h2>
            </div>

            {/* About/Description */}
            <p
              ref={h14}
              className="text-lg md:text-xl text-gray-600 dark:text-gray-300 leading-relaxed max-w-lg"
            >
              {about}
            </p>

            {/* Call to Action Buttons */}
            <div ref={buttonsRef} className="flex flex-col sm:flex-row gap-4 pt-6">
              <NavLink
                to="/projects"
                className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 ease-out hover:from-blue-700 hover:to-purple-700"
              >
                View My Work
                <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </NavLink>
              
              <NavLink
                to="/contact"
                className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-gray-700 dark:text-gray-200 bg-white dark:bg-gray-800 border-2 border-gray-300 dark:border-gray-600 rounded-lg shadow-md hover:shadow-lg transform hover:scale-105 transition-all duration-300 ease-out hover:border-blue-500 dark:hover:border-blue-400"
              >
                Get In Touch
                <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </NavLink>
            </div>

            {/* Social Links */}
            <div className="flex items-center space-x-6 pt-6">
              <span className="text-gray-600 dark:text-gray-400 font-medium">Connect with me:</span>
              <div className="flex space-x-4">
                <a
                  href={github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full transition-all duration-300 transform hover:scale-110"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                </a>
                <a
                  href={linkdein}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full transition-all duration-300 transform hover:scale-110"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="flex justify-center md:justify-end">
            <div className="relative">
              {/* Background decoration */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full blur-3xl opacity-20 transform rotate-6 scale-110"></div>
              
              {/* Main image with fallback */}
              <div className="relative w-80 h-80 md:w-96 md:h-96 rounded-full overflow-hidden shadow-2xl border-4 border-white dark:border-gray-800 transform hover:scale-105 transition-transform duration-300">
                {img ? (
                  <img
                    ref={myimageref}
                    className="w-full h-full object-cover"
                    src={img}
                    alt={name}
                    onError={(e) => {
                      console.log('Image failed to load:', img);
                      e.target.style.display = 'none';
                      e.target.nextSibling.style.display = 'flex';
                    }}
                  />
                ) : null}
                
                {/* Fallback when image fails to load */}
                <div 
                  className="w-full h-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white text-6xl font-bold"
                  style={{ display: 'none' }}
                >
                  {name ? name.charAt(0).toUpperCase() : 'C'}
                </div>
              </div>
              
              {/* Floating elements */}
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full opacity-80 animate-bounce delay-1000"></div>
              <div className="absolute -bottom-6 -left-6 w-16 h-16 bg-gradient-to-r from-green-400 to-blue-500 rounded-full opacity-70 animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Home;
