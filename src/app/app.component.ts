import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
/*import { olaMundoComponent } from './olamundo/olamundo.component';
import { MinhapaginaComponent } from './minhapagina/minhapagina.component'*/
//import { CalculadoraComponent } from './calculadora/calculadora.component';
import { ListaComprasComponent } from './lista-compras/lista-compras.component'
import { MatToolbarModule } from '@angular/material/toolbar'

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, MatToolbarModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'conceitos-basicos';
}