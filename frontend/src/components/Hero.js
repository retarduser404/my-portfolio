import React from 'react';
import { Github, Linkedin, Mail, ChevronDown } from 'lucide-react';
import { Button } from './ui/button';
import { personalInfo } from '../data/mock';

const Hero = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({
        top: offsetPosition,
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
          {/* Main Heading */}
          <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-black uppercase leading-none tracking-tight">
            <span className="accent-color">{personalInfo.name}</span>
          </h1>

          {/* Subtitle */}
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

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-8">
            <Button
              onClick={() => scrollToSection('projects')}
              className="bg-accent text-black hover:bg-accent/80 rounded-full px-8 py-6 text-base font-semibold uppercase min-w-[200px]"
            >
              View My Work
            </Button>
            <Button
              onClick={() => scrollToSection('contact')}
              variant="outline"
              className="border-2 border-accent accent-color hover:bg-accent hover:text-black rounded-full px-8 py-6 text-base font-semibold uppercase min-w-[200px]"
            >
              Get In Touch
            </Button>
          </div>

          {/* Social Links */}
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

      {/* Scroll Indicator */}
      <button
        onClick={() => scrollToSection('about')}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce accent-color"
        aria-label="Scroll down"
      >
        <ChevronDown className="h-8 w-8" />
      </button>
    </section>
  );
};

export default Hero;
