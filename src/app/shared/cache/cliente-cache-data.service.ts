import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Cliente } from '../classes/Cliente';

@Injectable({
  providedIn: 'root'
})
export class ClienteCacheDataService {

  subject: Subject<Cliente>;

  constructor() {
    this.subject = new Subject<Cliente>();
   }

  private cliente: Cliente;

  setCliente(res: Cliente) {
    this.cliente = res;
    this.subject.next(res);
  }

  getClienteLogado() {
    return this.cliente;
  }

  logOut() {
    this.cliente = null;
  }

  awaitToLoad() {
    return this.subject;
  }
}
