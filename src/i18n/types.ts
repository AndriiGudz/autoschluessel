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
    icon: string;
  }[];
  faqItems: {
    question: string;
    answer: string;
  }[];
  reviews?: {
    name: string;
    date: string;
    rating: number;
    text: string;
  }[];
  buttons?: {
    showMore: string;
    showLess: string;
  };
  order: {
    title: string;
    brand: string;
    model: string;
    year: string;
    name: string;
    phone: string;
    submit: string;
    notRobotLabel: string;
    close: string;
    phonePattern: string;
  };
  successModal: {
    thankYou: string;
    contactYou: string;
    buttonText: string;
  };
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
