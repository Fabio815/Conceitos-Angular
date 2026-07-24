import { v4 as uuid } from 'uuid';//Esse v4 as uuid é para renomear.

export class Cliente {
    id?: string;
    nome?: string;
    cpf?: string;
    email?: string;
    dataNascimento?: Date;

    static novoCliente() {
        const cliente = new Cliente;
        cliente.id = uuid();
        return cliente;
    }
}