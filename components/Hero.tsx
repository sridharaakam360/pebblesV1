import React, { useState, useEffect, useRef } from 'react';
import { ArrowRight, Code2, Zap } from 'lucide-react';
import RevealOnScroll from './RevealOnScroll';
import StickmanStory from './StickmanStory';

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
      className="relative min-h-[85vh] flex items-center pt-20 pb-32 lg:pt-0 lg:pb-48 overflow-hidden scroll-mt-24 mb-16"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      ref={containerRef}
    >
      {/* Parallax Background Elements */}
      <div
        className="absolute top-0 right-0 -z-10 w-1/2 h-full bg-gradient-to-bl from-pebble-50 to-transparent opacity-50 transition-transform duration-75 ease-out"
        style={{ transform: `translateY(${scrollY * 0.2}px)` }}
      ></div>
      <div
        className="absolute bottom-0 left-0 -z-10 w-96 h-96 bg-accent-50 rounded-full blur-3xl opacity-40 transition-transform duration-75 ease-out"
        style={{ transform: `translateY(-${scrollY * 0.1}px)` }}
      ></div>

      {/* <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative"> */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative translate-y-14">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          <RevealOnScroll className="space-y-8 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-pebble-100 text-pebble-700 text-xs font-semibold uppercase tracking-wider">
              <span className="w-2 h-2 rounded-full bg-accent-500 animate-pulse"></span>
              Future-Ready IT Solutions
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-display font-bold text-slate-900 leading-tight">
              Polishing Your <br />
              <span className="gradient-text">Digital Vision</span> <br />
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

      {/* Use the separate StickmanStory component */}
      <StickmanStory />
    </section>
  );
};

export default Hero;