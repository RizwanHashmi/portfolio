import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ArrowDown, Download, Mail } from 'lucide-react';

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const nameRef = useRef<HTMLHeadingElement>(null);
  const roleRef = useRef<HTMLHeadingElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Initial setup
      gsap.set([nameRef.current, roleRef.current], { opacity: 0, y: 50 });
      gsap.set(imageRef.current, { opacity: 0, scale: 1.2 });
      gsap.set(ctaRef.current, { opacity: 0, y: 30 });

      // Animation timeline
      const tl = gsap.timeline({ delay: 0.3 });

      tl.to(imageRef.current, {
        opacity: 1,
        scale: 1,
        duration: 1.2,
        ease: 'expo.out',
      })
      .to(nameRef.current, {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: 'expo.out',
      }, '-=0.6')
      .to(roleRef.current, {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: 'expo.out',
      }, '-=0.5')
      .to(ctaRef.current, {
        opacity: 1,
        y: 0,
        duration: 0.6,
        ease: 'expo.out',
      }, '-=0.3');

      // Parallax on scroll
      gsap.to(nameRef.current, {
        y: -100,
        ease: 'none',
        scrollTrigger: {
          trigger: heroRef.current,
          start: 'top top',
          end: 'bottom top',
          scrub: 1,
        },
      });

      gsap.to(roleRef.current, {
        y: -50,
        x: 50,
        ease: 'none',
        scrollTrigger: {
          trigger: heroRef.current,
          start: 'top top',
          end: 'bottom top',
          scrub: 1,
        },
      });

      gsap.to(imageRef.current, {
        y: 80,
        ease: 'none',
        scrollTrigger: {
          trigger: heroRef.current,
          start: 'top top',
          end: 'bottom top',
          scrub: 1,
        },
      });
    }, heroRef);

    return () => ctx.revert();
  }, []);

  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      ref={heroRef}
      id="hero"
      className="relative min-h-screen w-full flex items-center justify-center overflow-hidden"
    >
      {/* Background Grid */}
      <div className="absolute inset-0 bg-grid opacity-50" />
      
      {/* Gradient Orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#d1f366]/10 rounded-full blur-[120px] animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-[#d1f366]/5 rounded-full blur-[100px] animate-pulse" style={{ animationDelay: '1s' }} />

      {/* Content Container */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-12 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="order-2 lg:order-1 text-center lg:text-left">
            <p className="text-[#d1f366] text-sm font-medium tracking-[0.3em] uppercase mb-4">
              Hello, I'm
            </p>
            
            <h1
              ref={nameRef}
              className="font-display text-5xl sm:text-6xl lg:text-7xl xl:text-8xl text-white leading-none mb-2"
            >
              Syed Rizwan
            </h1>
            
            <h2
              ref={roleRef}
              className="font-display text-5xl sm:text-6xl lg:text-7xl xl:text-8xl text-outline-lime leading-none mb-8"
            >
              Hashmi
            </h2>
            
            <p className="text-xl text-gray-400 mb-8 max-w-md mx-auto lg:mx-0">
              Senior <span className="text-[#d1f366]">Android Developer</span> crafting exceptional mobile experiences
            </p>

            <div ref={ctaRef} className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a
                href="mailto:sayedrizwanhashmi@gmail.com"
                className="magnetic-btn px-8 py-4 rounded-full border border-[#d1f366] text-[#d1f366] font-medium"
              >
                <span className="flex items-center gap-2">
                  <Mail className="w-5 h-5" />
                  Hire Me
                </span>
              </a>
              
              <a
                href="/Rizwan_Hashmi_Android_Developer_Resume.pdf"
                download
                className="magnetic-btn px-8 py-4 rounded-full bg-[#d1f366] text-[#161616] font-medium"
              >
                <span className="flex items-center gap-2">
                  <Download className="w-5 h-5" />
                  Download Resume
                </span>
              </a>
            </div>
          </div>

          {/* Image */}
          <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
            <div
              ref={imageRef}
              className="relative w-72 h-72 sm:w-96 sm:h-96 lg:w-[500px] lg:h-[500px]"
            >
              {/* Glow Ring */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-[#d1f366]/30 to-transparent blur-2xl animate-pulse" />
              
              {/* Image Container */}
              <div className="relative w-full h-full rounded-full overflow-hidden border-2 border-[#d1f366]/20">
                <img
                  src="/profile-photo.jpg"
                  alt="Syed Rizwan Hashmi"
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                />
                
                {/* Overlay Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#161616]/60 via-transparent to-transparent" />
              </div>

              {/* Floating Badge */}
              <div className="absolute -bottom-4 -left-4 glass px-6 py-3 rounded-full animate-float">
                <span className="text-[#d1f366] font-bold text-lg">8+</span>
                <span className="text-white text-sm ml-2">Years Exp.</span>
              </div>

              {/* Tech Stack Badge */}
              <div className="absolute -top-4 -right-4 glass px-4 py-2 rounded-full animate-float" style={{ animationDelay: '1s' }}>
                <span className="text-white text-sm">Kotlin & Java</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <button
        onClick={scrollToAbout}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-gray-500 hover:text-[#d1f366] transition-colors cursor-pointer"
      >
        <span className="text-xs tracking-widest uppercase">Scroll</span>
        <ArrowDown className="w-5 h-5 animate-bounce" />
      </button>
    </section>
  );
};

export default Hero;
