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
    <section id="objectives" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-serif text-brand-mauve">Our Objectives</h2>
          <div className="h-1 w-24 bg-brand-mauve mx-auto mt-4 opacity-30"></div>
        </div>

        <div className="flex flex-wrap justify-center gap-6">
          {objectives.map((obj, index) => (
            <div 
              key={index} 
              // WIDTH: Keeps the 3-on-top, 2-on-bottom layout
              // HEIGHT: h-40 (10rem) makes it a very slim, horizontal card
              className="
                w-full 
                md:w-[calc(50%-1.5rem)] 
                lg:w-[calc(33.33%-1.5rem)] 
                h-40
                bg-white p-5 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 
                border-t-4 border-brand-mauve/20 
                flex flex-col justify-center items-center text-center"
            >
              <h4 className="text-xl font-serif text-brand-mauve mb-2">{obj.title}</h4>
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