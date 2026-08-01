import { Injectable } from '@angular/core';
import { Cliente } from './cadastro/cliente';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {
  static REPO_CLIENTES = "_CLIENTES";

  constructor() { }

  salvar(cliente: Cliente) {
    const storage = this.obterLocalStorage();
    //debugger;
    storage.push(cliente);

    localStorage.setItem(ClienteService.REPO_CLIENTES, JSON.stringify(storage));
  }

  pesquisarCliente(nomeBusca: string): Cliente[] {
    debugger;
    const clientes: Cliente[] = this.obterLocalStorage();
    if (!nomeBusca) {
      return clientes;
    }

    return clientes.filter(cliente => cliente.nome?.indexOf(nomeBusca) !== -1);//O indexOf retorna -1 quando não o valor.
  }

  carregarClientePorId(id: string): Cliente | undefined {
    const valores = this.obterLocalStorage();
    return valores.find(cliente => cliente.id == id);
  }

  private obterLocalStorage() : Cliente[] {
    //debugger;
    const repositorioCliente = localStorage.getItem(ClienteService.REPO_CLIENTES);
    if (repositorioCliente) {
      const clientes: Cliente[] = JSON.parse(repositorioCliente);
      return clientes;
    }

    const clientes: Cliente[] = [];
    localStorage.setItem(ClienteService.REPO_CLIENTES, JSON.stringify(clientes));
    return clientes;
  }
}
