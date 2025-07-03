import React, { useEffect } from 'react';
import { gsap } from 'gsap';

const PreLoader = () => {
  useEffect(() => {
    const tl = gsap.timeline();
    
    // Animate the logo/text
    tl.from(".preloader-text", {
      opacity: 0,
      y: 50,
      duration: 1,
      ease: "power2.out"
    })
    .from(".preloader-subtitle", {
      opacity: 0,
      y: 30,
      duration: 0.8,
      ease: "power2.out"
    }, "-=0.5");

    // Progress bar animation
    gsap.to(".progress-bar", {
      width: "100%",
      duration: 2.5,
      ease: "power2.out",
      delay: 0.5,
      onComplete: () => {
        // Hide preloader and show main content
        gsap.to(".preloader", {
          opacity: 0,
          scale: 0.9,
          duration: 1,
          ease: "power2.inOut",
          onComplete: () => {
            const preloader = document.querySelector(".preloader") as HTMLElement;
            const mainContent = document.querySelector(".main-content") as HTMLElement;
            
            if (preloader) {
              preloader.style.display = "none";
            }
            
            if (mainContent) {
              mainContent.style.display = "block";
              
              // Animate main content entrance
              gsap.from(".main-content", {
                opacity: 0,
                y: 50,
                duration: 1.2,
                ease: "power2.out"
              });
            }
          }
        });
      }
    });
  }, []);

  return (
    <div className="preloader fixed inset-0 bg-black z-50 flex items-center justify-center">
      <div className="text-center">
        <h1 className="preloader-text text-6xl md:text-8xl font-bold bg-gradient-to-r from-blue-400 via-purple-500 to-violet-600 bg-clip-text text-transparent mb-4">
          Ghanashyam
        </h1>
        <p className="preloader-subtitle text-xl text-gray-400 mb-12">
          Full-Stack Developer
        </p>
        
        {/* Progress Bar */}
        <div className="progress-container w-80 h-1 bg-gray-800 rounded-full mx-auto relative overflow-hidden">
          <div className="progress-bar h-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-full w-0 relative">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-pulse"></div>
          </div>
        </div>
      </div>
      
      {/* Background Animation */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-purple-500/10 rounded-full blur-2xl animate-pulse delay-1000"></div>
      </div>
    </div>
  );
};

export default PreLoader;   