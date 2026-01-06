import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Loader2, CheckCircle } from 'lucide-react';
import RevealOnScroll from './RevealOnScroll';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    service: 'Web Development',
    message: ''
  });
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    
    // Simulate API call
    setTimeout(() => {
      setStatus('success');
      // Reset form
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        service: 'Web Development',
        message: ''
      });
      
      // Clear success message after 5 seconds
      setTimeout(() => setStatus('idle'), 5000);
    }, 2000);
  };

  return (
    <section id="contact" className="py-24 bg-pebble-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <RevealOnScroll className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-accent-600 font-semibold tracking-wide uppercase text-sm mb-2">Get In Touch</h2>
          <h3 className="text-3xl md:text-4xl font-display font-bold text-slate-900 mb-4">
            Let's Build Something Amazing
          </h3>
          <p className="text-slate-600">
            Have a project in mind? Looking for a quote? Or just want to discuss the latest in AI? Drop us a message.
          </p>
        </RevealOnScroll>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Contact Info */}
          <RevealOnScroll delay={100} className="lg:col-span-1 space-y-4">
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 transform hover:scale-105 transition-transform duration-300">
                <div className="w-10 h-10 bg-pebble-100 rounded-lg flex items-center justify-center text-pebble-700 mb-4">
                    <Mail size={20} />
                </div>
                <h4 className="font-bold text-slate-900">Email Us</h4>
                <p className="text-slate-500 text-sm mt-1">hello@pebblestech.com</p>
            </div>
            
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 transform hover:scale-105 transition-transform duration-300">
                <div className="w-10 h-10 bg-pebble-100 rounded-lg flex items-center justify-center text-pebble-700 mb-4">
                    <Phone size={20} />
                </div>
                <h4 className="font-bold text-slate-900">Call Us</h4>
                <p className="text-slate-500 text-sm mt-1">+1 (555) 123-4567</p>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 transform hover:scale-105 transition-transform duration-300">
                <div className="w-10 h-10 bg-pebble-100 rounded-lg flex items-center justify-center text-pebble-700 mb-4">
                    <MapPin size={20} />
                </div>
                <h4 className="font-bold text-slate-900">Visit Us</h4>
                <p className="text-slate-500 text-sm mt-1">123 Tech Avenue, Silicon Valley, CA</p>
            </div>
          </RevealOnScroll>

          {/* Form */}
          <RevealOnScroll delay={300} className="lg:col-span-2 bg-white rounded-3xl shadow-xl p-8 border border-slate-100 relative overflow-hidden">
            {status === 'success' ? (
                <div className="absolute inset-0 bg-white flex flex-col items-center justify-center text-center p-8 z-10 animate-fade-in">
                    <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-6">
                        <CheckCircle size={40} />
                    </div>
                    <h3 className="text-2xl font-bold text-slate-900 mb-2">Message Sent!</h3>
                    <p className="text-slate-600">Thank you for reaching out. Our team will get back to you within 24 hours.</p>
                    <button 
                        onClick={() => setStatus('idle')}
                        className="mt-8 text-sm font-semibold text-accent-600 hover:text-accent-700 underline"
                    >
                        Send another message
                    </button>
                </div>
            ) : null}

            <form onSubmit={handleSubmit} className={`space-y-6 transition-opacity duration-300 ${status === 'success' ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}>
                <div className="grid md:grid-cols-2 gap-6">
                    <div>
                        <label className="block text-sm font-medium text-slate-700 mb-2">First Name</label>
                        <input 
                            name="firstName"
                            required
                            value={formData.firstName}
                            onChange={handleChange}
                            type="text" 
                            className="w-full px-4 py-3 rounded-lg bg-slate-50 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-accent-500 focus:bg-white transition-all" 
                            placeholder="John" 
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-slate-700 mb-2">Last Name</label>
                        <input 
                            name="lastName"
                            required
                            value={formData.lastName}
                            onChange={handleChange}
                            type="text" 
                            className="w-full px-4 py-3 rounded-lg bg-slate-50 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-accent-500 focus:bg-white transition-all" 
                            placeholder="Doe" 
                        />
                    </div>
                </div>

                <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">Email Address</label>
                    <input 
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        type="email" 
                        className="w-full px-4 py-3 rounded-lg bg-slate-50 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-accent-500 focus:bg-white transition-all" 
                        placeholder="john@example.com" 
                    />
                </div>

                <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">Service Interested In</label>
                    <select 
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg bg-slate-50 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-accent-500 focus:bg-white transition-all"
                    >
                        <option>Web Development</option>
                        <option>Mobile App</option>
                        <option>Generative AI</option>
                        <option>Custom Software</option>
                        <option>Product Design</option>
                        <option>Other</option>
                    </select>
                </div>

                <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">Message</label>
                    <textarea 
                        name="message"
                        required
                        value={formData.message}
                        onChange={handleChange}
                        rows={4} 
                        className="w-full px-4 py-3 rounded-lg bg-slate-50 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-accent-500 focus:bg-white transition-all" 
                        placeholder="Tell us about your project..."
                    ></textarea>
                </div>

                <button 
                    type="submit" 
                    disabled={status === 'submitting'}
                    className="w-full bg-pebble-900 text-white font-bold py-4 rounded-xl hover:bg-accent-600 disabled:bg-pebble-300 disabled:cursor-not-allowed transition-colors flex items-center justify-center gap-2"
                >
                    {status === 'submitting' ? (
                        <>
                            <Loader2 size={18} className="animate-spin" />
                            Sending...
                        </>
                    ) : (
                        <>
                            Send Message
                            <Send size={18} />
                        </>
                    )}
                </button>
            </form>
          </RevealOnScroll>
        </div>
      </div>
    </section>
  );
};

export default Contact;