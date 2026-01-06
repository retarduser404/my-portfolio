import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Sun, Moon } from 'lucide-react';
import { Button } from './ui/button';

// Sticky navigation bar with active section tracking and dark mode toggle
const Navigation = ({ isDarkMode, onToggleDarkMode }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentActiveSection, setCurrentActiveSection] = useState('home');
  const [hasScrolled, setHasScrolled] = useState(false);

  // Navigation links with anchors for smooth scrolling
  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Blog', href: '#blog' },
    { name: 'Contact', href: '#contact' }
  ];

  // Track scroll position to update active nav item and add backdrop
  useEffect(() => {
    const trackScroll = () => {
      setHasScrolled(window.scrollY > 20);

      // Update active section based on which element is in viewport
      const sections = ['home', 'about', 'projects', 'blog', 'contact'];
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          // Check if element is visible in top portion of viewport
          if (rect.top <= 100 && rect.bottom >= 100) {
            setCurrentActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', trackScroll);
    return () => window.removeEventListener('scroll', trackScroll);
  }, []);

  // Handle smooth scroll to section when nav link is clicked
  const handleSectionClick = (e, href) => {
    e.preventDefault();
    setIsMenuOpen(false);

    const targetElement = document.querySelector(href);
    if (targetElement) {
      const headerHeight = 80; // nav bar height
      const targetPosition = targetElement.getBoundingClientRect().top;
      const scrollOffset = targetPosition + window.pageYOffset - headerHeight;

      window.scrollTo({
        top: scrollOffset,
        behavior: 'smooth'
      });
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        hasScrolled ? 'bg-page/80 backdrop-blur-lg border-b border-custom' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo / Home link */}
          <Link
            to="/"
            className="text-2xl font-bold tracking-tight accent-color hover:opacity-80 transition-opacity"
          >
            AJ
          </Link>

          {/* Desktop navigation menu */}
          <div className="hidden md:flex items-center space-x-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleSectionClick(e, link.href)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  currentActiveSection === link.href.substring(1)
                    ? 'accent-color bg-accent/10'
                    : 'text-secondary hover:text-foreground'
                }`}
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Dark mode toggle and mobile menu */}
          <div className="flex items-center space-x-4">
            {/* Theme switcher button */}
            <Button
              variant="ghost"
              size="icon"
              onClick={onToggleDarkMode}
              className="rounded-full"
              aria-label="Toggle dark mode"
            >
              {isDarkMode ? (
                <Sun className="h-5 w-5" />
              ) : (
                <Moon className="h-5 w-5" />
              )}
            </Button>

            {/* Mobile menu toggle button */}
            <button
              className="md:hidden p-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle mobile menu"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile navigation menu - slides down when open */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-custom">
            <div className="flex flex-col space-y-2">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleSectionClick(e, link.href)}
                  className={`px-4 py-3 rounded-lg text-base font-medium transition-all ${
                    currentActiveSection === link.href.substring(1)
                      ? 'accent-color bg-accent/10'
                      : 'text-secondary hover:text-foreground hover:bg-card'
                  }`}
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
