import { Usuario } from './Usuario';

export class Empresa extends Usuario {
    
    static idempresa: number;
    static CNPJ: string;
    static tipo: string;
    static endereco: string;
}