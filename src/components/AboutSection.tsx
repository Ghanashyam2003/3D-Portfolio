import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const AboutSection = () => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".about-section",
        start: "top 80%",
        end: "bottom 20%",
        toggleActions: "play none none reverse"
      }
    });

    tl.from(".about-image", {
      x: -100,
      opacity: 0,
      duration: 1.2,
      ease: "power2.out"
    })
    .from(".about-content", {
      x: 100,
      opacity: 0,
      duration: 1.2,
      ease: "power2.out"
    }, "-=0.8")
    .from(".skill-icon", {
      y: 50,
      opacity: 0,
      duration: 0.6,
      stagger: 0.1,
      ease: "back.out(1.7)"
    }, "-=0.5");
  }, []);

  const skills = [
    { name: 'HTML5', color: 'from-orange-500 to-red-500' },
    { name: 'CSS3', color: 'from-blue-500 to-blue-600' },
    { name: 'JavaScript', color: 'from-yellow-400 to-yellow-500' },
    { name: 'React', color: 'from-cyan-400 to-blue-500' },
    { name: 'Node.js', color: 'from-green-500 to-green-600' },
    { name: 'MongoDB', color: 'from-green-600 to-green-700' },
    { name: 'Git', color: 'from-orange-600 to-red-600' },
    { name: 'Python', color: 'from-blue-400 to-yellow-400' },
    { name: 'Linux', color: 'from-gray-600 to-gray-800' },
    { name: 'GSAP', color: 'from-purple-500 to-pink-500' }
  ];

  return (
    <section id="about" className="about-section py-20 px-6 bg-black relative">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Profile Image */}
          <div className="about-image">
            <div className="relative">
              <div className="profile-container w-80 h-80 mx-auto relative group">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full blur-lg opacity-70 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-white/20 group-hover:rotate-6 transition-transform duration-300">
                  <img
                    src="../public/ghanashyam.jpeg"
                    alt="Ghanashyam Badgujar"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* About Content */}
          <div className="about-content">
            <h2 className="text-4xl md:text-5xl font-bold mb-8">
              <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                About Me
              </span>
            </h2>
            
            <div className="space-y-6 text-gray-300 text-lg leading-relaxed mb-10">
              <p>
                I'm a passionate <span className="text-blue-400">Full-Stack Developer</span> and final-year MCA student at Mumbai University (2024-2026) with a BSc in Computer Science.
              </p>
              <p>
                Specializing in <span className="text-purple-400">React.js</span>, <span className="text-green-400">Node.js</span>, and <span className="text-blue-400">MongoDB</span>, I've built real-world applications with OAuth integration, payment gateways, and cloud services.
              </p>
              <p>
                My goal is to create <span className="text-violet-400">immersive digital experiences</span> that blend cutting-edge technology with intuitive design.
              </p>
            </div>

            {/* Skills Grid */}
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">Skills & Technologies</h3>
              <div className="grid grid-cols-5 gap-4">
                {skills.map((skill, index) => (
                  <div
                    key={skill.name}
                    className="skill-icon group relative"
                  >
                    <div className={`glass-card p-4 rounded-xl bg-gradient-to-r ${skill.color} bg-opacity-10 border border-white/10 hover:border-white/30 transition-all duration-300 text-center hover:scale-110`}>
                      <div className="text-xs font-medium text-white">
                        {skill.name}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;