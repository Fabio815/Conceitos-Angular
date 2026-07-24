import { Component } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { Cliente } from './cliente';

@Component({
  selector: 'app-cadastro',
  imports: [FlexLayoutModule, 
            MatCardModule, 
            MatFormFieldModule, 
            FormsModule, 
            MatInputModule,
            MatIconModule,
            MatButtonModule
          ],
  templateUrl: './cadastro.component.html',
  styleUrl: './cadastro.component.scss'
})
export class CadastroComponent {
  cliente: Cliente = Cliente.novoCliente();

  mostrarCliente() {
    console.log(this.cliente);
  }
}
