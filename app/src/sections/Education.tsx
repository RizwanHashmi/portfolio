import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { GraduationCap, Award, BookOpen } from 'lucide-react';


gsap.registerPlugin(ScrollTrigger);

interface EducationItem {
  degree: string;
  institution: string;
  location: string;
  year: string;
  description: string;
  achievements: string[];
}

const Education = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  const education: EducationItem[] = [
    {
      degree: 'Master of Computer Application (MCA)',
      institution: 'Savitribai Phule University',
      location: 'Pune, India',
      year: '2025',
      description: 'Advanced studies in computer applications with focus on mobile development and software engineering.',
      achievements: [
        'Specialized in Mobile Application Development',
        'Research on Android Architecture Patterns',
        'Dean\'s List for Academic Excellence',
      ],
    },
    {
      degree: 'Bachelor of Computer Application (BCA)',
      institution: 'BAMU University',
      location: 'Aurangabad, India',
      year: '2023',
      description: 'Foundation in computer science principles, programming, and software development methodologies.',
      achievements: [
        'First Class with Distinction',
        'Best Project Award - Final Year',
        'Active member of Coding Club',
      ],
    },
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Education cards animation
      const cards = cardsRef.current?.querySelectorAll('.education-card');
      if (cards) {
        gsap.fromTo(
          cards,
          { y: 50, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.7,
            stagger: 0.15,
            ease: 'expo.out',
            scrollTrigger: {
              trigger: cardsRef.current,
              start: 'top 75%',
              toggleActions: 'play none none reverse',
            },
          }
        );
      }

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="education"
      className="relative w-full py-24 lg:py-32"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-grid opacity-30" />
      <div className="absolute bottom-0 left-1/4 w-80 h-80 bg-[#d1f366]/5 rounded-full blur-[120px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-[#d1f366] text-sm font-medium tracking-[0.3em] uppercase mb-4">
            Academic Background
          </p>
          <h2 className="font-display text-5xl lg:text-6xl text-white mb-4">
            Education
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Continuous learning and professional development to stay at the forefront of Android technology.
          </p>
        </div>

        {/* Education Cards */}
        <div ref={cardsRef} className="grid lg:grid-cols-2 gap-8 mb-16">
          {education.map((edu, index) => (
            <div
              key={index}
              className="education-card group relative p-8 rounded-2xl glass hover:bg-white/[0.05] transition-all duration-500"
            >
              {/* Glow Effect */}
              <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-[#d1f366]/10 to-transparent" />

              <div className="relative z-10">
                {/* Icon & Year */}
                <div className="flex items-center justify-between mb-6">
                  <div className="w-14 h-14 rounded-xl bg-[#d1f366]/10 flex items-center justify-center">
                    <GraduationCap className="w-7 h-7 text-[#d1f366]" />
                  </div>
                  <span className="px-4 py-2 rounded-full bg-[#d1f366]/10 text-[#d1f366] text-sm font-medium">
                    {edu.year}
                  </span>
                </div>

                {/* Content */}
                <h3 className="text-xl font-semibold text-white mb-2">
                  {edu.degree}
                </h3>
                <p className="text-[#d1f366] font-medium mb-1">
                  {edu.institution}
                </p>
                <p className="text-gray-500 text-sm mb-4 flex items-center gap-1">
                  <BookOpen className="w-4 h-4" />
                  {edu.location}
                </p>

                <p className="text-gray-400 text-sm mb-4 leading-relaxed">
                  {edu.description}
                </p>

                {/* Achievements */}
                <div className="space-y-2">
                  <p className="text-xs text-gray-500 uppercase tracking-wider">
                    Achievements
                  </p>
                  <ul className="space-y-1">
                    {edu.achievements.map((achievement, aIndex) => (
                      <li
                        key={aIndex}
                        className="flex items-center gap-2 text-sm text-gray-400"
                      >
                        <Award className="w-4 h-4 text-[#d1f366] flex-shrink-0" />
                        {achievement}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Education;
