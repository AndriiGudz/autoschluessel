declare global {
  interface Window {
    openOrderModal?: () => void;
    openSuccessModal?: () => void;
  }
}

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
