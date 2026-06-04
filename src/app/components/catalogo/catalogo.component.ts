import { Component, inject } from '@angular/core';
import { AsyncPipe } from '@angular/common';
import { FacturaService } from '../../services/factura.service';
import { ProductoComponent } from '../producto/producto.component';
import { Product } from '../../models/product';

@Component({
  selector: 'app-catalogo',
  imports: [AsyncPipe, ProductoComponent],
  templateUrl: './catalogo.component.html',
  styleUrl: './catalogo.component.scss',
})
export class CatalogoComponent {
  private facturaService = inject(FacturaService);
  productos$ = this.facturaService.productos$;

  agregar(product: Product) {
    this.facturaService.agregarAlCarrito(product);
  }
}
