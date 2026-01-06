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
        /* --- Animation Keyframes (20s Loop) --- */

        /* 1. Coffee Sip Animation (Continuous) */
        @keyframes sipCoffee {
            0%, 80% { transform: rotate(0deg); }
            85%, 95% { transform: rotate(-45deg) translateY(-5px); } /* Lift cup */
            100% { transform: rotate(0deg); }
        }

        /* 2. Message Fly (Rep -> Plan) */
        @keyframes messageFly {
            0%, 10% { opacity: 0; transform: scale(0); left: 18vw; top: 60%; }
            12% { opacity: 1; transform: scale(1); left: 18vw; top: 40%; }
            25% { opacity: 1; transform: scale(1); left: 38vw; top: 40%; } /* Arrive Plan */
            28% { opacity: 0; transform: scale(0); left: 38vw; top: 60%; }
            100% { opacity: 0; }
        }

        /* 3. Planning Team Appear */
        @keyframes planAppear {
            0%, 25% { opacity: 0; transform: scale(0.8); }
            28% { opacity: 1; transform: scale(1); }
            40% { opacity: 1; transform: scale(1); }
            45% { opacity: 0; transform: scale(0.8); }
            100% { opacity: 0; }
        }

        /* 4. Runner (Plan -> Dev) */
        @keyframes runnerRun {
            0%, 40% { opacity: 0; transform: translateX(38vw) scaleX(1); }
            42% { opacity: 1; transform: translateX(38vw) scaleX(1); }
            58% { opacity: 1; transform: translateX(65vw) scaleX(1); } /* Arrive Dev */
            60% { opacity: 0; transform: translateX(65vw) scaleX(1); }
            100% { opacity: 0; }
        }

        /* 5. Dev Team Appear */
        @keyframes devAppear {
            0%, 58% { opacity: 0; }
            60% { opacity: 1; }
            78% { opacity: 1; }
            82% { opacity: 0; }
            100% { opacity: 0; }
        }

        /* 6. Product Build */
        @keyframes productBuild {
            0%, 65% { transform: scale(0); opacity: 0; }
            70%, 78% { transform: scale(1); opacity: 1; }
            80% { transform: scale(0.5) translateX(-20px) translateY(10px); opacity: 0; } /* Into Van */
            100% { transform: scale(0); opacity: 0; }
        }

        /* 7. Van Delivery */
        @keyframes vanDrive {
             0%, 75% { transform: translateX(110vw) scaleX(-1); } /* Waiting Right (scaleX(-1) faces Left) */
             80% { transform: translateX(65vw) scaleX(-1); } /* Arrive Dev */
             85% { transform: translateX(65vw) scaleX(-1); } /* Load */
             95% { transform: translateX(12vw) scaleX(-1); } /* Arrive Client */
             100% { transform: translateX(-20vw) scaleX(-1); } /* Exit Left */
        }
        
        @keyframes wheelSpin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(-720deg); }
        }
        
        @keyframes runLegs { 
            0%, 100% { transform: rotate(-30deg); } 
            50% { transform: rotate(30deg); } 
        }

        /* Classes */
        .anim-arm-sip { transform-origin: 20px 20px; animation: sipCoffee 8s ease-in-out infinite; }
        .anim-message { animation: messageFly 20s linear infinite; }
        .anim-plan { animation: planAppear 20s ease-in-out infinite; }
        .anim-runner { animation: runnerRun 20s linear infinite; }
        .anim-dev { animation: devAppear 20s ease-in-out infinite; }
        .anim-product { animation: productBuild 20s ease-in-out infinite; }
        .anim-van { animation: vanDrive 20s ease-in-out infinite; }
        .anim-wheels { animation: wheelSpin 2s linear infinite; }
        .anim-legs-run { transform-origin: 25px 35px; animation: runLegs 0.2s linear infinite; }

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
      <div className="absolute bottom-0 left-0 w-full h-32 pointer-events-none overflow-hidden z-20 border-b-4 border-slate-200 bg-gradient-to-t from-white/90 to-transparent">
        
        {/* Scene 1: Coffee Meeting (Always Visible on Left) */}
        <div className="absolute bottom-0 left-[5vw] z-30">
            {/* Table */}
            <div className="absolute bottom-0 left-4 w-28 h-12 border-t-4 border-slate-300 bg-white/50 skew-x-12"></div>
            
            <div className="flex gap-10 relative">
                {/* Client */}
                <div className="relative">
                     <svg width="40" height="70" viewBox="0 0 40 70">
                        <circle cx="20" cy="10" r="6" stroke="#64748b" fill="#f1f5f9" strokeWidth="2" />
                        <line x1="20" y1="16" x2="20" y2="45" stroke="#64748b" strokeWidth="2" />
                        {/* Sitting Legs */}
                        <path d="M20 45 L35 45 L35 65" stroke="#64748b" strokeWidth="2" fill="none" />
                        {/* Arm holding Cup */}
                        <g className="anim-arm-sip">
                            <line x1="20" y1="20" x2="35" y2="25" stroke="#64748b" strokeWidth="2" />
                            <rect x="32" y="20" width="6" height="8" fill="#cbd5e1" rx="1" /> {/* Cup */}
                        </g>
                    </svg>
                    <div className="absolute -top-4 -left-2 bg-white px-1 rounded shadow text-[9px] text-slate-500">Client</div>
                </div>

                {/* Rep */}
                <div className="relative">
                    <svg width="40" height="70" viewBox="0 0 40 70">
                        <circle cx="20" cy="10" r="6" stroke="#0891b2" fill="#e0f2fe" strokeWidth="2" />
                        <line x1="20" y1="16" x2="20" y2="45" stroke="#0891b2" strokeWidth="2" />
                        {/* Sitting Legs */}
                        <path d="M20 45 L5 45 L5 65" stroke="#0891b2" strokeWidth="2" fill="none" />
                        {/* Arm holding Cup */}
                        <g className="anim-arm-sip" style={{animationDelay: '1s'}}>
                            <line x1="20" y1="20" x2="5" y2="25" stroke="#0891b2" strokeWidth="2" />
                            <rect x="2" y="20" width="6" height="8" fill="#0891b2" rx="1" /> {/* Cup */}
                        </g>
                    </svg>
                    <div className="absolute -top-4 -right-2 bg-white px-1 rounded shadow text-[9px] text-accent-600">Rep</div>
                </div>
            </div>
        </div>

        {/* Scene 2: Flying Message */}
        <div className="anim-message absolute w-8 h-6 bg-accent-500 rounded text-white flex items-center justify-center z-40 shadow-md">
            <div className="w-0 h-0 border-l-[4px] border-l-transparent border-t-[6px] border-t-white border-r-[4px] border-r-transparent absolute top-0"></div>
            <div className="w-full h-full border border-white/30 rounded"></div>
        </div>

        {/* Scene 3: Planning Team (Center) */}
        <div className="anim-plan absolute bottom-0 left-[38vw] z-20">
            <div className="flex gap-4 items-end">
                {/* Planner */}
                <svg width="30" height="60" viewBox="0 0 40 60">
                     <circle cx="20" cy="10" r="5" stroke="#475569" strokeWidth="2" fill="none"/>
                     <line x1="20" y1="15" x2="20" y2="40" stroke="#475569" strokeWidth="2"/>
                     <line x1="20" y1="40" x2="15" y2="60" stroke="#475569" strokeWidth="2"/>
                     <line x1="20" y1="40" x2="25" y2="60" stroke="#475569" strokeWidth="2"/>
                     <line x1="20" y1="25" x2="10" y2="15" stroke="#475569" strokeWidth="2"/> {/* Hand up */}
                </svg>
                {/* Board */}
                <div className="mb-10 bg-white border border-slate-300 p-1 rounded shadow-sm w-12 h-8 flex flex-wrap gap-0.5">
                    <div className="w-2 h-2 bg-blue-200 rounded-[1px]"></div>
                    <div className="w-2 h-2 bg-green-200 rounded-[1px]"></div>
                    <div className="w-2 h-2 bg-red-200 rounded-[1px]"></div>
                </div>
            </div>
        </div>

        {/* Scene 4: Runner (Moves Plan -> Dev) */}
        <div className="anim-runner absolute bottom-0 left-0 z-20">
             <svg width="40" height="60" viewBox="0 0 40 60">
                 <circle cx="20" cy="10" r="5" stroke="#0891b2" strokeWidth="2" fill="#e0f2fe"/>
                 <line x1="20" y1="15" x2="28" y2="35" stroke="#0891b2" strokeWidth="2" transform="rotate(25 20 15)"/> {/* Lean forward */}
                 <line x1="20" y1="20" x2="30" y2="30" stroke="#0891b2" strokeWidth="2"/> {/* Arms */}
                 <line x1="20" y1="20" x2="10" y2="30" stroke="#0891b2" strokeWidth="2"/>
                 <line x1="28" y1="35" x2="18" y2="55" stroke="#0891b2" strokeWidth="2" className="anim-legs-run" />
                 <line x1="28" y1="35" x2="38" y2="55" stroke="#0891b2" strokeWidth="2" className="anim-legs-run" style={{animationDelay: '0.1s'}}/>
             </svg>
        </div>

        {/* Scene 5: Dev Team (Right) */}
        <div className="anim-dev absolute bottom-0 left-[65vw] z-20">
             <div className="flex gap-4 items-end">
                {/* Developer */}
                <svg width="35" height="60" viewBox="0 0 40 60">
                     <circle cx="20" cy="10" r="5" stroke="#475569" strokeWidth="2" fill="none"/>
                     <line x1="20" y1="15" x2="20" y2="40" stroke="#475569" strokeWidth="2"/>
                     <line x1="20" y1="25" x2="32" y2="30" stroke="#475569" strokeWidth="2"/> {/* Typing */}
                     <line x1="20" y1="40" x2="15" y2="60" stroke="#475569" strokeWidth="2"/>
                     <line x1="20" y1="40" x2="25" y2="60" stroke="#475569" strokeWidth="2"/>
                </svg>
                {/* Product appearing */}
                <div className="anim-product mb-10 w-12 h-10 bg-accent-500 rounded border-2 border-white shadow-lg flex items-center justify-center text-white text-[9px] font-bold flex-col z-10">
                    <div className="w-8 h-1 bg-white/30 mb-1 rounded"></div>
                    APP
                </div>
            </div>
        </div>

        {/* Scene 6: Van Delivery (Right -> Left) */}
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