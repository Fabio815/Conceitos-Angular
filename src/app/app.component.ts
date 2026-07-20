import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
/*import { olaMundoComponent } from './olamundo/olamundo.component';
import { MinhapaginaComponent } from './minhapagina/minhapagina.component'*/
//import { CalculadoraComponent } from './calculadora/calculadora.component';
import { ListaComprasComponent } from './lista-compras/lista-compras.component'
import {MatButtonModule} from '@angular/material/button';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, MatButtonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'conceitos-basicos';
}