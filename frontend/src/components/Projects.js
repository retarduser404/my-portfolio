import React from 'react';
import { ExternalLink, Github } from 'lucide-react';
import { projects } from '../data/mock';
import { Button } from './ui/button';
import { Badge } from './ui/badge';

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-16">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-black uppercase tracking-tight accent-color mb-4">
            Projects
          </h2>
          <div className="h-1 w-20 bg-accent"></div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-page border border-custom rounded-lg p-6 hover:border-accent transition-all duration-300 flex flex-col"
            >
              {/* Featured Badge */}
              {project.featured && (
                <Badge className="bg-accent text-black w-fit mb-4 uppercase text-xs font-bold">
                  Featured
                </Badge>
              )}

              {/* Project Title */}
              <h3 className="text-xl font-bold mb-3 text-foreground">
                {project.title}
              </h3>

              {/* Description */}
              <p className="text-secondary mb-4 flex-grow leading-relaxed">
                {project.description}
              </p>

              {/* Tech Stack */}
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="text-xs px-3 py-1 bg-accent/10 text-muted rounded-full border border-accent/20"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Links */}
              <div className="flex gap-3">
                <Button
                  variant="outline"
                  size="sm"
                  className="flex-1 border-accent accent-color hover:bg-accent hover:text-black rounded-full"
                  onClick={() => window.open(project.github, '_blank')}
                >
                  <Github className="h-4 w-4 mr-2" />
                  Code
                </Button>
                <Button
                  size="sm"
                  className="flex-1 bg-accent text-black hover:bg-accent/80 rounded-full"
                  onClick={() => window.open(project.demo, '_blank')}
                >
                  <ExternalLink className="h-4 w-4 mr-2" />
                  Demo
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
