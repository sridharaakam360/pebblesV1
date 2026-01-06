import React from 'react';
import { Linkedin, Twitter, Instagram, Github } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-pebble-950 text-slate-400 py-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div className="col-span-1 md:col-span-2">
                <div className="flex items-center gap-2 mb-4">
                     <div className="w-8 h-8 flex items-center justify-center relative">
                        <div className="absolute w-5 h-3 bg-white rounded-full top-2 left-0 transform -rotate-12"></div>
                        <div className="absolute w-4 h-2 bg-accent-500 rounded-full bottom-2 right-0 transform rotate-6"></div>
                    </div>
                    <span className="font-display font-bold text-2xl text-white">Pebbles</span>
                </div>
                <p className="text-sm leading-relaxed max-w-xs mb-6">
                    Pebbles Tech Studio provides world-class IT solutions. We transform complex challenges into smooth, elegant digital products.
                </p>
                <div className="flex space-x-4">
                    <a href="#" className="text-slate-400 hover:text-white transition-colors"><Linkedin size={20} /></a>
                    <a href="#" className="text-slate-400 hover:text-white transition-colors"><Twitter size={20} /></a>
                    <a href="#" className="text-slate-400 hover:text-white transition-colors"><Instagram size={20} /></a>
                    <a href="#" className="text-slate-400 hover:text-white transition-colors"><Github size={20} /></a>
                </div>
            </div>
            
            <div>
                <h4 className="text-white font-bold mb-4">Services</h4>
                <ul className="space-y-2 text-sm">
                    <li><a href="#" className="hover:text-accent-500 transition-colors">Web Development</a></li>
                    <li><a href="#" className="hover:text-accent-500 transition-colors">Mobile Apps</a></li>
                    <li><a href="#" className="hover:text-accent-500 transition-colors">Generative AI</a></li>
                    <li><a href="#" className="hover:text-accent-500 transition-colors">Cloud Solutions</a></li>
                </ul>
            </div>

            <div>
                <h4 className="text-white font-bold mb-4">Company</h4>
                <ul className="space-y-2 text-sm">
                    <li><a href="#about" className="hover:text-accent-500 transition-colors">About Us</a></li>
                    <li><a href="#" className="hover:text-accent-500 transition-colors">Careers</a></li>
                    <li><a href="#" className="hover:text-accent-500 transition-colors">Blog</a></li>
                    <li><a href="#contact" className="hover:text-accent-500 transition-colors">Contact</a></li>
                </ul>
            </div>
        </div>
        
        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center text-sm">
            <p>&copy; {new Date().getFullYear()} Pebbles Tech Studio. All rights reserved.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
                <a href="#" className="hover:text-white">Privacy Policy</a>
                <a href="#" className="hover:text-white">Terms of Service</a>
            </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
