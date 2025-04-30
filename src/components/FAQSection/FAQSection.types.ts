export interface FAQItem {
  question: string;
  answer: string;
}

export interface FAQSectionProps {
  title: string;
  lang: string;
  items?: FAQItem[]; // Опциональный параметр для внешних данных FAQ
}
