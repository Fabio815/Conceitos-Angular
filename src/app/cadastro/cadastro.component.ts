import { Component, OnInit, Inject, inject } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatSnackBar } from '@angular/material/snack-bar'
import { Cliente } from './cliente';
import { ClienteService } from '../cliente.service'
import { ActivatedRoute, Router } from '@angular/router';
import { NgxMaskDirective, provideNgxMask } from 'ngx-mask';
import { BrasilAPIService } from '../brasil-api.service';
import { Estado, Municipio } from '../brasilapi.models';
import { MatSelectChange, MatSelectModule } from '@angular/material/select';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-cadastro',
  imports: [FlexLayoutModule, 
            MatCardModule, 
            MatFormFieldModule, 
            FormsModule, 
            MatInputModule,
            MatIconModule,
            MatButtonModule,
            NgxMaskDirective,
            MatSelectModule,
            CommonModule
          ], providers: [
            provideNgxMask()
          ],
  templateUrl: './cadastro.component.html',
  styleUrl: './cadastro.component.scss'
})
export class CadastroComponent implements OnInit {
  cliente: Cliente = Cliente.novoCliente();
  atualizando: boolean = false;
  snack: MatSnackBar = inject(MatSnackBar);
  estado: Estado[] = [];
  municipio: Municipio[] = [];

  constructor(
    private service: ClienteService, 
    private route: ActivatedRoute,
    private router: Router,
    private brasilAPIservice: BrasilAPIService
  ) { 

  }

  salvar() {
    if (!this.atualizando) {
      this.service.salvar(this.cliente);
      this.cliente = Cliente.novoCliente();
      this.mostrarMensagem("Cliente salvo com sucesso");
    } else {
      this.service.atualizar(this.cliente);
      this.router.navigate(['/consulta']);//direcionando para o consulta após atuarlizar.
      this.mostrarMensagem("Cliente atualizado com sucesso");
    }
  }

  mostrarMensagem(mensagem: string) {
    this.snack.open(mensagem, "Ok");
  }

  ngOnInit(): void {
    //Pegando o parametro que estou passando na url.
    this.route.queryParamMap.subscribe( (query: any) => {
      /*const params = query.params;
      const id = params.id;
      console.log(id);*/
      const params = query['params']; //usando o ['params'] e o ['id'], digo que pode conter o valor
      const id = params['id'];
      if (id) {
        let clienteEncontrado = this.service.carregarClientePorId(id);
        if (clienteEncontrado) {
          this.atualizando = true;
          this.cliente = clienteEncontrado;
          if (this.cliente.uf) {
            const evento = {value: this.cliente.uf}
            this.carregarMunicipios(evento as MatSelectChange);
          }
        }
      }
      this.carregarUFs();
    })
  }

  //Toda vez que eu selecionar vai disparar o evento(mudança no select)
  carregarMunicipios(event: MatSelectChange) {
    const ufSelecionada = event.value;
    this.brasilAPIservice.listarMunicipios(ufSelecionada).subscribe({
      next: listaMunicipios => this.municipio = listaMunicipios,
      error: erro => console.log(erro)
    });
  }

  carregarUFs() {
    //é observable, quando tem alguma mudança ele notifica o subscrib. Usamos porque é assincrona.
    this.brasilAPIservice.listarUFs().subscribe({
      next: listaEstados => this.estado = listaEstados,//Caso dê bom
      error: erro => console.log(erro)//Caso dê ruim
    });
  }
}
