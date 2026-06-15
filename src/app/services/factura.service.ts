import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Product } from '../models/product';
import { CartItem } from '../models/cart-item';
import { Invoice } from '../models/invoice';

@Injectable({ providedIn: 'root' })
export class FacturaService {
  private productos: Product[] = [
    {
      id: 1, nombre: 'Franela de Compresión', precio: 9, categoria: 'Buzos', icono: '🧥',
      imagen: 'assets/images/buzo-blanco.jpeg',
      tallas: ['XS','S', 'M', 'L'],
      colores: [
        { nombre: 'Blanco', hex: '#f5f5f5', imagen: 'assets/images/buzo-blanco.jpeg' },
        { nombre: 'Gris', hex: '#9e9e9e', imagen: 'assets/images/buzo-gris.jpeg' },
        { nombre: 'Gris Claro', hex: '#bdbdbd', imagen: 'assets/images/buzo-gris-claro.jpeg' },
      ],
    },
    {
      id: 2, nombre: 'Top Premium', precio: 9, categoria: 'Tops', icono: '👚',
      imagen: 'assets/images/top-gris.jpeg',
      tallas: [ 'XS','S', 'M', 'L'],
      colores: [
        { nombre: 'Blanco', hex: '#f5f5f5', imagen: 'assets/images/top-blanco.jpeg' },
        { nombre: 'Gris', hex: '#9e9e9e', imagen: 'assets/images/top-gris.jpeg' },
        { nombre: 'Vinotinto', hex: '#880e4f', imagen: 'assets/images/top-vinotinto.jpeg' },
        { nombre: 'Rosado', hex: '#f48fb1', imagen: 'assets/images/top-rosado.jpeg' },
      ],
    },
    {
      id: 3, nombre: 'Set Musera Sport', precio: 19, categoria: 'Sets', icono: '👕',
      imagen: 'assets/images/set-musera-sport-negro.jpeg',
      tallas: [ 'XS','S', 'M', 'L'],
      colores: [
        { nombre: 'Vinotinto', hex: '#880e4f', imagen: 'assets/images/set-musera-sport-negro.jpeg' },
        { nombre: 'Crema', hex: '#f5e6d3', imagen: 'assets/images/set-musera-sport-crema.jpeg' },
        { nombre: 'Negro', hex: '#333333', imagen: 'assets/images/set-musera-sport-negr.jpeg' },
        { nombre: 'Rosado', hex: '#f48fb1', imagen: 'assets/images/set-musera-sport-rosado.jpeg' },
      ],
    },
    {
      id: 4, nombre: 'Blusa de Tiros', precio: 11, categoria: 'Tops', icono: '👚',
      imagen: 'assets/images/top-sencillo.jpeg',
      tallas: ['S', 'M', 'L', 'XL'],
      colores: [
        { nombre: 'Blanco', hex: '#f5f5f5', imagen: 'assets/images/top-simple-blanco.jpeg' },
        { nombre: 'Negro', hex: '#333333', imagen: 'assets/images/top-simple-negro.jpeg' },
        { nombre: 'Rojo', hex: '#bd1111', imagen: 'assets/images/top-simple-rojo.jpeg' },
      ],
    },
    {
      id: 6, nombre: 'Top Animal Print', precio: 9, categoria: 'Tops', icono: '👚',
      imagen: 'assets/images/top-animal-print-gris.jpeg',
      tallas: ['S', 'M', 'L', 'XL'],
      colores: [
        { nombre: 'Gris', hex: '#9e9e9e', imagen: 'assets/images/top-animal-print-gris.jpeg' },
        { nombre: 'Marrón', hex: '#6d4c41', imagen: 'assets/images/top-animal-print-marron.jpeg' },
        { nombre: 'Negro', hex: '#333333', imagen: 'assets/images/top-animal-print-negro.jpeg' },
      ],
    },

    {
      id: 7, nombre: 'Pants Deportivos', precio: 16, categoria: 'Leggins', icono: '🩱',
      imagen: 'assets/images/leggins-negro.jpeg',
      tallas: ['S', 'M', 'L', 'XL'],
      colores: [
        { nombre: 'Negro', hex: '#333333', imagen: 'assets/images/leggins-negro.jpeg' },
        { nombre: 'Gris', hex: '#9e9e9e', imagen: 'assets/images/leggins-gris.jpeg' },
        { nombre: 'Azul', hex: '#1976d2', imagen: 'assets/images/leggins-azul.jpeg' },
        { nombre: 'Vino', hex: '#880e4f', imagen: 'assets/images/leggins-vino.jpeg' },
      ],
    },
    {
      id: 8, nombre: 'Short Sencillo', precio: 8, categoria: 'Shorts', icono: '🩳',
      imagen: 'assets/images/short-sencillo-negro.jpeg',
      tallas: ['S', 'M', 'L', 'XL'],
      colores: [
        { nombre: 'Negro', hex: '#333333', imagen: 'assets/images/short-sencillo-negro.jpeg' },
        { nombre: 'Marrón', hex: '#6d4c41', imagen: 'assets/images/short-sencillo-marron.jpeg' },
      ],
    },
    {
      id: 8, nombre: 'Short Corte V', precio: 8, categoria: 'Shorts', icono: '🩳',
      imagen: 'assets/images/short-corte-v-gris.jpeg',
      tallas: ['S', 'M', 'L', 'XL'],
      colores: [
        { nombre: 'Gris', hex: '#9e9e9e', imagen: 'assets/images/short-corte-v-gris.jpeg' },
      ],
    },
    {
      id: 5, nombre: 'Short Premium', precio: 11, categoria: 'Shorts', icono: '🩳',
      imagen: 'assets/images/short-premium-azul.jpeg',
      tallas: ['S', 'M', 'L', 'XL'],
      colores: [
        { nombre: 'Azul', hex: '#1976d2', imagen: 'assets/images/short-premium-azul.jpeg' },
        { nombre: 'Turquesa', hex: '#2fb3f0', imagen: 'assets/images/short-premium-celeste.jpeg' },
        { nombre: 'Celeste', hex: '#87ceeb', imagen: 'assets/images/short-premiun-celeste.jpeg' },
        { nombre: 'Lila', hex: '#ce93d8', imagen: 'assets/images/short-premium-lila.png' },
        { nombre: 'Rosado', hex: '#f48fb1', imagen: 'assets/images/short-premium-rosado.jpeg' },
        { nombre: 'Negro', hex: '#000000', imagen: 'assets/images/short-premium-negro.jpeg' },
        { nombre: 'Morado', hex: '#7b1fa2', imagen: 'assets/images/short-premiun-morado.jpeg' },
        { nombre: 'Rojo', hex: '#d32f2f', imagen: 'assets/images/short-premiun-rojo.jpeg' },
      ],
    }
  ];

  private carritoSubject = new BehaviorSubject<CartItem[]>([]);
  carrito$ = this.carritoSubject.asObservable();
  productos$ = new BehaviorSubject<Product[]>(this.productos);

  private notifSubject = new BehaviorSubject<{ msg: string; tipo: 'exito' | 'error' } | null>(null);
  notificacion$ = this.notifSubject.asObservable();

  agregarAlCarrito(product: Product): void {
    const current = this.carritoSubject.value;
    const existente = current.find(c => c.id === product.id);
    if (existente) {
      existente.cantidad++;
      this.carritoSubject.next([...current]);
    } else {
      this.carritoSubject.next([...current, { ...product, cantidad: 1 }]);
    }
    this.notifSubject.next({ msg: `${product.nombre} añadido al carrito`, tipo: 'exito' });
  }

  eliminarDelCarrito(id: number): void {
    const current = this.carritoSubject.value.filter(c => c.id !== id);
    this.carritoSubject.next(current);
  }

  actualizarCantidad(id: number, cantidad: number): void {
    if (cantidad < 1) { this.eliminarDelCarrito(id); return; }
    const current = this.carritoSubject.value;
    const item = current.find(c => c.id === id);
    if (item) {
      item.cantidad = cantidad;
      this.carritoSubject.next([...current]);
    }
  }

  limpiarCarrito(): void {
    this.carritoSubject.next([]);
    this.notifSubject.next({ msg: 'Carrito limpiado', tipo: 'exito' });
  }

  generarFactura(cliente: string, documento: string, pago: string): Invoice {
    const items = this.carritoSubject.value;
    const subtotal = items.reduce((s, c) => s + c.precio * c.cantidad, 0);
    const iva = subtotal * 0.16;
    const total = subtotal + iva;
    const ahora = new Date();
    const nro = `FAC-${ahora.getFullYear()}-${String(ahora.getMonth()+1).padStart(2,'0')}-${String(ahora.getDate()).padStart(2,'0')}-${Math.floor(Math.random()*9000)+1000}`;

    return { numero: nro, cliente, documento, pago, items, subtotal, iva, total, fecha: ahora };
  }
}
