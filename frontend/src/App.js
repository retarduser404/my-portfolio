import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Blog from './components/Blog';
import BlogPost from './components/BlogPost';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { experience } from './data/mock';
import './App.css';

// Main portfolio app with dark mode toggle and routing
const PortfolioApp = () => {
  const [isDarkMode, setIsDarkMode] = useState(true);

  // Initialize dark mode from localStorage or system preference
  useEffect(() => {
    const savedMode = localStorage.getItem('darkMode');
    if (savedMode !== null) {
      setIsDarkMode(savedMode === 'true');
    } else {
      // Respect system preference if no saved setting
      const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      setIsDarkMode(systemPrefersDark);
    }
  }, []);

  // Persist dark mode preference and apply to DOM
  useEffect(() => {
    localStorage.setItem('darkMode', isDarkMode);
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  const handleDarkModeToggle = () => {
    setIsDarkMode(prevMode => !prevMode);
  };

  return (
    <div className="min-h-screen bg-page text-foreground transition-colors duration-300">
      <Navigation 
        isDarkMode={isDarkMode} 
        onToggleDarkMode={handleDarkModeToggle} 
        hasExperience={experience.length > 0} 
      />
      <Hero />
      <About />
      <Projects />
      <Blog />
      <Contact />
      <Footer />
    </div>
  );
};

// App router component
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PortfolioApp />} />
        <Route path="/blog/:slug" element={<BlogPost />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
