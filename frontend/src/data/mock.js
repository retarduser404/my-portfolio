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
  frontend: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Vite"],
  backend: ["Node.js", "Express", "MongoDB", "PostgreSQL", "FastAPI"],
  web3: ["Solidity", "Ethers.js", "Hardhat", "IPFS", "Web3.js"],
  tools: ["Git", "Docker", "AWS", "Vercel", "GitHub Actions"]
};

export const projects = [
  {
    id: 1,
    title: "Decentralized Voting System",
    description: "A blockchain-based voting platform ensuring transparent and tamper-proof elections. Built with Solidity smart contracts and React frontend.",
    featured: true,
    tech: ["Solidity", "Ethers.js", "React", "Hardhat", "IPFS"],
    github: "https://github.com/alexjohnson/decentralized-voting",
    demo: "https://voting-dapp-demo.vercel.app"
  },
  {
    id: 2,
    title: "AI Study Assistant",
    description: "Chrome extension that helps students learn better with AI-powered summaries, flashcards, and quiz generation from any webpage.",
    featured: true,
    tech: ["React", "OpenAI API", "Chrome Extension API", "TypeScript"],
    github: "https://github.com/alexjohnson/ai-study-assistant",
    demo: "https://chrome.google.com/webstore"
  },
  {
    id: 3,
    title: "Task Management App",
    description: "Full-stack MERN application with real-time updates, drag-and-drop functionality, and team collaboration features.",
    featured: true,
    tech: ["MongoDB", "Express", "React", "Node.js", "Socket.io"],
    github: "https://github.com/alexjohnson/task-manager",
    demo: "https://taskmanager-demo.vercel.app"
  },
  {
    id: 4,
    title: "Weather Dashboard",
    description: "Real-time weather application with 7-day forecasts, interactive maps, and location-based weather alerts.",
    featured: false,
    tech: ["React", "OpenWeather API", "Tailwind CSS", "Chart.js"],
    github: "https://github.com/alexjohnson/weather-dashboard",
    demo: "https://weather-dash-demo.vercel.app"
  },
  {
    id: 5,
    title: "E-commerce Product Page",
    description: "Modern product showcase with image galleries, cart functionality, and responsive design patterns.",
    featured: false,
    tech: ["Next.js", "Stripe", "Prisma", "PostgreSQL"],
    github: "https://github.com/alexjohnson/ecommerce-page",
    demo: "https://ecommerce-demo.vercel.app"
  },
  {
    id: 6,
    title: "Portfolio Website",
    description: "Personal portfolio built with modern web technologies, featuring dark mode, animations, and a blog section.",
    featured: false,
    tech: ["React", "Tailwind CSS", "FastAPI", "MongoDB"],
    github: "https://github.com/alexjohnson/portfolio",
    demo: "https://alexjohnson.dev"
  }
];

export const blogPosts = [
  {
    id: 1,
    slug: "building-my-first-dapp",
    title: "Building My First DApp: Lessons Learned",
    date: "March 15, 2024",
    readTime: "8 min read",
    excerpt: "My journey into Web3 development and the challenges I faced while building a decentralized voting system.",
    tags: ["Web3", "Solidity", "React"],
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

export const experience = [
  {
    id: 1,
    year: "2024 - Present",
    title: "Freelance Web Developer",
    description: "Building custom web applications for clients, specializing in React frontends and Node.js backends. Delivered 10+ projects including e-commerce sites, landing pages, and SaaS applications."
  },
  {
    id: 2,
    year: "2023 - 2027",
    title: "B.Tech in Computer Science",
    description: "Currently pursuing Bachelor of Technology degree with focus on Software Engineering, Data Structures, Algorithms, and Web Technologies. Maintaining a strong academic record while building real-world projects."
  },
  {
    id: 3,
    year: "2023",
    title: "First Hackathon Win",
    description: "Participated in my first 48-hour hackathon and secured 3rd place with EcoTrack, a carbon footprint tracking application. Learned rapid prototyping, team collaboration, and working under pressure."
  }
];
