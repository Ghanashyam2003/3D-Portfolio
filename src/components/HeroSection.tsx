import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import { ArrowRight } from 'phosphor-react';
const HeroSection = () => {
  useEffect(() => {
    const tl = gsap.timeline({
      delay: 4
    }); // After preloader

    // Enhanced headline animation with blur effect
    tl.from(".hero-headline", {
      opacity: 0,
      y: 50,
      filter: "blur(10px)",
      duration: 1.5,
      ease: "power2.out"
    }).from(".hero-subtitle", {
      opacity: 0,
      y: 50,
      duration: 1,
      ease: "power2.out"
    }, "-=1").from(".hero-cta", {
      opacity: 0,
      scale: 0.8,
      duration: 0.8,
      ease: "back.out(1.7)"
    }, "-=0.5")
    // Spline fades in from right
    .from(".spline-container", {
      opacity: 0,
      x: 100,
      scale: 0.9,
      duration: 1.8,
      ease: "power2.out"
    }, "-=1.5");

    // CTA scale pulse animation on hover
    const ctaButton = document.querySelector(".hero-cta");
    if (ctaButton) {
      ctaButton.addEventListener('mouseenter', () => {
        gsap.to(ctaButton, {
          scale: 1.1,
          duration: 0.3,
          ease: "power2.out"
        });
      });
      ctaButton.addEventListener('mouseleave', () => {
        gsap.to(ctaButton, {
          scale: 1,
          duration: 0.3,
          ease: "power2.out"
        });
      });
    }

    // Enhanced floating animations for background glow elements
    gsap.to(".glow-orb", {
      y: -30,
      duration: 4,
      repeat: -1,
      yoyo: true,
      ease: "power1.inOut",
      stagger: 0.8
    });

    // Additional floating animation for variety
    gsap.to(".glow-orb:nth-child(2)", {
      x: 20,
      duration: 5,
      repeat: -1,
      yoyo: true,
      ease: "power1.inOut"
    });
    gsap.to(".glow-orb:nth-child(3)", {
      rotation: 360,
      duration: 8,
      repeat: -1,
      ease: "none"
    });
  }, []);
  return <section className="hero-section relative min-h-screen flex items-center overflow-hidden bg-black">
      {/* Floating Neon Orbs */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-5">
        <div className="glow-orb absolute top-20 left-10 w-32 h-32 bg-gradient-to-r from-cyan-500/30 to-blue-500/30 rounded-full blur-xl shadow-2xl shadow-cyan-500/20"></div>
        <div className="glow-orb absolute top-1/3 right-20 w-48 h-48 bg-gradient-to-r from-purple-500/25 to-pink-500/25 rounded-full blur-2xl shadow-2xl shadow-purple-500/20"></div>
        <div className="glow-orb absolute bottom-1/4 left-1/4 w-24 h-24 bg-gradient-to-r from-green-500/35 to-emerald-500/35 rounded-full blur-lg shadow-2xl shadow-green-500/20"></div>
        <div className="glow-orb absolute top-1/2 right-1/3 w-36 h-36 bg-gradient-to-r from-yellow-500/20 to-orange-500/20 rounded-full blur-xl shadow-2xl shadow-yellow-500/15"></div>
      </div>

      <div className="container mx-auto px-6 relative z-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-screen">
          {/* Left Side - Content */}
          <div className="text-left">
            <h1 className="hero-headline text-5xl md:text-7xl lg:text-8xl font-bold mb-6">
              <span className="block text-white px-px mx-0 my-[48px]">Hi, I'm</span>
              <span className="block bg-gradient-to-r from-blue-400 via-purple-500 to-violet-600 bg-clip-text text-transparent mx-[10px] my-[12px] py-0 px-0 text-8xl font-bold text-left">
                Ghanashyam
              </span>
            </h1>
            
            <p className="hero-subtitle text-xl md:text-2xl text-gray-300 mb-12 max-w-2xl leading-relaxed">
              Crafting future-ready apps with <span className="text-cyan-400">3D</span>, <span className="text-purple-400">AI</span>, and elegant <span className="text-violet-400">UX</span>
            </p>

            <button className="hero-cta premium-button group inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full text-white font-medium text-lg transition-all duration-300 glow-effect">
              Hire Me
              <ArrowRight size={20} className="ml-2 group-hover:translate-x-1 transition-transform duration-300" />
            </button>
          </div>

          {/* Right Side - Spline 3D Background */}
          <div className="spline-container relative h-[600px] lg:h-[800px]">
            <iframe src="https://my.spline.design/robotfollowcursorforlandingpage-1hhcqfnV2tBBReD8WmJhuoaZ/" width="100%" height="100%" className="w-full h-full border-none rounded-lg"></iframe>
            {/* Gradient Overlay for better integration */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-transparent to-transparent pointer-events-none rounded-lg"></div>
          </div>
        </div>
      </div>

      {/* Enhanced Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce z-20">
        <div className="w-1 h-16 bg-gradient-to-b from-cyan-500 to-transparent rounded-full shadow-lg shadow-cyan-500/50"></div>
      </div>
    </section>;
};
export default HeroSection;