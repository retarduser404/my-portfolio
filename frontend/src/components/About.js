import React from 'react';
import { personalInfo, skills } from '../data/mock';
import { Badge } from './ui/badge';

const About = () => {
  return (
    <section id="about" className="py-20 bg-page">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-16">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-black uppercase tracking-tight accent-color mb-4">
            About Me
          </h2>
          <div className="h-1 w-20 bg-accent"></div>
        </div>

        {/* Bio */}
        <div className="mb-16 space-y-6">
          {personalInfo.bio.map((paragraph, index) => (
            <p key={index} className="text-lg sm:text-xl text-secondary leading-relaxed">
              {paragraph}
            </p>
          ))}
        </div>

        {/* Skills */}
        <div>
          <h3 className="text-2xl sm:text-3xl font-bold mb-8 text-foreground">
            Technical Skills
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Frontend */}
            <div className="bg-card p-6 rounded-lg border border-custom hover:border-accent transition-colors">
              <h4 className="text-xl font-bold mb-4 accent-color uppercase tracking-wide">
                Frontend
              </h4>
              <div className="flex flex-wrap gap-2">
                {skills.frontend.map((skill) => (
                  <Badge
                    key={skill}
                    variant="secondary"
                    className="px-4 py-2 text-sm bg-accent/10 text-foreground border border-accent/30 hover:bg-accent/20"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>

            {/* Backend */}
            <div className="bg-card p-6 rounded-lg border border-custom hover:border-accent transition-colors">
              <h4 className="text-xl font-bold mb-4 accent-color uppercase tracking-wide">
                Backend
              </h4>
              <div className="flex flex-wrap gap-2">
                {skills.backend.map((skill) => (
                  <Badge
                    key={skill}
                    variant="secondary"
                    className="px-4 py-2 text-sm bg-accent/10 text-foreground border border-accent/30 hover:bg-accent/20"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>

            {/* Web3 */}
            <div className="bg-card p-6 rounded-lg border border-custom hover:border-accent transition-colors">
              <h4 className="text-xl font-bold mb-4 accent-color uppercase tracking-wide">
                Web3
              </h4>
              <div className="flex flex-wrap gap-2">
                {skills.web3.map((skill) => (
                  <Badge
                    key={skill}
                    variant="secondary"
                    className="px-4 py-2 text-sm bg-accent/10 text-foreground border border-accent/30 hover:bg-accent/20"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>

            {/* Tools */}
            <div className="bg-card p-6 rounded-lg border border-custom hover:border-accent transition-colors">
              <h4 className="text-xl font-bold mb-4 accent-color uppercase tracking-wide">
                Tools & Platforms
              </h4>
              <div className="flex flex-wrap gap-2">
                {skills.tools.map((skill) => (
                  <Badge
                    key={skill}
                    variant="secondary"
                    className="px-4 py-2 text-sm bg-accent/10 text-foreground border border-accent/30 hover:bg-accent/20"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
