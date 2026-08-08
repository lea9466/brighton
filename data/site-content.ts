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
    { label: "About", href: "/about" },
    { label: "Story", href: "/#story" },
    { label: "Collection", href: "/#collection" },
    { label: "Campaign", href: "/#campaign" },
    { label: "Contact", href: "/#contact" },
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
        src: "/images/featured-shoulder-bag.png",
        alt: "Black Brighton BRTN shoulder bag in a dark wood studio",
        width: 1024,
        height: 576,
        label: "Shoulder Bag",
        category: "Signature Bags",
      },
      {
        src: "/images/featured-studio-edit.png",
        alt: "Brighton navy sweatshirts and black bags arranged in a dark wood boutique interior",
        width: 530,
        height: 1024,
        label: "Studio Edit",
        category: "Signature Capsule",
      },
      {
        src: "/images/featured-zip-sweatshirt.png",
        alt: "Brighton black zip sweatshirt hanging in a boutique interior",
        width: 1024,
        height: 576,
        label: "Zip Sweatshirt",
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
    cta: "Continue Reading",
    ctaHref: "/about",
    image: {
      src: "/images/brighton-store.png",
      alt: "The Brighton fashion store exterior",
      width: 683,
      height: 1024,
    },
  },
  about: {
    eyebrow: "About BRIGHTON",
    title: "BRIGHTON – Global Chic, Every Day",
    intro:
      "Welcome to the world of BRIGHTON. Our brand was born in the heart of international fashion capitals, driven by a passion for creating a design language that transcends borders. BRIGHTON is much more than just a fashion brand – it is a status symbol for those who understand fashion, for those who choose to radiate confidence in every step, and for those who know that true style is an international language.",
    sections: [
      {
        title: "International Design, Personal Style",
        body: "BRIGHTON designs are inspired by the hottest trends from global fashion hubs, with an uncompromising commitment to quality and the small details that make a massive difference. We believe that fashion is a bridge between cultures – from the meticulous design of our bags to the tailored cuts of our apparel, every piece we create is designed to provide you with a luxurious, modern, and polished look.",
      },
      {
        title: "You – In BRIGHTON Style",
        body: "Those who wear BRIGHTON don’t need to try too hard. They lead the style, they carry an international air of success, and they know that choosing our brand is a clear fashion statement. From women full of inspiration to the girls and teens growing up with a love for fashion – our brand gives everyone the opportunity to feel like they are on a global runway, even on the simplest of days.",
      },
      {
        title: "A Wonderful Day – Anywhere in the World",
        body: "Our logo, adorned with a crown, is the mark of those who know who they are and what they deserve. With BRIGHTON, you aren’t just wearing a garment or carrying a bag – you are wrapping yourself in the energy of a wonderful day, anywhere on the globe.",
      },
    ],
    closing: "BRIGHTON. Wear the World.",
    portraitImage: {
      src: "/images/brighton-store.png",
      alt: "The Brighton fashion store exterior",
      width: 683,
      height: 1024,
    },
    landscapeImages: [
      {
        src: "/images/about-hero-shelf.png",
        alt: "Brighton black tote, bucket and shoulder bags displayed on a lit boutique shelf",
        width: 1024,
        height: 683,
      },
      {
        src: "/images/about-sweatshirts.png",
        alt: "Brighton navy signature sweatshirts hanging in the boutique",
        width: 1024,
        height: 576,
      },
    ],
    seo: {
      title: "About BRIGHTON — Global Chic, Every Day",
      description:
        "Discover the world of BRIGHTON — an international fashion brand shaped by global design, refined details and everyday elegance.",
    },
  },
  gallery: {
    eyebrow: "Campaign",
    title: "The Campaign.",
    images: [
      {
        src: "/images/campaign-sweatshirts-paris.png",
        alt: "Brighton navy sweatshirts with a Paris view",
        width: 512,
        height: 1024,
      },
      {
        src: "/images/campaign-bucket-studio.png",
        alt: "Brighton navy bucket bag in a dark wood studio",
        width: 1024,
        height: 769,
      },
      {
        src: "/images/campaign-sweatshirts-pair.png",
        alt: "Brighton navy sweatshirts hanging in a boutique interior",
        width: 1024,
        height: 576,
      },
      {
        src: "/images/campaign-zip-sweatshirt.png",
        alt: "Brighton black zip sweatshirt hanging in a boutique interior",
        width: 1024,
        height: 576,
      },
      {
        src: "/images/campaign-shoulder-coast.png",
        alt: "Brighton black shoulder bag overlooking the Amalfi coast",
        width: 576,
        height: 1024,
      },
      {
        src: "/images/campaign-tote-brighton.png",
        alt: "Brighton black tote bag with colorful brand lettering",
        width: 681,
        height: 1024,
      },
      {
        src: "/images/campaign-tote-paris.png",
        alt: "Brighton black tote bag with a Paris morning view",
        width: 1024,
        height: 682,
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
