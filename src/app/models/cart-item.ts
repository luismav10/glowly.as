import { Product } from './product';

export interface CartItem extends Product {
  cantidad: number;
}
