import { Injectable, EventEmitter } from '@angular/core';
import { Usuario } from '../shared/classes/Usuario';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private _router: Router) { }
  
  tipo: string;
  private autenticado: boolean = false
  isUsuarioAutenticado = new EventEmitter<boolean>();
  validarLogin (login, senha) {
    // validação de login com o servidor
    if (Usuario.login === login && Usuario.senha === senha) {
      this.isUsuarioAutenticado.emit(true);
      this.autenticado = true;
      this.setUser(login)
      this._router.navigate(['/pagina-inicial']);
    } else {
      this.isUsuarioAutenticado.emit(false);
    }
  }

  setUser(login) {
    // busca cliente e seta na classe
    // seta o this.tipo com o tipo do obj
  }
  
  // retorna se o usuario esta autenticado ou não para guarda de rotas
  isAuth() {
    return this.autenticado;
  }
}
