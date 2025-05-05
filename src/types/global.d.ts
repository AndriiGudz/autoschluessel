import type { TranslationSchema } from "../i18n/types";

// Расширяем глобальный интерфейс Window
declare global {
  interface Window {
    translations?: Record<string, TranslationSchema>;
    currentLang?: string;
    openOrderModal?: () => void;
  }
}

// Дополнительные глобальные типы для проекта
declare namespace astroHTML.JSX {
  interface HTMLAttributes {
    "define:vars"?: Record<string, any>;
  }
}

export {};
