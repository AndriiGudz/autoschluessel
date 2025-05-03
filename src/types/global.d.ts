// Расширяем глобальный интерфейс Window
interface Window {
  openOrderModal: () => void;
}

// Дополнительные глобальные типы для проекта
declare namespace astroHTML.JSX {
  interface HTMLAttributes {
    "define:vars"?: Record<string, any>;
  }
}
