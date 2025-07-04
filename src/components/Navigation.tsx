import React, { useState, useEffect } from 'react';
import { gsap } from 'gsap';
import { List, X } from 'phosphor-react';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Animate nav on load
    gsap.from(".nav-container", { 
  y: 0, 
  opacity: 1 
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
      <nav className="nav-container fixed top-0 left-0 right-0 z-50 px-6 py-4">
        <div className="max-w-7xl mx-auto">
          <div className="glass-nav backdrop-blur-xl bg-black/20 border border-white/10 rounded-2xl px-8 py-4 flex items-center justify-between shadow-2xl">
            {/* Logo */}
            <div className="text-3xl font-bold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
              GB
            </div>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-10">
              {navItems.map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="text-gray-300 hover:text-white transition-all duration-300 relative hover-glow text-lg font-medium"
                >
                  {item}
                </a>
              ))}
              
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-white p-3 hover:bg-white/10 rounded-xl transition-all duration-300"
              onClick={toggleMenu}
            >
              {isOpen ? <X size={28} /> : <List size={28} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div className={`mobile-menu fixed inset-0 z-40 bg-black/95 backdrop-blur-xl ${isOpen ? 'block' : 'hidden'}`} style={{ opacity: 0, transform: 'translateY(-20px)' }}>
        <div className="flex flex-col items-center justify-center h-full space-y-10">
          {navItems.map((item, index) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-3xl text-gray-300 hover:text-white transition-all duration-300 hover:scale-110"
              onClick={() => setIsOpen(false)}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {item}
            </a>
          ))}
          
        </div>
      </div>
    </>
  );
};

export default Navigation;