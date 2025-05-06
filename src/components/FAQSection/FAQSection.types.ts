export interface FAQItem {
  question: string;
  answer: string;
}

export interface FAQSectionProps {
  title: string;
  lang: string;
  items?: FAQItem[];
}
