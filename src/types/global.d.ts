import type { TranslationSchema } from "../i18n/types";

declare global {
  interface Window {
    translations?: Record<string, TranslationSchema>;
    currentLang?: string;
    openOrderModal?: () => void;
  }
}

declare namespace astroHTML.JSX {
  interface HTMLAttributes {
    "define:vars"?: Record<string, any>;
  }
}

export {};
