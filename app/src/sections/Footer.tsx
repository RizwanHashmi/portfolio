import { Heart, ArrowUp, Linkedin, Github, Mail } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      icon: <Linkedin className="w-5 h-5" />,
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/in/syedrizwanhashmi/',
    },
    {
      icon: <Github className="w-5 h-5" />,
      label: 'GitHub',
      href: 'https://github.com/RizwanHashmi',
    },
    {
      icon: <Mail className="w-5 h-5" />,
      label: 'Email',
      href: 'mailto:sayedrizwanhashmi@gmail.com',
    },
  ];

  const quickLinks = [
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Experience', href: '#experience' },
    { label: 'Projects', href: '#projects' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <footer className="relative w-full py-16 border-t border-white/5">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#0d0d0d] to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <a href="#hero" className="inline-block font-display text-3xl text-white mb-4">
              Syed Rizwan <span className="text-[#d1f366]">Hashmi</span>
            </a>
            <p className="text-gray-400 max-w-md mb-6 leading-relaxed">
              Senior Android Developer with 8+ years of experience crafting exceptional 
              mobile applications. Passionate about clean code, user experience, and 
              continuous learning.
            </p>
            
            {/* Social Links */}
            <div className="flex gap-3">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-lg glass flex items-center justify-center text-gray-400 hover:text-[#d1f366] hover:border-[#d1f366]/30 transition-all duration-300"
                  aria-label={social.label}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-[#d1f366] transition-colors text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white font-semibold mb-4">Get In Touch</h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="mailto:sayedrizwanhashmi@gmail.com"
                  className="text-gray-400 hover:text-[#d1f366] transition-colors text-sm flex items-center gap-2"
                >
                  <Mail className="w-4 h-4" />
                  sayedrizwanhashmi@gmail.com
                </a>
              </li>
              <li>
                <a
                  href="tel:+918237763775"
                  className="text-gray-400 hover:text-[#d1f366] transition-colors text-sm flex items-center gap-2"
                >
                  <span className="w-4 h-4 flex items-center justify-center">📞</span>
                  +91 8237763775
                </a>
              </li>
              <li className="text-gray-400 text-sm flex items-center gap-2">
                <span className="w-4 h-4 flex items-center justify-center">📍</span>
                Mumbai, Maharashtra, India
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="section-divider mb-8" />

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 text-sm text-center md:text-left">
            © {currentYear} Syed Rizwan Hashmi. All rights reserved.
          </p>

          <p className="text-gray-500 text-sm flex items-center gap-1">
            Made with <Heart className="w-4 h-4 text-red-500 fill-red-500" /> using React & Tailwind
          </p>

          {/* Back to Top */}
          <button
            onClick={scrollToTop}
            className="w-10 h-10 rounded-full glass flex items-center justify-center text-gray-400 hover:text-[#d1f366] hover:border-[#d1f366]/30 transition-all duration-300"
            aria-label="Back to top"
          >
            <ArrowUp className="w-5 h-5" />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
