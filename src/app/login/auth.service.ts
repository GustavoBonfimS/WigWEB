import { Injectable, EventEmitter } from '@angular/core';
import { Usuario } from '../classes/Usuario';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }
  
  isUsuarioAutenticado = new EventEmitter<boolean>();
  validarLogin (usuario: Usuario) {
    // validação de login com o servidor
    if (usuario.login === 'admin' && usuario.senha === 'admin') {
      this.isUsuarioAutenticado.emit(true);
      // direicionar para pagina home
    } else {
      this.isUsuarioAutenticado.emit(false);
    }
  }
}
