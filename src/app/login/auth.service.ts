import { Injectable, EventEmitter } from '@angular/core';
import { Usuario } from '../shared/classes/Usuario';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private _router: Router) { }
  
  private autenticado: boolean = false
  isUsuarioAutenticado = new EventEmitter<boolean>();
  validarLogin () {
    // validação de login com o servidor
    if (Usuario.login === 'admin' && Usuario.senha === 'admin') {
      this.isUsuarioAutenticado.emit(true);
      this.autenticado = true;
      this._router.navigate(['/pagina-inicial']);
      // direicionar para pagina home
    } else {
      this.isUsuarioAutenticado.emit(false);
    }
  }

  getFullUser() {
    // busca todo o objeto de usuario no banco de dados
  }

  // retorna se o usuario esta autenticado ou não para guarda de rotas
  isAuth() {
    return this.autenticado;
  }
}
