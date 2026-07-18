import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Item } from './item';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-lista-compras',
  imports: [FormsModule, CommonModule],
  templateUrl: './lista-compras.component.html',
  styleUrl: './lista-compras.component.scss'
})
export class ListaComprasComponent {
  item: string = '';
  itens: Item[] = [];

  adicionarItem() {
    let item = new Item();
    item.id = this.itens.length + 1;
    item.nome = this.item;

    this.itens.push(item);
    console.table(this.itens);

    this.item = '';
  }

  riscarItem(riscado: Item) {
    riscado.comprado = !riscado.comprado;//Sempre vai receber o inverso dele.
  }

  limpar() {
    this.itens = [];
  }
}
