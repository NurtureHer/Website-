import React, { useState } from 'react';
import { Linkedin, ChevronDown, ChevronUp } from 'lucide-react';

// --- IMAGE IMPORTS ---
// (Kept your existing imports)
import imgHalima from '../assets/halima.png';
import imgZainabA from '../assets/zee.png';
import imgAaliyah from '../assets/aaliya.png';
import imgfauzie from '../assets/fauzie.png';
import imgabdul from '../assets/abdul.png';
import placeholder from '../assets/placeholder.png';

// --- DATA ---
const departments = [
  {
    title: "The Founder",
    members: [{ 
      name: "Halima Muhammad", 
      role: "Founder", 
      image: imgHalima,
      bio: "Visionary lead of Nurture Her. A public health professional dedicated to empowering teenage girls across Nigeria.", 
      linkedin: "#" 
    }]
  },
  {
    title: "Social Media",
    members: [{ 
      name: "Zainab A Ahmed", 
      role: "Program officer/ Social Media Manager", 
      image: imgZainabA,
      // Updated Full Bio
      bio: "Zainab Ahmed is a global development and social impact advocate with a background in Business Administration and Early Childhood Education. She is passionate about creating sustainable social impact through innovative programs and community-based initiatives.", 
      linkedin: "#" 
    }]
  },
  {
    title: "Graphic Design",
    members: [
      { name: "Amina Muhammad ", role: "Graphic Designer", image: placeholder, bio: "Crafting our visual identity.", linkedin: "#" },
      { name: "Fauziyya Abdullahi Ahmed", role: "Graphic Designer", image: imgfauzie, bio: "Fauziyya Abdullahi Ahmed is a Computer Science professional specializing in Data Science and Machine Learning. She is passionate about leveraging technology and analytical frameworks to drive meaningful social innovation and community-focused initiatives. By combining technical precision with creative problem-solving, she helps design engaging, accessible resources for Nurture Her. Fauziyya is committed to using her expertise to create digital spaces that empower girls to build confidence, access new opportunities, and reach their full potential.", linkedin: "#" }
    ]
  },
  
  {
    title: "Program Planning",
    members: [
      { 
        name: "Khadija Muhammad Abdu", 
        role: "Program manager", 
        image: placeholder,
        // Updated Full Bio
        bio: "Dr. Khadija is a dentist with a strong passion for community service and improving lives through accessible, compassionate care. Alongside clinical training, she is expanding her skill set through a course in program management, equipping her to lead initiatives that create sustainable impact. Driven by service, leadership, and continuous growth, she is committed to leveraging both healthcare expertise and strategic management to better serve her community and make a meaningful difference.", 
        linkedin: "#" 
      },
      { 
        name: "Maimuna Umaimah Gidado", 
        role: "Program Planning Team", 
        image: placeholder,
        // Updated Full Bio
        bio: "Maimuna Umaimah Gidado is a young lawyer who is passionate about supporting girls and women through advocacy and community-focused work. As part of the Program Planning Team at NurtureHer, she helps design impactful programs aimed at empowering the girl child and promoting her overall wellbeing. Umaimah is driven by a genuine desire to create safe spaces where girls can learn, grow, and thrive.", 
        linkedin: "#" 
      },
      { 
        name: "Zainab", 
        role: "Planner", 
        image: placeholder,
        bio: "Structuring our initiatives and coordinating girl-centered programs.", 
        linkedin: "#" 
      }
    ]
  },
  {
    title: "Content Developers (Health)",
    members: [
      { 
        name: "Abdurrahim Muhammad Abdu", 
        role: "Health content developer/ED", 
        image: imgabdul,
        // Updated Full Bio
        bio: "Abdurrahim Muhammad Abdu is a medical doctor who obtained his MBBS from Kharkiv National Medical University, Ukraine. He is currently pursuing a Master’s degree in Public Health at IMU University, Malaysia. His professional interests include health equity, health policy development, and community-based interventions. Beyond his academic pursuits, he enjoys working out, playing football, and reading.", 
        linkedin: "#" 
      },
      { name: "Dr. Fatima", role: "Medical Specialist", image: placeholder, bio: "Expert health content developer.", linkedin: "#" },
      { name: "Dr. Ihsan", role: "Medical Specialist", image: placeholder, bio: "Expert health content developer.", linkedin: "#" }
    ]
  },
  {
    title: "Advisory",
    members: [{ 
      name: "Aaliyah Abdullahi Ahmed", 
      role: "Content Developer and Advisor", 
      image: imgAaliyah,
      // Updated Full Bio
      bio: "Aaliyah Ahmed is a passionate advocate for the holistic development and empowerment of girls and young women. She holds a degree in Architecture and a Master’s in Business Administration, and as a mother of two, her commitment to nurturing, protecting and empowering young girls is both personal and purposeful. Through her work with Nurture Her, she supports girls’ physical, mental, emotional, and spiritual wellbeing in ways that honor culture and faith. She is driven by the belief that when girls are nurtured with knowledge, compassion, and guidance, they grow into confident women who positively impact their families, communities, and society.", 
      linkedin: "#" 
    }]
  }
];

// --- MEMBER CARD COMPONENT ---
// This handles the "Read More" logic individually for each person
const MemberCard = ({ member }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  // Check if bio is long enough to warrant a button (approx 120 chars)
  const isLongBio = member.bio.length > 120;

  return (
    <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 text-center flex flex-col items-center h-full">
      <div className="w-40 h-40 mb-6 rounded-full overflow-hidden border-2 border-brand-mauve/10 bg-gray-100 shrink-0">
        <img 
          src={member.image} 
          alt={member.name} 
          className="w-full h-full object-cover" 
        />
      </div>
      
      <h3 className="text-xl font-serif text-brand-mauve font-bold leading-tight mb-1">{member.name}</h3>
      <p className="text-xs font-sans text-gray-400 uppercase tracking-widest mb-4">{member.role}</p>
      
      {/* Bio Section with Toggle Logic */}
      <div className="text-gray-600 text-sm leading-relaxed font-serif mb-6 relative">
        <p className={`${!isExpanded ? 'line-clamp-4' : ''} transition-all duration-300`}>
          {member.bio}
        </p>
        
        {isLongBio && (
          <button 
            onClick={() => setIsExpanded(!isExpanded)}
            className="mt-2 text-brand-mauve text-xs font-bold uppercase tracking-wide flex items-center justify-center gap-1 mx-auto hover:text-brand-mauve/70 transition-colors"
          >
            {isExpanded ? (
              <>Show Less <ChevronUp size={14} /></>
            ) : (
              <>Read More <ChevronDown size={14} /></>
            )}
          </button>
        )}
      </div>

      <div className="mt-auto">
        <a href={member.linkedin} target="_blank" rel="noreferrer" className="inline-block text-brand-mauve hover:text-brand-mauve/70 transition-colors">
          <Linkedin size={20} />
        </a>
      </div>
    </div>
  );
};

// --- MAIN TEAM COMPONENT ---
const Team = () => {
  return (
    <div className="pt-32 pb-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <h1 className="text-4xl md:text-5xl font-serif text-brand-mauve mb-4  tracking-widest">Our Team</h1>
          <div className="h-1.5 w-16 bg-brand-mauve/80 rounded-full mx-auto mb-4"></div>
          <p className="text-gray-600 font-sans italic">The hearts and minds behind the initiative.</p>
        </div>

        {departments.map((dept, idx) => (
          <div key={idx} className="mb-20">
            <h2 className="text-2xl font-serif text-brand-mauve mb-10 border-b border-brand-mauve/20 pb-2 inline-block  tracking-wide">
              {dept.title}
            </h2>
            {/* Added 'items-stretch' to make cards equal height in a row */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 items-start">
              {dept.members.map((member, mIdx) => (
                <MemberCard key={mIdx} member={member} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Team;