import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { olaMundoComponent } from './olamundo/olamundo.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, olaMundoComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'conceitos-basicos';
}
