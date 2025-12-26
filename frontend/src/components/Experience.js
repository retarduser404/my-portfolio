import React from 'react';
import { experience } from '../data/mock';

const Experience = () => {
  return (
    <section id="experience" className="py-20 bg-card">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-16">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-black uppercase tracking-tight accent-color mb-4">
            Experience
          </h2>
          <div className="h-1 w-20 bg-accent"></div>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-accent/30 hidden sm:block"></div>

          {/* Timeline Items */}
          <div className="space-y-12">
            {experience.map((item, index) => (
              <div key={item.id} className="relative flex items-start gap-8">
                {/* Number Circle */}
                <div className="flex-shrink-0 w-16 h-16 rounded-full bg-accent border-4 border-card flex items-center justify-center z-10">
                  <span className="text-2xl font-black text-black">{index + 1}</span>
                </div>

                {/* Content */}
                <div className="flex-grow bg-page border border-custom rounded-lg p-6 hover:border-accent transition-colors">
                  <div className="text-sm font-bold accent-color uppercase tracking-wide mb-2">
                    {item.year}
                  </div>
                  <h3 className="text-2xl font-bold text-foreground mb-3">
                    {item.title}
                  </h3>
                  <p className="text-secondary leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
