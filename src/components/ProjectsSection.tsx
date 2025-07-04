
import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowUpRight, Globe } from 'phosphor-react';

const ProjectsSection = () => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.from(".project-card", {
      y: 100,
      opacity: 0,
      duration: 1,
      stagger: 0.2,
      ease: "power2.out",
      scrollTrigger: {
        trigger: ".projects-section",
        start: "top 70%",
        toggleActions: "play none none reverse"
      }
    });
  }, []);

   const projects = [
  {
    title: "Cancer Donation Platform",
    description:
      "Full‑stack platform connecting donors with cancer patients. Secure login, instant payments.",
    tech: ["React", "Node.js", "Express", "MongoDB", "OAuth 2.0", "Instamojo"],
    highlights: [
      "Google OAuth 2.0 authentication",
      "Instamojo UPI / card payments",
      "Real‑time donor feed via MongoDB change streams",
    ],
    image: "/src/assets/cancer.png",
    gradient: "from-pink-500 to-rose-600",
    link: "https://cancer-support-website.onrender.com/",
  },
  {
    title: "AI Task Manager",
    description:
      "Smart productivity app that uses GPT to suggest, prioritise, and automate daily tasks.",
    tech: ["React", "OpenAI API", "MongoDB", "GSAP"],
    highlights: [
      "GPT‑powered task suggestions",
      "Deadline predictions & reminders",
      "Smooth GSAP dashboard animations",
    ],
    image: "/src/assets/Ai.png",
    gradient: "from-green-500 to-emerald-600",
    link: "https://ai-sensai.vercel.app/",
  },
  {
    title: "StreamMate",
    description:
      "Peer‑to‑peer video‑streaming platform with live chat and role‑based rooms.",
    tech: ["React", "WebRTC", "Socket.io", "Node.js", "Express"],
    highlights: [
      "WebRTC low‑latency streams",
      "Socket.io live chat",
      "JWT user authentication",
    ],
    image: "/src/assets/video.png",
    gradient: "from-purple-500 to-violet-600",
    link: "https://github.com/Ghanashyam2003/StreamMate",
  },
  {
    title: "Zerodha Clone",
    description:
      "Real‑time stock‑trading UI with live charts and mock portfolio tracking.",
    tech: ["React", "Chart.js", "WebSocket", "Node.js"],
    highlights: [
      "Candlestick & depth charts",
      "Paper‑trading via WebSocket feed",
      "Responsive order window",
    ],
    image: "/src/assets/zerodha.png",
    gradient: "from-blue-500 to-cyan-600",
    link: "https://github.com/Ghanashyam2003/Zerodha-clone",
  },
  {
    title: "Mumbai Tourist AI Guide",
    description:
      "Offline‑ready AI travel assistant that gives hyper‑local tips without internet.",
    tech: ["Python", "LangChain", "LLM", "PWA"],
    highlights: [
      "LangChain local LLM",
      "PWA caching for offline use",
      "Geo‑tagged point‑of‑interest DB",
    ],
    image:
      "https://images.unsplash.com/photo-1570168007204-dfb528c6958f?w=600&h=400&fit=crop",
    gradient: "from-orange-500 to-yellow-600",
    link: "https://github.com/Ghanashyam2003/Local_Ai_Agent",
  },
  {
    title: "3D Portfolio",
    description:
      "Immersive personal site featuring a Spline 3‑D hero and GSAP scroll magic.",
    tech: ["React", "Spline", "Three.js", "GSAP", "Tailwind"],
    highlights: [
      "Spline interactive robot",
      "Scroll‑triggered parallax",
      "Fully responsive & dark‑mode",
    ],
    image: "/src/assets/portfolio.png",
    gradient: "from-indigo-500 to-purple-600",
    link: "#",
  },
];


  const handleProjectClick = (link: string) => {
    if (link === "#") return;
    window.open(link, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="projects" className="projects-section py-20 px-6 bg-black relative">
      <div className="absolute inset-0 parallax-bg">
        <div className="absolute top-20 right-20 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-80 h-80 bg-purple-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Featured Projects
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Showcasing real-world applications built with modern technologies
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="project-card group relative"
            >
              <div className="glass-card backdrop-blur-md bg-white/5 border border-white/10 rounded-2xl overflow-hidden hover:border-white/30 transition-all duration-500 hover:scale-105">
                {/* Project Image */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-r ${project.gradient} opacity-20 group-hover:opacity-40 transition-opacity duration-300`}></div>
                  
                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-black/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <button 
                      onClick={() => handleProjectClick(project.link)}
                      className="premium-button flex items-center px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-white border border-white/30 hover:border-white/50 transition-all duration-300"
                    >
                      <Globe size={16} className="mr-2" />
                      View Project
                      <ArrowUpRight size={16} className="ml-2" />
                    </button>
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-purple-500 group-hover:bg-clip-text transition-all duration-300">
                    {project.title}
                  </h3>
                  
                  <p className="text-gray-400 mb-4 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 bg-white/10 rounded-full text-xs text-gray-300 border border-white/20"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
