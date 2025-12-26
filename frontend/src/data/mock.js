// Mock data for portfolio website

export const personalInfo = {
  name: "Kartik Pathak",
  title: "Full Stack Developer",
  subtitle: "Specializing in Full Stack Development, AI & Cyber Security",
  education: "BCAFSD Full Stack Development specialization graduating in 2027 from Jaipur National University",
  bio: [
    "I'm a passionate full-stack developer with a keen interest in emerging technologies like AI and Cyber Security. Currently pursuing my BCAFSD degree at Jaipur National University, I love building innovative solutions that solve real-world problems.",
    "When I'm not coding, you'll find me exploring new frameworks, learning about security best practices, or experimenting with AI/ML models. I believe in continuous learning and practical application of technology.",
    "My goal is to create impactful applications that make a difference while staying at the forefront of technological innovation in full-stack development, artificial intelligence, and cybersecurity."
  ],
  social: {
    github: "https://github.com/retarduser404",
    linkedin: "https://www.linkedin.com/in/kartik-pathak-379959269/",
    email: "kartikpathak776@outlook.com"
  }
};

export const skills = {
  frontend: ["React.js", "Tailwind CSS", "HTML5", "CSS3", "JavaScript"],
  backend: ["Node.js", "Express", "Python", "MySQL", "Firebase"],
  aiml: ["Generative AI", "TensorFlow", "Machine Learning", "AI Integration"],
  cybersecurity: ["Network Security", "Security Best Practices", "Linux", "Penetration Testing"],
  tools: ["Git", "GitHub", "Linux", "C++", "VS Code", "Postman"]
};

export const projects = [
  {
    id: 1,
    title: "Email Automation Tool",
    description: "Python-based email automation system for sending bulk emails, scheduling campaigns, and managing email templates with intelligent filtering and tracking.",
    featured: true,
    tech: ["Python", "SMTP", "Automation", "Email API"],
    github: "https://github.com/retarduser404/email-automation",
    demo: "#"
  },
  {
    id: 2,
    title: "E-commerce Store",
    description: "Full-stack e-commerce platform with product management, shopping cart, secure checkout, order tracking, and admin dashboard.",
    featured: true,
    tech: ["React", "Node.js", "Express", "MySQL", "Tailwind CSS"],
    github: "https://github.com/retarduser404/ecommerce-store",
    demo: "#"
  },
  {
    id: 3,
    title: "AI Chat Assistant",
    description: "Intelligent chatbot powered by generative AI that can answer questions, provide recommendations, and assist users with various tasks.",
    featured: true,
    tech: ["Python", "Generative AI", "React", "Node.js", "TensorFlow"],
    github: "https://github.com/retarduser404",
    demo: "#"
  },
  {
    id: 4,
    title: "Security Scanner Tool",
    description: "Cybersecurity tool for scanning web applications and networks to identify vulnerabilities, security flaws, and potential threats.",
    featured: false,
    tech: ["Python", "Linux", "Security Libraries", "Networking"],
    github: "https://github.com/retarduser404",
    demo: "#"
  },
  {
    id: 5,
    title: "Task Management App",
    description: "Modern task management application with real-time updates, team collaboration, priority settings, and deadline tracking.",
    featured: false,
    tech: ["React", "Node.js", "Firebase", "Tailwind CSS"],
    github: "https://github.com/retarduser404",
    demo: "#"
  },
  {
    id: 6,
    title: "Portfolio Website",
    description: "Personal portfolio built with modern web technologies, featuring dark mode, smooth animations, blog section, and contact form.",
    featured: false,
    tech: ["React", "Tailwind CSS", "FastAPI", "MongoDB"],
    github: "https://github.com/retarduser404/portfolio",
    demo: "#"
  }
];

export const blogPosts = [
  {
    id: 1,
    slug: "getting-started-with-full-stack-development",
    title: "Getting Started with Full Stack Development",
    date: "March 15, 2024",
    readTime: "8 min read",
    excerpt: "My journey into full-stack development and the essential skills I learned along the way to become a proficient developer.",
    tags: ["Full Stack", "React", "Node.js"],
    content: "# Getting Started with Full Stack Development\n\nWhen I first decided to dive into full-stack development, I had no idea what I was getting into. Coming from a basic programming background, the web development world felt vast and overwhelming.\n\n## The Beginning\n\nI started with the basics - understanding how the web works, what frontend and backend mean, and why full-stack developers are in high demand. The learning curve was steep, but I was determined to master both sides of development.\n\n## Choosing the Right Stack\n\nAfter researching various technology stacks, I decided to focus on:\n\n- Frontend: React.js with Tailwind CSS\n- Backend: Node.js with Express\n- Database: MySQL and Firebase\n- Version Control: Git and GitHub\n\n## The Learning Path\n\n### Phase 1: Frontend Fundamentals\nI spent months mastering HTML, CSS, and JavaScript before touching any framework. This foundation proved invaluable when learning React.\n\n### Phase 2: React Mastery\nReact's component-based architecture made sense to me. I built numerous projects - todo apps, weather apps, and eventually complex dashboards.\n\n### Phase 3: Backend Development\nLearning Node.js was exciting because I could use JavaScript on both frontend and backend. Express made building APIs straightforward and intuitive.\n\n### Phase 4: Database Management\nUnderstanding how to design schemas, write queries, and optimize database performance was crucial. I worked with both SQL (MySQL) and NoSQL (Firebase) databases.\n\n## Key Challenges\n\n### 1. Understanding Client-Server Architecture\nGrasping how frontend and backend communicate took time. Learning about REST APIs, HTTP methods, and status codes was essential.\n\n### 2. State Management\nManaging state across components in React was initially confusing. Learning when to lift state up or use Context API helped significantly.\n\n### 3. Authentication & Security\nImplementing secure authentication, handling JWT tokens, and understanding security best practices required careful study and practice.\n\n## Key Takeaways\n\n1. **Master the Basics First**: Don't rush into frameworks. Solid JavaScript fundamentals are crucial.\n2. **Build Real Projects**: Reading tutorials is great, but building projects is how you really learn.\n3. **Understand Both Sides**: Don't just focus on one side. Understanding how frontend and backend work together is powerful.\n4. **Version Control is Essential**: Learn Git from day one. It's not optional.\n5. **Debug Effectively**: Learning to debug efficiently will save you countless hours.\n\n## Resources That Helped\n\n1. **Documentation**: React and Node.js official docs are excellent\n2. **YouTube**: FreeCodeCamp and Traversy Media have comprehensive tutorials\n3. **Practice Platforms**: Building projects and contributing to GitHub\n4. **Community**: Stack Overflow and developer Discord servers\n\n## What's Next?\n\nNow that I'm comfortable with full-stack development, I'm exploring:\n- AI integration in web applications\n- Cybersecurity best practices\n- Advanced state management\n- Performance optimization\n- Cloud deployment strategies\n\n## Advice for Beginners\n\n1. **Start Small**: Build simple projects first, then gradually increase complexity\n2. **Be Consistent**: Code every day, even if just for 30 minutes\n3. **Read Error Messages**: They're usually helpful if you read them carefully\n4. **Ask for Help**: Don't struggle alone - communities are there to help\n5. **Stay Updated**: Web development evolves rapidly - keep learning\n\nThe journey from beginner to confident full-stack developer took about 8-10 months of consistent practice. If you're just starting, be patient with yourself and enjoy the process. Every project teaches you something new!"
  },
  {
    id: 2,
    slug: "integrating-ai-into-web-applications",
    title: "Integrating AI into Web Applications",
    date: "February 28, 2024",
    readTime: "6 min read",
    excerpt: "How I started integrating AI and machine learning capabilities into my web projects to create smarter applications.",
    tags: ["AI", "TensorFlow", "Web Development"],
    content: "# Integrating AI into Web Applications\n\nArtificial Intelligence is transforming web applications. Here's my journey of integrating AI capabilities into full-stack projects.\n\n## Why AI in Web Apps?\n\nAI can enhance user experience through:\n- Intelligent recommendations\n- Natural language processing\n- Image recognition\n- Predictive analytics\n- Automation\n\n## My First AI Project\n\nI decided to build an AI-powered chatbot that could answer questions intelligently using generative AI.\n\n### The Tech Stack\n- Frontend: React for the chat interface\n- Backend: Node.js for API handling\n- AI: Generative AI models for responses\n- Database: Firebase for conversation history\n\n## Getting Started with AI Integration\n\n### Step 1: Understanding AI APIs\nI started by exploring various AI services:\n- OpenAI for language models\n- TensorFlow for custom models\n- Pre-trained models for specific tasks\n\n### Step 2: Setting Up the Backend\nThe backend handles:\n- API key management\n- Request formatting\n- Response processing\n- Error handling\n\n### Step 3: Frontend Integration\nCreating an intuitive chat interface where users can:\n- Type messages naturally\n- See AI responses in real-time\n- View conversation history\n\n## Challenges Faced\n\n### 1. API Rate Limits\nAI APIs often have rate limits. I implemented:\n- Request queuing\n- Caching common responses\n- User rate limiting\n\n### 2. Response Quality\nEnsuring AI responses were relevant required:\n- Proper prompt engineering\n- Context management\n- Response validation\n\n### 3. Cost Management\nAI API calls can be expensive. I optimized by:\n- Caching frequent queries\n- Implementing smart retry logic\n- Using appropriate model sizes\n\n## Best Practices\n\n1. **Prompt Engineering**: Craft clear, specific prompts for better results\n2. **Error Handling**: Always handle API failures gracefully\n3. **User Privacy**: Never send sensitive data to external AI services\n4. **Performance**: Implement loading states and optimize API calls\n5. **Testing**: Test with various inputs to ensure reliability\n\n## Use Cases I've Explored\n\n### 1. Content Generation\nUsing AI to help users generate content, summaries, or suggestions.\n\n### 2. Smart Search\nImplementing semantic search that understands user intent.\n\n### 3. Data Analysis\nUsing AI to analyze data and provide insights.\n\n### 4. Image Processing\nImplementing image recognition and classification features.\n\n## Learning Resources\n\n1. **TensorFlow Documentation**: Excellent for understanding ML concepts\n2. **AI API Documentation**: OpenAI, Anthropic docs are comprehensive\n3. **Courses**: DeepLearning.AI and Fast.ai have great free courses\n4. **Experimentation**: Build small projects to understand concepts\n\n## What's Next?\n\nI'm exploring:\n- Fine-tuning custom models\n- Real-time AI features\n- Multi-modal AI (text + image)\n- AI-powered security features\n\n## Tips for Beginners\n\n1. **Start Simple**: Use existing AI APIs before building custom models\n2. **Understand Limits**: Know what AI can and cannot do\n3. **Privacy First**: Be careful with user data\n4. **Test Thoroughly**: AI can be unpredictable - test extensively\n5. **Stay Updated**: AI field evolves rapidly\n\nIntegrating AI into web applications opens up amazing possibilities. Start experimenting today and see what you can build!"
  },
  {
    id: 3,
    slug: "cybersecurity-essentials-for-developers",
    title: "Cybersecurity Essentials for Developers",
    date: "January 20, 2024",
    readTime: "7 min read",
    excerpt: "Essential cybersecurity practices every developer should know to build secure and robust applications.",
    tags: ["Cyber Security", "Best Practices", "Security"],
    content: "# Cybersecurity Essentials for Developers\n\nAs developers, security should be a top priority. Here's what I've learned about building secure applications.\n\n## Why Security Matters\n\nSecurity breaches can lead to:\n- Data theft\n- Financial losses\n- Reputation damage\n- Legal consequences\n- User trust loss\n\n## Common Security Vulnerabilities\n\n### 1. SQL Injection\nAttackers inject malicious SQL code through input fields.\n\n**Prevention:**\n- Use parameterized queries\n- Validate and sanitize inputs\n- Use ORMs properly\n\n### 2. Cross-Site Scripting (XSS)\nAttackers inject malicious scripts into web pages.\n\n**Prevention:**\n- Sanitize user inputs\n- Escape output data\n- Use Content Security Policy headers\n\n### 3. Authentication Flaws\nWeak authentication can compromise entire systems.\n\n**Prevention:**\n- Use strong password policies\n- Implement multi-factor authentication\n- Secure session management\n- Hash passwords properly (bcrypt, argon2)\n\n### 4. Insecure Direct Object References\nUsers accessing unauthorized resources by manipulating parameters.\n\n**Prevention:**\n- Implement proper authorization checks\n- Use indirect references\n- Validate user permissions\n\n## Security Best Practices\n\n### 1. Input Validation\nAlways validate and sanitize user inputs:\n- Check data types\n- Validate formats\n- Sanitize special characters\n- Set length limits\n\n### 2. HTTPS Everywhere\nUse HTTPS for all communications:\n- Encrypt data in transit\n- Use SSL/TLS certificates\n- Force HTTPS redirects\n\n### 3. Secure Configuration\n- Keep software updated\n- Disable unnecessary features\n- Use environment variables for secrets\n- Never commit credentials to Git\n\n### 4. Error Handling\n- Don't expose sensitive information in errors\n- Log errors securely\n- Show generic error messages to users\n\n### 5. API Security\n- Use authentication tokens\n- Implement rate limiting\n- Validate all requests\n- Use CORS properly\n\n## Tools I Use\n\n### 1. Security Scanners\n- OWASP ZAP for vulnerability scanning\n- Nmap for network scanning\n- Burp Suite for web app testing\n\n### 2. Code Analysis\n- ESLint with security plugins\n- SonarQube for code quality\n- npm audit for dependency vulnerabilities\n\n### 3. Password Security\n- bcrypt for hashing\n- Strong password generators\n- Password strength validators\n\n## Security in Development Workflow\n\n### 1. During Development\n- Follow secure coding practices\n- Use linters with security rules\n- Code reviews focused on security\n\n### 2. Testing Phase\n- Penetration testing\n- Security audits\n- Vulnerability assessments\n\n### 3. Deployment\n- Secure server configuration\n- Regular updates and patches\n- Monitoring and logging\n\n## Linux Security\n\nAs a Linux user, I've learned:\n- File permission management\n- Firewall configuration (iptables)\n- SSH security best practices\n- System hardening techniques\n\n## Learning Path\n\n### Beginner\n1. Understand OWASP Top 10\n2. Learn basic encryption\n3. Practice secure coding\n\n### Intermediate\n1. Study authentication mechanisms\n2. Learn about network security\n3. Practice penetration testing\n\n### Advanced\n1. Security architecture design\n2. Advanced threat modeling\n3. Security automation\n\n## Resources\n\n1. **OWASP**: Best practices and vulnerability information\n2. **HackerOne**: Learn from real security reports\n3. **Cybrary**: Free cybersecurity courses\n4. **PortSwigger Web Security Academy**: Excellent hands-on labs\n\n## Red Flags to Watch For\n\n1. Storing passwords in plain text\n2. Using outdated dependencies\n3. No input validation\n4. Exposing API keys\n5. Weak session management\n\n## My Security Checklist\n\nBefore deploying any application:\n- All inputs validated and sanitized\n- Authentication properly implemented\n- Authorization checks in place\n- HTTPS enabled\n- Environment variables used for secrets\n- Dependencies updated\n- Error handling doesn't expose sensitive info\n- Rate limiting implemented\n- Security headers configured\n- Logging and monitoring enabled\n\n## Conclusion\n\nSecurity is not a one-time task but a continuous process. Stay updated with latest threats, follow best practices, and always think like an attacker when building applications.\n\nRemember: It's always easier to build security in from the start than to add it later!"
  }
];

export const experience = [];
