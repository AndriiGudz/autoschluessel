export interface Feature {
  title: string;
  description: string;
  icon: string;
}

export interface WarumWirProps {
  title: string;
  lang: string;
  features?: Feature[];
}
