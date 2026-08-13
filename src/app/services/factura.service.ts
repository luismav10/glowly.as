import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Product } from '../models/product';
import { CartItem } from '../models/cart-item';
import { Invoice } from '../models/invoice';

@Injectable({ providedIn: 'root' })
export class FacturaService {
  private productos: Product[] = [
    {
      id: 1, nombre: 'Franela de Compresión', precio: 9, categoria: 'Franelas de Compresión', icono: '🧥',
      imagen: 'assets/images/buzo-blanco.jpeg',
      colores: [
        { nombre: 'Blanco', hex: '#f5f5f5', imagen: 'assets/images/buzo-blanco.jpeg' },
        { nombre: 'Gris', hex: '#9e9e9e', imagen: 'assets/images/buzo-gris.jpeg' },
        { nombre: 'Gris Claro', hex: '#bdbdbd', imagen: 'assets/images/buzo-gris-claro.jpeg' },
        { nombre: 'Vinotinto', hex: '#880e4f', imagen: 'assets/images/buzo-vinotinto.jpeg' },
        { nombre: 'Negro', hex: '#333333', imagen: 'assets/images/buzo-negro.jpeg' },
        { nombre: 'Azul Marino', hex: '#1a237e', imagen: 'assets/images/buzo-azul-marino.jpeg' },
      ],
    },
    {
      id: 2, nombre: 'Top Premium', precio: 9, categoria: 'Tops', icono: '👚',
      imagen: 'assets/images/top-gris.jpeg',
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
      colores: [
        { nombre: 'Vinotinto', hex: '#880e4f', imagen: 'assets/images/set-musera-sport-negro.jpeg' },
        { nombre: 'Amarillo', hex: '#ffee54', imagen: 'assets/images/set-musera-sport-crema.jpeg' },
        { nombre: 'Negro', hex: '#333333', imagen: 'assets/images/set-musera-sport-negr.jpeg' },
        { nombre: 'Rosado', hex: '#f48fb1', imagen: 'assets/images/set-musera-sport-rosado.jpeg' },
      ],
    },
    {
      id: 4, nombre: 'Blusa de Tiros', precio: 11, categoria: 'Tops', icono: '👚',
      imagen: 'assets/images/top-sencillo.jpeg',
      colores: [
        { nombre: 'Blanco', hex: '#f5f5f5', imagen: 'assets/images/top-simple-blanco.jpeg' },
        { nombre: 'Negro', hex: '#333333', imagen: 'assets/images/top-simple-negro.jpeg' },
        { nombre: 'Rojo', hex: '#bd1111', imagen: 'assets/images/top-simple-rojo.jpeg' },
      ],
    },
    {
      id: 6, nombre: 'Top Animal Print', precio: 9, categoria: 'Tops', icono: '👚',
      imagen: 'assets/images/top-animal-print-gris.jpeg',
      colores: [
        { nombre: 'Gris', hex: '#9e9e9e', imagen: 'assets/images/top-animal-print-gris.jpeg' },
        { nombre: 'Marrón', hex: '#6d4c41', imagen: 'assets/images/top-animal-print-marron.jpeg' },
        { nombre: 'Negro', hex: '#333333', imagen: 'assets/images/top-animal-print-negro.jpeg' },
      ],
    },

    {
      id: 7, nombre: 'Pants Deportivos', precio: 16, categoria: 'Pants', icono: '🩱',
      imagen: 'assets/images/leggins-negro.jpeg',
      colores: [
        { nombre: 'Negro', hex: '#333333', imagen: 'assets/images/leggins-negro.jpeg' },
        { nombre: 'Gris', hex: '#9e9e9e', imagen: 'assets/images/leggins-gris.jpeg' },
        { nombre: 'Azul', hex: '#083766', imagen: 'assets/images/leggins-azul.jpeg' },
        { nombre: 'Vino', hex: '#880e4f', imagen: 'assets/images/leggins-vino.jpeg' },
      ],
    },
    {
      id: 8, nombre: 'Short Sencillo', precio: 8, categoria: 'Shorts', icono: '🩳',
      imagen: 'assets/images/short-sencillo-negro.jpeg',
      colores: [
        { nombre: 'Negro', hex: '#333333', imagen: 'assets/images/short-sencillo-negro.jpeg' },
        { nombre: 'Marrón', hex: '#6d4c41', imagen: 'assets/images/short-sencillo-marron.jpeg' },
      ],
    },
    {
      id: 10, nombre: 'Short Corte V', precio: 8, categoria: 'Shorts', icono: '🩳',
      imagen: 'assets/images/short-corte-v-gris.jpeg',
      colores: [
        { nombre: 'Gris', hex: '#9e9e9e', imagen: 'assets/images/short-corte-v-gris.jpeg' },
      ],
    },
    {
      id: 5, nombre: 'Short Premium', precio: 11, categoria: 'Shorts', icono: '🩳',
      imagen: 'assets/images/short-premium-azul.jpeg',
      colores: [
        { nombre: 'Azul', hex: '#0a3055', imagen: 'assets/images/short-premium-azul.jpeg' },
        { nombre: 'Turquesa', hex: '#2fb3f0', imagen: 'assets/images/short-premium-celeste.jpeg' },
        { nombre: 'Celeste', hex: '#87ceeb', imagen: 'assets/images/short-premiun-celeste.jpeg' },
        { nombre: 'Lila', hex: '#ce93d8', imagen: 'assets/images/short-premium-lila.png' },
        { nombre: 'Rosado', hex: '#f48fb1', imagen: 'assets/images/short-premium-rosado.jpeg' },
        { nombre: 'Negro', hex: '#000000', imagen: 'assets/images/short-premium-negro.jpeg' },
        { nombre: 'Morado', hex: '#7b1fa2', imagen: 'assets/images/short-premiun-morado.jpeg' },
        { nombre: 'Rojo', hex: '#d32f2f', imagen: 'assets/images/short-premiun-rojo.jpeg' },
      ],
    },
    {
      id: 9, nombre: 'Set Musera Sport', precio: 19, categoria: 'Sets', icono: '👕',
      imagen: 'assets/images/set-musera-sport-p-amarillo.jpeg',
      colores: [
        { nombre: 'Amarillo', hex: '#f7f44b', imagen: 'assets/images/set-musera-sport-p-amarillo.jpeg' },
      ],
    },
    {
      id: 12, nombre: 'Leggins', precio: 12, categoria: 'Leggins', icono: '🩱',
      imagen: 'assets/images/leggins-marron.jpeg',
      colores: [
        { nombre: 'Marrón', hex: '#6d4c41', imagen: 'assets/images/leggins-marron.jpeg' },
      ],
    },
    {
      id: 11, nombre: 'Enterizo Bota Campana', precio: 15, categoria: 'Enterizos', icono: '👗',
      imagen: 'assets/images/enterizo-bota-campana.jpeg',
      colores: [
        { nombre: 'Azul', hex: '#093d70', imagen: 'assets/images/enterizo-bota-campana-azul-marino.jpeg' },
        { nombre: 'Negro', hex: '#333333', imagen: 'assets/images/enterizo-bota-campana-negro.jpeg' },
      ],
    },
    {
      id: 13, nombre: 'Enterizo Corto', precio: 12, categoria: 'Enterizos', icono: '👗',
      imagen: 'assets/images/enterizo-negro.jpeg',
      colores: [
        { nombre: 'Negro', hex: '#333333', imagen: 'assets/images/enterizo-negro.jpeg' },
      ],
    },
    {
      id: 14, nombre: 'Enterizo Musera Sport', precio: 22, categoria: 'Enterizos', icono: '👗',
      imagen: 'assets/images/enterizo-musera-negro.jpeg',
      colores: [
        { nombre: 'Negro', hex: '#333333', imagen: 'assets/images/enterizo-musera-negro.jpeg' },
        { nombre: 'Morado', hex: '#7b1fa2', imagen: 'assets/images/enterizo-musera-morado.jpeg' },
      ],
    },
    {
      id: 15, nombre: 'Short Running', precio: 10, categoria: 'Shorts', icono: '🩳',
      imagen: 'assets/images/short-running-negro.jpeg',
      colores: [
        { nombre: 'Blanco', hex: '#f5f5f5', imagen: 'assets/images/short-running-blanco.jpeg' },
        { nombre: 'Negro', hex: '#333333', imagen: 'assets/images/short-running-negro.jpeg' },
        { nombre: 'Azul', hex: '#0a3055', imagen: 'assets/images/short-running-azul.jpeg' },
        { nombre: 'Rosado', hex: '#f48fb1', imagen: 'assets/images/short-running-rosado.jpeg' },
      ],
    },
    {
      id: 16, nombre: 'Enterizo Básico', precio: 20, categoria: 'Enterizos', icono: '👗',
      imagen: 'assets/images/enterizo-basico.jpeg',
      colores: [
        { nombre: 'Negro', hex: '#333333', imagen: 'assets/images/enterizo-basico.jpeg' },
        { nombre: 'Azul', hex: '#0a3055', imagen: 'assets/images/enterizo-basico-azul.jpeg' },
      ],
    },
    {
      id: 17, nombre: 'Enterizo Bota Ancha', precio: 26, categoria: 'Enterizos', icono: '👗',
      imagen: 'assets/images/enterizo-bota-ancha-negro.jpeg',
      colores: [
        { nombre: 'Negro', hex: '#333333', imagen: 'assets/images/enterizo-bota-ancha-negro.jpeg' },
        { nombre: 'Rosado', hex: '#f48fb1', imagen: 'assets/images/enterizo-bota-ancha-rosado.jpeg' },
      ],
    },
    {
      id: 18, nombre: 'Set Animal Print', precio: 19, categoria: 'Sets', icono: '👕',
      imagen: 'assets/images/set-animal-print.jpeg',
      colores: [
        { nombre: 'Animal Print', hex: '#7a5c44', imagen: 'assets/images/set-animal-print.jpeg' },
      ],
    },
    {
      id: 19, nombre: 'Set Morado', precio: 19, categoria: 'Sets', icono: '👕',
      imagen: 'assets/images/enterizo-morado.jpeg',
      colores: [
        { nombre: 'Morado', hex: '#7b1fa2', imagen: 'assets/images/enterizo-morado.jpeg' },
      ],
    },
    {
      id: 20, nombre: 'Medias Básicas', precio: 1.5, categoria: 'Medias', icono: '🧦',
      imagen: 'assets/images/medias-basicas.jpeg',
      colores: [
        { nombre: 'Blanco', hex: '#f5f5f5', imagen: 'assets/images/medias-basicas.jpeg' },
      ],
    },
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
