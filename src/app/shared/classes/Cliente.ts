import { Usuario } from './Usuario';

export class Cliente extends Usuario {
    static idcliente: number;
    static CPF: string;

    static getCliente() {
        var cliente = {
            idusuario: this.idusuario,
            idcliente: this.idcliente,
            login: this.login,
            senha: this.senha,
            email: this.email,
            CPF: this.CPF,
        }
        return cliente;
    }
}