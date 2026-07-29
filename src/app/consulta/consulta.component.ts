import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { FlexLayoutModule } from '@angular/flex-layout'
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import { MatTableModule } from '@angular/material/table';
import { Cliente } from '../cadastro/cliente';
import { ClienteService } from '../cliente.service';
import { _VisuallyHiddenLoader } from "@angular/cdk/private";


@Component({
  selector: 'app-consulta',
  imports: [
    MatCardModule,
    MatInputModule,
    MatIconModule,
    MatTableModule,
    MatButtonModule,
    FlexLayoutModule,
    FormsModule,
    CommonModule,
],
  templateUrl: './consulta.component.html',
  styleUrl: './consulta.component.scss'
})
export class ConsultaComponent implements OnInit{
  nomeBusca: string = '';
  listaClientes: Cliente[] = [];
  colunasTabela: string[] = ["id", "nome", "cpf", "dataNascimento", "email"];//Preciso criar isso para conseguir mostrar a tabela.

  constructor(private service: ClienteService) {

  }

  pesquisar() {
    this.listaClientes = this.service.pesquisarCliente(this.nomeBusca);
  }

  ngOnInit() {
    this.listaClientes = this.service.pesquisarCliente('');
  }
}
