import React from 'react';
import { Github, Linkedin, Mail, Heart } from 'lucide-react';
import { personalInfo } from '../data/mock';

// Footer with social links, copyright, and built-with info
const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-card border-t border-custom py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center space-y-6">
          {/* Social media links */}
          <div className="flex items-center gap-6">
            <a
              href={personalInfo.social.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-secondary hover:accent-color transition-colors"
              aria-label="GitHub"
            >
              <Github className="h-6 w-6" />
            </a>
            <a
              href={personalInfo.social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-secondary hover:accent-color transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-6 w-6" />
            </a>
            <a
              href={`mailto:${personalInfo.social.email}`}
              className="text-secondary hover:accent-color transition-colors"
              aria-label="Email"
            >
              <Mail className="h-6 w-6" />
            </a>
          </div>

          {/* Copyright notice */}
          <div className="text-center text-sm text-muted">
            <p className="flex items-center justify-center gap-2">
              Made with
              <Heart className="h-4 w-4 fill-accent accent-color" />
              by Kartik Pathak © {currentYear}
            </p>
          </div>

          {/* Built with information */}
          <div className="text-center text-xs text-secondary max-w-md">
            <p>
              Built with React, Node.js, and a lot of passion for clean code and modern web development.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
