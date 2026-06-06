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

  ngOnInit() {
    this.colorSeleccionado.set(this.product().colores[0]);
  }

  toggleColores() {
    this.mostrarColores.update(v => !v);
  }

  seleccionarColor(color: ColorVariant) {
    this.colorSeleccionado.set(color);
  }
}
