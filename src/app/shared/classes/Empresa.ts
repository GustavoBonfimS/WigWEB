import { Usuario } from './Usuario';

export class Empresa extends Usuario {

    idempresa: number;
    cnpj: string;
    tipo: string;
    endereco: string;
}