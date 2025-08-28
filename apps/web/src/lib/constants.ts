export type FunFact = {
  image: string;
  description: string;
  number: number;
};

export const funFactList: FunFact[] = [
  {
    image: "/funfacts/fun-fact-1.jpg",
    description: "Projects delivered with a focus on impactful brand stories.",
    number: 24,
  },
  {
    image: "/funfacts/fun-fact-2.jpg",
    description: "Brands transformed through cohesive visual identities.",
    number: 18,
  },
  {
    image: "/funfacts/fun-fact-3.jpg",
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
    title: "Frontend Development",
    description:
      "I build responsive, accessible web applications using modern frameworks and best practices to create seamless user experiences across all devices.",
    keywords: [
      "React",
      "TypeScript",
      "Next.js",
      "Responsive Design",
      "Web Performance",
      "Cross-Browser Compatibility"
    ],
    imageUrl: "/images/services/image-1.jpg",
    bgColor: "#FFBED6",
    textColor: "#4B0018"
  },
  {
    title: "UI Implementation",
    description:
      "I transform design mockups into functional, pixel-perfect interfaces while maintaining design consistency and ensuring smooth user interactions.",
    keywords: [
      "HTML/CSS",
      "CSS-in-JS",
      "Figma to Code",
      "Pixel-Perfect",
      "Design Systems",
      "Component Libraries"
    ],
    imageUrl: "/images/services/image-2.jpg",
    bgColor: "#BAD6DA",
    textColor: "#1A4A4A"
  },
  {
    title: "Interactive Experiences",
    description:
      "I create engaging user interactions and animations that enhance usability and provide meaningful feedback through intuitive micro-interactions.",
    keywords: [
      "Animations",
      "User Interactions",
      "Framer Motion",
      "Micro-Interactions",
      "WebGL",
      "Canvas API"
    ],
    imageUrl: "/images/services/image-3.jpg",
    bgColor: "#A5C572",
    textColor: "#3D7337"
  },
  {
    title: "Technical Optimization",
    description:
      "I optimize web applications for performance, accessibility and SEO while maintaining clean code architecture and development best practices.",
    keywords: [
      "Performance Optimization",
      "Core Web Vitals",
      "Accessibility (a11y)",
      "SEO",
      "Code Review",
      "Technical Documentation"
    ],
    imageUrl: "/images/services/image-4.jpg",
    bgColor: "#f4e89b",
    textColor: "#EF4A74"
  },
];

type SocialLink = {
  title: string;
  url: string;
  videoUrl: string;
};

export const socialLinks: SocialLink[] = [
  {
    title: "Instagram",
    url: "https://www.instagram.com/jazziwong_/",
    videoUrl: "videos/instagram.webm",
  },
  {
    title: "YouTube",
    url: "https://www.youtube.com/@jazziwong",
    videoUrl: "videos/youtube.webm",
  },
  {
    title: "Unsplash",
    url: "https://unsplash.com/@jazziwong",
    videoUrl: "videos/unsplash.webm",
  },
  {
    title: "TikTok",
    url: "https://www.tiktok.com/@jazziwong",
    videoUrl: "videos/tiktok.webm",
  },
];

export const serviceOptions = [
  "Frontend Development",
  "UI Implementation",
  "Interactive Experiences",
  "Technical Optimization",
  "Website Audit",
  "Consultation",
  "Other",
];

export const budgetOptions = ["Under $500", "$500-$1k", "$1k-$2.5k", "$2.5k-$5k", "$5k+"];
