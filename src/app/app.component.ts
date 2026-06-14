import { Component } from '@angular/core';
import { CatalogoComponent } from './components/catalogo/catalogo.component';
import { ContactoComponent } from './components/contacto/contacto.component';

@Component({
  selector: 'app-root',
  imports: [CatalogoComponent, ContactoComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {}
