import React from 'react';
import RevealOnScroll from './RevealOnScroll';

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-white scroll-mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
            <RevealOnScroll className="relative">
                <div className="grid grid-cols-2 gap-4">
                    <img 
                        src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop" 
                        alt="Team Working" 
                        className="rounded-2xl shadow-lg object-cover h-64 w-full translate-y-8"
                    />
                    <img 
                        src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop" 
                        alt="Brainstorming" 
                        className="rounded-2xl shadow-lg object-cover h-64 w-full"
                    />
                </div>
                {/* Decorative Elements */}
                <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-dots-pattern opacity-20"></div>
            </RevealOnScroll>

            <RevealOnScroll delay={200} className="space-y-6">
                <h2 className="text-accent-600 font-semibold tracking-wide uppercase text-sm">Who We Are</h2>
                <h3 className="text-3xl md:text-4xl font-display font-bold text-slate-900">
                    Solid Foundations for Agile Growth.
                </h3>
                <p className="text-slate-600 text-lg leading-relaxed">
                    Just as pebbles are shaped by water over time to become smooth and resilient, 
                    <span className="font-bold text-slate-900"> Pebbles Tech Studio</span> refines complex technologies into smooth, user-friendly experiences.
                </p>
                <p className="text-slate-600 leading-relaxed">
                    We are a team of passionate engineers, designers, and AI specialists. We believe that every digital product should be robust in architecture but fluid in user experience. Whether it's a mobile app for a startup or an enterprise Gen AI solution, we bring precision and creativity to the table.
                </p>
                
                <div className="pt-6 grid grid-cols-3 gap-8 border-t border-slate-100">
                    <div>
                        <span className="block text-3xl font-bold text-pebble-900">50+</span>
                        <span className="text-sm text-slate-500">Projects Done</span>
                    </div>
                    <div>
                        <span className="block text-3xl font-bold text-pebble-900">20+</span>
                        <span className="text-sm text-slate-500">Expert Minds</span>
                    </div>
                    <div>
                        <span className="block text-3xl font-bold text-pebble-900">100%</span>
                        <span className="text-sm text-slate-500">Client Satisfaction</span>
                    </div>
                </div>
            </RevealOnScroll>
        </div>
      </div>
    </section>
  );
};

export default About;