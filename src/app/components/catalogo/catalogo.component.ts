import { Component, computed, inject, signal } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { FormsModule } from '@angular/forms';
import { FacturaService } from '../../services/factura.service';
import { ProductoComponent } from '../producto/producto.component';

@Component({
  selector: 'app-catalogo',
  imports: [FormsModule, ProductoComponent],
  templateUrl: './catalogo.component.html',
  styleUrl: './catalogo.component.scss',
})
export class CatalogoComponent {
  private facturaService = inject(FacturaService);
  private productos = toSignal(this.facturaService.productos$, { initialValue: [] });

  searchTerm = signal('');

  filteredProducts = computed(() => {
    const term = this.searchTerm().toLowerCase().trim();
    if (!term) return this.productos();
    return this.productos().filter(
      p => p.nombre.toLowerCase().includes(term) || p.categoria.toLowerCase().includes(term)
    );
  });
}
