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
  ownership?: string;
  role?: string;
  team?: string;
  impact?: string[];
  contribution?: string[];
  challenge?: string; // Short challenge for the card
  
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
    description: "IPL-style realtime multiplayer auction simulator.",
    longDescription: "A realtime multiplayer auction simulator built to replicate the high-stakes IPL auction experience.",
    type: "Realtime Multiplayer Auction System",
    category: "Realtime Systems",
    featured: true,
    status: "Live",
    ownership: "Independently built",
    role: "Full Stack Developer",
    challenge: "Maintaining auction consistency between multiple users.",
    tech: ["Next.js 15", "React 19", "Supabase Auth", "Supabase Realtime", "PostgreSQL", "SQL RPC", "Tailwind CSS"],
    impact: [
      "Tested with approximately 50 real users",
      "Realtime multiplayer auction flow",
      "Server-authoritative bidding logic"
    ],
    overview: "T20 Arena is a realtime multiplayer web application designed to simulate cricket player auctions. It allows multiple users to join a room and bid concurrently on players in real-time.",
    problem: "Most auction simulators are turn-based or suffer from severe synchronization issues during high-frequency concurrent bidding, leading to invalid states and poor user experience.",
    whyBuilt: "I wanted to understand the complexities of realtime state synchronization and build a system capable of handling concurrent events reliably under pressure.",
    architecture: "The client uses React/Next.js and connects via WebSockets to Supabase Realtime. When a bid is placed, the client sends a request which is caught by a PostgreSQL RPC function. The database enforces the logic, validates the bid, updates the state atomically, and broadcasts the new state back to all connected clients.",
    decisions: "I chose to push the core bidding logic into PostgreSQL RPC functions rather than keeping it in a Node.js server. This guarantees that all bids are processed atomically at the database level, preventing race conditions when multiple users bid simultaneously.",
    challenges: "The primary challenge was preventing inconsistent auction states during concurrent bidding. Handling network latency differences between users required implementing server-authoritative decisions where the database acts as the single source of truth.",
    future: "Focusing on adding robust admin controls and exploring horizontal scaling for the websocket connections to support larger independent room instances."
  },
  {
    slug: "talent-intelligence-ai",
    title: "Talent Intelligence AI",
    githubUrl: "https://github.com/tanmay75336/talent-intelligence-ai",
    description: "Offline candidate ranking system focused on evidence-based evaluation instead of simple keyword matching.",
    longDescription: "Built for the RedRob AI × Hack2skill India Runs Hackathon in the Intelligent Candidate Discovery track.",
    type: "Ranking / Data Intelligence",
    category: "AI Engineering",
    featured: true,
    status: "Completed",
    ownership: "Team Project (RedRob AI Hackathon)",
    team: "2-member team (Sarth Patkar, Tanmay)",
    role: "Ranking Systems Engineer",
    challenge: "Building deterministic, evidence-based ranking without relying on arbitrary keyword search.",
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
    overview: "An offline candidate ranking pipeline designed to evaluate resumes against job descriptions systematically. It focuses on finding actual evidence of skills rather than relying on standard keyword overlap.",
    problem: "Traditional applicant tracking systems (ATS) often filter out highly qualified candidates simply because they lack exact keyword matches, while prioritizing candidates who artificially stuff their resumes with buzzwords.",
    whyBuilt: "The project was developed as a competitive entry for the Hack2skill India Runs Hackathon to explore alternative, deterministic approaches to candidate discovery.",
    architecture: "The system operates as an offline pipeline. It ingests candidate data and job descriptions, runs a multi-pass signal extraction process to find contextual evidence of skills, calculates a weighted score based on these signals, and outputs a deterministic ranked list.",
    decisions: "We strictly opted for a CPU-only deterministic ranking approach instead of a generative LLM system. This decision was driven by the need for explainable, reproducible, and highly performant evaluations at scale (processing 100K+ records efficiently).",
    challenges: "Calibrating the ranking weights was difficult. We had to ensure the system didn't over-index on isolated keywords and actually required supporting evidence (e.g., tenure, project context) to assign high scores.",
    future: "Potential improvements include exploring specialized embedding models for semantic matching while retaining the deterministic scoring formula."
  },
  {
    slug: "ipocraft",
    title: "IPOCraft",
    liveUrl: "https://ipocraft.com",
    previewImage: "/images/projects/ipocraft.png",
    description: "IPO information and investor education platform.",
    longDescription: "A platform focused on providing structured IPO information with a strong foundation in product engineering and content delivery.",
    type: "IPO information platform",
    category: "Product Engineering",
    featured: true,
    status: "Active evolving project",
    ownership: "Independently built",
    role: "Full Stack Engineer",
    challenge: "Establishing a strong SEO foundation and managing full product lifecycle.",
    tech: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Supabase", "PostgreSQL"],
    impact: [
      "Live deployed platform",
      "SEO/GEO experimentation",
      "Full product lifecycle experience"
    ],
    overview: "IPOCraft is a web platform designed to aggregate, structure, and present Initial Public Offering (IPO) information for retail investors.",
    problem: "Financial data is often presented in dense, difficult-to-read formats spread across multiple archaic websites, making it hard for retail investors to track upcoming IPOs effectively.",
    whyBuilt: "I wanted to experience the full lifecycle of product engineering—from database design to frontend UX, deployment, and ongoing SEO optimization.",
    architecture: "Built on a standard modern stack: Next.js handles server-side rendering for optimal SEO, while Supabase provides a managed PostgreSQL database for structured financial data storage and admin workflows.",
    decisions: "I prioritized Server-Side Rendering (SSR) and semantic HTML structure over heavy client-side interactivity to ensure search engines could easily index the financial data, laying the groundwork for Generative Engine Optimization (GEO).",
    challenges: "Managing the deployment pipeline and debugging production issues related to data caching and Next.js ISR (Incremental Static Regeneration) required deep dives into Next.js caching behaviors.",
    future: "Expanding the data pipeline to automate information retrieval and continuing to refine the SEO strategy based on search performance."
  },
  {
    slug: "prompt2craft",
    title: "Prompt2Craft",
    liveUrl: "https://prompttocraft.vercel.app",
    previewImage: "/images/projects/prompt2craft.png",
    description: "AI presentation generator.",
    type: "AI prompt engineering tool",
    featured: false,
    status: "Completed",
    tech: ["React", "Spring Boot", "AI APIs", "Supabase", "Razorpay"]
  },
  {
    slug: "devicely",
    title: "Devicely",
    liveUrl: "https://devicely.vercel.app",
    previewImage: "/images/projects/devicely.png",
    description: "Responsive testing and audit platform.",
    type: "Developer productivity project",
    featured: false,
    status: "Completed",
    tech: ["React", "CSS"]
  },
  {
    slug: "meetsync",
    title: "MeetSync",
    liveUrl: "https://meetsync-frontend.vercel.app",
    description: "Meeting scheduling application.",
    type: "Meeting scheduling application",
    featured: false,
    status: "Completed",
    tech: ["React", "Spring Boot", "PostgreSQL"]
  },
  {
    slug: "ai-shorts-generator",
    title: "AI Shorts Generator",
    description: "AI video processing pipeline.",
    type: "Media Processing",
    featured: false,
    status: "Completed",
    tech: ["Next.js", "FastAPI", "Python", "ffmpeg"]
  },
  {
    slug: "rupeexo",
    title: "Rupeexo",
    description: "Financial intelligence platform. Backend/data systems in progress.",
    type: "Fintech",
    featured: false,
    status: "Early Stage",
    tech: ["Backend Systems", "Data Engineering"]
  }
];
