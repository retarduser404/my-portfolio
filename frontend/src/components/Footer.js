import React from 'react';
import { Github, Linkedin, Mail, Heart } from 'lucide-react';
import { personalInfo } from '../data/mock';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-card border-t border-custom py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center space-y-6">
          {/* Social Links */}
          <div className="flex items-center gap-6">
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

          {/* Divider */}
          <div className="w-full max-w-md h-px bg-custom"></div>

          {/* Copyright */}
          <div className="text-center space-y-2">
            <p className="text-secondary text-sm">
              © {currentYear} {personalInfo.name}. All rights reserved.
            </p>
            <p className="text-muted text-xs flex items-center justify-center gap-2">
              Built with <Heart className="h-3 w-3 text-red-500 fill-current" /> using React and Tailwind CSS
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
