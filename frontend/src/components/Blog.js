import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Clock, ArrowRight } from 'lucide-react';
import { blogPosts } from '../data/mock';
import { Badge } from './ui/badge';
import { Button } from './ui/button';

// Blog listing page with article previews and navigation to full posts
const Blog = () => {
  const navigate = useNavigate();

  return (
    <section id="blog" className="py-20 bg-page">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section heading with accent underline */}
        <div className="mb-16">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-black uppercase tracking-tight accent-color mb-4">
            Blog
          </h2>
          <div className="h-1 w-20 bg-accent"></div>
        </div>

        {/* Blog posts grid - click any card to read full article */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogPosts.map((post) => (
            <div
              key={post.id}
              className="bg-card border border-custom rounded-lg overflow-hidden hover:border-accent transition-all duration-300 cursor-pointer flex flex-col"
              onClick={() => navigate(`/blog/${post.slug}`)}
            >
              <div className="p-6 flex flex-col flex-grow">
                {/* Post metadata - date and reading time */}
                <div className="flex items-center gap-4 text-sm text-muted mb-4">
                  <span>{post.date}</span>
                  <span className="flex items-center gap-1">
                    <Clock className="h-4 w-4" />
                    {post.readTime}
                  </span>
                </div>

                {/* Post title - clickable to navigate */}
                <h3 className="text-xl font-bold mb-3 text-foreground hover:accent-color transition-colors">
                  {post.title}
                </h3>

                {/* Post excerpt - teaser of content */}
                <p className="text-secondary mb-4 flex-grow leading-relaxed">
                  {post.excerpt}
                </p>

                {/* Topic tags - quick categorization */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {post.tags.map((tag) => (
                    <Badge
                      key={tag}
                      variant="secondary"
                      className="text-xs bg-accent/10 text-muted border border-accent/20"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>

                {/* Read more link - opens full post */}
                <Button
                  variant="ghost"
                  className="w-fit px-0 accent-color hover:bg-transparent font-semibold"
                >
                  Read more
                  <ArrowRight className="h-4 w-4 ml-2" />
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
