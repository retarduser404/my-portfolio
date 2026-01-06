import React, { useState } from 'react';
import { Mail, Send, CheckCircle, AlertCircle } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { personalInfo } from '../data/mock';

// Contact form component for visitors to reach out
const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); // 'success' or 'error'

  // Validate form inputs before submission
  const validateForm = () => {
    const newErrors = {};

    // Check name field - minimum 2 characters
    if (formData.name.trim().length < 2) {
      newErrors.name = 'Name must be at least 2 characters long';
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    // Message must have meaningful content
    if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters long';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Update form field and clear error when user types
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
    // Clear field error as user corrects it
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  // Handle form submission with validation and feedback
  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitStatus(null);

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    try {
      // Simulate network request with delay
      await new Promise((resolve) => setTimeout(resolve, 1500));

      // TODO: Connect to backend API when server is deployed
      console.log('Form submitted:', formData);

      setSubmitStatus('success');
      setFormData({ name: '', email: '', message: '' });

      // Auto-dismiss success message after 5 seconds
      setTimeout(() => setSubmitStatus(null), 5000);
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 bg-page">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section heading with accent underline */}
        <div className="mb-16">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-black uppercase tracking-tight accent-color mb-4">
            Get In Touch
          </h2>
          <div className="h-1 w-20 bg-accent"></div>
        </div>

        {/* Contact form with validation and feedback */}
        <div className="bg-card border border-custom rounded-lg p-8">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Name input field */}
            <div>
              <label htmlFor="name" className="block text-sm font-bold text-foreground mb-2 uppercase tracking-wide">
                Name
              </label>
              <Input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className={`bg-page border-custom text-foreground focus:border-accent ${
                  errors.name ? 'border-red-500' : ''
                }`}
                placeholder="Your name"
              />
              {errors.name && (
                <p className="text-red-500 text-sm mt-1 flex items-center gap-1">
                  <AlertCircle className="h-4 w-4" />
                  {errors.name}
                </p>
              )}
            </div>

            {/* Email input field */}
            <div>
              <label htmlFor="email" className="block text-sm font-bold text-foreground mb-2 uppercase tracking-wide">
                Email
              </label>
              <Input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className={`bg-page border-custom text-foreground focus:border-accent ${
                  errors.email ? 'border-red-500' : ''
                }`}
                placeholder="your.email@example.com"
              />
              {errors.email && (
                <p className="text-red-500 text-sm mt-1 flex items-center gap-1">
                  <AlertCircle className="h-4 w-4" />
                  {errors.email}
                </p>
              )}
            </div>

            {/* Message textarea field */}
            <div>
              <label htmlFor="message" className="block text-sm font-bold text-foreground mb-2 uppercase tracking-wide">
                Message
              </label>
              <Textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={6}
                className={`bg-page border-custom text-foreground focus:border-accent resize-none ${
                  errors.message ? 'border-red-500' : ''
                }`}
                placeholder="Tell me about your project or just say hi!"
              />
              {errors.message && (
                <p className="text-red-500 text-sm mt-1 flex items-center gap-1">
                  <AlertCircle className="h-4 w-4" />
                  {errors.message}
                </p>
              )}
            </div>

            {/* Submit button with loading state */}
            <Button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-accent text-black hover:bg-accent/80 rounded-full py-6 text-base font-bold uppercase"
            >
              {isSubmitting ? (
                <>
                  <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-black mr-2"></div>
                  Sending...
                </>
              ) : (
                <>
                  <Send className="h-5 w-5 mr-2" />
                  Send Message
                </>
              )}
            </Button>
          </form>

          {/* Success notification */}
          {submitStatus === 'success' && (
            <div className="mt-6 p-4 bg-green-500/10 border border-green-500 rounded-lg flex items-center gap-2 text-green-500">
              <CheckCircle className="h-5 w-5" />
              <p className="font-medium">Message sent successfully! I'll get back to you soon.</p>
            </div>
          )}

          {/* Error notification */}
          {submitStatus === 'error' && (
            <div className="mt-6 p-4 bg-red-500/10 border border-red-500 rounded-lg flex items-center gap-2 text-red-500">
              <AlertCircle className="h-5 w-5" />
              <p className="font-medium">Something went wrong. Please try again or email me directly.</p>
            </div>
          )}

          {/* Fallback contact option */}
          <div className="mt-8 text-center">
            <p className="text-secondary mb-2">Or email me directly at:</p>
            <a
              href={`mailto:${personalInfo.social.email}`}
              className="accent-color hover:underline font-medium flex items-center justify-center gap-2"
            >
              <Mail className="h-5 w-5" />
              {personalInfo.social.email}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
