export type ProjectStatus = "Live" | "Active evolving project" | "Early Stage" | "Completed" | "Draft";

export interface Project {
  slug: string;
  title: string;
  url?: string;
  liveUrl?: string;
  github?: string;
  githubUrl?: string;
  previewImage?: string;
  description: string;
  longDescription?: string;
  type: string;
  category?: string;
  featured: boolean;
  status: ProjectStatus;
  tech: string[];
  
  // New Case Study fields
  year?: string;
  ownership?: string;
  role?: string;
  team?: string;
  impact?: string[];
  contribution?: string[];
  challenge?: string; // Short challenge for the card
  focus?: string; // Engineering focus for the featured card
  
  // Detailed Content Sections
  overview?: string;
  problem?: string;
  whyBuilt?: string;
  architecture?: string;
  decisions?: string;
  challenges?: string;
  future?: string;
}

export const projects: Project[] = [
  {
    slug: "t20-arena",
    title: "T20 Arena",
    liveUrl: "https://t20arena.online",
    previewImage: "/images/projects/t20arena.png",
    description: "Realtime multiplayer IPL auction simulator.",
    longDescription: "A realtime multiplayer auction simulator built to replicate the IPL auction experience.",
    type: "Realtime Multiplayer Auction System",
    category: "Realtime Systems",
    featured: true,
    status: "Live",
    year: "2026",
    ownership: "Independently built",
    role: "Full Stack Developer",
    challenge: "Maintaining consistent auction state between connected users.",
    focus: "Realtime sync, room recovery, and concurrent session handling.",
    tech: ["Next.js 15", "React 19", "Supabase Auth", "Supabase Realtime", "PostgreSQL", "Tailwind CSS"],
    impact: [
      "Tested with approximately 50 real users",
      "Highest observed concurrent session: ~13–15 users",
      "Server-authoritative bidding logic"
    ],
    overview: "T20 Arena is a realtime interactive web application designed to simulate cricket player auctions. It allows multiple users to join a room and bid concurrently on players in real-time.",
    problem: "Most simple auction simulators suffer from severe synchronization issues during concurrent bidding, leading to invalid states and a disjointed user experience.",
    whyBuilt: "I built this to practically understand realtime state synchronization. I needed to build a system capable of handling concurrent events reliably under pressure from actual users.",
    architecture: "The client uses React/Next.js and connects via WebSockets to Supabase Realtime. When a bid is placed, the client sends a request caught by a PostgreSQL RPC function. The database enforces the logic, updates the state atomically, and broadcasts the new state back to clients.",
    decisions: "I decided to push the core bidding logic down into PostgreSQL RPC functions rather than a Node.js server. This guarantees that all bids are processed atomically at the database level, preventing race conditions.",
    challenges: "Beyond the backend synchronization, building the frontend was a significant challenge. I had to iterate heavily on the auction interface to maintain a game-like feel while ensuring the complex UI adapted cleanly from small mobile screens up to large desktops.",
    future: "Currently focused on improving room recovery behavior and mobile performance."
  },
  {
    slug: "prompt2craft",
    title: "Prompt2Craft",
    liveUrl: "https://prompttocraft.vercel.app",
    previewImage: "/images/projects/prompt2craft.png",
    description: "AI-assisted presentation generation tool.",
    longDescription: "A full-stack product experiment focusing on AI generation and user control.",
    type: "AI Product Workflow",
    category: "AI Interfaces",
    featured: true,
    status: "Completed",
    year: "2026",
    ownership: "Independently built",
    role: "Full Stack Developer",
    challenge: "Designing an AI workflow that requires generating output and allowing user control before export.",
    focus: "AI UX, structured generation, third-party service integration.",
    tech: ["React", "Vite", "Tailwind CSS", "Spring Boot", "Grok API", "Unsplash API", "Supabase", "Vercel", "Render"],
    impact: [
      "End-to-end AI workflow",
      "Structured JSON generation from unstructured prompts",
      "Interactive, editable slide workspace"
    ],
    overview: "Prompt2Craft is an AI-powered presentation builder. Rather than a simple 'prompt-to-file' generator, it focuses on the workflow: generating structured content, fetching visuals, and providing an editable workspace before the final export.",
    problem: "Pure AI generation often produces results that are 'almost right' but unusable without modifications. Users need the speed of generation combined with the control of an editor.",
    whyBuilt: "I wanted to learn how to build product workflows that involve more than individual isolated features, specifically tackling the UX challenges of integrating generative AI with user-editable state.",
    architecture: "User Prompt → Java Spring Boot Backend → Grok API Processing → Structured JSON Generation → Unsplash Image Retrieval → Editable React Workspace → PPT Generation & Export.",
    decisions: "I separated the architecture into a React/Vite frontend (deployed on Vercel) and a robust Java Spring Boot backend (deployed on Render) to handle the complex orchestrations of third-party APIs (Grok, Unsplash) and structured data formatting.",
    challenges: "The most difficult part was the AI UX design. Ensuring the AI generated predictable, structured JSON that could map perfectly to a dynamic, editable React state required strict prompt engineering and data validation.",
    future: "Prepared the architecture for payment integration (Razorpay), mapping out the flows for potential monetization."
  },
  {
    slug: "talent-intelligence-ai",
    title: "Talent Intelligence AI",
    githubUrl: "https://github.com/tanmay75336/talent-intelligence-ai",
    description: "Offline candidate ranking system.",
    longDescription: "Built for the RedRob AI × Hack2skill India Runs Hackathon in the Intelligent Candidate Discovery track.",
    type: "Ranking / Data Intelligence",
    category: "Data Pipelines",
    featured: true,
    status: "Completed",
    year: "2026",
    ownership: "Team Project (RedRob AI Hackathon)",
    team: "2-member team (Sarth Patkar, Tanmay)",
    role: "Ranking Systems Engineer",
    challenge: "Building deterministic, evidence-based ranking without relying on arbitrary keyword search.",
    focus: "Ranking systems, data processing, deterministic algorithms.",
    tech: ["Python", "Data Processing", "Ranking Algorithms", "Information Retrieval"],
    impact: [
      "Official 100K candidate dataset processing",
      "1M synthetic candidate stress testing",
      "CPU-only deterministic ranking"
    ],
    contribution: [
      "Designed the evidence scoring logic to move beyond basic keyword matching.",
      "Implemented the offline evaluation pipeline.",
      "Analyzed candidate signals and calibrated the ranking system."
    ],
    overview: "An offline candidate ranking pipeline designed to evaluate resumes against job descriptions systematically. It finds actual evidence of skills rather than relying on standard keyword overlap.",
    problem: "Applicant tracking systems often filter out qualified candidates because they lack exact keyword matches, while prioritizing candidates who stuff their resumes with buzzwords.",
    whyBuilt: "The project was developed as a competitive entry for the Hack2skill India Runs Hackathon to explore deterministic approaches to candidate discovery.",
    architecture: "The system operates as an offline pipeline. It ingests candidate data, runs a multi-pass signal extraction process to find contextual evidence of skills, calculates a weighted score, and outputs a deterministic ranked list.",
    decisions: "We strictly opted for a CPU-only deterministic ranking approach instead of an LLM system. This decision was driven by the need for explainable, reproducible, and highly performant evaluations at scale.",
    challenges: "Calibrating the ranking weights was difficult. We had to ensure the system didn't over-index on isolated keywords and required supporting evidence (e.g., tenure, project context) to assign high scores.",
    future: "Potential improvements include exploring specialized embedding models for semantic matching while retaining the deterministic scoring formula."
  },
  {
    slug: "ipocraft",
    title: "IPOCraft",
    liveUrl: "https://ipocraft.com",
    previewImage: "/images/projects/ipocraft.png",
    description: "IPO information platform.",
    longDescription: "A platform providing structured IPO information with a foundation in product engineering.",
    type: "Data Platform",
    category: "Product Engineering",
    featured: true,
    status: "Active evolving project",
    year: "2026",
    ownership: "Independently built",
    role: "Full Stack Engineer",
    challenge: "Establishing a strong SEO foundation and managing full product lifecycle.",
    focus: "Data organization, Next.js architecture, deployment pipelines.",
    tech: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Supabase", "PostgreSQL"],
    impact: [
      "Live deployed platform",
      "SEO/GEO experimentation",
      "Full product lifecycle experience"
    ],
    overview: "IPOCraft is a web platform designed to aggregate, structure, and present Initial Public Offering (IPO) information.",
    problem: "Financial data is often presented in dense, difficult-to-read formats spread across multiple websites.",
    whyBuilt: "I wanted to experience the full lifecycle of product engineering—from database design to frontend UX, deployment, and ongoing optimization.",
    architecture: "Built on a modern stack: Next.js handles server-side rendering, while Supabase provides a managed PostgreSQL database for structured financial data storage.",
    decisions: "I prioritized Server-Side Rendering (SSR) and semantic HTML structure over heavy client-side interactivity to ensure search engines could easily index the data.",
    challenges: "Managing the deployment pipeline and debugging production issues related to data caching and Next.js Incremental Static Regeneration required deep dives into Next.js caching behaviors.",
    future: "Expanding the data pipeline to automate information retrieval and continuing to refine the SEO strategy."
  },
  {
    slug: "devicely",
    title: "Devicely",
    liveUrl: "https://devicely.vercel.app",
    previewImage: "/images/projects/devicely.png",
    description: "Developer-focused website testing utility.",
    longDescription: "A developer utility for analyzing website behavior and responsiveness.",
    type: "Developer Utility",
    category: "Tooling",
    featured: false,
    status: "Completed",
    year: "2026",
    ownership: "Independently built",
    role: "Backend Engineer",
    challenge: "Designing structured backend APIs to process requested URLs and return analytical data.",
    focus: "REST APIs, backend/frontend communication, layered architecture.",
    tech: ["HTML", "CSS", "Vanilla JavaScript", "Java", "Spring Boot", "Supabase", "REST API", "Vercel"],
    impact: [
      "Mobile & desktop responsiveness checks",
      "Structured performance and accessibility insights",
      "Clean separation of frontend and backend concerns"
    ],
    overview: "Devicely is a testing utility where developers can enter a URL to preview responsiveness and analyze website behavior across devices.",
    problem: "Developers frequently need quick utilities to run checks on their URLs without booting up heavy enterprise auditing suites.",
    whyBuilt: "I built Devicely to practice structured backend design and API development. It served as an exercise in cleanly separating a Vanilla JS frontend from a robust Java backend.",
    architecture: "URL Input → Vercel-hosted Frontend Request → Spring Boot REST API Processing → Supabase Integration → Structured Results Returned to UI.",
    decisions: "I chose Vanilla HTML/CSS/JS for the frontend to keep it extremely lightweight, placing all the complex processing logic into the layered Spring Boot backend architecture.",
    challenges: "Establishing clean, predictable REST API contracts between the frontend and the backend was the primary learning curve.",
    future: "Completed."
  },
  {
    slug: "meetsync",
    title: "MeetSync",
    liveUrl: "https://meetsync-frontend.vercel.app",
    description: "Meeting scheduling application.",
    type: "Web Application",
    featured: false,
    status: "Completed",
    year: "2025",
    tech: ["React", "Spring Boot", "PostgreSQL"]
  },
  {
    slug: "ai-shorts-generator",
    title: "AI Shorts Generator",
    description: "AI video processing pipeline.",
    type: "Media Processing",
    featured: false,
    status: "Completed",
    year: "2026",
    tech: ["Next.js", "FastAPI", "Python", "ffmpeg"]
  },
  {
    slug: "rupeexo",
    title: "Rupeexo",
    description: "Financial intelligence platform. Backend/data systems in progress.",
    type: "Fintech",
    featured: false,
    status: "Early Stage",
    year: "2026",
    tech: ["Backend Systems", "Data Engineering"]
  }
];
