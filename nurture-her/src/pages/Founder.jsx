import React from 'react';
import founderImg from '../assets/Founder.jpeg'; 

const Founder = () => {
  return (
    <div className="pt-32 pb-24 bg-white">
      
      {/* --- PAGE HEADER --- */}
      <div className="max-w-6xl mx-auto px-6 mb-12">
        <h1 className="text-4xl md:text-5xl font-serif text-brand-mauve mb-6 tracking-tight">
          The Founder
        </h1>
        <div className="h-1.5 w-16 bg-brand-mauve/80 rounded-full"></div>
      </div>

      {/* --- SECTION 1: THE BIO (SPLIT LAYOUT) --- */}
      <section className="mb-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-start">
            
            {/* Image aligned with top of text */}
            <div className="md:col-span-4">
              <div className="border-4 border-brand-mauve p-2 bg-white shadow-xl">
                <img 
                  src={founderImg} 
                  alt="Halima Muhammad" 
                  className="w-full h-auto block object-cover" 
                />
              </div>
            </div>

            {/* Bio Text */}
            <div className="md:col-span-8"> 
              <div className="space-y-6 text-lg text-gray-700 leading-relaxed font-serif">
                <p>
                  Halima Muhammad is a public health professional with over eight years of experience working across Nigeria’s health system, supporting government institutions, non-governmental organizations, and community leaders to strengthen Primary Health Care, immunization, and health advocacy. She currently serves as a Senior Program Manager for Immunization, where she works closely with states, policymakers, and development partners to build political commitment and secure sustainable funding for health interventions.
                </p>
                <p>
                  Her academic and professional journey reflects a strong commitment to improving health outcomes for women and children. Halima holds a Bachelor’s degree in Biological Science (Microbiology) from the University of Leicester and a Master’s degree in Public Health from Sheffield Hallam University. Her postgraduate research focused on family planning in Northern Nigeria, examining the cultural, gender, and religious influences.
                </p>
                <p>
                  Over the years, she has worked extensively on immunization, disease surveillance, and community health programmes and strategic advocacy projects funded by international partners such as the Gates Foundation and Gavi; the vaccine alliance. Her work has involved engaging traditional and religious leaders, supporting community-based health structures, strengthening Primary Health Care systems, and contributing to the establishment of Emirate Council Committees on Health across Northern Nigeria, aimed at improving health outcomes while respecting local contexts.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- SECTION 2: THE STORY (INSET FEATURE STYLE) --- */}
      <section className="pb-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="bg-gray-50/50 border-l-8 border-brand-mauve p-8 md:p-16 rounded-r-3xl">
            <h2 className="text-3xl font-serif text-brand-mauve mb-10">
              The Story Behind Nurture Her Girl Support Initiative
            </h2>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 text-lg text-gray-700 leading-relaxed font-serif">
              <div className="space-y-8">
                <p>
                  Nurture Her began from a deeply personal place. Growing up, Halima witnessed how many girls transition through puberty, adolescence, and even marriage with very little information about their bodies, their health, or their rights. Conversations around menstruation, emotional changes, reproductive and mental health were often avoided or treated with silence, leaving young girls to navigate critical life stages with confusion, fear, and misinformation.
                </p>
                <p>
                  As a young girl herself, Halima often wished someone would explain why her body was changing, what was normal, and how to care for herself with confidence and dignity. Like many girls, she learned some things too late, learned others incorrectly, and carried questions she felt unable to ask. These early experiences planted a quiet but lasting resolve to ensure that other girls would not grow up feeling unprepared, ashamed, or uninformed.
                </p>
              </div>
              
              <div className="space-y-8">
                <p>
                  Over time, as Halima’s academic and professional journey in public health unfolded, this personal conviction grew stronger. Working across communities and health systems, she continued to see the same gaps she experienced as a child, girls entering puberty and adulthood without accurate, age-appropriate, and culturally respectful guidance.
                </p>
                <p>
                  Nurture Her was created to bridge this gap. The initiative brings together professional public health expertise and lived experience to create safe, supportive, and culturally sensitive spaces where teenage girls can learn about their bodies, their health, and their future with confidence. The focus is not only on information, but on reassurance, dignity, and empowerment.
                </p>
              </div>
            </div>

            {/* Final closing paragraph spanning full width of the inset */}
            <div className="mt-12 pt-8 border-t border-gray-200">
              <p className="text-xl md:text-2xl text-brand-mauve font-serif italic text-center max-w-4xl mx-auto">
                At its core, Nurture Her exists because Halima believes that when girls are nurtured with knowledge, compassion, and opportunity, they grow into confident women who can make informed decisions about their lives and their communities. This belief continues to shape the vision, values, and work of Nurture Her every day.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Founder;