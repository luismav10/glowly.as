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
  selectedCategory = signal('');

  categories = computed(() => {
    const cats = new Set(this.productos().map(p => p.categoria));
    return ['', ...cats];
  });

  filteredProducts = computed(() => {
    const term = this.searchTerm().toLowerCase().trim();
    const cat = this.selectedCategory();
    return this.productos().filter(p => {
      const matchesSearch = !term || p.nombre.toLowerCase().includes(term) || p.categoria.toLowerCase().includes(term);
      const matchesCategory = !cat || p.categoria === cat;
      return matchesSearch && matchesCategory;
    });
  });
}
