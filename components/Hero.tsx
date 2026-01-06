import React, { useState, useEffect, useRef } from 'react';
import { ArrowRight, Code2, Zap } from 'lucide-react';
import RevealOnScroll from './RevealOnScroll';

const Hero: React.FC = () => {
  const [scrollY, setScrollY] = useState(0);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!containerRef.current) return;
    const { left, top, width, height } = containerRef.current.getBoundingClientRect();
    const x = (e.clientX - left - width / 2) / 25; // Sensitivity factor
    const y = (e.clientY - top - height / 2) / 25;
    setMousePos({ x, y });
  };

  const handleMouseLeave = () => {
    setMousePos({ x: 0, y: 0 });
  };

  return (
    <section 
      id="home" 
      className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden scroll-mt-24"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      ref={containerRef}
    >
      <style>{`
        /* --- Animation Keyframes (26s Loop) --- */

        /* 1. Client: Starts Left, Leaves Left, Returns Left */
        @keyframes clientSequence {
          0% { transform: translateX(5vw) scaleX(1); opacity: 1; }
          10% { transform: translateX(5vw) scaleX(1); opacity: 1; } /* Talk */
          15% { transform: translateX(5vw) scaleX(-1); opacity: 1; } /* Turn back */
          20% { transform: translateX(-10vw) scaleX(-1); opacity: 0; } /* Walk off left */
          80% { transform: translateX(-10vw) scaleX(1); opacity: 0; } /* Wait off screen */
          85% { transform: translateX(5vw) scaleX(1); opacity: 1; } /* Re-enter for delivery */
          100% { transform: translateX(5vw) scaleX(1); opacity: 1; }
        }

        /* 2. Pebbles Rep: Left -> Center (Plan) -> Right (Build) -> Fade */
        @keyframes repSequence {
          0% { transform: translateX(12vw) scaleX(-1); opacity: 1; } /* Facing client */
          10% { transform: translateX(12vw) scaleX(1); opacity: 1; } /* Turn right */
          20% { transform: translateX(35vw) scaleX(1); opacity: 1; } /* Walk to Planning */
          40% { transform: translateX(35vw) scaleX(1); opacity: 1; } /* Planning done */
          50% { transform: translateX(65vw) scaleX(1); opacity: 1; } /* Walk to Dev */
          75% { transform: translateX(65vw) scaleX(1); opacity: 1; } /* Build done */
          80% { transform: translateX(65vw) scaleX(1); opacity: 0; } /* Fade out (into van) */
          100% { transform: translateX(65vw) scaleX(1); opacity: 0; }
        }

        /* 3. Planning Team: Appears in Center */
        @keyframes planTeamSequence {
          0%, 15% { opacity: 0; transform: translateX(40vw); }
          20% { opacity: 1; transform: translateX(40vw); } /* Meet Rep */
          40% { opacity: 1; transform: translateX(40vw); } /* Planning */
          45% { opacity: 0; transform: translateX(40vw); } /* Disband */
          100% { opacity: 0; }
        }

        /* 4. Dev Team: Appears on Right */
        @keyframes devTeamSequence {
          0%, 45% { opacity: 0; transform: translateX(70vw); }
          50% { opacity: 1; transform: translateX(70vw); } /* Meet Rep */
          75% { opacity: 1; transform: translateX(70vw); } /* Finish Build */
          80% { opacity: 0; transform: translateX(70vw); } /* Disband/Load */
          100% { opacity: 0; }
        }

        /* 5. Van: Enters Right -> Picks Up -> Exits Left */
        @keyframes vanSequence {
          /* scaleX(-1) flips the van to face LEFT */
          0%, 70% { transform: translateX(120vw) scaleX(-1); } /* Wait off screen right */
          75% { transform: translateX(60vw) scaleX(-1); } /* Arrive at Dev */
          82% { transform: translateX(60vw) scaleX(-1); } /* Load */
          92% { transform: translateX(12vw) scaleX(-1); } /* Deliver to Client */
          95% { transform: translateX(12vw) scaleX(-1); } /* Pause */
          100% { transform: translateX(-50vw) scaleX(-1); } /* Exit Left */
        }

        /* 6. Product: Grows at Dev -> Moves to Van */
        @keyframes productSequence {
          0%, 55% { transform: scale(0); opacity: 0; }
          60%, 75% { transform: scale(1); opacity: 1; } /* Built */
          78% { transform: scale(0.5) translateX(-20px) translateY(10px); opacity: 0; } /* Into Van */
          100% { transform: scale(0); opacity: 0; }
        }

        /* --- Improved Leg Animations --- */
        /* Rotate from the hip (top of the line) */
        @keyframes legSwing1 {
          0%, 100% { transform: rotate(-25deg); }
          50% { transform: rotate(25deg); }
        }
        @keyframes legSwing2 {
          0%, 100% { transform: rotate(25deg); }
          50% { transform: rotate(-25deg); }
        }
        
        @keyframes wheelSpin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(-720deg); } /* Counter-clockwise for left movement */
        }
        
        @keyframes floatLabel {
            0%, 10% { opacity: 0; transform: translateY(10px); }
            20%, 80% { opacity: 1; transform: translateY(0); }
            90%, 100% { opacity: 0; transform: translateY(-10px); }
        }

        .anim-client { animation: clientSequence 26s linear infinite; }
        .anim-rep { animation: repSequence 26s linear infinite; }
        .anim-plan { animation: planTeamSequence 26s linear infinite; }
        .anim-dev { animation: devTeamSequence 26s linear infinite; }
        .anim-van { animation: vanSequence 26s ease-in-out infinite; }
        .anim-product { animation: productSequence 26s linear infinite; }
        
        /* Leg classes with transform origin at the hip (20, 40) */
        .leg-left { transform-origin: 20px 40px; animation: legSwing1 0.6s ease-in-out infinite; }
        .leg-right { transform-origin: 20px 40px; animation: legSwing2 0.6s ease-in-out infinite; }
        
        .anim-wheels { animation: wheelSpin 2s linear infinite; }
        
        .label-stage { animation: floatLabel 3s ease-in-out infinite; }

      `}</style>

      {/* Parallax Background Elements */}
      <div 
        className="absolute top-0 right-0 -z-10 w-1/2 h-full bg-gradient-to-bl from-pebble-50 to-transparent opacity-50 transition-transform duration-75 ease-out"
        style={{ transform: `translateY(${scrollY * 0.2}px)` }}
      ></div>
      <div 
        className="absolute bottom-0 left-0 -z-10 w-96 h-96 bg-accent-50 rounded-full blur-3xl opacity-40 transition-transform duration-75 ease-out"
        style={{ transform: `translateY(-${scrollY * 0.1}px)` }}
      ></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          <RevealOnScroll className="space-y-8 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-pebble-100 text-pebble-700 text-xs font-semibold uppercase tracking-wider">
              <span className="w-2 h-2 rounded-full bg-accent-500 animate-pulse"></span>
              Future-Ready IT Solutions
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-display font-bold text-slate-900 leading-tight">
              Polishing Your <br/>
              <span className="gradient-text">Digital Vision</span> <br/>
              into Reality.
            </h1>
            
            <p className="text-lg text-slate-600 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              We are Pebbles Tech Studio. We craft robust websites, innovative mobile apps, and cutting-edge Gen AI solutions that stand the test of time.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a 
                href="#contact"
                className="inline-flex items-center justify-center gap-2 bg-pebble-900 text-white px-8 py-4 rounded-full font-semibold hover:bg-pebble-800 transition-all hover:scale-105 shadow-lg shadow-pebble-900/20 cursor-pointer"
              >
                Start Your Project
                <ArrowRight size={20} />
              </a>
              <a 
                href="#services"
                className="inline-flex items-center justify-center gap-2 bg-white text-pebble-900 border border-slate-200 px-8 py-4 rounded-full font-semibold hover:bg-slate-50 transition-all hover:border-pebble-300 cursor-pointer"
              >
                Explore Services
              </a>
            </div>

            <div className="pt-8 flex items-center justify-center lg:justify-start gap-8 text-slate-400">
               <div className="flex items-center gap-2">
                 <Code2 size={20} className="text-accent-500" />
                 <span className="text-sm font-medium">Clean Code</span>
               </div>
               <div className="flex items-center gap-2">
                 <Zap size={20} className="text-accent-500" />
                 <span className="text-sm font-medium">Fast Delivery</span>
               </div>
            </div>
          </RevealOnScroll>

          <RevealOnScroll delay={200} className="relative lg:h-[600px] w-full hidden lg:block perspective-1000">
             {/* 3D Tilt Container */}
            <div 
                className="absolute top-1/2 left-1/2 w-full h-full flex justify-center items-center transition-transform duration-100 ease-out"
                style={{ 
                    transform: `translate(-50%, -50%) rotateY(${mousePos.x}deg) rotateX(${-mousePos.y}deg)`,
                    transformStyle: 'preserve-3d'
                }}
            >
               <img 
                 src="https://images.unsplash.com/photo-1635070041078-e363dbe005cb?q=80&w=2070&auto=format&fit=crop" 
                 alt="Abstract Tech Cubes"
                 className="object-cover w-4/5 h-4/5 rounded-3xl shadow-2xl shadow-pebble-200"
                 style={{ transform: 'translateZ(20px)' }}
               />
               
               {/* Floating Cards with separate Z-index for 3D depth */}
               <div 
                 className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl max-w-xs" 
                 style={{ transform: 'translateZ(60px)' }}
               >
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center text-green-600">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                    </div>
                    <div>
                        <p className="text-sm text-slate-500">Project Status</p>
                        <p className="font-bold text-slate-900">Delivered On Time</p>
                    </div>
                  </div>
               </div>

               <div 
                 className="absolute top-10 -right-6 bg-white p-4 rounded-2xl shadow-xl"
                 style={{ transform: 'translateZ(40px)' }}
               >
                  <div className="flex items-center gap-2">
                     <span className="w-3 h-3 bg-accent-500 rounded-full animate-pulse"></span>
                     <span className="font-bold text-slate-900">AI Integration Active</span>
                  </div>
               </div>
            </div>
          </RevealOnScroll>
        </div>
      </div>

      {/* --- Narrative Stickman Animation (Bottom) --- */}
      <div className="absolute bottom-0 left-0 w-full h-28 pointer-events-none overflow-hidden z-20 border-b-4 border-slate-200 bg-gradient-to-t from-white/80 to-transparent">
        
        {/* Phase Labels */}
        <div className="absolute top-4 w-full h-full text-xs font-bold uppercase tracking-wider text-slate-400 z-10">
            <div className="absolute left-[5vw] top-0 animate-[floatLabel_26s_ease-in-out_infinite] opacity-0" style={{animationDelay: '0s'}}>Consultation</div>
            <div className="absolute left-[35vw] top-0 animate-[floatLabel_26s_ease-in-out_infinite] opacity-0" style={{animationDelay: '5s'}}>Planning</div>
            <div className="absolute left-[65vw] top-0 animate-[floatLabel_26s_ease-in-out_infinite] opacity-0" style={{animationDelay: '13s'}}>Development</div>
            <div className="absolute left-[30vw] top-0 animate-[floatLabel_26s_ease-in-out_infinite] opacity-0" style={{animationDelay: '20s'}}>Delivery</div>
        </div>

        {/* 1. Client */}
        <div className="anim-client absolute bottom-0 left-0 z-10">
            <svg width="40" height="60" viewBox="0 0 40 60" className="opacity-80">
                <circle cx="20" cy="10" r="6" stroke="#64748b" fill="#f1f5f9" strokeWidth="2" />
                <line x1="20" y1="16" x2="20" y2="40" stroke="#64748b" strokeWidth="2" />
                <line x1="20" y1="25" x2="25" y2="30" stroke="#64748b" strokeWidth="2" strokeLinecap="round" /> 
                <line x1="20" y1="25" x2="15" y2="35" stroke="#64748b" strokeWidth="2" strokeLinecap="round" />
                {/* Legs with specific classes for swing */}
                <line x1="20" y1="40" x2="20" y2="60" stroke="#64748b" strokeWidth="2" strokeLinecap="round" className="leg-left" />
                <line x1="20" y1="40" x2="20" y2="60" stroke="#64748b" strokeWidth="2" strokeLinecap="round" className="leg-right" />
            </svg>
        </div>

        {/* 2. Pebbles Rep (The Walker) */}
        <div className="anim-rep absolute bottom-0 left-0 z-20">
           <svg width="40" height="60" viewBox="0 0 40 60" className="opacity-100 drop-shadow-sm">
                <circle cx="20" cy="10" r="6" stroke="#0891b2" fill="#e0f2fe" strokeWidth="2" />
                <line x1="20" y1="16" x2="20" y2="40" stroke="#0891b2" strokeWidth="2" />
                <rect x="22" y="30" width="10" height="8" fill="#334155" rx="1" />
                <line x1="20" y1="25" x2="22" y2="30" stroke="#0891b2" strokeWidth="2" strokeLinecap="round" /> 
                {/* Walking legs */}
                <line x1="20" y1="40" x2="20" y2="60" stroke="#0891b2" strokeWidth="2" strokeLinecap="round" className="leg-left" />
                <line x1="20" y1="40" x2="20" y2="60" stroke="#0891b2" strokeWidth="2" strokeLinecap="round" className="leg-right" />
            </svg>
        </div>

        {/* 3. Planning Team (Center) */}
        <div className="anim-plan absolute bottom-0 left-0 z-10">
            <div className="flex gap-4">
                {/* Planner 1 */}
                <svg width="35" height="55" viewBox="0 0 40 60" className="opacity-70">
                    <circle cx="20" cy="10" r="5" stroke="#475569" fill="none" strokeWidth="2" />
                    <line x1="20" y1="16" x2="20" y2="40" stroke="#475569" strokeWidth="2" />
                    <line x1="20" y1="25" x2="10" y2="15" stroke="#475569" strokeWidth="2" /> {/* Hand up */}
                    <line x1="20" y1="40" x2="15" y2="60" stroke="#475569" strokeWidth="2" />
                    <line x1="20" y1="40" x2="25" y2="60" stroke="#475569" strokeWidth="2" />
                </svg>
                {/* Planner 2 */}
                <svg width="35" height="55" viewBox="0 0 40 60" className="opacity-70">
                    <circle cx="20" cy="10" r="5" stroke="#475569" fill="none" strokeWidth="2" />
                    <line x1="20" y1="16" x2="20" y2="40" stroke="#475569" strokeWidth="2" />
                    <line x1="20" y1="25" x2="30" y2="35" stroke="#475569" strokeWidth="2" />
                    <line x1="20" y1="40" x2="15" y2="60" stroke="#475569" strokeWidth="2" />
                    <line x1="20" y1="40" x2="25" y2="60" stroke="#475569" strokeWidth="2" />
                </svg>
            </div>
            {/* Gear Icon above them */}
            <div className="absolute -top-10 left-8 text-pebble-500 animate-spin-slow">
                 <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1Z"/></svg>
            </div>
        </div>

        {/* 4. Dev Team (Right) */}
        <div className="anim-dev absolute bottom-0 left-0 z-10">
             <div className="flex gap-4">
                {/* Dev 1 */}
                <svg width="35" height="55" viewBox="0 0 40 60" className="opacity-70">
                    <circle cx="20" cy="10" r="5" stroke="#475569" fill="none" strokeWidth="2" />
                    <line x1="20" y1="16" x2="20" y2="40" stroke="#475569" strokeWidth="2" />
                    <line x1="20" y1="25" x2="30" y2="25" stroke="#475569" strokeWidth="2" /> {/* Typing */}
                    <line x1="20" y1="40" x2="15" y2="60" stroke="#475569" strokeWidth="2" />
                    <line x1="20" y1="40" x2="25" y2="60" stroke="#475569" strokeWidth="2" />
                </svg>
                 {/* The Product (Box) */}
                <div className="anim-product w-12 h-12 bg-accent-500 rounded-lg shadow-lg border-2 border-white z-10 flex items-center justify-center text-white font-bold text-xs flex-col">
                    <div className="w-full h-1 bg-white/30 absolute top-3"></div>
                    APP
                </div>
                 {/* Dev 2 */}
                <svg width="35" height="55" viewBox="0 0 40 60" className="opacity-70">
                    <circle cx="20" cy="10" r="5" stroke="#475569" fill="none" strokeWidth="2" />
                    <line x1="20" y1="16" x2="20" y2="40" stroke="#475569" strokeWidth="2" />
                    <line x1="20" y1="25" x2="10" y2="25" stroke="#475569" strokeWidth="2" /> {/* Typing */}
                    <line x1="20" y1="40" x2="15" y2="60" stroke="#475569" strokeWidth="2" />
                    <line x1="20" y1="40" x2="25" y2="60" stroke="#475569" strokeWidth="2" />
                </svg>
             </div>
        </div>

        {/* 5. Delivery Van (Right to Left) */}
        <div className="anim-van absolute bottom-0 left-0 z-30 drop-shadow-md">
            {/* transform scaleX(-1) is applied in animation to make it face Left */}
            <svg width="100" height="60" viewBox="0 0 100 60">
                <path d="M5 20 L70 20 L90 40 L90 48 L5 48 Z" fill="#1e293b" />
                <rect x="70" y="25" width="15" height="15" fill="#cbd5e1" />
                {/* Corrected text direction for scaleX(-1) flip */}
                <text x="25" y="37" fill="white" fontSize="6" fontWeight="bold" transform="scale(-1, 1) translate(-90, 0)">PEBBLES</text>
                <g className="anim-wheels" style={{transformOrigin: '25px 48px'}}>
                    <circle cx="25" cy="48" r="7" fill="#0f172a" />
                    <circle cx="25" cy="48" r="3" fill="#94a3b8" />
                    <line x1="25" y1="41" x2="25" y2="55" stroke="#334155" strokeWidth="1" />
                </g>
                <g className="anim-wheels" style={{transformOrigin: '75px 48px'}}>
                    <circle cx="75" cy="48" r="7" fill="#0f172a" />
                    <circle cx="75" cy="48" r="3" fill="#94a3b8" />
                    <line x1="75" y1="41" x2="75" y2="55" stroke="#334155" strokeWidth="1" />
                </g>
            </svg>
        </div>

      </div>
    </section>
  );
};

export default Hero;