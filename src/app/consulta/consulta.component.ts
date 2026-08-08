import { Component, OnInit, Inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { FlexLayoutModule } from '@angular/flex-layout'
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import { MatTableModule } from '@angular/material/table';
import { MatSnackBar } from '@angular/material/snack-bar'
import { Cliente } from '../cadastro/cliente';
import { ClienteService } from '../cliente.service';
import { _VisuallyHiddenLoader } from "@angular/cdk/private";
import { Router } from '@angular/router';


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
export class ConsultaComponent implements OnInit {
  nomeBusca: string = '';
  listaClientes: Cliente[] = [];
  colunasTabela: string[] = ["id", "nome", "cpf", "dataNascimento", "email", "editar"];//Preciso criar isso para conseguir mostrar a tabela.
  snack: MatSnackBar = Inject(MatSnackBar);

  constructor(private service: ClienteService, private router: Router) {

  }

  pesquisar() {
    this.listaClientes = this.service.pesquisarCliente(this.nomeBusca);
  }

  ngOnInit() {
    this.listaClientes = this.service.pesquisarCliente('');
  }

  preparaEditar(id: string) {
    this.router.navigate(['/cadastro'], { queryParams: {'id': id} });
  }

  prepararDeletar(cliente: Cliente) {
    cliente.deletando = true;
  }

  deletar(cliente: Cliente) {
    this.service.deletar(cliente);
    this.ngOnInit();
    this.mostrarMensagem("Cliente deletado com sucesso");
  }

  mostrarMensagem(mensagem: string) {
    this.snack.open(mensagem, "Ok");
  }
}
