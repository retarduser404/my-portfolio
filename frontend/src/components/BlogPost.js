import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, Clock, Calendar } from 'lucide-react';
import { blogPosts } from '../data/mock';
import { Button } from './ui/button';
import { Badge } from './ui/badge';

// Individual blog post page with full article content and metadata
const BlogPost = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const currentPost = blogPosts.find((post) => post.slug === slug);

  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Handle post not found scenario
  if (!currentPost) {
    return (
      <div className="min-h-screen bg-page flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold accent-color mb-4">Post Not Found</h1>
          <p className="text-secondary mb-6">The blog post you're looking for doesn't exist.</p>
          <Button
            onClick={() => navigate('/')}
            className="bg-accent text-black hover:bg-accent/80 rounded-full"
          >
            Back to Home
          </Button>
        </div>
      </div>
    );
  }

  return (
    <article className="min-h-screen bg-page py-20">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back button - easy navigation */}
        <Button
          variant="ghost"
          onClick={() => navigate('/')}
          className="mb-8 accent-color hover:bg-accent/10"
        >
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Portfolio
        </Button>

        {/* Article header section */}
        <header className="mb-12">
          {/* Post title - main heading */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-black uppercase tracking-tight accent-color mb-6">
            {currentPost.title}
          </h1>

          {/* Post metadata - date and reading time */}
          <div className="flex flex-wrap items-center gap-6 text-secondary mb-8">
            <span className="flex items-center gap-2">
              <Calendar className="h-5 w-5" />
              {currentPost.date}
            </span>
            <span className="flex items-center gap-2">
              <Clock className="h-5 w-5" />
              {currentPost.readTime}
            </span>
          </div>

          {/* Topic tags - categorization */}
          <div className="flex flex-wrap gap-3">
            {currentPost.tags.map((tag) => (
              <Badge
                key={tag}
                variant="secondary"
                className="bg-accent/10 text-foreground border border-accent/20 px-3 py-1"
              >
                {tag}
              </Badge>
            ))}
          </div>
        </header>

        {/* Article divider */}
        <div className="h-1 w-20 bg-accent mb-12"></div>

        {/* Article content - rendered from markdown */}
        <div className="prose prose-invert max-w-none">
          <div className="text-secondary leading-relaxed whitespace-pre-wrap">
            {currentPost.content}
          </div>
        </div>

        {/* Call-to-action section */}
        <div className="mt-16 pt-12 border-t border-custom">
          <p className="text-secondary mb-6">
            Found this interesting? Feel free to reach out or explore more of my work!
          </p>
          <Button
            onClick={() => navigate('/')}
            className="bg-accent text-black hover:bg-accent/80 rounded-full"
          >
            Back to Portfolio
          </Button>
        </div>
      </div>
    </article>
  );
};

export default BlogPost;
