export type StackItem = {
  name: string;
  use: string;
  context: string;
};

export const stack: Record<string, StackItem[]> = {
  "Core & Backend": [
    { name: "PostgreSQL", use: "Relational data", context: "Used across projects to store structured data and enforce server-authoritative logic via Supabase." },
    { name: "MySQL", use: "Relational data", context: "Primary relational database used for scalable data storage in Spring Boot architectures." },
    { name: "Java Spring Boot", use: "REST API architecture", context: "Used to build layered, structured backend services for Devicely and Prompt2Craft." },
    { name: "Python", use: "Data processing pipelines", context: "Used in Talent Intelligence AI to execute deterministic candidate ranking algorithms." },
    { name: "Node.js / TypeScript", use: "Full-stack integration", context: "Primary language for connecting modern frontend frameworks with external APIs and databases." }
  ],
  "Frontend & Architecture": [
    { name: "React", use: "Interactive client interfaces", context: "Powering highly interactive experiences like the T20 auction room and Prompt2Craft's editable workspace." },
    { name: "Next.js (App Router)", use: "Server-side rendering & routing", context: "Utilized in IPOCraft and T20 Arena for fast initial loads and strong SEO foundation." },
    { name: "Tailwind CSS", use: "Systematic utility styling", context: "Used to design custom, responsive UI components without relying on pre-built templates." }
  ],
  "Infrastructure & External APIs": [
    { name: "Supabase", use: "Managed Database & Realtime", context: "Provides PostgreSQL hosting across projects and WebSocket connections for T20 Arena synchronization." },
    { name: "Vercel / Render", use: "Deployment & Hosting", context: "Vercel hosts frontend applications; Render hosts backend Spring Boot services." },
    { name: "AI & Media APIs", use: "Third-party integration", context: "Integrating Grok API for AI generation and Unsplash API for media retrieval in Prompt2Craft." }
  ]
};
