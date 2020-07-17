import { Injectable } from '@angular/core';
import { Cliente } from './classes/Cliente';

@Injectable({
  providedIn: 'root'
})
export class ClienteCacheDataService {

  constructor() { }

  private cliente: Cliente;

  setCliente(res: Cliente) {
    this.cliente = res;
  }

  getClienteLogado() {
    return this.cliente;
  }

  logOut() {
    this.cliente = null;
  }
}
