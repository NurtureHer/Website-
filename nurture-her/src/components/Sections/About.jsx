import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-24 bg-brand-mauve/5">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: The Brand Zone */}
          {/* UPDATED: Removed 'md:items-start' so it stays centered on desktop too */}
          <div className="md:col-span-4 flex flex-col items-center md:border-r md:border-brand-mauve/20 h-full">
            
            <h2 className="text-4xl md:text-5xl font-serif text-brand-mauve mb-6 tracking-tight text-center">
              About Us
            </h2>
            
            <div className="h-1.5 w-16 bg-brand-mauve/80 rounded-full"></div>
          </div>

          {/* Right Column: The Content Zone */}
          <div className="md:col-span-8">
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed font-serif mb-6">
              Nurture Her Girls Support Initiative is a non-governmental organization that supports and empowers teenage girls.
            </p>
            <p className="text-gray-600 font-sans leading-relaxed mb-6">
              We provide culturally appropriate health education, life skills, and leadership training. We bridge the gap between adolescence and adulthood by fostering career awareness and practical life skills.
            </p>
            <p className="text-gray-600 font-sans leading-relaxed">
              Our goal is to prepare girls not just to participate in society, but to lead it.
            </p>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default About;