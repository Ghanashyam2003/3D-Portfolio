
import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { LinkedinLogo, GithubLogo, FileArrowDown } from 'phosphor-react';

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
    }, "-=0.5")
    .from(".social-buttons", {
      y: 30,
      opacity: 0,
      duration: 0.8,
      ease: "power2.out"
    }, "-=0.3");
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
    { name: 'SQL', color: 'from-purple-500 to-pink-500' }
  ];

  const handleSocialClick = (url: string) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

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
                    src="/src/assets/ghanashyam.jpeg"
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
              <p className="text-cyan-400">
                📍 <span className="text-gray-300">Location:</span> Kalyan, India
              </p>
            </div>

            {/* Skills Grid */}
            <div className="mb-10">
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

            {/* Social Buttons */}
            <div className="social-buttons flex flex-wrap gap-4">
              <button
                onClick={() => handleSocialClick('https://www.linkedin.com/in/ghanashyam2003')}
                className="premium-button flex items-center px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-700 rounded-full text-white font-semibold hover:scale-105 transition-all duration-300 glow-effect"
              >
                <LinkedinLogo size={20} className="mr-2" />
                LinkedIn
              </button>
              <button
                onClick={() => handleSocialClick('https://github.com/Ghanashyam2003')}
                className="premium-button flex items-center px-6 py-3 bg-gradient-to-r from-gray-700 to-gray-800 rounded-full text-white font-semibold hover:scale-105 transition-all duration-300 glow-effect"
              >
                <GithubLogo size={20} className="mr-2" />
                GitHub
              </button>
              <button className="premium-button flex items-center px-6 py-3 bg-gradient-to-r from-green-600 to-green-700 rounded-full text-white font-semibold hover:scale-105 transition-all duration-300 glow-effect">
                <FileArrowDown size={20} className="mr-2" />
                Resume
              </button>
            </div>
          </div>
        </div>

        {/* Education Section */}
        <div className="mt-20 pt-20 border-t border-white/10">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
            <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              🎓 Education
            </span>
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {/* MCA */}
            <div className="glass-card p-8 rounded-2xl border border-white/10 hover:border-white/30 transition-all duration-300">
              <h3 className="text-2xl font-bold text-white mb-4">Master of Computer Applications (MCA)</h3>
              <p className="text-blue-400 text-lg mb-4">Mumbai University | 2024 – 2026 (Pursuing)</p>
              <p className="text-gray-300 leading-relaxed">
                Completed 2nd semester with a CGPA of 8.19. Focus areas include full-stack development, Databases, and real-world software engineering practices.
              </p>
            </div>

            {/* BSc CS */}
            <div className="glass-card p-8 rounded-2xl border border-white/10 hover:border-white/30 transition-all duration-300">
              <h3 className="text-2xl font-bold text-white mb-4">Bachelor of Science in Computer Science (BSc CS)</h3>
              <p className="text-purple-400 text-lg mb-4">North Maharashtra University | 2021 – 2024</p>
              <p className="text-gray-300 leading-relaxed">
                Graduated with an A+ grade. Developed a strong base in core computer science subjects like programming, data structures, databases, and web development. Completed multiple academic projects and actively participated in tech events.
              </p>
            </div>
          </div>

          {/* Specialization */}
          <div className="mt-8 text-center">
            <h3 className="text-xl font-bold text-white mb-4">Specialization</h3>
            <div className="flex flex-wrap justify-center gap-4">
              <span className="px-4 py-2 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border border-cyan-500/30 rounded-full text-cyan-400 font-medium">
                Full-Stack Development
              </span>
              <span className="px-4 py-2 bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-500/30 rounded-full text-blue-400 font-medium">
                React.js
              </span>
              <span className="px-4 py-2 bg-gradient-to-r from-green-500/20 to-emerald-500/20 border border-green-500/30 rounded-full text-green-400 font-medium">
                Node.js
              </span>
              <span className="px-4 py-2 bg-gradient-to-r from-green-600/20 to-green-700/20 border border-green-600/30 rounded-full text-green-400 font-medium">
                MongoDB
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
