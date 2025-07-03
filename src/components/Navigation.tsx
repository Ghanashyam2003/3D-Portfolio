import React, { useState, useEffect } from 'react';
import { gsap } from 'gsap';
import { List, X } from 'phosphor-react';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Animate nav on load
    gsap.from(".nav-container", {
      y: -100,
      opacity: 0,
      duration: 1.2,
      ease: "power2.out",
      delay: 3.5 // After preloader
    });
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    
    if (!isOpen) {
      gsap.to(".mobile-menu", {
        opacity: 1,
        y: 0,
        duration: 0.5,
        ease: "power2.out"
      });
    } else {
      gsap.to(".mobile-menu", {
        opacity: 0,
        y: -20,
        duration: 0.3,
        ease: "power2.in"
      });
    }
  };

  const navItems = ['About', 'Projects', 'Certifications', 'Contact'];

  return (
    <>
      <nav className="nav-container fixed top-0 left-0 right-0 z-40 px-6 py-4">
        <div className="max-w-7xl mx-auto">
          <div className="glass-nav backdrop-blur-md bg-white/5 border border-white/10 rounded-2xl px-6 py-3 flex items-center justify-between">
            <div className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              GB
            </div>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              {navItems.map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="text-gray-300 hover:text-white transition-colors duration-300 relative hover-glow"
                >
                  {item}
                </a>
              ))}
              <button className="premium-button px-6 py-2 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full text-white font-medium hover:scale-105 transition-transform duration-300">
                Hire Me
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-white p-2"
              onClick={toggleMenu}
            >
              {isOpen ? <X size={24} /> : <List size={24} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div className={`mobile-menu fixed inset-0 z-30 bg-black/95 backdrop-blur-md ${isOpen ? 'block' : 'hidden'}`} style={{ opacity: 0, transform: 'translateY(-20px)' }}>
        <div className="flex flex-col items-center justify-center h-full space-y-8">
          {navItems.map((item, index) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-2xl text-gray-300 hover:text-white transition-colors duration-300"
              onClick={() => setIsOpen(false)}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {item}
            </a>
          ))}
          <button className="premium-button px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full text-white font-medium text-xl">
            Hire Me
          </button>
        </div>
      </div>
    </>
  );
};

export default Navigation;