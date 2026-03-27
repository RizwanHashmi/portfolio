import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Briefcase, Award } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

interface StatProps {
  value: number;
  suffix: string;
  label: string;
  icon: React.ReactNode;
}

const AnimatedStat = ({ value, suffix, label, icon }: StatProps) => {
  const [count, setCount] = useState(0);
  const statRef = useRef<HTMLDivElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated.current) {
            hasAnimated.current = true;
            const duration = 2000;
            const steps = 60;
            const increment = value / steps;
            let current = 0;
            const timer = setInterval(() => {
              current += increment;
              if (current >= value) {
                setCount(value);
                clearInterval(timer);
              } else {
                setCount(Math.floor(current));
              }
            }, duration / steps);
          }
        });
      },
      { threshold: 0.5 }
    );

    if (statRef.current) {
      observer.observe(statRef.current);
    }

    return () => observer.disconnect();
  }, [value]);

  return (
    <div ref={statRef} className="text-center">
      <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-[#d1f366]/10 text-[#d1f366] mb-4">
        {icon}
      </div>
      <div className="font-display text-4xl lg:text-5xl text-white mb-2">
        <span className="counter">{count}</span>
        <span className="text-[#d1f366]">{suffix}</span>
      </div>
      <p className="text-gray-400 text-sm">{label}</p>
    </div>
  );
};

const About = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Image reveal animation
      gsap.fromTo(
        imageRef.current,
        { 
          clipPath: 'polygon(0 0, 0 0, 0 100%, 0 100%)',
          opacity: 0 
        },
        {
          clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)',
          opacity: 1,
          duration: 1,
          ease: 'expo.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 70%',
            toggleActions: 'play none none reverse',
          },
        }
      );

      // Content slide up
      gsap.fromTo(
        contentRef.current,
        { y: 80, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: 'expo.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 60%',
            toggleActions: 'play none none reverse',
          },
        }
      );

      // Stats animation
      gsap.fromTo(
        statsRef.current?.children || [],
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          stagger: 0.1,
          ease: 'expo.out',
          scrollTrigger: {
            trigger: statsRef.current,
            start: 'top 80%',
            toggleActions: 'play none none reverse',
          },
        }
      );

      // Parallax effect on image
      gsap.to(imageRef.current, {
        rotation: 2,
        ease: 'none',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top bottom',
          end: 'bottom top',
          scrub: 1,
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const stats = [
    { value: 8, suffix: '+', label: 'Years Experience', icon: <Briefcase className="w-6 h-6" /> },
    { value: 4, suffix: '', label: 'Companies Worked', icon: <Award className="w-6 h-6" /> },
  ];

  return (
    <section
      ref={sectionRef}
      id="about"
      className="relative w-full py-24 lg:py-32"
    >
      {/* Background Text */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden">
        <span className="font-display text-[20vw] text-white/[0.02] whitespace-nowrap">
          ABOUT ME
        </span>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-[#d1f366] text-sm font-medium tracking-[0.3em] uppercase mb-4">
            Get To Know Me
          </p>
          <h2 className="font-display text-5xl lg:text-6xl text-white">
            About <span className="text-[#d1f366]">Me</span>
          </h2>
        </div>

        <div className="max-w-3xl mx-auto mb-20">
          {/* Content */}
          <div ref={contentRef} className="text-center">
            <h3 className="text-2xl lg:text-3xl font-semibold text-white mb-6">
              Building <span className="text-[#d1f366]">Exceptional</span> Android Experiences
            </h3>
            
            <div className="space-y-4 text-gray-400 leading-relaxed">
              <p>
                I am a highly skilled Android developer with <span className="text-white font-medium">8+ years of professional experience</span> in developing innovative mobile applications. My journey in mobile development has been driven by a passion for creating seamless user experiences and writing clean, maintainable code.
              </p>
              <p>
                Proficient in delivering high-quality code and optimizing performance, I stay current with industry trends and best practices. From <span className="text-white font-medium">Kotlin and Jetpack Compose</span> to <span className="text-white font-medium">Clean Architecture</span> and <span className="text-white font-medium">MVVM patterns</span>, I leverage modern technologies to build scalable applications.
              </p>
              <p>
                I'm seeking to contribute to a dynamic team and drive the success of impactful projects through collaboration and a passion for creating exceptional user experiences.
              </p>
            </div>

            {/* Tech Philosophy */}
            <div className="mt-8 p-6 glass rounded-xl">
              <h4 className="text-white font-semibold mb-4 flex items-center gap-2">
                <span className="w-2 h-2 bg-[#d1f366] rounded-full" />
                My Development Philosophy
              </h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-[#d1f366] mt-1">→</span>
                  Write clean, maintainable, and efficient code following best practices
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#d1f366] mt-1">→</span>
                  Prioritize user experience and performance optimization
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#d1f366] mt-1">→</span>
                  Stay updated with the latest Android technologies and trends
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#d1f366] mt-1">→</span>
                  Collaborate effectively with cross-functional teams
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div
          ref={statsRef}
          className="grid grid-cols-2 gap-8 lg:gap-12 max-w-md mx-auto"
        >
          {stats.map((stat, index) => (
            <AnimatedStat key={index} {...stat} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
