import React, { useState, useEffect } from "react";
import './Welcome.css';
import Glimpse from "./Glimpse";

const Welcome = () => {
  const [opacity, setOpacity] = useState(1);
  const [navbarOpacity, setNavbarOpacity] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const handleScroll = () => {
    const scrollTop = window.scrollY;
    const windowHeight = window.innerHeight;
    const newOpacity = Math.max(1 - scrollTop / windowHeight, 0.8);
    setOpacity(newOpacity);

    const navThreshold = windowHeight * 0.3;
    const newNavbarOpacity = Math.min((scrollTop - navThreshold) / (windowHeight * 0.2), 1);
    setNavbarOpacity(Math.max(0, newNavbarOpacity));
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('reveal-text');
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll('.reveal-text').forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const cards = document.querySelectorAll('.tilt-card');
    
    const handleMouseMove = (e) => {
      const card = e.currentTarget;
      const rect = card.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 100;
      const y = ((e.clientY - rect.top) / rect.height) * 100;
      
      card.style.setProperty('--x', `${x}%`);
      card.style.setProperty('--y', `${y}%`);
    };

    cards.forEach(card => {
      card.addEventListener('mousemove', handleMouseMove);
    });

    return () => {
      cards.forEach(card => {
        card.removeEventListener('mousemove', handleMouseMove);
      });
    };
  }, []);

  return (
    <div className="relative">
      <div className="particle-container">
        {[...Array(50)].map((_, i) => (
          <div key={i} className="particle" />
        ))}
      </div>

      <div className={`min-h-screen w-full relative ${isLoaded ? 'loaded' : ''}`}
        style={{
             background: "linear-gradient(135deg, rgb(5, 11, 20) 0%, rgb(12, 20, 39) 100%)",
          opacity: opacity,
             transition: "all 0.3s ease-out",
           }}>
        <div className="absolute inset-0 bg-gradient-animate opacity-20" />
        <div className="absolute inset-0 bg-mesh-gradient"></div>
        
        <div className="absolute inset-0 overflow-hidden">
          <div className="floating-shapes">
            {[...Array(6)].map((_, i) => (
              <div key={i} className={`shape shape-${i + 1}`}></div>
            ))}
          </div>
        </div>

        <div className="container mx-auto px-4 pt-32 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="glitch-wrapper mb-8">
              <h1 className="glitch text-7xl sm:text-8xl text-white font-bold tracking-tight"
                  data-text="TechNova"
                  style={{ fontFamily: "'Emilys Candy', serif" }}>
                Tech<span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-600">Nova</span>
                <span className="block text-3xl sm:text-4xl mt-4 font-light" 
                      style={{ fontFamily: "'Mukta', sans-serif" }}>
                  2025
                </span>
              </h1>
            </div>
            
            <p className="text-xl sm:text-2xl text-gray-300 mb-12 typing-animation leading-relaxed"
               style={{ fontFamily: "'Mukta', sans-serif" }}>
              Our winter project is to kick off a hackathon renaissance, together.

              <span className="block mt-4 text-green-400/90">We'll begin soon, and we ask for you to join us!</span>

              <span className="block mt-4 italic text-white/80">This is your invitation to meet and make mischief...</span>
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center fade-in-up">
              <a href="#details" 
                 className="neon-button group px-8 py-4 bg-transparent text-white rounded-xl
                           transition-all transform hover:scale-105 font-semibold text-lg
                           border border-green-500/30 hover:border-green-400
                           backdrop-blur-sm">
                <span className="button-content group-hover:text-green-400">
                  Learn More
                </span>
              </a>
              <a href="https://forms.gle/VM5BZQMvYUu58iod6" 
                 target="_blank"
                 className="cyber-button group px-8 py-4 rounded-xl
                           transition-all transform hover:scale-105 font-semibold text-lg
                           bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700
                           text-white shadow-lg hover:shadow-green-500/50">
                <span className="button-text flex items-center justify-center">
                  Join Waitlist
                  <svg className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform"
                       fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </span>
              </a>
            </div>

            <div className="mt-16 floating-arrow">
              <div className="scroll-indicator">
                <div className="scroll-indicator__arrow"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <nav className="fixed top-0 w-full z-50 transition-all duration-300"
        style={{
          opacity: navbarOpacity,
             backgroundColor: `rgba(5, 11, 20, ${navbarOpacity * 0.85})`,
             backdropFilter: `blur(${navbarOpacity * 16}px)`,
             borderBottom: navbarOpacity > 0 ? '1px solid rgba(255, 255, 255, 0.05)' : 'none',
             transform: `translateY(${navbarOpacity === 0 ? '-100%' : '0'})`,
           }}>
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            <div className="flex items-center space-x-4 group">
              <div className="relative overflow-hidden rounded-lg">
                <img src="coe.jpg" alt="COE Logo" 
                     className="h-12 w-12 object-cover transform group-hover:scale-110 transition-transform duration-500" />
                <div className="absolute inset-0 bg-gradient-to-r from-green-500/20 to-transparent 
                                opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
              <div className="flex flex-col">
                <span className="text-white font-medium tracking-wide transform hover:text-green-400 transition-colors">
                  CENTER OF EXCELLENCE
                </span>
                <span className="text-xs text-gray-400">Innovation Hub</span>
              </div>
            </div>

            <div className="hidden md:flex items-center space-x-8">
              <NavLink href="#hackathon">
                <span className="relative group">
                  The Hackathon
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-green-400 to-emerald-600 
                                  group-hover:w-full transition-all duration-300" />
                </span>
              </NavLink>
              <NavLink href="#rundown">
                <span className="relative group">
                  The Rundown
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-green-400 to-emerald-600 
                                  group-hover:w-full transition-all duration-300" />
                </span>
              </NavLink>
              <a href="https://forms.gle/VM5BZQMvYUu58iod6" 
                 target="_blank"
                 className="nav-cta relative px-6 py-2.5 overflow-hidden group bg-gradient-to-r 
                            from-green-500 to-emerald-600 text-white rounded-xl
                            hover:shadow-[0_0_25px_rgba(34,197,94,0.3)] transition-all duration-300">
                <span className="absolute right-0 w-8 h-32 -mt-12 transition-all duration-1000 transform translate-x-12 
                                bg-white opacity-10 rotate-12 group-hover:-translate-x-40 ease" />
                <span className="relative flex items-center">
                  Join Waitlist
                  <svg className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform" 
                       fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </span>
              </a>
            </div>

            <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    className="md:hidden relative w-10 h-10 text-white focus:outline-none">
              <span className={`absolute w-6 h-0.5 bg-white transform transition-all duration-300
                               ${isMobileMenuOpen ? 'rotate-45 translate-y-0' : '-translate-y-2'}`} />
              <span className={`absolute w-6 h-0.5 bg-white transform transition-all duration-300
                               ${isMobileMenuOpen ? 'opacity-0' : 'opacity-100'}`} />
              <span className={`absolute w-6 h-0.5 bg-white transform transition-all duration-300
                               ${isMobileMenuOpen ? '-rotate-45 translate-y-0' : 'translate-y-2'}`} />
            </button>
          </div>
        </div>
      </nav>

      <div className={`md:hidden fixed inset-0 z-[60] bg-black/50 backdrop-blur-sm transition-opacity duration-300 ${
        isMobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
      }`}>
        <div className={`fixed right-0 top-0 h-full w-64 bg-[rgb(5,11,20)] shadow-xl transform transition-transform duration-300 ${
          isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}>
          <div className="p-6 space-y-4">
            <div className="flex justify-end">
              <button onClick={() => setIsMobileMenuOpen(false)}
                      className="text-gray-400 hover:text-white">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <nav className="space-y-4">
              <a href="#hackathon" 
                 onClick={() => setIsMobileMenuOpen(false)}
                 className="block text-gray-300 hover:text-white transition-colors py-2">
                The Hackathon
              </a>
              <a href="#rundown"
                 onClick={() => setIsMobileMenuOpen(false)}
                 className="block text-gray-300 hover:text-white transition-colors py-2">
                The Rundown
              </a>
              <a href="https://forms.gle/VM5BZQMvYUu58iod6"
                 target="_blank"
                 onClick={() => setIsMobileMenuOpen(false)}
                 className="block text-emerald-500 hover:text-emerald-400 transition-colors py-2">
                Join Waitlist
              </a>
            </nav>
          </div>
        </div>
      </div>

      <div className="bg-[rgb(5,11,20)]/80 relative perspective-container">
        <div className="container mx-auto px-4 py-24">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-20">
              <span className="text-green-400 text-sm font-semibold tracking-wider uppercase mb-3 block">
                Save The Date
              </span>
              <h2 className="text-5xl md:text-6xl text-white font-bold mb-6 reveal-text" id="details">
                Mark Your Calendar
              </h2>
              <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                Join us for an unforgettable experience of innovation, collaboration, and breakthrough moments.
              </p>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 mb-20">
              <div className="lg:col-span-1">
                <div className="tilt-card group h-full">
                  <div className="card-content bg-gradient-to-br from-orange-500/20 to-orange-600/20 group-hover:shadow-xl
                                 p-8 flex flex-col items-center justify-center min-h-[240px] lg:min-h-[500px]
                                 border border-orange-500/20 group-hover:border-orange-500/40">
                    <div className="text-white text-center transform group-hover:scale-105 transition-transform">
                      <div className="text-orange-400 text-3xl font-medium mb-4">JANUARY</div>
                      <div className="text-8xl font-bold bg-gradient-to-r from-orange-400 to-orange-600 
                                    text-transparent bg-clip-text mb-4">10</div>
                      <div className="text-orange-400/80 text-2xl">2025</div>
                      <div className="mt-8 pt-8 border-t border-orange-500/20">
                        <p className="text-orange-300/90 text-lg">Join us for an unforgettable experience</p>
                      </div>
                    </div>
                </div>
                </div>
              </div>

              <div className="lg:col-span-4 grid grid-cols-1 md:grid-cols-2 gap-8">
                <FeatureCard 
                  gradient="from-purple-600 to-purple-700"
                  title="Single Theme"
                  description="Focus on one challenge, maximize your impact. Join us for a concentrated innovation sprint."
                  icon="🎯"
                />
                
                <FeatureCard 
                  gradient="from-blue-600 to-blue-700"
                  title="24HR+"
                  description="A full day of coding, learning, and building. Push your limits and create something amazing."
                  icon="⚡"
                />
                
                <FeatureCard 
                  gradient="from-red-600 to-red-700"
                  title="Web Dev"
                  description="Build the future of the web. Use cutting-edge technologies to bring your ideas to life."
                  icon="🌐"
                />

                <FeatureCard 
                  gradient="from-yellow-600 to-yellow-700"
                  title="Fun Activities"
                  description="Engage in exciting side events, networking sessions, and interactive challenges throughout the hackathon."
                  icon="🎮"
                />
              </div>
              </div>
              
            <div className="text-center space-y-8">
              <h3 className="text-2xl md:text-3xl text-white font-semibold mb-6 reveal-text">
                Ready to Join the Revolution?
              </h3>
              <div className="flex flex-col items-center justify-center space-y-4">
                <a href="https://forms.gle/VM5BZQMvYUu58iod6" 
                   target="_blank"
                   className="mega-button group inline-flex items-center px-8 py-4 
                             text-white rounded-lg transition-all 
                             font-semibold text-xl max-w-md w-full justify-center">
                  <span className="button-inner flex items-center">
                    Join the Waitlist
                    <img src="arrow.svg" alt="" className="ml-2 h-6 group-hover:translate-x-1 transition-transform" />
                  </span>
                </a>
                <p className="text-gray-400 text-sm">Limited spots available. Register now!</p>
              </div>
            </div>
          </div>
        </div>

        <Glimpse/>
      </div>
    </div>
  );
};

const NavLink = ({ href, children }) => (
  <a href={href} 
     className="text-gray-300 hover:text-white transition-colors relative nav-link">
    {children}
  </a>
);

const FeatureCard = ({ gradient, title, description, icon }) => {
  const handleMouseMove = (e) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    const rotateX = (y - centerY) / 25;
    const rotateY = -(x - centerX) / 25;

    card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.01)`;
  };

  const handleMouseLeave = (e) => {
    const card = e.currentTarget;
    card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg)';
  };

  return (
    <div className="card-wrapper">
      <div className="tilt-card group h-full"
           onMouseMove={handleMouseMove}
           onMouseLeave={handleMouseLeave}>
        <div className={`card-content bg-gradient-to-br ${gradient} group-hover:shadow-xl
                        p-8 flex flex-col items-center justify-center min-h-[240px]
                        relative overflow-hidden border border-white/5
                        transition-transform duration-200 ease-out`}>
          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 
                         transition-opacity duration-700 pointer-events-none">
            <div className="absolute inset-0 bg-gradient-to-r from-white/[0.07] to-transparent"></div>
            <div className="absolute -inset-[100%] animate-spin-slow bg-gradient-to-r 
                          from-transparent via-white/[0.05] to-transparent"></div>
          </div>

          <div className="relative z-10 transform group-hover:translate-y-[-5px] 
                         transition-all duration-300">
            <div className="text-5xl mb-6 transform group-hover:scale-110 
                           transition-all duration-300 relative">
              <span className="relative z-10">{icon}</span>
              <div className="absolute inset-0 blur-lg opacity-50 
                             group-hover:opacity-100 transition-opacity 
                             bg-gradient-to-r from-white/30 to-transparent"></div>
            </div>
            <h3 className="text-white text-xl font-bold mb-3 
                          group-hover:text-transparent group-hover:bg-clip-text 
                          group-hover:bg-gradient-to-r from-white to-white/80">
              {title}
            </h3>
            <p className="text-white/70 text-center text-sm leading-relaxed 
                         transform group-hover:text-white/90 transition-colors">
              {description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
