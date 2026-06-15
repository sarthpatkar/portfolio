export interface Note {
  slug: string;
  title: string;
  isDraft: boolean;
  date?: string;
  description?: string;
  explores?: string[];
  relatedProject?: string;
  theme?: string;
}

export const notes: Note[] = [
  {
    slug: "realtime-consistency-t20-arena",
    title: "Realtime auction state: what I learned building T20 Arena",
    isDraft: true,
    theme: "Realtime Systems",
    description:
      "How auction state gets corrupted when two users bid at the same millisecond — and why pushing bid logic into PostgreSQL RPC functions was the right call.",
    explores: [
      "Race conditions in concurrent bidding — two users clicking bid at the exact same time",
      "Why server-authoritative state beats optimistic UI for auction systems",
      "Supabase Realtime broadcast vs. PostgreSQL NOTIFY — when to use each",
      "Room recovery: what happens when the host disconnects mid-auction",
      "Mobile responsiveness in a game-like auction interface"
    ],
    relatedProject: "T20 Arena"
  },
  {
    slug: "ranking-beyond-keyword-search",
    title: "Building evidence-based candidate ranking",
    isDraft: true,
    theme: "Data Pipelines",
    description:
      "Standard ATS systems filter out qualified candidates who don't keyword-stuff. Here's the different approach we took — scoring contextual evidence instead of term frequency.",
    explores: [
      "Why keyword overlap is a poor ranking signal at scale",
      "Extracting contextual evidence from unstructured resume text with Python",
      "Designing a deterministic, explainable scoring formula",
      "CPU-only constraints and what they force you to prioritize",
      "Testing on 100K official dataset vs. 1M synthetic stress data"
    ],
    relatedProject: "Talent Intelligence AI"
  },
  {
    slug: "ipo-data-product-thinking",
    title: "IPOCraft: building for discoverability, not just data",
    isDraft: true,
    theme: "Product Engineering",
    description:
      "Dense financial data spread across poorly designed websites is a product problem, not just a data problem. What I learned designing for discoverability and SEO.",
    explores: [
      "Why SSR matters for financial data — search engines need to index it",
      "Structuring messy IPO data into clean, queryable Supabase schemas",
      "Next.js ISR caching tradeoffs: when stale-while-revalidate breaks live data",
      "Product thinking: what information do users actually need vs. what's available"
    ],
    relatedProject: "IPOCraft"
  },
  {
    slug: "java-spring-boot-observations",
    title: "Switching to Java Spring Boot from Node.js: what I noticed",
    isDraft: true,
    theme: "Backend Architecture",
    description:
      "Coming from TypeScript/Node.js, picking up Java Spring Boot for Devicely and Prompt2Craft surfaced interesting differences in how you think about API design.",
    explores: [
      "Layered architecture: why Controllers → Services → Repositories actually matters",
      "Typed request/response DTOs vs. ad-hoc JS objects — the difference shows at scale",
      "Dependency injection — strange at first, makes sense after you try to test without it",
      "Deploying a Spring Boot JAR to Render vs. a Next.js app to Vercel"
    ],
    relatedProject: "Devicely"
  },
  {
    slug: "ai-generation-vs-user-control",
    title: "AI generation without user control is just a demo",
    isDraft: true,
    theme: "AI Systems",
    description:
      "Prompt2Craft taught me that pure AI generation produces output that's 'almost right' but unusable. The interesting engineering challenge is in the editing layer.",
    explores: [
      "Structured JSON generation vs. freeform text — why you want the former from an LLM",
      "Prompt engineering to enforce schema-consistent output reliably",
      "Building editable React state over AI-generated content without losing structure",
      "Where the AI/human handoff should actually happen in a workflow product"
    ],
    relatedProject: "Prompt2Craft"
  }
];
