import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-calculadora',
  imports: [FormsModule],
  templateUrl: './calculadora.component.html',
  styleUrl: './calculadora.component.scss'
})
export class CalculadoraComponent {
  numero1: number = 0;
  numero2: number = 0
  resultado: number = 0;

  somaNumeros() {
    console.log("Chamando o método de somar");
    console.log(this.numero1);
    console.log(this.numero2);

    this.resultado = this.numero1 + this.numero2;
  }
}
