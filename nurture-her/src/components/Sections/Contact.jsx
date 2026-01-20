import React from 'react';
import { Mail, Instagram, Linkedin, ArrowRight } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-white relative overflow-hidden">
      {/* Decorative background circle */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-brand-mauve/5 rounded-full -translate-y-1/2 translate-x-1/2"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Side: The "Invitation" */}
          <div>
            <h2 className="text-4xl font-serif text-brand-mauve mb-6">
              Connect With Us
            </h2>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed font-sans">
              Whether you are a student looking for support, a partner wanting to collaborate, or just curious about our work, we would love to hear from you.
            </p>
            
            <div className="flex items-center gap-2 text-brand-mauve font-medium">
              <span>Join our community</span>
              <div className="h-px w-12 bg-brand-mauve"></div>
            </div>
          </div>

          {/* Right Side: The Contact Cards */}
          <div className="space-y-6">
            
            {/* Email Card */}
            <a 
              href="mailto:info@nurtureher.org" 
              className="flex items-center p-6 bg-white border border-gray-100 shadow-sm rounded-xl hover:shadow-md hover:border-brand-mauve/30 transition-all duration-300 group"
            >
              <div className="bg-brand-mauve/10 p-4 rounded-full text-brand-mauve group-hover:bg-brand-mauve group-hover:text-white transition-colors">
                <Mail size={24} />
              </div>
              <div className="ml-6">
                <h3 className="text-lg font-serif text-gray-900">Email Us</h3>
                <p className="text-gray-500 font-sans">info@nurtureher.org</p>
              </div>
              <ArrowRight className="ml-auto text-gray-300 group-hover:text-brand-mauve transition-colors" size={20} />
            </a>

           {/* Instagram Card */}
            <a 
              href="https://instagram.com/nurtureher_ng"  // <--- Update this line
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center p-6 bg-white border border-gray-100 shadow-sm rounded-xl hover:shadow-md hover:border-brand-mauve/30 transition-all duration-300 group"
            >
              <div className="bg-brand-mauve/10 p-4 rounded-full text-brand-mauve group-hover:bg-brand-mauve group-hover:text-white transition-colors">
                <Instagram size={24} />
              </div>
              <div className="ml-6">
                <h3 className="text-lg font-serif text-gray-900">Instagram</h3>
                <p className="text-gray-500 font-sans">@nurtureher_ng</p> {/* Update the display text too */}
              </div>
              <ArrowRight className="ml-auto text-gray-300 group-hover:text-brand-mauve transition-colors" size={20} />
            </a>

            {/* LinkedIn Card */}
            <a 
              href="https://linkedin.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center p-6 bg-white border border-gray-100 shadow-sm rounded-xl hover:shadow-md hover:border-brand-mauve/30 transition-all duration-300 group"
            >
              <div className="bg-brand-mauve/10 p-4 rounded-full text-brand-mauve group-hover:bg-brand-mauve group-hover:text-white transition-colors">
                <Linkedin size={24} />
              </div>
              <div className="ml-6">
                <h3 className="text-lg font-serif text-gray-900">LinkedIn</h3>
                <p className="text-gray-500 font-sans">Nurture Her Initiative</p>
              </div>
              <ArrowRight className="ml-auto text-gray-300 group-hover:text-brand-mauve transition-colors" size={20} />
            </a>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;