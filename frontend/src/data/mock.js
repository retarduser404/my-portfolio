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
    content: `
# Getting Started with Full Stack Development

When I first decided to dive into full-stack development, I had no idea what I was getting into. Coming from a basic programming background, the web development world felt vast and overwhelming.

## The Beginning

I started with the basics - understanding how the web works, what frontend and backend mean, and why full-stack developers are in high demand. The learning curve was steep, but I was determined to master both sides of development.

## Choosing the Right Stack

After researching various technology stacks, I decided to focus on:

- Frontend: React.js with Tailwind CSS
- Backend: Node.js with Express
- Database: MySQL and Firebase
- Version Control: Git and GitHub

## The Learning Path

### Phase 1: Frontend Fundamentals
I spent months mastering HTML, CSS, and JavaScript before touching any framework. This foundation proved invaluable when learning React.

### Phase 2: React Mastery
React's component-based architecture made sense to me. I built numerous projects - todo apps, weather apps, and eventually complex dashboards.

### Phase 3: Backend Development
Learning Node.js was exciting because I could use JavaScript on both frontend and backend. Express made building APIs straightforward and intuitive.

### Phase 4: Database Management
Understanding how to design schemas, write queries, and optimize database performance was crucial. I worked with both SQL (MySQL) and NoSQL (Firebase) databases.

## Key Challenges

### 1. Understanding Client-Server Architecture
Grasping how frontend and backend communicate took time. Learning about REST APIs, HTTP methods, and status codes was essential.

### 2. State Management
Managing state across components in React was initially confusing. Learning when to lift state up or use Context API helped significantly.

### 3. Authentication & Security
Implementing secure authentication, handling JWT tokens, and understanding security best practices required careful study and practice.

## Key Takeaways

1. **Master the Basics First**: Don't rush into frameworks. Solid JavaScript fundamentals are crucial.
2. **Build Real Projects**: Reading tutorials is great, but building projects is how you really learn.
3. **Understand Both Sides**: Don't just focus on one side. Understanding how frontend and backend work together is powerful.
4. **Version Control is Essential**: Learn Git from day one. It's not optional.
5. **Debug Effectively**: Learning to debug efficiently will save you countless hours.

## Resources That Helped

1. **Documentation**: React and Node.js official docs are excellent
2. **YouTube**: FreeCodeCamp and Traversy Media have comprehensive tutorials
3. **Practice Platforms**: Building projects and contributing to GitHub
4. **Community**: Stack Overflow and developer Discord servers

## What's Next?

Now that I'm comfortable with full-stack development, I'm exploring:
- AI integration in web applications
- Cybersecurity best practices
- Advanced state management
- Performance optimization
- Cloud deployment strategies

## Advice for Beginners

1. **Start Small**: Build simple projects first, then gradually increase complexity
2. **Be Consistent**: Code every day, even if just for 30 minutes
3. **Read Error Messages**: They're usually helpful if you read them carefully
4. **Ask for Help**: Don't struggle alone - communities are there to help
5. **Stay Updated**: Web development evolves rapidly - keep learning

The journey from beginner to confident full-stack developer took about 8-10 months of consistent practice. If you're just starting, be patient with yourself and enjoy the process. Every project teaches you something new!
    `
  },
  {
    id: 2,
    slug: "integrating-ai-into-web-applications",
    title: "Integrating AI into Web Applications",
    date: "February 28, 2024",
    readTime: "6 min read",
    excerpt: "How I started integrating AI and machine learning capabilities into my web projects to create smarter applications.",
    tags: ["AI", "TensorFlow", "Web Development"],
    content: `
# Integrating AI into Web Applications

Artificial Intelligence is transforming web applications. Here's my journey of integrating AI capabilities into full-stack projects.

## Why AI in Web Apps?

AI can enhance user experience through:
- Intelligent recommendations
- Natural language processing
- Image recognition
- Predictive analytics
- Automation

## My First AI Project

I decided to build an AI-powered chatbot that could answer questions intelligently using generative AI.

### The Tech Stack
- Frontend: React for the chat interface
- Backend: Node.js for API handling
- AI: Generative AI models for responses
- Database: Firebase for conversation history

## Getting Started with AI Integration

### Step 1: Understanding AI APIs
I started by exploring various AI services:
- OpenAI for language models
- TensorFlow for custom models
- Pre-trained models for specific tasks

### Step 2: Setting Up the Backend
The backend handles:
- API key management
- Request formatting
- Response processing
- Error handling

### Step 3: Frontend Integration
Creating an intuitive chat interface where users can:
- Type messages naturally
- See AI responses in real-time
- View conversation history

## Challenges Faced

### 1. API Rate Limits
AI APIs often have rate limits. I implemented:
- Request queuing
- Caching common responses
- User rate limiting

### 2. Response Quality
Ensuring AI responses were relevant required:
- Proper prompt engineering
- Context management
- Response validation

### 3. Cost Management
AI API calls can be expensive. I optimized by:
- Caching frequent queries
- Implementing smart retry logic
- Using appropriate model sizes

## Best Practices

1. **Prompt Engineering**: Craft clear, specific prompts for better results
2. **Error Handling**: Always handle API failures gracefully
3. **User Privacy**: Never send sensitive data to external AI services
4. **Performance**: Implement loading states and optimize API calls
5. **Testing**: Test with various inputs to ensure reliability

## Use Cases I've Explored

### 1. Content Generation
Using AI to help users generate content, summaries, or suggestions.

### 2. Smart Search
Implementing semantic search that understands user intent.

### 3. Data Analysis
Using AI to analyze data and provide insights.

### 4. Image Processing
Implementing image recognition and classification features.

## Learning Resources

1. **TensorFlow Documentation**: Excellent for understanding ML concepts
2. **AI API Documentation**: OpenAI, Anthropic docs are comprehensive
3. **Courses**: DeepLearning.AI and Fast.ai have great free courses
4. **Experimentation**: Build small projects to understand concepts

## What's Next?

I'm exploring:
- Fine-tuning custom models
- Real-time AI features
- Multi-modal AI (text + image)
- AI-powered security features

## Tips for Beginners

1. **Start Simple**: Use existing AI APIs before building custom models
2. **Understand Limits**: Know what AI can and cannot do
3. **Privacy First**: Be careful with user data
4. **Test Thoroughly**: AI can be unpredictable - test extensively
5. **Stay Updated**: AI field evolves rapidly

Integrating AI into web applications opens up amazing possibilities. Start experimenting today and see what you can build!
    `
  },
  {
    id: 3,
    slug: "cybersecurity-essentials-for-developers",
    title: "Cybersecurity Essentials for Developers",
    date: "January 20, 2024",
    readTime: "7 min read",
    excerpt: "Essential cybersecurity practices every developer should know to build secure and robust applications.",
    tags: ["Cyber Security", "Best Practices", "Security"],
    content: `
# Cybersecurity Essentials for Developers

As developers, security should be a top priority. Here's what I've learned about building secure applications.

## Why Security Matters

Security breaches can lead to:
- Data theft
- Financial losses
- Reputation damage
- Legal consequences
- User trust loss

## Common Security Vulnerabilities

### 1. SQL Injection
Attackers inject malicious SQL code through input fields.

**Prevention:**
- Use parameterized queries
- Validate and sanitize inputs
- Use ORMs properly

### 2. Cross-Site Scripting (XSS)
Attackers inject malicious scripts into web pages.

**Prevention:**
- Sanitize user inputs
- Escape output data
- Use Content Security Policy headers

### 3. Authentication Flaws
Weak authentication can compromise entire systems.

**Prevention:**
- Use strong password policies
- Implement multi-factor authentication
- Secure session management
- Hash passwords properly (bcrypt, argon2)

### 4. Insecure Direct Object References
Users accessing unauthorized resources by manipulating parameters.

**Prevention:**
- Implement proper authorization checks
- Use indirect references
- Validate user permissions

## Security Best Practices

### 1. Input Validation
Always validate and sanitize user inputs:
- Check data types
- Validate formats
- Sanitize special characters
- Set length limits

### 2. HTTPS Everywhere
Use HTTPS for all communications:
- Encrypt data in transit
- Use SSL/TLS certificates
- Force HTTPS redirects

### 3. Secure Configuration
- Keep software updated
- Disable unnecessary features
- Use environment variables for secrets
- Never commit credentials to Git

### 4. Error Handling
- Don't expose sensitive information in errors
- Log errors securely
- Show generic error messages to users

### 5. API Security
- Use authentication tokens
- Implement rate limiting
- Validate all requests
- Use CORS properly

## Tools I Use

### 1. Security Scanners
- OWASP ZAP for vulnerability scanning
- Nmap for network scanning
- Burp Suite for web app testing

### 2. Code Analysis
- ESLint with security plugins
- SonarQube for code quality
- npm audit for dependency vulnerabilities

### 3. Password Security
- bcrypt for hashing
- Strong password generators
- Password strength validators

## Security in Development Workflow

### 1. During Development
- Follow secure coding practices
- Use linters with security rules
- Code reviews focused on security

### 2. Testing Phase
- Penetration testing
- Security audits
- Vulnerability assessments

### 3. Deployment
- Secure server configuration
- Regular updates and patches
- Monitoring and logging

## Linux Security

As a Linux user, I've learned:
- File permission management
- Firewall configuration (iptables)
- SSH security best practices
- System hardening techniques

## Learning Path

### Beginner
1. Understand OWASP Top 10
2. Learn basic encryption
3. Practice secure coding

### Intermediate
1. Study authentication mechanisms
2. Learn about network security
3. Practice penetration testing

### Advanced
1. Security architecture design
2. Advanced threat modeling
3. Security automation

## Resources

1. **OWASP**: Best practices and vulnerability information
2. **HackerOne**: Learn from real security reports
3. **Cybrary**: Free cybersecurity courses
4. **PortSwigger Web Security Academy**: Excellent hands-on labs

## Red Flags to Watch For

1. Storing passwords in plain text
2. Using outdated dependencies
3. No input validation
4. Exposing API keys
5. Weak session management

## My Security Checklist

Before deploying any application:
- [ ] All inputs validated and sanitized
- [ ] Authentication properly implemented
- [ ] Authorization checks in place
- [ ] HTTPS enabled
- [ ] Environment variables used for secrets
- [ ] Dependencies updated
- [ ] Error handling doesn't expose sensitive info
- [ ] Rate limiting implemented
- [ ] Security headers configured
- [ ] Logging and monitoring enabled

## Conclusion

Security is not a one-time task but a continuous process. Stay updated with latest threats, follow best practices, and always think like an attacker when building applications.

Remember: It's always easier to build security in from the start than to add it later!
    `
  }
];
    content: `
# Building My First DApp: Lessons Learned

When I first decided to dive into Web3 development, I had no idea what I was getting into. Coming from a traditional web development background, the blockchain world felt like a completely different universe.

## The Beginning

I started with the basics - understanding what blockchain actually is, how smart contracts work, and why decentralization matters. The learning curve was steep, but I was determined to build something real.

## Choosing the Right Project

I decided to build a decentralized voting system. Why? Because it's a perfect use case for blockchain technology - transparent, immutable, and trustless. Plus, it would force me to learn about:

- Smart contract development with Solidity
- Interacting with contracts using Ethers.js
- Handling cryptocurrency transactions
- IPFS for decentralized storage

## The Challenges

### 1. Gas Optimization
Every operation costs gas, and I learned this the hard way. My first implementation was so expensive that a single vote would cost users several dollars. I had to refactor the entire contract to optimize gas usage.

### 2. Security Concerns
Smart contracts are immutable once deployed. This means any bug can be catastrophic. I spent weeks learning about common vulnerabilities like reentrancy attacks, integer overflow, and front-running.

### 3. Testing, Testing, Testing
Unlike traditional web apps where you can patch bugs quickly, blockchain apps require extensive testing. I wrote comprehensive unit tests using Hardhat and even conducted a small audit with my developer friends.

## Key Takeaways

1. **Start Small**: Don't try to build the next Ethereum. Start with simple contracts and gradually increase complexity.
2. **Security First**: Always think about security from day one. Use established patterns and libraries like OpenZeppelin.
3. **Test Everything**: Write tests for every possible scenario. Your future self will thank you.
4. **Community Matters**: The Web3 community is incredibly helpful. Don't hesitate to ask questions.

## What's Next?

Now that I've built my first DApp, I'm excited to explore more advanced concepts like Layer 2 solutions, DAOs, and cross-chain bridges. The Web3 space is evolving rapidly, and I can't wait to be part of this revolution.

If you're thinking about getting into Web3 development, my advice is simple: just start. Build something, break it, fix it, and learn from the process.
    `
  },
  {
    id: 2,
    slug: "getting-started-with-react",
    title: "How I Got Started with React",
    date: "February 28, 2024",
    readTime: "5 min read",
    excerpt: "From vanilla JavaScript to React - my learning path and the resources that helped me the most.",
    tags: ["React", "JavaScript", "Web Development"],
    content: `
# How I Got Started with React

React was the first modern JavaScript framework I learned, and it completely changed how I think about web development.

## Why React?

When I started learning web development, I was overwhelmed by the number of frameworks available - React, Vue, Angular, Svelte. I chose React because:

- **Industry Demand**: Most job postings mentioned React
- **Large Community**: Tons of resources and third-party libraries
- **Component-Based**: The concept just made sense to me

## My Learning Path

### Phase 1: JavaScript Fundamentals
Before touching React, I spent two months solidifying my JavaScript knowledge. I focused on:
- ES6+ features (arrow functions, destructuring, spread operator)
- Array methods (map, filter, reduce)
- Promises and async/await
- DOM manipulation

### Phase 2: React Basics
I started with the official React documentation and built small projects:
- Todo app (of course!)
- Weather app
- Calculator
- Movie search app

Each project taught me new concepts: state management, props, lifecycle methods, and hooks.

### Phase 3: Advanced Concepts
Once comfortable with basics, I explored:
- React Router for navigation
- Context API for state management
- Custom hooks
- Performance optimization

## Resources That Helped

1. **React Documentation**: The official docs are excellent and recently revamped.
2. **FreeCodeCamp**: Their React curriculum is comprehensive and free.
3. **YouTube Channels**: Web Dev Simplified and Traversy Media have great React tutorials.
4. **Practice Projects**: Building real projects is the best way to learn.

## Common Mistakes I Made

### 1. Not Understanding JavaScript First
I initially jumped into React without a solid JavaScript foundation. Bad idea. I had to go back and relearn JS properly.

### 2. Overusing State
I was putting everything in state, even data that didn't need to trigger re-renders. Learning when NOT to use state was important.

### 3. Ignoring Performance
My early apps re-rendered unnecessarily. Learning about React.memo, useMemo, and useCallback helped significantly.

## Tips for Beginners

1. **Master JavaScript First**: You can't be good at React without being good at JavaScript.
2. **Build Projects**: Reading tutorials is great, but building is how you really learn.
3. **Read Error Messages**: React error messages are usually helpful. Read them carefully.
4. **Join Communities**: Discord servers, Reddit communities, and Twitter are great for learning and networking.

## Where I Am Now

Today, React is my go-to library for frontend development. I've built numerous projects, contributed to open-source React libraries, and even mentored others learning React.

The journey from beginner to confident React developer took about 6 months of consistent practice. If you're just starting, be patient with yourself and enjoy the process!
    `
  },
  {
    id: 3,
    slug: "first-hackathon-experience",
    title: "My First Hackathon Experience",
    date: "January 20, 2024",
    readTime: "6 min read",
    excerpt: "48 hours of coding, energy drinks, and valuable lessons from my first hackathon competition.",
    tags: ["Hackathon", "Team Work", "Experience"],
    content: `
# My First Hackathon Experience

48 hours. That's all we had to build a complete application from scratch. This is the story of my first hackathon experience.

## The Decision to Participate

I had been coding for about a year when I saw the hackathon announcement. My first reaction? Fear. Imposter syndrome kicked in hard. But I decided to go for it anyway - best decision ever.

## Team Formation

I partnered with two classmates:
- Sarah (designer with basic HTML/CSS skills)
- Mike (backend developer)
- Me (frontend developer)

We had complementary skills but had never worked together before. This would be interesting.

## The Challenge

The theme: "Build a solution for sustainable living"

After brainstorming, we decided to build "EcoTrack" - an app that helps users track their carbon footprint and suggests ways to reduce it.

## Day 1: The Sprint Begins

### Hour 0-4: Planning
We spent the first few hours planning:
- User flows
- Database schema
- API endpoints
- Design mockups

Looking back, this planning phase was crucial to our success.

### Hour 4-12: Building
We split up tasks:
- Sarah worked on designs in Figma
- Mike set up the backend and database
- I initialized the React app and created components

### Hour 12-24: Integration
The first all-nighter. We integrated frontend with backend, fixed bugs, and added features. Energy drinks became our best friend.

## Day 2: The Final Push

### Hour 24-36: Features & Polish
We were running out of time but kept adding features:
- User authentication
- Carbon footprint calculator
- Achievement system
- Data visualization with charts

### Hour 36-44: Testing & Debugging
Bugs. So many bugs. We found issues we didn't know existed. But we fixed them one by one.

### Hour 44-48: Presentation Prep
With 4 hours left, we shifted focus to the presentation. We created slides, rehearsed our pitch, and deployed the app.

## The Presentation

Standing in front of judges was nerve-wracking. But we delivered our pitch confidently, demonstrated the app, and answered questions.

## The Results

We didn't win first place (we got 3rd!), but that didn't matter. What mattered was:

### What I Learned

1. **Time Management is Everything**: We wasted time on features that didn't add much value. MVP first, extras later.

2. **Communication is Key**: We had a few miscommunications that cost us hours. Regular check-ins would have helped.

3. **Sleep Matters**: The 2 AM to 6 AM period was unproductive. We should have taken power naps.

4. **Scope Creep is Real**: We kept adding "just one more feature" which delayed other important tasks.

5. **Git is Essential**: We had one merge conflict that took 30 minutes to resolve. Better Git practices would have prevented this.

### Skills I Gained

- Working under pressure
- Rapid prototyping
- Team collaboration
- Presentation skills
- Problem-solving on the fly

## The Aftermath

After the hackathon, we were exhausted but exhilarated. We made new friends, learned a ton, and had a working project for our portfolios.

## Advice for First-Time Hackathon Participants

1. **Just Do It**: Don't wait until you feel "ready". You'll learn more in 48 hours than in weeks of tutorials.

2. **Choose Your Team Wisely**: Complementary skills and good communication matter more than being best friends.

3. **Plan Before You Code**: Spend at least 10% of your time planning. It will save you hours later.

4. **Keep It Simple**: Build a working MVP first, then add features if time permits.

5. **Document As You Go**: Take screenshots and notes. You'll need them for the presentation.

6. **Take Breaks**: Short breaks improve productivity. Don't code for 12 hours straight.

7. **Have Fun**: The goal is to learn and network, not just to win.

## Conclusion

My first hackathon was challenging, exhausting, and absolutely worth it. It pushed me out of my comfort zone and taught me more about real-world development than months of solo projects.

If you're considering participating in a hackathon, stop thinking and just register. You won't regret it.

See you at the next hackathon! 🚀
    `
  }
];

export const experience = [];
