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
      description: "Full-stack donation platform with Google OAuth and Instamojo payment integration",
      tech: ["React", "Node.js", "MongoDB", "OAuth", "Instamojo"],
      image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=600&h=400&fit=crop",
      gradient: "from-pink-500 to-rose-600"
    },
    {
      title: "Zerodha Clone",
      description: "Stock trading platform clone with real-time charts and portfolio management",
      tech: ["React", "Chart.js", "WebSocket", "Node.js"],
      image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=600&h=400&fit=crop",
      gradient: "from-blue-500 to-cyan-600"
    },
    {
      title: "StreamMate",
      description: "Video streaming platform with live chat and user management",
      tech: ["React", "WebRTC", "Socket.io", "Express"],
      image: "https://images.unsplash.com/photo-1574269909862-7e1d70bb8078?w=600&h=400&fit=crop",
      gradient: "from-purple-500 to-violet-600"
    },
    {
      title: "AI Task Manager",
      description: "Smart task management with AI-powered suggestions and automation",
      tech: ["React", "OpenAI", "MongoDB", "GSAP"],
      image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=600&h=400&fit=crop",
      gradient: "from-green-500 to-emerald-600"
    },
    {
      title: "3D Portfolio",
      description: "Interactive 3D portfolio with Spline integration and scroll animations",
      tech: ["React", "Spline", "GSAP", "Three.js"],
      image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=600&h=400&fit=crop",
      gradient: "from-indigo-500 to-purple-600"
    },
    {
      title: "E-Commerce Dashboard",
      description: "Admin dashboard with analytics, inventory management, and real-time updates",
      tech: ["React", "D3.js", "Redis", "PostgreSQL"],
      image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=600&h=400&fit=crop",
      gradient: "from-orange-500 to-red-600"
    }
  ];

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
                    <button className="premium-button flex items-center px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-white border border-white/30">
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