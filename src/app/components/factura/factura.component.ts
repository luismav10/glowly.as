import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AsyncPipe, DecimalPipe, DatePipe } from '@angular/common';
import { FacturaService } from '../../services/factura.service';
import { CartItem } from '../../models/cart-item';
import { Invoice } from '../../models/invoice';

@Component({
  selector: 'app-factura',
  imports: [FormsModule, AsyncPipe, DecimalPipe, DatePipe],
  templateUrl: './factura.component.html',
  styleUrl: './factura.component.scss',
})
export class FacturaComponent {
  private facturaService = inject(FacturaService);

  carrito$ = this.facturaService.carrito$;

  cliente = '';
  documento = '';
  pago = 'Efectivo';
  factura: Invoice | null = null;

  calcularSubtotal(items: CartItem[]): number {
    return items.reduce((s, c) => s + c.precio * c.cantidad, 0);
  }

  calcularIVA(items: CartItem[]): number {
    return this.calcularSubtotal(items) * 0.16;
  }

  calcularTotal(items: CartItem[]): number {
    return this.calcularSubtotal(items) + this.calcularIVA(items);
  }

  eliminar(id: number) {
    this.facturaService.eliminarDelCarrito(id);
  }

  actualizarCant(id: number, value: string) {
    this.facturaService.actualizarCantidad(id, parseInt(value));
  }

  limpiar() {
    this.facturaService.limpiarCarrito();
  }

  generar() {
    if (!this.cliente.trim()) return;
    this.factura = this.facturaService.generarFactura(this.cliente, this.documento, this.pago);
  }

  cerrarModal() {
    this.factura = null;
    this.facturaService.limpiarCarrito();
    this.cliente = '';
    this.documento = '';
  }
}
