import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { olaMundoComponent } from './olamundo/olamundo.component';
import { MinhapaginaComponent } from './minhapagina/minhapagina.component'

@Component({
  selector: 'app-root',
  imports: [olaMundoComponent, MinhapaginaComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'conceitos-basicos';
}
