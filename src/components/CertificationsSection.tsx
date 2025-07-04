
import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Medal, ArrowUpRight } from 'phosphor-react';

const CertificationsSection = () => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.from(".cert-card", {
      x: -100,
      opacity: 0,
      duration: 1,
      stagger: 0.3,
      ease: "power2.out",
      scrollTrigger: {
        trigger: ".certifications-section",
        start: "top 70%",
        toggleActions: "play none none reverse"
      }
    });
  }, []);

  const certifications = [
    {
      title: "JPMorgan Software Engineering Virtual Internship",
      issuer: "JPMorgan Chase & Co.",
      date: "2024",
      description: "Completed virtual internship focusing on software engineering practices and financial technology solutions",
      color: "from-blue-500 to-cyan-600",
      link: "https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/Sj7temL583QAYpHXD/E6McHJDKsQYh79moz_Sj7temL583QAYpHXD_DBQPyyCYjEZowoHDN_1738653930680_completion_certificate.pdf"
    },
    {
      title: "Skyscanner - Software Engineering Job Simulation",
      issuer: "Forage",
      date: "2024",
      description: "Advanced system design principles for large-scale applications and distributed systems",
      color: "from-purple-500 to-violet-600",
      link: "https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/skoQmxqhtgWmKv2pm/p3xGFkpdot5H8NBih_skoQmxqhtgWmKv2pm_DBQPyyCYjEZowoHDN_1738952010252_completion_certificate.pdf"
    },
    {
      title: "Tata Group - Cybersecurity Analyst Job Simulation",
      issuer: "Forage",
      date: "2025",
      description: "Comprehensive cybersecurity analysis and threat detection simulation program",
      color: "from-red-500 to-pink-600",
      link: "https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/ifobHAoMjQs9s6bKS/gmf3ypEXBj2wvfQWC_ifobHAoMjQs9s6bKS_DBQPyyCYjEZowoHDN_1739360378604_completion_certificate.pdf"
    },
    {
      title: "Linux Command Line: From Zero to Hero",
      issuer: "Udemy",
      date: "Mar 2025",
      description: "Comprehensive Linux command line course covering advanced terminal operations and system administration",
      color: "from-green-500 to-emerald-600",
      link: "https://www.udemy.com/certificate/UC-a991be10-c382-4777-a3e2-ab582735d480/"
    },
    {
      title: "SQL for Developers, Data Analysts and BI. MySQL for everyone",
      issuer: "Udemy",
      date: "Mar 2025",
      description: "Advanced SQL course covering database design, optimization, and business intelligence applications",
      color: "from-orange-500 to-red-600",
      link: "https://udemy-certificate.s3.amazonaws.com/pdf/UC-270e57eb-b3f9-42fb-91d5-c8cd55d04b2f.pdf"
    },
    {
      title: "Figma Essential for User Interface and User Experience UI UX",
      issuer: "Udemy",
      date: "Feb 2025",
      description: "Complete Figma course covering UI/UX design principles and advanced prototyping techniques",
      color: "from-indigo-500 to-purple-600",
      link: "https://www.udemy.com/certificate/UC-5aab1294-2872-4593-b794-bbb1643cea0f/"
    },
    {
      title: "UI/UX Design Masterclass with Adobe XD: From Beginner to Pro",
      issuer: "Udemy",
      date: "2024",
      description: "Advanced Adobe XD course covering complete UI/UX design workflow from concept to prototype",
      color: "from-pink-500 to-rose-600",
      link: "https://www.udemy.com/certificate/UC-8d252da0-73f4-4876-a5d3-737b3788548b/"
    }
  ];

  const handleCertClick = (link: string) => {
    window.open(link, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="certifications" className="certifications-section py-20 px-6 bg-black relative">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Certifications
            </span>
          </h2>
          <p className="text-xl text-gray-400">
            Continuous learning and professional development
          </p>
        </div>

        <div className="space-y-8">
          {certifications.map((cert, index) => (
            <div
              key={index}
              className="cert-card group relative"
            >
              <div className="glass-card backdrop-blur-md bg-white/5 border border-white/10 rounded-2xl p-8 hover:border-white/30 transition-all duration-500 hover:scale-105">
                <div className="flex items-start space-x-6">
                  {/* Timeline Indicator */}
                  <div className="flex-shrink-0">
                    <div className={`w-16 h-16 rounded-full bg-gradient-to-r ${cert.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                      <Medal size={24} className="text-white" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="text-xl font-bold text-white mb-2 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-purple-500 group-hover:bg-clip-text transition-all duration-300">
                          {cert.title}
                        </h3>
                        <p className="text-gray-400 font-medium">
                          {cert.issuer} • {cert.date}
                        </p>
                      </div>
                      
                      <button 
                        onClick={() => handleCertClick(cert.link)}
                        className="premium-button opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center px-4 py-2 bg-white/10 rounded-full text-white border border-white/20 hover:border-white/40"
                      >
                        View Credential
                        <ArrowUpRight size={16} className="ml-2" />
                      </button>
                    </div>
                    
                    <p className="text-gray-300 leading-relaxed">
                      {cert.description}
                    </p>
                  </div>
                </div>
              </div>

              {/* Connecting Line */}
              {index < certifications.length - 1 && (
                <div className="absolute left-8 top-20 w-0.5 h-16 bg-gradient-to-b from-white/20 to-transparent"></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CertificationsSection;
