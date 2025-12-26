import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, Clock, Calendar } from 'lucide-react';
import { blogPosts } from '../data/mock';
import { Button } from './ui/button';
import { Badge } from './ui/badge';

const BlogPost = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const post = blogPosts.find((p) => p.slug === slug);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!post) {
    return (
      <div className="min-h-screen bg-page flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold accent-color mb-4">Post Not Found</h1>
          <Button
            onClick={() => navigate('/')}
            className="bg-accent text-black hover:bg-accent/80 rounded-full"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Home
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-page text-foreground">
      {/* Header */}
      <header className="bg-card border-b border-custom py-6 sticky top-0 z-10 backdrop-blur-lg">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Button
            variant="ghost"
            onClick={() => navigate('/')}
            className="accent-color hover:bg-accent/10"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Home
          </Button>
        </div>
      </header>

      {/* Article */}
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Meta Information */}
        <div className="mb-8">
          <div className="flex flex-wrap items-center gap-4 text-sm text-muted mb-6">
            <span className="flex items-center gap-2">
              <Calendar className="h-4 w-4" />
              {post.date}
            </span>
            <span className="flex items-center gap-2">
              <Clock className="h-4 w-4" />
              {post.readTime}
            </span>
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-6">
            {post.tags.map((tag) => (
              <Badge
                key={tag}
                className="bg-accent/10 text-foreground border border-accent/30 text-sm"
              >
                {tag}
              </Badge>
            ))}
          </div>

          {/* Title */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-black uppercase leading-tight accent-color mb-6">
            {post.title}
          </h1>
        </div>

        {/* Content */}
        <div className="prose prose-lg max-w-none">
          {post.content.split('\n').map((line, index) => {
            // Handle headings
            if (line.startsWith('# ')) {
              return (
                <h1 key={index} className="text-4xl font-black uppercase accent-color mt-12 mb-6">
                  {line.replace('# ', '')}
                </h1>
              );
            }
            if (line.startsWith('## ')) {
              return (
                <h2 key={index} className="text-3xl font-bold text-foreground mt-10 mb-4">
                  {line.replace('## ', '')}
                </h2>
              );
            }
            if (line.startsWith('### ')) {
              return (
                <h3 key={index} className="text-2xl font-bold text-foreground mt-8 mb-3">
                  {line.replace('### ', '')}
                </h3>
              );
            }

            // Handle list items
            if (line.match(/^\d+\./)) {
              return (
                <li key={index} className="text-secondary text-lg leading-relaxed ml-6 mb-2">
                  {line.replace(/^\d+\.\s/, '')}
                </li>
              );
            }
            if (line.startsWith('- ')) {
              return (
                <li key={index} className="text-secondary text-lg leading-relaxed ml-6 mb-2">
                  {line.replace('- ', '')}
                </li>
              );
            }

            // Handle paragraphs
            if (line.trim() !== '') {
              return (
                <p key={index} className="text-secondary text-lg leading-relaxed mb-6">
                  {line}
                </p>
              );
            }

            // Empty lines
            return <div key={index} className="h-4"></div>;
          })}
        </div>

        {/* Back Button */}
        <div className="mt-12 pt-8 border-t border-custom">
          <Button
            onClick={() => navigate('/')}
            className="bg-accent text-black hover:bg-accent/80 rounded-full px-8"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Home
          </Button>
        </div>
      </article>
    </div>
  );
};

export default BlogPost;
