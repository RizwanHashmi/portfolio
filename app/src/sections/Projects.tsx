import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ExternalLink, Github, Smartphone, Code2 } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

interface Project {
  title: string;
  description: string;
  image: string;
  techStack: string[];
  features: string[];
  color: string;
}

const Projects = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  const projects: Project[] = [
    {
      title: 'upGrad Living',
      description: 'A comprehensive mobile application designed to enhance the quality of life for residents in university hostels and communal living environments.',
      image: '/project-upgrad-living.jpg',
      techStack: ['Kotlin', 'Jetpack Compose', 'Firebase', 'REST APIs'],
      features: [
        'Daily menus and meal scheduling',
        'Event notifications and community updates',
        'Service requests and maintenance tracking',
        'Parent approval system',
      ],
      color: '#22c55e',
    },
    {
      title: 'ATLAS Buzz',
      description: 'Mobile application to enhance the admission process for schools affiliated with ATLAS University, featuring MCQ exams and secure payments.',
      image: '/project-atlas-buzz.jpg',
      techStack: ['Kotlin', 'Material Design', 'Razorpay', 'Cashfree'],
      features: [
        'MCQ Exam with four different sections',
        'Secure fee payments via multiple gateways',
        'Lottie animated icons',
        'Centralized admission platform',
      ],
      color: '#a855f7',
    },
    {
      title: 'EFI Tracking',
      description: 'Employee management and reporting application with GPS technology and real-time location tracking for field staff.',
      image: '/project-efi-tracking.jpg',
      techStack: ['Java', 'Google Maps SDK', 'FCM', 'SQLite'],
      features: [
        'Real-time GPS location tracking',
        'Google Maps integration for visited locations',
        'Push notifications via FCM',
        'Daily work detail submission',
      ],
      color: '#3b82f6',
    },
    {
      title: 'ATLAS HR App',
      description: 'Comprehensive HR management application simplifying employee routines, leave management, and workplace communication.',
      image: '/project-atlas-hr.jpg',
      techStack: ['Kotlin', 'MVVM', 'Room', 'FCM'],
      features: [
        'Daily check-in/out timing',
        'Leave management system',
        'Holiday calendar and timesheets',
        'Staff birthday alerts',
      ],
      color: '#f97316',
    },
    {
      title: 'ATLAS Admin',
      description: 'A mobile app designed to streamline administrative processes within educational institutions under ATLAS Skill Tech University, offering rich data visualization with graphs and charts for informed decision-making.',
      image: '/project-atlas-admin.svg',
      techStack: ['Kotlin', 'SQLite', 'MVVM', 'REST APIs'],
      features: [
        'Student information & fees management',
        'Admissions & visitor management',
        'Data filtering by week, month, custom range',
        'HR and survey analysis dashboards',
      ],
      color: '#ec4899',
    },
    {
      title: 'Future Tech',
      description: 'A versatile mobile app catering to students and faculty at ATLAS Skill Tech University, with role-based access, real-time academic information, and integrated payment gateways.',
      image: '/project-future-tech.svg',
      techStack: ['Kotlin', 'Razorpay', 'Cashfree', 'QR Scanner'],
      features: [
        'Role-based login for students, parents & faculty',
        'Class timetables, fees & elective selection',
        'QR scanning for university events',
        'Multi-gateway payment integration',
      ],
      color: '#06b6d4',
    },
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      const cards = cardsRef.current?.querySelectorAll('.project-card-wrapper');
      if (cards) {
        cards.forEach((card, index) => {
          gsap.fromTo(
            card,
            { 
              y: 80, 
              opacity: 0,
              scale: 0.95
            },
            {
              y: 0,
              opacity: 1,
              scale: 1,
              duration: 0.8,
              ease: 'expo.out',
              scrollTrigger: {
                trigger: card,
                start: 'top 85%',
                toggleActions: 'play none none reverse',
              },
              delay: index * 0.1,
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
      id="projects"
      className="relative w-full py-24 lg:py-32"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-grid opacity-30" />
      <div className="absolute top-1/3 right-0 w-96 h-96 bg-[#d1f366]/5 rounded-full blur-[150px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-[#d1f366] text-sm font-medium tracking-[0.3em] uppercase mb-4">
            My Portfolio
          </p>
          <h2 className="font-display text-5xl lg:text-6xl text-white mb-4">
            Featured <span className="text-[#d1f366]">Projects</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            A selection of my most impactful Android applications, showcasing my expertise 
            in building scalable, user-centric mobile solutions.
          </p>
        </div>

        {/* Projects Grid */}
        <div
          ref={cardsRef}
          className="grid md:grid-cols-2 gap-8"
        >
          {projects.map((project, index) => (
            <div
              key={index}
              className="project-card-wrapper"
            >
              <div className="project-card group h-full">
                {/* Image */}
                <div className="relative aspect-video overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#161616] via-[#161616]/50 to-transparent" />
                  
                  {/* Overlay Content */}
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <div className="flex items-center gap-2 mb-2">
                      <Smartphone className="w-4 h-4" style={{ color: project.color }} />
                      <span className="text-xs font-medium uppercase tracking-wider" style={{ color: project.color }}>
                        Android App
                      </span>
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-2">
                      {project.title}
                    </h3>
                  </div>

                  {/* Hover Actions */}
                  <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <button 
                      className="w-10 h-10 rounded-full glass flex items-center justify-center text-white hover:bg-[#d1f366] hover:text-[#161616] transition-colors"
                      onClick={() => alert('GitHub repository coming soon!')}
                    >
                      <Github className="w-5 h-5" />
                    </button>
                    <button 
                      className="w-10 h-10 rounded-full glass flex items-center justify-center text-white hover:bg-[#d1f366] hover:text-[#161616] transition-colors"
                      onClick={() => alert('Live demo coming soon!')}
                    >
                      <ExternalLink className="w-5 h-5" />
                    </button>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <p className="text-gray-400 text-sm mb-4 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Features */}
                  <div className="mb-4">
                    <p className="text-xs text-gray-500 uppercase tracking-wider mb-2">
                      Key Features
                    </p>
                    <ul className="space-y-1">
                      {project.features.map((feature, fIndex) => (
                        <li 
                          key={fIndex}
                          className="flex items-center gap-2 text-sm text-gray-400"
                        >
                          <span 
                            className="w-1 h-1 rounded-full"
                            style={{ background: project.color }}
                          />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2">
                    {project.techStack.map((tech, tIndex) => (
                      <span
                        key={tIndex}
                        className="px-3 py-1 rounded-full text-xs font-medium flex items-center gap-1"
                        style={{
                          background: `${project.color}15`,
                          color: project.color,
                        }}
                      >
                        <Code2 className="w-3 h-3" />
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Projects;
