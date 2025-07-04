import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const Footer = () => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.from(".footer-content", {
      y: 50,
      opacity: 0,
      duration: 1,
      ease: "power2.out",
      scrollTrigger: {
        trigger: ".footer-section",
        start: "top 90%",
        toggleActions: "play none none reverse"
      }
    });

    // Floating particles animation
    gsap.to(".particle", {
      y: -20,
      duration: 3,
      repeat: -1,
      yoyo: true,
      ease: "power1.inOut",
      stagger: 0.5
    });
  }, []);

  const navItems = ['About', 'Projects', 'Certifications', 'Contact'];

  return (
    <footer className="footer-section relative py-16 px-6 bg-black border-t border-white/10">
      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="particle absolute top-1/4 left-1/4 w-2 h-2 bg-blue-400 rounded-full opacity-30"></div>
        <div className="particle absolute top-1/2 right-1/3 w-1 h-1 bg-purple-400 rounded-full opacity-40"></div>
        <div className="particle absolute bottom-1/3 left-1/2 w-1.5 h-1.5 bg-violet-400 rounded-full opacity-35"></div>
        <div className="particle absolute top-1/3 right-1/4 w-1 h-1 bg-blue-500 rounded-full opacity-30"></div>
      </div>

      <div className="footer-content max-w-6xl mx-auto relative z-10">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div>
            <h3 className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent mb-4">
              Ghanashyam Badgujar
            </h3>
            <p className="text-gray-400 leading-relaxed">
              Full-Stack Developer crafting digital experiences with modern technologies and creative solutions.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {navItems.map((item) => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase()}`}
                    className="text-gray-400 hover:text-white transition-colors duration-300 hover:translate-x-1 inline-block"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Technologies */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Technologies</h4>
            <div className="flex flex-wrap gap-2">
              {['React', 'Node.js', 'MongoDB', 'GSAP', 'Three.js'].map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 bg-white/10 rounded-full text-xs text-gray-300 border border-white/20"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            © 2024 Ghanashyam Badgujar. All rights reserved.
          </p>
          <p className="text-gray-500 text-sm">
            Made with ❤️ by{' '}
            <a
              href="https://www.linkedin.com/in/ghanashyam2003/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:text-blue-600 transition-colors duration-300"
            >
              Ghanashyam Badgujar
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;