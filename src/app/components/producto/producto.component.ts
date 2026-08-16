import { Component, input, signal, OnInit } from '@angular/core';
import { DecimalPipe } from '@angular/common';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { Product, ColorVariant } from '../../models/product';

@Component({
  selector: 'app-producto',
  imports: [DecimalPipe],
  templateUrl: './producto.component.html',
  styleUrl: './producto.component.scss',
  animations: [
    trigger('expandColores', [
      state('false', style({ height: '0', opacity: '0', overflow: 'hidden', paddingTop: '0', paddingBottom: '0' })),
      state('true', style({ height: '*', opacity: '1', overflow: 'hidden', paddingTop: '*', paddingBottom: '*' })),
      transition('false <=> true', animate('300ms ease-in-out')),
    ]),
  ],
})
export class ProductoComponent implements OnInit {
  product = input.required<Product>();

  mostrarColores = signal(false);
  colorSeleccionado = signal<ColorVariant>({ nombre: '', hex: '', imagen: '' });
  imagenActual = signal(0);

  tieneGaleria = false;
  imagenesGaleria: string[] = [];

  private touchStartX = 0;

  ngOnInit() {
    this.colorSeleccionado.set(this.product().colores[0]);
    this.imagenesGaleria = this.product().imagenes ?? [];
    this.tieneGaleria = this.imagenesGaleria.length > 0;
  }

  toggleColores() {
    this.mostrarColores.update(v => !v);
  }

  seleccionarColor(color: ColorVariant) {
    this.colorSeleccionado.set(color);
  }

  imagenParaMostrar(): string {
    if (this.tieneGaleria) {
      return this.imagenesGaleria[this.imagenActual()];
    }
    return this.colorSeleccionado().imagen;
  }

  irAImagen(index: number) {
    this.imagenActual.set(index);
  }

  onTouchStart(e: TouchEvent) {
    this.touchStartX = e.touches[0].clientX;
  }

  onTouchEnd(e: TouchEvent) {
    const diff = this.touchStartX - e.changedTouches[0].clientX;
    if (Math.abs(diff) < 50) return;
    if (diff > 0) {
      this.imagenActual.update(i => (i + 1) % this.imagenesGaleria.length);
    } else {
      this.imagenActual.update(i => (i - 1 + this.imagenesGaleria.length) % this.imagenesGaleria.length);
    }
  }
}
