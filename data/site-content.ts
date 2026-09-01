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
  // The hero and the tablet play video by default. If a video fails to load
  // (blocked on the network, offline, etc.) each component falls back to its
  // poster still automatically — see components/sections/Hero.tsx,
  // components/BackgroundVideo.tsx and components/sections/EditorialFeature.tsx.
  // Set a flag to `false` to force the still image regardless of video status.
  media: {
    heroVideo: true,
    tabletVideo: true,
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
      src: "/images/hero.png",
      alt: "Brighton tote, bucket and hobo bags arranged on a terrace overlooking the Mediterranean coast",
      width: 1672,
      height: 941,
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
        alt: "Brighton black tote bag with a view of the Eiffel Tower from a Paris balcony",
        width: 1536,
        height: 1024,
        label: "Signature Tote",
        category: "Ready to Wear",
      },
      {
        src: "/images/featured-studio-edit.png",
        alt: "Brighton black BRTN shoulder bag resting on a marble pedestal",
        width: 896,
        height: 1195,
        label: "Shoulder Bag",
        category: "Signature Bags",
      },
      {
        src: "/images/featured-zip-sweatshirt.png",
        alt: "Brighton black bucket bag lit against a dark marble and gold studio backdrop",
        width: 1535,
        height: 1024,
        label: "Bucket Bag",
        category: "Signature Bags",
      },
    ] satisfies EditorialImage[],
  },
  editorialFeature: {
    heading: "In a Brighton State of Mind.",
    video: {
      src: "/videos/brighton-tablet.mp4",
      type: "video/mp4",
      webmSrc: "/videos/brighton-tablet.webm",
    },
    image: {
      src: "/images/editorial-wide.png",
      alt: "Brighton navy bucket bag aboard a yacht overlooking a marina",
      width: 1447,
      height: 1087,
    },
  },
  story: {
    eyebrow: "Our Story",
    title: "Designed for Everyday Elegance.",
    paragraphs: [
      "Inspired by the character of Brighton, England — a coastal city where heritage meets a restless creative energy — BRIGHTON brings a distinctly international perspective to modern style.",
      "The house designs handbags and ready-to-wear for everyday life: signature totes, bucket bags and shoulder bags, each balancing considered detail, confident form and an effortless sense of ease.",
      "It is fashion approached as an international language — global chic made to be worn on the most ordinary of days, anywhere in the world.",
    ],
    cta: "Continue Reading",
    ctaHref: "/about",
    image: {
      src: "/images/about-storefront.png",
      alt: "The BRIGHTON boutique storefront with a brass crown crest below the sign and handbags displayed in the window",
      width: 844,
      height: 1264,
    },
  },
  about: {
    mediaEyebrow: "A Closer Look",
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
      src: "/images/about-storefront.png",
      alt: "The BRIGHTON boutique storefront with a brass crown crest below the sign and handbags displayed in the window",
      width: 844,
      height: 1264,
    },
    landscapeImages: [
      {
        src: "/images/about-hero-shelf.png",
        alt: "Brighton black tote, bucket and shoulder bags displayed on a lit boutique shelf",
        width: 1535,
        height: 1024,
      },
      {
        src: "/images/about-sweatshirts.png",
        alt: "Brighton black bucket bag on a Mediterranean terrace table",
        width: 1448,
        height: 1086,
      },
    ],
    faqEyebrow: "Good to Know",
    faqTitle: "Frequently Asked Questions",
    faq: [
      {
        question: "Where is BRIGHTON from?",
        answer:
          "BRIGHTON is an international fashion house whose sensibility is rooted in the character of Brighton, England — a coastal city known for pairing heritage with a modern creative energy. The brand brings that outlook to designer handbags and ready-to-wear made for everyday life anywhere in the world.",
      },
      {
        question: "What does BRIGHTON make?",
        answer:
          "BRIGHTON designs handbags — signature totes, bucket bags, shoulder bags and crossbody styles — alongside a considered ready-to-wear and accessories offering. Every piece balances refined detail, confident form and an easy, wearable elegance.",
      },
      {
        question: "What does 'Wear the World' mean?",
        answer:
          "'Wear the World' is the BRIGHTON philosophy: style as an international language. It is an invitation to carry a sense of global chic into an ordinary day, wherever you are.",
      },
      {
        question: "Is BRIGHTON a luxury brand?",
        answer:
          "BRIGHTON is a premium fashion house. The focus is on quality materials, elevated design and the small details that define a luxury piece — not on logos or fast trends.",
      },
      {
        question: "How can I contact BRIGHTON?",
        answer:
          "For collaborations, retail and brand enquiries, write to hello@brighton-style.com or reach the brand on Instagram. New collections and stockists are announced through BRIGHTON's own channels.",
      },
    ],
    seo: {
      title: "About BRIGHTON — Global Chic, Every Day",
      description:
        "Discover the world of BRIGHTON — an international fashion house of designer handbags and ready-to-wear shaped by global design, refined details and everyday elegance.",
      keywords: [
        "about BRIGHTON",
        "BRIGHTON fashion brand",
        "luxury fashion house",
        "designer handbags brand",
        "international fashion",
        "brand story",
      ],
    },
  },
  gallery: {
    eyebrow: "Campaign",
    title: "The Campaign.",
    images: [
      {
        src: "/images/campaign-sweatshirts-paris.png",
        alt: "Brighton navy sweatshirts with a Paris view",
        width: 887,
        height: 1774,
      },
      {
        src: "/images/campaign-bucket-studio.png",
        alt: "Brighton navy bucket bag in a dark wood studio",
        width: 1193,
        height: 896,
      },
      {
        src: "/images/campaign-sweatshirts-pair.png",
        alt: "Brighton tote, bucket and hobo bags arranged on a terrace overlooking the Mediterranean coast",
        width: 1672,
        height: 941,
      },
      {
        src: "/images/campaign-zip-sweatshirt.png",
        alt: "Brighton navy bucket bag aboard a yacht overlooking a marina",
        width: 1447,
        height: 1087,
      },
      {
        src: "/images/campaign-shoulder-coast.png",
        alt: "Brighton black shoulder bag overlooking the Amalfi coast",
        width: 941,
        height: 1672,
      },
      {
        src: "/images/campaign-tote-brighton.jpg",
        alt: "Brighton Wonderful Day fragrance bottle on marble",
        width: 1574,
        height: 656,
      },
      {
        src: "/images/campaign-tote-paris.jpg",
        alt: "Brighton pink leather pouch with an embossed crown logo",
        width: 1574,
        height: 656,
      },
      {
        src: "/images/campaign-sunglasses.jpg",
        alt: "Brighton sunglasses in black and blush pink with crown hardware",
        width: 744,
        height: 656,
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
      { label: "Email", href: "mailto:hello@brighton-style.com" },
    ],
  },
  footer: {
    description:
      "BRIGHTON is an international fashion house of designer handbags and ready-to-wear — modern design, refined details and everyday elegance.",
    copyright: "BRIGHTON. All rights reserved.",
    backToTop: "Back to top",
  },
  seo: {
    title: "BRIGHTON — Wear the World",
    titleTemplate: "%s — BRIGHTON",
    description:
      "BRIGHTON is an international fashion house of designer handbags and ready-to-wear — totes, bucket and shoulder bags shaped by modern design and effortless everyday elegance.",
    keywords: [
      "BRIGHTON",
      "Brighton fashion",
      "Brighton fashion house",
      "Brighton Wear the World",
      "Brighton designer bags",
      "luxury fashion brand",
      "designer handbags",
      "luxury handbags",
      "designer tote bag",
      "bucket bag",
      "shoulder bag",
      "crossbody bag",
      "ready-to-wear",
      "international fashion house",
      "premium accessories",
      "wear the world",
      "בריטון",
      "בריטון אופנה",
      "מותג בריטון",
      "בריטון תיקים",
    ],
  },
} as const;
