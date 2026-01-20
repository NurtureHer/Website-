import React from 'react';

const MissionVision = () => {
  return (
    <section id="mission" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          
          {/* Vision Card */}
          <div className="p-10 border border-gray-100 shadow-xl shadow-brand-mauve/5 hover:shadow-brand-mauve/10 transition-all duration-300 rounded-lg relative overflow-hidden group">
            <div className="absolute top-0 left-0 w-2 h-full bg-brand-mauve transform group-hover:scale-y-110 transition-transform origin-top"></div>
            <h3 className="text-3xl font-serif text-brand-mauve mb-6">Our Vision</h3>
            <p className="text-gray-600 text-lg leading-relaxed">
              A world where every teenage girl is informed, confident, healthy, and empowered to reach her full potential.
            </p>
          </div>

          {/* Mission Card */}
          <div className="p-10 bg-brand-mauve text-white rounded-lg shadow-xl relative overflow-hidden">
            <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-white/10 rounded-full"></div>
            <h3 className="text-3xl font-serif mb-6">Our Mission</h3>
            <p className="text-white/90 text-lg leading-relaxed">
              To empower teenage girls through accurate and culturally appropriate reproductive health education, safe and supportive spaces, and holistic programs that build self-esteem, leadership, and life skills.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default MissionVision;