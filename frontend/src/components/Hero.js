import React from 'react';
import { Github, Linkedin, Mail, ChevronDown } from 'lucide-react';
import { Button } from './ui/button';
import { personalInfo } from '../data/mock';

const Hero = () => {
  // Smooth scroll with header offset for better UX
  const smoothScrollToSection = (sectionId) => {
    const targetElement = document.getElementById(sectionId);
    if (targetElement) {
      const headerHeight = 80; // nav height
      const targetPosition = targetElement.getBoundingClientRect().top;
      const scrollOffset = targetPosition + window.pageYOffset - headerHeight;
      
      window.scrollTo({
        top: scrollOffset,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden bg-page"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
        <div className="space-y-8">
          {/* Large hero name - the anchor point */}
          <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-black uppercase leading-none tracking-tight">
            <span className="accent-color">{personalInfo.name}</span>
          </h1>

          {/* Role and description stack */}
          <div className="space-y-4">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-secondary">
              {personalInfo.title}
            </h2>
            <p className="text-xl sm:text-2xl text-secondary max-w-3xl mx-auto">
              {personalInfo.subtitle}
            </p>
            <p className="text-lg sm:text-xl text-muted">
              {personalInfo.education}
            </p>
          </div>

          {/* Primary CTA buttons - work and contact */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-8">
            <Button
              onClick={() => smoothScrollToSection('projects')}
              className="bg-accent text-black hover:bg-accent/80 rounded-full px-8 py-6 text-base font-semibold uppercase min-w-[200px]"
            >
              View My Work
            </Button>
            <Button
              onClick={() => smoothScrollToSection('contact')}
              variant="outline"
              className="border-2 border-accent accent-color hover:bg-accent hover:text-black rounded-full px-8 py-6 text-base font-semibold uppercase min-w-[200px]"
            >
              Get In Touch
            </Button>
          </div>

          {/* Social links - connect */}
          <div className="flex items-center justify-center gap-6 pt-8">
            <a
              href={personalInfo.social.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-secondary hover:accent-color transition-colors p-2"
              aria-label="GitHub"
            >
              <Github className="h-6 w-6" />
            </a>
            <a
              href={personalInfo.social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-secondary hover:accent-color transition-colors p-2"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-6 w-6" />
            </a>
            <a
              href={`mailto:${personalInfo.social.email}`}
              className="text-secondary hover:accent-color transition-colors p-2"
              aria-label="Email"
            >
              <Mail className="h-6 w-6" />
            </a>
          </div>
        </div>
      </div>

      {/* Scroll down indicator - visual hint for more content */}
      <button
        onClick={() => smoothScrollToSection('about')}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce accent-color"
        aria-label="Scroll down"
      >
        <ChevronDown className="h-8 w-8" />
      </button>
    </section>
  );
};

export default Hero;
