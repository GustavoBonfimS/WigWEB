import { Usuario } from './Usuario';

export class Empresa extends Usuario {
    
    idempresa: number;
    CNPJ: string;
    tipo: string;
    endereco: string;
}