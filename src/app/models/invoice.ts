import { CartItem } from './cart-item';

export interface Invoice {
  numero: string;
  cliente: string;
  documento: string;
  pago: string;
  items: CartItem[];
  subtotal: number;
  iva: number;
  total: number;
  fecha: Date;
}
