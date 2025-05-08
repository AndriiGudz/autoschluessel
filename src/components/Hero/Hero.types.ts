import type { languages } from "../../i18n/config";

type LanguageKey = keyof typeof languages;

export interface HeroProps {
  title: string;
  subtitle: string;
  buttonText: string;
  lang: LanguageKey;
}

export interface HeroSlide {
  src: string;
  alt: string;
}
