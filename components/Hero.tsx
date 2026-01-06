import React from 'react';
import { ArrowRight, Code2, Zap } from 'lucide-react';
import RevealOnScroll from './RevealOnScroll';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 -z-10 w-1/2 h-full bg-gradient-to-bl from-pebble-50 to-transparent opacity-50"></div>
      <div className="absolute bottom-0 left-0 -z-10 w-96 h-96 bg-accent-50 rounded-full blur-3xl opacity-40"></div>

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
                className="inline-flex items-center justify-center gap-2 bg-pebble-900 text-white px-8 py-4 rounded-full font-semibold hover:bg-pebble-800 transition-all hover:scale-105 shadow-lg shadow-pebble-900/20"
              >
                Start Your Project
                <ArrowRight size={20} />
              </a>
              <a 
                href="#services" 
                className="inline-flex items-center justify-center gap-2 bg-white text-pebble-900 border border-slate-200 px-8 py-4 rounded-full font-semibold hover:bg-slate-50 transition-all hover:border-pebble-300"
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

          <RevealOnScroll delay={200} className="relative lg:h-[600px] w-full hidden lg:block">
             {/* Abstract 3D shape representation using CSS/SVG for "Pebbles" feel */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full flex justify-center items-center">
               <img 
                 src="https://images.unsplash.com/photo-1635070041078-e363dbe005cb?q=80&w=2070&auto=format&fit=crop" 
                 alt="Abstract Tech Cubes"
                 className="object-cover w-4/5 h-4/5 rounded-3xl shadow-2xl shadow-pebble-200 rotate-3 hover:rotate-0 transition-all duration-700"
               />
               
               {/* Floating Cards */}
               <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl max-w-xs animate-bounce" style={{animationDuration: '3s'}}>
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

               <div className="absolute top-10 -right-6 bg-white p-4 rounded-2xl shadow-xl animate-pulse">
                  <div className="flex items-center gap-2">
                     <span className="w-3 h-3 bg-accent-500 rounded-full"></span>
                     <span className="font-bold text-slate-900">AI Integration Active</span>
                  </div>
               </div>
            </div>
          </RevealOnScroll>
        </div>
      </div>
    </section>
  );
};

export default Hero;