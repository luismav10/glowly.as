import { Component } from '@angular/core';
import { CatalogoComponent } from './components/catalogo/catalogo.component';

@Component({
  selector: 'app-root',
  imports: [CatalogoComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {}
