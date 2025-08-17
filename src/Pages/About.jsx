import React, { useRef, useEffect } from "react";
import Work from "../Components/Work.jsx";
import { personalDetails, workDetails, eduDetails } from "../Details.jsx";
import gsap from "gsap";

function About() {
  const titleRef = useRef();
  const aboutRef = useRef();
  const workTitleRef = useRef();
  const eduTitleRef = useRef();
  const statsRef = useRef();

  useEffect(() => {
    const tl = gsap.timeline();
    
    tl.from(titleRef.current, {
      y: 50,
      opacity: 0,
      duration: 0.8,
      ease: "Power3.easeOut"
    })
    .from(aboutRef.current, {
      y: 30,
      opacity: 0,
      duration: 0.6,
      ease: "Power3.easeOut"
    }, "-=0.4")
    .from(statsRef.current, {
      y: 40,
      opacity: 0,
      duration: 0.8,
      ease: "Power3.easeOut"
    }, "-=0.3")
    .from(workTitleRef.current, {
      y: 30,
      opacity: 0,
      duration: 0.6,
      ease: "Power3.easeOut"
    }, "-=0.2")
    .from(eduTitleRef.current, {
      y: 30,
      opacity: 0,
      duration: 0.6,
      ease: "Power3.easeOut"
    }, "-=0.2");
  }, []);

  return (
    <main className="container mx-auto max-width pt-10 pb-20">
      {/* Hero Section */}
      <section className="mb-16">
        <h1 
          ref={titleRef}
          className="text-4xl md:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 bg-clip-text text-transparent mb-8 leading-tight"
        >
          About Me
        </h1>
        
        <div 
          ref={aboutRef}
          className="bg-white dark:bg-gray-800 rounded-3xl p-8 md:p-12 shadow-xl border border-gray-200 dark:border-gray-700 relative overflow-hidden"
        >
          {/* Background decoration */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full blur-3xl opacity-10"></div>
          <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-purple-400 to-pink-500 rounded-full blur-2xl opacity-10"></div>
          
          <div className="relative">
            <div className="flex items-start space-x-4 mb-6">
              <div className="w-1 h-16 bg-gradient-to-b from-blue-500 to-purple-600 rounded-full"></div>
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-dark-heading dark:text-light-heading mb-4">
                  My Journey
                </h2>
                <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 leading-relaxed lg:max-w-4xl">
                  {personalDetails.about}
                </p>
              </div>
            </div>
            
            {/* Personal highlights */}
            <div className="mt-8 grid md:grid-cols-2 gap-6">
              <div className="bg-gradient-to-r from-blue-50 to-blue-100 dark:from-gray-700 dark:to-gray-600 rounded-2xl p-6">
                <div className="flex items-center space-x-3 mb-3">
                  <div className="w-10 h-10 bg-blue-500 rounded-lg flex items-center justify-center">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200">Passion</h3>
                </div>
                <p className="text-gray-600 dark:text-gray-400">
                  Building innovative solutions that bridge technology and real-world problems
                </p>
              </div>
              
              <div className="bg-gradient-to-r from-purple-50 to-purple-100 dark:from-gray-700 dark:to-gray-600 rounded-2xl p-6">
                <div className="flex items-center space-x-3 mb-3">
                  <div className="w-10 h-10 bg-purple-500 rounded-lg flex items-center justify-center">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200">Vision</h3>
                </div>
                <p className="text-gray-600 dark:text-gray-400">
                  Creating seamless user experiences with cutting-edge full-stack technologies
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Work Experience Section */}
      <section className="mb-16">
        <div className="flex items-center mb-8">
          <div className="w-2 h-8 bg-gradient-to-b from-green-500 to-green-600 rounded-full mr-4"></div>
          <h1 
            ref={workTitleRef}
            className="text-3xl md:text-4xl font-bold text-dark-heading dark:text-light-heading"
          >
            Work Experience
          </h1>
        </div>
        
        <div className="space-y-6">
          {React.Children.toArray(
            workDetails.map(({ Position, Company, Location, Type, Duration }) => (
              <div className="transform hover:scale-[1.02] transition-transform duration-300">
                <Work
                  position={Position}
                  company={Company}
                  location={Location}
                  type={Type}
                  duration={Duration}
                />
              </div>
            ))
          )}
        </div>
      </section>

      {/* Education Section */}
      <section className="mb-16">
        <div className="flex items-center mb-8">
          <div className="w-2 h-8 bg-gradient-to-b from-blue-500 to-blue-600 rounded-full mr-4"></div>
          <h1 
            ref={eduTitleRef}
            className="text-3xl md:text-4xl font-bold text-dark-heading dark:text-light-heading"
          >
            Education
          </h1>
        </div>
        
        <div className="space-y-6">
          {React.Children.toArray(
            eduDetails.map(({ Position, Company, Location, Type, Duration }) => (
              <div className="transform hover:scale-[1.02] transition-transform duration-300">
                <Work
                  position={Position}
                  company={Company}
                  location={Location}
                  type={Type}
                  duration={Duration}
                />
              </div>
            ))
          )}
        </div>
      </section>

      {/* Call to Action */}
      <section className="text-center">
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-8 md:p-12 text-white relative overflow-hidden">
          {/* Background decoration */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-white rounded-full opacity-10"></div>
          <div className="absolute bottom-0 left-0 w-24 h-24 bg-white rounded-full opacity-5"></div>
          
          <div className="relative">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Let's Build Something Amazing Together
            </h3>
            <p className="text-blue-100 mb-8 max-w-2xl mx-auto">
              I'm always excited to work on new projects and collaborate with fellow developers. 
              Ready to bring your ideas to life!
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-blue-600 bg-white rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 ease-out"
              >
                Get In Touch
                <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </a>
              
              <a
                href="/projects"
                className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white border-2 border-white rounded-xl hover:bg-white hover:text-blue-600 transform hover:scale-105 transition-all duration-300 ease-out"
              >
                View My Work
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default About;
