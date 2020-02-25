import { Injectable, EventEmitter } from '@angular/core';
import { Usuario } from '../shared/classes/Usuario';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }
  
  isUsuarioAutenticado = new EventEmitter<boolean>();
  validarLogin () {
    // validação de login com o servidor
    if (Usuario.login === 'admin' && Usuario.senha === 'admin') {
      this.isUsuarioAutenticado.emit(true);
      // direicionar para pagina home
    } else {
      this.isUsuarioAutenticado.emit(false);
    }
  }

  getFullUser() {
    // busca todo o objeto de usuario no banco de dados
  }
}
