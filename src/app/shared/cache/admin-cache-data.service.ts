import { Injectable } from '@angular/core';
import { Usuario } from '../classes/Usuario';

@Injectable({
  providedIn: 'root'
})
export class AdminCacheDataService {

  private admin: Usuario;

  constructor() { }

  setAdmin(res: Usuario) {
    this.admin = res;
  }

  getAdminLogado() {
    return this.admin;
  }

  logOut() {
    this.admin = null;
  }
}
