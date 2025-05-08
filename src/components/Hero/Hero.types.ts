import type { bannerImages } from "./images";

export type BannerImagePaths = keyof typeof bannerImages;

export interface HeroProps {
  title: string;
  subtitle: string;
  buttonText: string;
  lang: string;
}

export interface HeroSlide {
  src: BannerImagePaths;
  alt: string;
}

export interface TranslationHero {
  title: string;
  subtitle: string;
  button: string;
  slides: Array<{
    src: BannerImagePaths;
    alt: string;
  }>;
}
