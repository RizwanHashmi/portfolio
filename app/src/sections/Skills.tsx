import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface CoreSkill {
  name: string;
  percentage: number;
}

const Skills = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const coreSkillsRef = useRef<HTMLDivElement>(null);
  const techTagsRef = useRef<HTMLDivElement>(null);
  const [animatedSkills, setAnimatedSkills] = useState<Record<string, number>>({});

  const coreSkills: CoreSkill[] = [
    { name: 'Kotlin', percentage: 95 },
    { name: 'Java', percentage: 90 },
    { name: 'Jetpack Compose', percentage: 88 },
    { name: 'REST APIs', percentage: 92 },
    { name: 'Firebase', percentage: 85 },
    { name: 'SQLite/Room', percentage: 87 },
  ];

  const technologies = [
    'Android Studio', 'Git', 'GitHub', 'Gradle', 'Dagger Hilt', 'Koin',
    'Retrofit', 'OkHttp', 'Glide', 'Picasso', 'Google Maps SDK',
    'Firebase Auth', 'Realtime Database', 'FCM', 'Crashlytics',
    'Razorpay', 'Cashfree', 'GrayQuest', 'JUnit', 'Espresso',
    'Mockito', 'MVVM', 'MVP', 'MVC', 'Clean Architecture',
    'Material Design', 'XML Layouts', 'JSON Parsing', 'Android Profiler',
    'LeakCanary', 'ADB', 'Jira', 'Postman'
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Core skills animation
      const skillItems = coreSkillsRef.current?.querySelectorAll('.skill-item');
      if (skillItems) {
        gsap.fromTo(
          skillItems,
          { x: -30, opacity: 0 },
          {
            x: 0,
            opacity: 1,
            duration: 0.6,
            stagger: 0.1,
            ease: 'expo.out',
            scrollTrigger: {
              trigger: coreSkillsRef.current,
              start: 'top 75%',
              toggleActions: 'play none none reverse',
              onEnter: () => {
                // Animate progress bars
                coreSkills.forEach((skill, index) => {
                  setTimeout(() => {
                    setAnimatedSkills(prev => ({ ...prev, [skill.name]: skill.percentage }));
                  }, index * 100);
                });
              },
            },
          }
        );
      }

      // Tech tags animation
      const tags = techTagsRef.current?.querySelectorAll('.tech-tag');
      if (tags) {
        gsap.fromTo(
          tags,
          { y: 20, opacity: 0, scale: 0.9 },
          {
            y: 0,
            opacity: 1,
            scale: 1,
            duration: 0.4,
            stagger: 0.03,
            ease: 'back.out(1.7)',
            scrollTrigger: {
              trigger: techTagsRef.current,
              start: 'top 80%',
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
      id="skills"
      className="relative w-full py-24 lg:py-32"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-grid opacity-30" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#d1f366]/5 rounded-full blur-[150px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-[#d1f366] text-sm font-medium tracking-[0.3em] uppercase mb-4">
            My Expertise
          </p>
          <h2 className="font-display text-5xl lg:text-6xl text-white mb-4">
            Skills & <span className="text-[#d1f366]">Technologies</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Technologies I work with daily to create exceptional Android applications
          </p>
        </div>

        {/* Core Skills with Progress Bars */}
        <div className="mb-16">
          <h3 className="text-xl font-semibold text-white mb-8 text-center">
            Core Skills
          </h3>
          
          <div ref={coreSkillsRef} className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {coreSkills.map((skill) => (
              <div key={skill.name} className="skill-item glass rounded-xl p-5">
                <div className="flex justify-between items-center mb-3">
                  <span className="text-white font-medium">{skill.name}</span>
                  <span className="text-[#d1f366] font-bold">
                    {animatedSkills[skill.name] || 0}%
                  </span>
                </div>
                <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-[#d1f366] to-[#a8cc4c] rounded-full transition-all duration-1000 ease-out"
                    style={{ width: `${animatedSkills[skill.name] || 0}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Technologies & Tools */}
        <div>
          <h3 className="text-xl font-semibold text-white mb-8 text-center">
            Technologies & Tools
          </h3>
          
          <div ref={techTagsRef} className="flex flex-wrap justify-center gap-3">
            {technologies.map((tech) => (
              <span
                key={tech}
                className="tech-tag px-4 py-2 rounded-full text-sm font-medium bg-white/5 text-gray-300 border border-white/10 hover:bg-[#d1f366]/10 hover:text-[#d1f366] hover:border-[#d1f366]/30 transition-all duration-300 cursor-default"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
