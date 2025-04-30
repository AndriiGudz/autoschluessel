export interface TranslationSchema {
  title: string;
  hero: {
    title: string;
    subtitle: string;
    button: string;
  };
  nav: {
    howItWorks: string;
    whyUs: string;
    reviews: string;
    faq: string;
    contacts: string;
    order: string;
  };
  sections: {
    service: string;
    howItWorks: string;
    whyUs: string;
    faq: string;
    reviews: string;
  };
  services: string[];
  features: {
    title: string;
    description: string;
  }[];
  faqItems: {
    question: string;
    answer: string;
  }[];
  cta: {
    order: string;
    feedback: string;
  };
  footer: {
    contacts: string;
    contactUs: string;
    workingHours: string;
    followUs: string;
    copyright: string;
    developer: string;
  };
}
