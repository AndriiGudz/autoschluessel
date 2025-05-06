export interface Review {
  name: string;
  date: string;
  rating: number;
  text: string;
}

export interface ReviewsSectionProps {
  title: string;
  lang: string;
  reviews?: Review[];
  buttonTexts?: {
    showMore: string;
    showLess: string;
  };
}
