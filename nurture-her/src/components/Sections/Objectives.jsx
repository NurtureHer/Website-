import React from 'react';

const objectives = [
  {
    title: "Safe Spaces",
    desc: "To create safe, supportive spaces for girls to learn, connect, and grow."
  },
  {
    title: "Career Awareness",
    desc: "To foster career awareness and life skills, bridging the gap to adulthood."
  },
  {
    title: "Health Education",
    desc: "To provide teenage girls with accurate and culturally appropriate reproductive health education."
  },
  {
    title: "Identity & Worth",
    desc: "To build self-esteem and leadership skills so girls recognize their inherent worth."
  },
  {
    title: "Well-being",
    desc: "To promote physical, mental, and emotional well-being."
  }
];

const Objectives = () => {
  return (
    <section id="objectives" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-serif text-brand-mauve">Our Objectives</h2>
          <div className="h-1 w-24 bg-brand-mauve mx-auto mt-4 opacity-30"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {objectives.map((obj, index) => (
            <div key={index} className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 border-t-4 border-brand-mauve/20">
              {/* If you have icons, you can add an <img /> here */}
              <h4 className="text-xl font-serif text-brand-mauve mb-3">{obj.title}</h4>
              <p className="text-gray-600 text-sm leading-relaxed">
                {obj.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Objectives;