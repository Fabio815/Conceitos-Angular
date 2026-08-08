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

@Component({
  selector: 'app-cadastro',
  imports: [FlexLayoutModule, 
            MatCardModule, 
            MatFormFieldModule, 
            FormsModule, 
            MatInputModule,
            MatIconModule,
            MatButtonModule,
            NgxMaskDirective
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

  constructor(
    private service: ClienteService, 
    private route: ActivatedRoute,
    private router: Router
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
        }
      }
    })
  }
}
