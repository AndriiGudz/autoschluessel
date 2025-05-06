// Определяем глобальный интерфейс для функций модальных окон
declare global {
  interface Window {
    openOrderModal?: () => void;
    openSuccessModal?: () => void;
  }
}

// Типы для модальных окон
export interface ModalProps {
  lang: string;
}

export interface OrderFormData {
  carBrand: string;
  carModel: string;
  carYear: string;
  customerName: string;
  customerPhone: string;
  notRobot: boolean;
}

export {};
