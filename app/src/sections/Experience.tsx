import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Building2, Calendar, MapPin, ChevronRight } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

interface ExperienceItem {
  company: string;
  role: string;
  location: string;
  period: string;
  duration: string;
  description: string;
  highlights: string[];
  current?: boolean;
}

const Experience = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const timelineRef = useRef<HTMLDivElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);

  const experiences: ExperienceItem[] = [
    {
      company: 'upGrad',
      role: 'Android Developer',
      location: 'Mumbai, India',
      period: 'Aug 2021 - Present',
      duration: '3+ years',
      description: 'Leading Android development for upGrad Living, a comprehensive hostel management application serving thousands of residents.',
      highlights: [
        'Developed upGrad Living app from scratch with full lifecycle management',
        'Implemented daily menus, event notifications, and service requests',
        'Integrated parent approval system and community features',
        'Optimized app performance and reduced load times by 40%',
      ],
      current: true,
    },
    {
      company: 'Innovation Trust',
      role: 'Android Developer',
      location: 'Mumbai, India',
      period: 'Apr 2020 - Jul 2021',
      duration: '1 year 4 months',
      description: 'Developed multiple applications for ATLAS University including admission, HR, and admin management systems.',
      highlights: [
        'Built ATLAS Buzz - Admission app with MCQ exam integration',
        'Developed ATLAS HR App with attendance and leave management',
        'Created ATLAS Admin for comprehensive institutional management',
        'Integrated multiple payment gateways (Razorpay, Cashfree, GrayQuest)',
      ],
    },
    {
      company: 'DICE',
      role: 'Android Developer',
      location: 'Mumbai, India',
      period: 'Dec 2019 - Mar 2020',
      duration: '4 months',
      description: 'Worked on EFI Tracking application for employee management and real-time location tracking.',
      highlights: [
        'Developed GPS-based employee tracking system',
        'Integrated Google Maps API for location visualization',
        'Implemented FCM push notifications for real-time updates',
        'Created daily work reporting and analytics dashboard',
      ],
    },
    {
      company: 'StepUp Software Solutions',
      role: 'Android Developer',
      location: 'Aurangabad, India',
      period: 'Dec 2016 - Nov 2019',
      duration: '3 years',
      description: 'Started my professional journey, building foundational skills in Android development across various client projects.',
      highlights: [
        'Developed 10+ client applications across various domains',
        'Mastered Java, Kotlin, and Android SDK fundamentals',
        'Implemented REST API integrations and database management',
        'Collaborated with cross-functional teams in agile environment',
      ],
    },
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Timeline line draw animation
      gsap.fromTo(
        lineRef.current,
        { scaleY: 0 },
        {
          scaleY: 1,
          duration: 1.5,
          ease: 'none',
          scrollTrigger: {
            trigger: timelineRef.current,
            start: 'top 70%',
            end: 'bottom 50%',
            scrub: 1,
          },
        }
      );

      // Experience cards animation
      const cards = timelineRef.current?.querySelectorAll('.experience-item');
      if (cards) {
        cards.forEach((card, index) => {
          gsap.fromTo(
            card,
            { 
              x: index % 2 === 0 ? -60 : 60, 
              opacity: 0,
              rotateX: 20,
            },
            {
              x: 0,
              opacity: 1,
              rotateX: 0,
              duration: 0.8,
              ease: 'expo.out',
              scrollTrigger: {
                trigger: card,
                start: 'top 80%',
                toggleActions: 'play none none reverse',
              },
            }
          );
        });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="experience"
      className="relative w-full py-24 lg:py-32"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-grid opacity-30" />

      <div className="relative z-10 max-w-6xl mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-[#d1f366] text-sm font-medium tracking-[0.3em] uppercase mb-4">
            My Journey
          </p>
          <h2 className="font-display text-5xl lg:text-6xl text-white mb-4">
            Work <span className="text-[#d1f366]">Experience</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            A timeline of my professional growth, from junior developer to senior Android engineer.
          </p>
        </div>

        {/* Timeline */}
        <div ref={timelineRef} className="relative">
          {/* Center Line - Desktop */}
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-px -translate-x-1/2">
            <div 
              ref={lineRef}
              className="w-full h-full origin-top"
              style={{
                background: 'linear-gradient(180deg, transparent 0%, #d1f366 10%, #d1f366 90%, transparent 100%)',
              }}
            />
          </div>

          {/* Experience Items */}
          <div className="space-y-12 lg:space-y-0">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className={`experience-item relative lg:grid lg:grid-cols-2 lg:gap-12 ${
                  index !== experiences.length - 1 ? 'lg:pb-16' : ''
                }`}
              >
                {/* Timeline Dot - Desktop */}
                <div className="hidden lg:flex absolute left-1/2 top-0 -translate-x-1/2 z-10">
                  <div className={`w-4 h-4 rounded-full ${
                    exp.current 
                      ? 'bg-[#d1f366] animate-pulse-glow' 
                      : 'bg-[#161616] border-2 border-[#d1f366]'
                  }`} />
                </div>

                {/* Content */}
                <div className={`${index % 2 === 0 ? 'lg:pr-16' : 'lg:col-start-2 lg:pl-16'}`}>
                  <div className="experience-card group">
                    {/* Header */}
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="text-xl font-semibold text-white group-hover:text-[#d1f366] transition-colors">
                          {exp.company}
                        </h3>
                        <p className="text-[#d1f366] font-medium">{exp.role}</p>
                      </div>
                      {exp.current && (
                        <span className="px-3 py-1 rounded-full bg-[#d1f366]/10 text-[#d1f366] text-xs font-medium">
                          Current
                        </span>
                      )}
                    </div>

                    {/* Meta */}
                    <div className="flex flex-wrap gap-4 text-sm text-gray-500 mb-4">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {exp.period}
                      </span>
                      <span className="flex items-center gap-1">
                        <MapPin className="w-4 h-4" />
                        {exp.location}
                      </span>
                      <span className="flex items-center gap-1">
                        <Building2 className="w-4 h-4" />
                        {exp.duration}
                      </span>
                    </div>

                    {/* Description */}
                    <p className="text-gray-400 text-sm mb-4 leading-relaxed">
                      {exp.description}
                    </p>

                    {/* Highlights */}
                    <ul className="space-y-2">
                      {exp.highlights.map((highlight, hIndex) => (
                        <li 
                          key={hIndex}
                          className="flex items-start gap-2 text-sm text-gray-500"
                        >
                          <ChevronRight className="w-4 h-4 text-[#d1f366] mt-0.5 flex-shrink-0" />
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Empty space for alternating layout */}
                {index % 2 === 0 && <div className="hidden lg:block" />}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
