import { Time } from '@angular/common';

export class Avaliacao {
    idavaliacao: number;
    autor: string;
    conteudo: string;
    empresa: string;
    data: Date;
    hora: Time;
    idcliente: number;
    idempresa: number;
    nomeEmpresa: string;
}