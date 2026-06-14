export interface ColorVariant {
  nombre: string;
  hex: string;
  imagen: string;
}

export interface Product {
  id: number;
  nombre: string;
  precio: number;
  categoria: string;
  icono: string;
  imagen: string;
  colores: ColorVariant[];
  tallas: string[];
}
