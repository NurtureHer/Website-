import React from 'react';
// NEW IMPORT: Importing the Main Logo for the center stage
import mainLogo from '../../assets/Main Logo.png'; 

const Hero = () => {
  return (
    <div id="home" className="relative bg-white pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        
        {/* REPLACED: Removed text titles/tags and replaced with the Main Logo image */}
        <div className="flex justify-center mb-8">
          <img 
            src={mainLogo} 
            alt="Nurture Her Girl Support Initiative" 
            className="w-full max-w-lg h-auto object-contain" // Controls size: max width of 32rem (lg)
          />
        </div>
        
        <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500 font-sans leading-relaxed">
          Creating safe, supportive spaces where girls can learn, connect, and grow into healthy, strong, and empowered women.
        </p>
        
        {/* REMOVED: The "Our Vision" button is gone */}
        
      </div>

      {/* Decorative background element */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10 opacity-20 pointer-events-none">
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-brand-mauve rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 -left-24 w-72 h-72 bg-brand-mauve/50 rounded-full blur-3xl"></div>
      </div>
    </div>
  );
};

export default Hero;