import React, { useRef, useEffect } from "react";
import { contactDetails } from "../Details.jsx";
import gsap from "gsap";

function Contact() {
  const { email, phone } = contactDetails;
  const titleRef = useRef();
  const subtitleRef = useRef();
  const cardRef = useRef();
  const socialRef = useRef();

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
    .from(cardRef.current, {
      y: 50,
      opacity: 0,
      duration: 0.8,
      ease: "Power3.easeOut"
    }, "-=0.3")
    .from(socialRef.current, {
      y: 30,
      opacity: 0,
      duration: 0.6,
      ease: "Power3.easeOut"
    }, "-=0.4");
  }, []);

  return (
    <main className="container mx-auto max-width pt-10 pb-20">
      {/* Hero Section */}
      <div className="text-center mb-16">
        <h1 
          ref={titleRef}
          className="text-4xl md:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 bg-clip-text text-transparent mb-6 leading-tight"
        >
          Let's Connect
        </h1>
        <p 
          ref={subtitleRef}
          className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed"
        >
          Have a project in mind or just want to chat? I'd love to hear from you. 
          Let's create something amazing together!
        </p>
      </div>

      <div className="max-w-4xl mx-auto">
        {/* Contact Information Card */}
        <div 
          ref={cardRef}
          className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl border border-gray-200 dark:border-gray-700 p-8 md:p-12 relative overflow-hidden"
        >
          {/* Background decoration */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full blur-3xl opacity-10"></div>
          <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-purple-400 to-pink-500 rounded-full blur-2xl opacity-10"></div>
          
          <div className="relative">
            <h2 className="text-3xl md:text-4xl font-bold text-dark-heading dark:text-light-heading mb-12 text-center">
              Ready to Start a Conversation?
            </h2>
            
            <div className="space-y-6">
              {/* Email */}
              <div className="group">
                <div className="flex items-center space-x-6 p-6 rounded-2xl bg-gradient-to-r from-blue-50 to-blue-100 dark:from-gray-700 dark:to-gray-600 hover:from-blue-100 hover:to-blue-200 dark:hover:from-gray-600 dark:hover:to-gray-500 transition-all duration-300 cursor-pointer transform hover:scale-105 shadow-lg hover:shadow-xl">
                  <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center shadow-lg">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div className="flex-grow">
                    <p className="text-sm text-gray-600 dark:text-gray-400 font-semibold mb-1">Drop me an email</p>
                    <a 
                      href={`mailto:${email}`}
                      className="text-xl md:text-2xl font-bold text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors duration-300 break-all"
                    >
                      {email}
                    </a>
                  </div>
                  <div className="opacity-60 group-hover:opacity-100 transition-opacity duration-300">
                    <svg className="w-6 h-6 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </div>
                </div>
              </div>

              {/* Phone */}
              <div className="group">
                <div className="flex items-center space-x-6 p-6 rounded-2xl bg-gradient-to-r from-green-50 to-green-100 dark:from-gray-700 dark:to-gray-600 hover:from-green-100 hover:to-green-200 dark:hover:from-gray-600 dark:hover:to-gray-500 transition-all duration-300 cursor-pointer transform hover:scale-105 shadow-lg hover:shadow-xl">
                  <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-r from-green-500 to-green-600 rounded-2xl flex items-center justify-center shadow-lg">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div className="flex-grow">
                    <p className="text-sm text-gray-600 dark:text-gray-400 font-semibold mb-1">Give me a call</p>
                    <a 
                      href={`tel:${phone}`}
                      className="text-xl md:text-2xl font-bold text-green-600 dark:text-green-400 hover:text-green-700 dark:hover:text-green-300 transition-colors duration-300"
                    >
                      {phone}
                    </a>
                  </div>
                  <div className="opacity-60 group-hover:opacity-100 transition-opacity duration-300">
                    <svg className="w-6 h-6 text-green-600 dark:text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>            {/* Call to Action */}
            <div className="text-center mt-12">
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
                Whether you have a project in mind, want to collaborate, or just want to say hello - I'd love to hear from you! 
                Choose your preferred way to connect.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href={`mailto:${email}?subject=Let's work together!&body=Hi Chinmaya,%0D%0A%0D%0AI'd like to discuss...`}
                  className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white bg-gradient-to-r from-blue-600 to-blue-700 rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 ease-out hover:from-blue-700 hover:to-blue-800"
                >
                  <svg className="mr-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  Send Email
                </a>
                
                <a
                  href={`tel:${phone}`}
                  className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-green-700 dark:text-green-300 bg-green-50 dark:bg-gray-700 border-2 border-green-200 dark:border-green-600 rounded-xl shadow-md hover:shadow-lg transform hover:scale-105 transition-all duration-300 ease-out hover:bg-green-100 dark:hover:bg-gray-600"
                >
                  <svg className="mr-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  Call Now
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Social Media & Additional Info */}
      <div 
        ref={socialRef}
        className="mt-16 text-center"
      >
        <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-gray-800 dark:to-gray-700 rounded-2xl p-8 border border-gray-200 dark:border-gray-600">
          <h3 className="text-2xl font-bold text-dark-heading dark:text-light-heading mb-4">
            Let's Connect on Social Media
          </h3>
          <p className="text-gray-600 dark:text-gray-300 mb-6">
            Follow me for updates on my latest projects and tech insights
          </p>
          
          <div className="flex justify-center space-x-6">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-white dark:bg-gray-800 p-4 rounded-full shadow-lg hover:shadow-xl transform hover:scale-110 transition-all duration-300"
            >
              <svg className="w-6 h-6 text-gray-700 dark:text-gray-300 group-hover:text-blue-600 dark:group-hover:text-blue-400" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
            </a>
            
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-white dark:bg-gray-800 p-4 rounded-full shadow-lg hover:shadow-xl transform hover:scale-110 transition-all duration-300"
            >
              <svg className="w-6 h-6 text-gray-700 dark:text-gray-300 group-hover:text-blue-600 dark:group-hover:text-blue-400" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Contact;
