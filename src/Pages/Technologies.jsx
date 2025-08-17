import React, { useEffect, useRef } from "react";
import { techStackDetails } from "../Details.jsx";
import gsap from "gsap";

function Technologies() {
  const {
    html,
    css,
    js,
    react,
    redux,
    tailwind,
    bootstrap,
    vscode,
    git,
    github,
    npm,
    postman,
    java,
    springboot,
    mysql,
    mongodb,
    chatgpt,
    copilot,
  } = techStackDetails;

  const titleRef = useRef();
  const subtitleRef = useRef();
  const techStackRef = useRef();
  const databasesRef = useRef();
  const toolsRef = useRef();

  useEffect(() => {
    const tl = gsap.timeline();
    
    tl.from(titleRef.current, {
      y: 50,
      opacity: 0,
      duration: 0.8,
      ease: "Power3.easeOut"
    })
    .from(subtitleRef.current, {
      y: 30,
      opacity: 0,
      duration: 0.6,
      ease: "Power3.easeOut"
    }, "-=0.4")
    .from(techStackRef.current.children, {
      y: 50,
      opacity: 0,
      duration: 0.6,
      stagger: 0.1,
      ease: "Power3.easeOut"
    }, "-=0.3")
    .from(databasesRef.current.children, {
      y: 50,
      opacity: 0,
      duration: 0.6,
      stagger: 0.1,
      ease: "Power3.easeOut"
    }, "-=0.2")
    .from(toolsRef.current.children, {
      y: 50,
      opacity: 0,
      duration: 0.6,
      stagger: 0.1,
      ease: "Power3.easeOut"
    }, "-=0.2");
  }, []);

  const TechCard = ({ src, title, category, delay = 0 }) => (
    <div className="group relative">
      <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-2xl border border-gray-200 dark:border-gray-700 transform hover:scale-110 transition-all duration-300 ease-out hover:-translate-y-2 relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-700 dark:to-gray-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        
        {/* Tech logo */}
        <div className="relative z-10 flex flex-col items-center">
          <div className="w-16 h-16 md:w-20 md:h-20 mb-4 flex items-center justify-center">
            <img 
              src={src} 
              alt={title}
              className="w-full h-full object-contain filter group-hover:drop-shadow-lg transition-all duration-300"
            />
          </div>
          
          {/* Tech name */}
          <h3 className="text-sm md:text-base font-semibold text-gray-800 dark:text-gray-200 text-center group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
            {title}
          </h3>
          
          {/* Category badge */}
          <span className="text-xs text-gray-500 dark:text-gray-400 mt-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            {category}
          </span>
        </div>

        {/* Hover border effect */}
        <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-blue-400 dark:group-hover:border-blue-500 transition-colors duration-300"></div>
      </div>
    </div>
  );

  return (
    <main className="container mx-auto max-width pt-10 pb-20">
      {/* Hero Section */}
      <section className="text-center mb-16">
        <h1 
          ref={titleRef}
          className="text-4xl md:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 bg-clip-text text-transparent mb-6 leading-tight"
        >
          Technologies & Tools
        </h1>
        <p 
          ref={subtitleRef}
          className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed"
        >
          A comprehensive overview of the technologies, frameworks, and tools I use to bring ideas to life. 
          From frontend magic to backend power, here's my digital toolkit.
        </p>
      </section>

      {/* Tech Stack Section */}
      <section className="mb-16">
        <div className="mb-8">
          <div className="flex items-center mb-4">
            <div className="w-2 h-8 bg-gradient-to-b from-blue-500 to-blue-600 rounded-full mr-4"></div>
            <h2 className="text-2xl md:text-3xl font-bold text-dark-heading dark:text-light-heading">
              Frontend & Backend
            </h2>
          </div>
          <p className="text-gray-600 dark:text-gray-400 ml-6">
            Core technologies for building modern web applications
          </p>
        </div>
        
        <div 
          ref={techStackRef}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-6"
        >
          <TechCard src={html} title="HTML5" category="Markup" />
          <TechCard src={css} title="CSS3" category="Styling" />
          <TechCard src={js} title="JavaScript" category="Programming" />
          <TechCard src={react} title="React" category="Framework" />
          <TechCard src={redux} title="Redux" category="State Management" />
          <TechCard src={tailwind} title="Tailwind CSS" category="CSS Framework" />
          <TechCard src={bootstrap} title="Bootstrap" category="CSS Framework" />
          <TechCard src={java} title="Java" category="Programming" />
          <TechCard src={springboot} title="Spring Boot" category="Framework" />
        </div>
      </section>

      {/* Databases Section */}
      <section className="mb-16">
        <div className="mb-8">
          <div className="flex items-center mb-4">
            <div className="w-2 h-8 bg-gradient-to-b from-green-500 to-green-600 rounded-full mr-4"></div>
            <h2 className="text-2xl md:text-3xl font-bold text-dark-heading dark:text-light-heading">
              Databases
            </h2>
          </div>
          <p className="text-gray-600 dark:text-gray-400 ml-6">
            Data storage and management solutions
          </p>
        </div>
        
        <div 
          ref={databasesRef}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-6"
        >
          <TechCard src={mysql} title="MySQL" category="Relational DB" />
          <TechCard src={mongodb} title="MongoDB" category="NoSQL DB" />
        </div>
      </section>

      {/* Tools & AI Section */}
      <section className="mb-16">
        <div className="mb-8">
          <div className="flex items-center mb-4">
            <div className="w-2 h-8 bg-gradient-to-b from-purple-500 to-purple-600 rounded-full mr-4"></div>
            <h2 className="text-2xl md:text-3xl font-bold text-dark-heading dark:text-light-heading">
              Development Tools & AI
            </h2>
          </div>
          <p className="text-gray-600 dark:text-gray-400 ml-6">
            Essential tools and AI assistants that supercharge my development workflow
          </p>
        </div>
        
        <div 
          ref={toolsRef}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-6"
        >
          <TechCard src={vscode} title="VS Code" category="IDE" />
          <TechCard src={git} title="Git" category="Version Control" />
          <TechCard src={github} title="GitHub" category="Repository" />
          <TechCard src={npm} title="NPM" category="Package Manager" />
          <TechCard src={postman} title="Postman" category="API Testing" />
          <TechCard src={chatgpt} title="ChatGPT" category="AI Assistant" />
          <TechCard src={copilot} title="GitHub Copilot" category="AI Coding" />
        </div>
      </section>
    </main>
  );
}

export default Technologies;
