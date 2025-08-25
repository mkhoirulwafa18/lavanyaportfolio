export type FunFact = {
  image: string;
  description: string;
  number: number;
};

export const funFactList: FunFact[] = [
  {
    image: "/fun-fact-1.jpg",
    description: "Projects delivered with a focus on impactful brand stories.",
    number: 24,
  },
  {
    image: "/fun-fact-2.jpg",
    description: "Brands transformed through cohesive visual identities.",
    number: 18,
  },
  {
    image: "/fun-fact-3.jpg",
    description: "Design awards and nominations earned across campaigns.",
    number: 7,
  },
];

type Service = {
  title: string;
  description: string;
  keywords: string[];
  imageUrl: string;
  bgColor?: string;
  textColor?: string;
};

export const services: Service[] = [
  {
    title: "UGC",
    description:
      "I leverage authentic content created by users to build trust and engagement with your audience, enhancing brand credibility and reach.",
    keywords: [
      "Authenticity",
      "Engagement",
      "Trust",
      "Community Building",
      "Brand Advocacy",
      "Organic Reach",
    ],
    imageUrl: "/images/services/image-1.jpg",
    bgColor: "#FFBED6",
    textColor: "#4B0018"
  },
  {
    title: "Photography",
    description:
      "I capture high-quality images that tell your brand's story, evoke emotions, and create a lasting impression on your audience.",
    keywords: [
      "High-Quality Images",
      "Brand Storytelling",
      "Visual Appeal",
      "Emotional Connection",
      "Professional Photography",
      "Creative Direction",
    ],
    imageUrl: "/images/services/image-2.jpg",
    bgColor: "#BAD6DA",
    textColor: "#1A4A4A"
  },
  {
    title: "Short-Form Video",
    description:
      "I produce engaging short-form videos that capture attention quickly, convey your message effectively, and drive social media engagement.",
    keywords: [
      "Engaging Content",
      "Quick Attention",
      "Effective Messaging",
      "Social Media Engagement",
      "Video Production",
      "Creative Storytelling",
    ],
    imageUrl: "/images/services/image-3.jpg",
    bgColor: "#A5C572",
    textColor: "#3D7337"
  },
  {
    title: "Content Strategy",
    description:
      "I create social strategies to maximize reach, engagement, and conversions through data-driven insights and creative execution.",
    keywords: [
      "Research & Insights",
      "Purpose, Mission, Vision",
      "Value Propositions",
      "Brand Voice",
      "Verbal Identity",
      "Personality Traits",
    ],
    imageUrl: "/images/services/image-4.jpg",
    bgColor: "#f4e89b",
    textColor: "#EF4A74"
  },
];
