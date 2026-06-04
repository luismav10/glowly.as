import { Component, inject, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { FacturaService } from './services/factura.service';
import { CatalogoComponent } from './components/catalogo/catalogo.component';
import { FacturaComponent } from './components/factura/factura.component';

@Component({
  selector: 'app-root',
  imports: [CatalogoComponent, FacturaComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnDestroy {
  private facturaService = inject(FacturaService);
  private sub: Subscription;

  notificacion: { msg: string; tipo: 'exito' | 'error' } | null = null;

  constructor() {
    this.sub = this.facturaService.notificacion$.subscribe(n => {
      this.notificacion = n;
      if (n) setTimeout(() => this.notificacion = null, 3000);
    });
  }

  ngOnDestroy() { this.sub.unsubscribe(); }
}
