import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import PreLoader from '../components/PreLoader';
import HeroSection from '../components/HeroSection';
import AboutSection from '../components/AboutSection';
import ProjectsSection from '../components/ProjectsSection';
import CertificationsSection from '../components/CertificationsSection';
import ContactSection from '../components/ContactSection';
import Footer from '../components/Footer';
import Navigation from '../components/Navigation';

gsap.registerPlugin(ScrollTrigger);

const Index = () => {
  const mainRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Smooth scroll setup
    const initSmoothScrolling = () => {
      gsap.registerPlugin(ScrollTrigger);
      
      // Floating orbs animation
      gsap.to(".glow-orb", {
        y: -20,
        duration: 3,
        repeat: -1,
        yoyo: true,
        ease: "power1.inOut",
        stagger: 0.5
      });

      // Parallax background elements
      gsap.to(".parallax-bg", {
        yPercent: -50,
        ease: "none",
        scrollTrigger: {
          trigger: ".parallax-bg",
          start: "top bottom",
          end: "bottom top",
          scrub: true
        }
      });
    };

    const timer = setTimeout(initSmoothScrolling, 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="portfolio-container" ref={mainRef}>
      <PreLoader />
      <Navigation />
      
      {/* Floating Background Orbs */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="glow-orb absolute top-20 left-10 w-32 h-32 bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-full blur-xl"></div>
        <div className="glow-orb absolute top-1/3 right-20 w-48 h-48 bg-gradient-to-r from-blue-500/15 to-violet-500/15 rounded-full blur-2xl"></div>
        <div className="glow-orb absolute bottom-1/4 left-1/4 w-24 h-24 bg-gradient-to-r from-violet-500/25 to-purple-500/25 rounded-full blur-lg"></div>
      </div>

      <main className="main-content" style={{ display: 'none' }}>
        <HeroSection />
        <AboutSection />
        <ProjectsSection />
        <CertificationsSection />
        <ContactSection />
        <Footer />
      </main>
    </div>
  );
};

export default Index;