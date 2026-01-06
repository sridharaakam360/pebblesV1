import React from 'react';
import { Globe, Smartphone, Cpu, Layers, BrainCircuit, Rocket } from 'lucide-react';
import { Service } from '../types';
import RevealOnScroll from './RevealOnScroll';

const services: Service[] = [
  {
    id: 'web',
    title: 'Web Development',
    description: 'Responsive, scalable, and high-performance websites built with modern frameworks like React, Next.js, and Node.js.',
    icon: <Globe size={32} />,
    features: ['E-commerce Solutions', 'Corporate Websites', 'SaaS Platforms']
  },
  {
    id: 'mobile',
    title: 'Mobile App Development',
    description: 'Native and cross-platform mobile applications that provide seamless user experiences on iOS and Android.',
    icon: <Smartphone size={32} />,
    features: ['React Native / Flutter', 'iOS & Android Native', 'App UI/UX Design']
  },
  {
    id: 'custom',
    title: 'Customized Apps',
    description: 'Tailor-made software solutions designed to streamline your specific business processes and operations.',
    icon: <Layers size={32} />,
    features: ['CRM & ERP Systems', 'Internal Tools', 'API Integration']
  },
  {
    id: 'genai',
    title: 'Generative AI Solutions',
    description: 'Unlock the power of AI with custom LLM integrations, chatbots, and automated content generation pipelines.',
    icon: <BrainCircuit size={32} />,
    features: ['Custom Chatbots', 'Workflow Automation', 'Prompt Engineering']
  },
  {
    id: 'product',
    title: 'Product Design',
    description: 'User-centric design thinking that turns complex functionality into intuitive and beautiful interfaces.',
    icon: <Cpu size={32} />,
    features: ['Prototyping', 'User Research', 'Design Systems']
  },
  {
    id: 'consulting',
    title: 'Tech Consulting',
    description: 'Strategic guidance to help you navigate the digital landscape and choose the right technologies.',
    icon: <Rocket size={32} />,
    features: ['Digital Transformation', 'Cloud Strategy', 'Tech Audit']
  }
];

const Services: React.FC = () => {
  return (
    <section id="services" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <RevealOnScroll className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-accent-600 font-semibold tracking-wide uppercase text-sm mb-2">Our Expertise</h2>
          <h3 className="text-3xl md:text-4xl font-display font-bold text-slate-900 mb-4">
            Comprehensive Digital Solutions
          </h3>
          <p className="text-slate-600 text-lg">
            From foundational code to advanced AI, we provide the building blocks for your digital success.
          </p>
        </RevealOnScroll>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, idx) => (
            <RevealOnScroll key={service.id} delay={idx * 100}>
                <div 
                  className="group bg-slate-50 rounded-2xl p-8 hover:bg-white hover:shadow-xl transition-all duration-300 border border-transparent hover:border-pebble-100 h-full"
                >
                  <div className="w-14 h-14 bg-white rounded-xl shadow-sm flex items-center justify-center text-accent-600 mb-6 group-hover:bg-accent-600 group-hover:text-white transition-colors">
                    {service.icon}
                  </div>
                  <h4 className="text-xl font-bold text-slate-900 mb-3">{service.title}</h4>
                  <p className="text-slate-600 mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm text-slate-500">
                        <span className="w-1.5 h-1.5 bg-pebble-400 rounded-full mr-2"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;