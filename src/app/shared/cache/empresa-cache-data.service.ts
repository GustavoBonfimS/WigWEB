import { Injectable } from '@angular/core';
import { Empresa } from '../classes/Empresa';

@Injectable({
  providedIn: 'root'
})
export class EmpresaCacheDataService {

  private empresa: Empresa;

  constructor() { }

  setEmpresa(emp: Empresa) {
    this.empresa = emp;
  }

  getEmpresa() {
    return this.empresa;
  }

  logOut() {
    this.empresa = null;
  }
}
