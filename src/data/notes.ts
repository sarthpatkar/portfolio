export interface Note {
  slug: string;
  title: string;
  isDraft: boolean;
  date?: string;
  description?: string;
  explores?: string[];
  relatedProject?: string;
}

export const notes: Note[] = [
  {
    slug: "realtime-consistency-t20-arena",
    title: "How T20 Arena handles realtime auction consistency",
    isDraft: true,
    explores: [
      "server-controlled state",
      "concurrent bidding",
      "realtime synchronization"
    ],
    relatedProject: "T20 Arena"
  },
  {
    slug: "ranking-beyond-keyword-search",
    title: "Building evidence-based candidate ranking beyond keyword search",
    isDraft: true,
    explores: [
      "ranking systems",
      "information retrieval",
      "scoring calibration"
    ],
    relatedProject: "Talent Intelligence AI"
  },
  {
    slug: "building-ipocraft-discovery",
    title: "Building IPOCraft for discovery",
    isDraft: true,
    explores: [
      "structured data",
      "performance",
      "product engineering"
    ],
    relatedProject: "IPOCraft"
  }
];
