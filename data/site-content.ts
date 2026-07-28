export type EditorialImage = {
  src: string;
  alt: string;
  width: number;
  height: number;
  label?: string;
  category?: string;
};

export const siteContent = {
  brand: {
    name: "BRIGHTON",
  },
  navigation: [
    { label: "Story", href: "#story" },
    { label: "Collection", href: "#collection" },
    { label: "Campaign", href: "#campaign" },
    { label: "Contact", href: "#contact" },
  ],
  hero: {
    tagline: "Wear the World.",
    cta: "Discover Collection",
    videoPlaybackRate: 0.78,
    videos: [
      {
        src: "/videos/brighton-hero-primary.mp4",
        type: "video/mp4",
      },
      {
        src: "/videos/brighton-hero.mp4",
        type: "video/mp4",
      },
    ],
    image: {
      src: "/images/hero.svg",
      alt: "A monochrome editorial fashion silhouette",
      width: 1920,
      height: 1200,
    },
  },
  collection: {
    eyebrow: "Featured Collection",
    title: "Timeless Pieces.",
    intro:
      "A curated selection designed for everyday sophistication.",
    items: [
      {
        src: "/images/featured-tote-bag.png",
        alt: "Black Brighton tote bag in a dark editorial setting",
        width: 1024,
        height: 576,
        label: "Black Tote Bag",
        category: "Signature Bags",
      },
      {
        src: "/images/featured-shoulder-bag.png",
        alt: "Black Brighton shoulder bag displayed on marble",
        width: 768,
        height: 1024,
        label: "Shoulder Bag",
        category: "Everyday Icons",
      },
      {
        src: "/images/featured-sweatshirt.png",
        alt: "Navy Brighton signature sweatshirt in a luxury interior",
        width: 1024,
        height: 683,
        label: "Signature Sweatshirt",
        category: "Ready to Wear",
      },
    ] satisfies EditorialImage[],
  },
  editorialFeature: {
    heading: "In a Brighton State of Mind.",
    video: {
      src: "/videos/brighton-tablet.mp4",
      type: "video/mp4",
    },
    image: {
      src: "/images/editorial-wide.svg",
      alt: "Brighton fashion campaign",
      width: 1920,
      height: 1200,
    },
  },
  story: {
    eyebrow: "Our Story",
    title: "Designed for Everyday Elegance.",
    paragraphs: [
      "Inspired by the character of Brighton, England, BRIGHTON brings a distinctly international perspective to modern style.",
      "Each piece balances considered detail, confident form and an effortless sense of ease.",
    ],
    image: {
      src: "/images/brighton-store.png",
      alt: "The Brighton fashion store exterior",
      width: 683,
      height: 1024,
    },
  },
  gallery: {
    eyebrow: "Campaign",
    title: "The Campaign.",
    images: [
      {
        src: "/images/featured-sweatshirt.png",
        alt: "Brighton signature sweatshirt campaign",
        width: 1024,
        height: 683,
      },
      {
        src: "/images/featured-shoulder-bag.png",
        alt: "Brighton shoulder bag campaign",
        width: 768,
        height: 1024,
      },
      {
        src: "/images/featured-tote-bag.png",
        alt: "Black Brighton tote bag campaign",
        width: 1024,
        height: 576,
      },
      {
        src: "/images/campaign-crossbody.png",
        alt: "Brighton crossbody bag campaign",
        width: 768,
        height: 1024,
      },
      {
        src: "/images/campaign-bucket-bag.png",
        alt: "Brighton bucket bag campaign",
        width: 1024,
        height: 576,
      },
      {
        src: "/images/campaign-tote-light.png",
        alt: "Brighton tote bag in a light coastal interior",
        width: 768,
        height: 1024,
      },
    ] satisfies EditorialImage[],
  },
  statement: {
    text: "Fashion is an international language.",
    signature: "BRIGHTON / ENGLAND",
  },
  contact: {
    eyebrow: "Contact",
    title: "Enquiries",
    intro: "For collaborations, retail and brand enquiries.",
    fields: {
      name: "Name",
      email: "Email",
      message: "Message",
    },
    validation: {
      nameRequired: "Please enter your name.",
      emailRequired: "Please enter your email.",
      emailInvalid: "Please enter a valid email address.",
      messageRequired: "Please enter a message.",
    },
    submit: "Send Enquiry",
    success: "Thank you. Your message is ready to be sent.",
    socialLinks: [
      { label: "Instagram", href: "https://instagram.com/" },
      { label: "Email", href: "mailto:hello@brighton-fashion.com" },
    ],
  },
  footer: {
    copyright: "BRIGHTON. All rights reserved.",
    backToTop: "Back to top",
  },
  seo: {
    title: "BRIGHTON — Wear the World",
    description:
      "BRIGHTON is an international fashion brand shaped by modern design, refined details and effortless elegance.",
  },
} as const;
