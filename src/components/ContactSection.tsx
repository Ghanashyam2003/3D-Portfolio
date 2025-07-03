import React, { useState, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { PaperPlaneTilt, LinkedinLogo, GithubLogo } from 'phosphor-react';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".contact-section",
        start: "top 70%",
        toggleActions: "play none none reverse"
      }
    });

    tl.from(".contact-form", {
      x: -100,
      opacity: 0,
      duration: 1.2,
      ease: "power2.out"
    })
    .from(".contact-info", {
      x: 100,
      opacity: 0,
      duration: 1.2,
      ease: "power2.out"
    }, "-=0.8")
    .from(".form-field", {
      y: 30,
      opacity: 0,
      duration: 0.6,
      stagger: 0.1,
      ease: "power2.out"
    }, "-=0.5");
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Animate submit button
    gsap.to(".submit-btn", {
      scale: 0.95,
      duration: 0.1,
      yoyo: true,
      repeat: 1,
      onComplete: () => {
        // Simulate form submission
        console.log('Form submitted:', formData);
        
        // Reset form and show success animation
        setFormData({ name: '', email: '', message: '' });
        
        gsap.to(".submit-btn", {
          backgroundColor: "#10B981",
          duration: 0.3,
          onComplete: () => {
            setTimeout(() => {
              gsap.to(".submit-btn", {
                backgroundColor: "",
                duration: 0.3
              });
            }, 2000);
          }
        });
      }
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="contact-section py-20 px-6 bg-black relative">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-purple-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Let's Connect
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Ready to bring your ideas to life? Let's discuss your next project
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Contact Form */}
          <div className="contact-form">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="form-field">
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="glass-input w-full p-4 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-400 focus:border-blue-500 focus:outline-none transition-colors duration-300 backdrop-blur-md"
                />
              </div>
              
              <div className="form-field">
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="glass-input w-full p-4 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-400 focus:border-blue-500 focus:outline-none transition-colors duration-300 backdrop-blur-md"
                />
              </div>
              
              <div className="form-field">
                <textarea
                  name="message"
                  rows={6}
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="glass-input w-full p-4 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-400 focus:border-blue-500 focus:outline-none transition-colors duration-300 backdrop-blur-md resize-none"
                ></textarea>
              </div>
              
              <button
                type="submit"
                className="submit-btn premium-button w-full flex items-center justify-center px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl text-white font-medium hover:scale-105 transition-transform duration-300 glow-effect"
              >
                <PaperPlaneTilt size={20} className="mr-2" />
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="contact-info">
            <div className="glass-card backdrop-blur-md bg-white/5 border border-white/10 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-white mb-6">Get in Touch</h3>
              
              <div className="space-y-6">
                <div>
                  <h4 className="text-lg font-medium text-blue-400 mb-2">Education</h4>
                  <p className="text-gray-300">
                    MCA - Mumbai University (2024-2026)<br />
                    BSc Computer Science - North Maharashtra University
                  </p>
                </div>
                
                <div>
                  <h4 className="text-lg font-medium text-purple-400 mb-2">Specialization</h4>
                  <p className="text-gray-300">
                    Full-Stack Development • React.js • Node.js • MongoDB
                  </p>
                </div>
                
                <div>
                  <h4 className="text-lg font-medium text-violet-400 mb-2">Location</h4>
                  <p className="text-gray-300">Mumbai, India</p>
                </div>
              </div>

              {/* Social Links */}
              <div className="mt-8 pt-8 border-t border-white/10">
                <h4 className="text-lg font-medium text-white mb-4">Connect with me</h4>
                <div className="flex space-x-4">
                  <a
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-link flex items-center justify-center w-12 h-12 bg-white/10 rounded-xl hover:bg-blue-500/20 transition-colors duration-300 group"
                  >
                    <LinkedinLogo size={20} className="text-white group-hover:text-blue-400" />
                  </a>
                  <a
                    href="https://github.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-link flex items-center justify-center w-12 h-12 bg-white/10 rounded-xl hover:bg-purple-500/20 transition-colors duration-300 group"
                  >
                    <GithubLogo size={20} className="text-white group-hover:text-purple-400" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;