export const shopConfig = {
  brand: {
    name: "Bu rch",
    shortName: "Buisness ",
    shortName2: "A",
    tagline: "LED Sign Boards & Complete Business Solutions",
    description:
      "Custom 3D acrylic LED glow signs, neon flex signs, architectural signage and commercial branding solutions from Business Arch.",
    logo: {
      alt: "Business Arch home",
      href: "/",
    },
  },

  contact: {
    email: "businessarchofficial@gmail.com",
    phone: "+919515498386",
    phoneDisplay: "+91 95154 98386",
    whatsappNumber: "+919515498386",
    whatsappDisplay: "91 95154 98386",
    address: {
      city: "Hyderabad",
      state: "Telangana",
      country: "India",
      full: "Masab Tank, Hyderabad, Telangana, India",
    },
    hours: "Business hours",
    timezone: "Asia/Kolkata",
  },

  social: {
    instagram: { url: "", label: "Instagram" },
    facebook: { url: "", label: "Facebook" },
    youtube: { url: "", label: "YouTube" },
    twitter: { url: "", label: "Twitter" },
    linkedin: { url: "", label: "LinkedIn" },
  },

  seo: {
    defaultTitle: "LED Sign Boards & 3D Signage | Business Arch",
    defaultDescription:
      "Custom 3D acrylic LED glow signs, neon flex signs and commercial signage solutions from Business Arch.",
    siteName: "Business Arch",
    ogImage: "/hero-poster.jpg",
    twitterHandle: "",
    themeColor: "#0A0A0B",
  },

  legal: {
    companyName: "Business Arch Pvtl",
    copyrightYear: new Date().getFullYear(),
    privacyPolicyUrl: "/privacy",
    termsOfServiceUrl: "/terms",
    shippingPolicyUrl: "/faq#shipping",
    returnsPolicyUrl: "/faq#returns",
    warrantyUrl: "/faq#warranty",
  },

  navigation: {
    quickLinks: [
      { label: "Shop all designs", href: "/shop" },
      { label: "Design your own", href: "/customize" },
      { label: "How it works", href: "/how-it-works" },
      { label: "Reviews", href: "/reviews" },
      { label: "FAQ", href: "/faq" },
      { label: "Cart", href: "/cart" },
    ],
    footerCategories: "from-data",
  },

  features: {
    freeShippingThreshold: 5000,
    warrantyMonths: 12,
    productionDays: "3–7 days fabrication",
    demoMode: true,
  },

  whatsapp: {
    defaultMessage:
      "Hi Business Arch! I need help with a custom LED neon sign.",
    customizerMessage: (summary: string, price: string) =>
      `Hi Business Arch! I need help designing this sign:\n${summary}\nEstimated: ${price}`,
    productMessage: (productName: string, colour: string, size: string) =>
      `Hi Business Arch! I like the "${productName}" design (${colour}, ${size}). Can you help me customise it?`,
    reviewMessage:
      "Hi Business Arch! I'd love to share a photo/review of my sign.",
  },

  payments: {
    methods: {
      UPI: "UPI (Demo)",
      Card: "Credit / Debit Card (Demo)",
      "Net Banking": "Net Banking (Demo)",
      COD: "Cash on Delivery (Demo)",
    },
    codAvailable: true,
    upiId: "",
  },

  currency: {
    code: "INR",
    symbol: "₹",
    locale: "en-IN",
  },

  theme: {
    primaryColor: "#FF3EA5",
    secondaryColor: "#0A0A0B",
    accentColor: "#FF6CBC",
  },
} as const;

export type ShopConfig = typeof shopConfig;

export function getShopConfig() {
  return shopConfig;
}

export function formatINR(n: number): string {
  return "₹" + Math.round(n).toLocaleString("en-IN");
}

export function whatsappLink(message: string): string {
  return `https://wa.me/${shopConfig.contact.whatsappNumber}?text=${encodeURIComponent(message)}`;
}

export function getCurrentYear(): number {
  return new Date().getFullYear();
}