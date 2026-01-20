import React from 'react';

const Hero = () => {
  return (
    <div id="home" className="relative bg-white pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        
        <span className="inline-block py-1 px-3 rounded-full bg-brand-mauve/10 text-brand-mauve font-sans text-sm font-bold tracking-wider mb-6">
          NON-GOVERNMENTAL ORGANIZATION
        </span>
        
        <h1 className="text-5xl md:text-7xl font-serif text-brand-mauve mb-6 leading-tight">
          Nurture Her <br />
          <span className="text-gray-800 text-3xl md:text-5xl italic font-light">Girl Support Initiative</span>
        </h1>
        
        <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500 font-sans leading-relaxed">
          Creating safe, supportive spaces where girls can learn, connect, and grow into healthy, strong, and empowered women.
        </p>
        
        <div className="mt-10 flex justify-center gap-4">
          <a href="#mission" className="px-8 py-3 border border-brand-mauve text-brand-mauve hover:bg-brand-mauve hover:text-white transition-all duration-300 font-sans rounded-sm">
            Our Vision
          </a>
        </div>
      </div>

      {/* Decorative background element (The "Organic" touch) */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10 opacity-20 pointer-events-none">
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-brand-mauve rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 -left-24 w-72 h-72 bg-brand-mauve/50 rounded-full blur-3xl"></div>
      </div>
    </div>
  );
};

export default Hero;