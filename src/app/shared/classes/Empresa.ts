import { Usuario } from './Usuario';

export class Empresa extends Usuario {
    
    static idempresa: number;
    static CNPJ: string;
    static tipo: string;
    static endereco: string;

    static getEmpresa() {
        var empresa = {
            idusuario: this.idusuario,
            idempresa: this.idempresa,
            login: this.login,
            senha: this.senha,
            email: this.email,
            CNPJ: this.CNPJ,
            tipo: this.tipo,
            endereco: this.endereco
        }
    }
}