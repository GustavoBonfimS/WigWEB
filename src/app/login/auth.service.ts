import { Injectable, EventEmitter } from '@angular/core';
import { Usuario } from '../shared/classes/Usuario';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private _router: Router,
    private _http: HttpClient) { }

  private autenticado: boolean = false
  private user = new Usuario();
  isUsuarioAutenticado = new EventEmitter<boolean>();
  private tipo: string;

  validarLogin(login, senha) {
    // validação de login com o servidor
    this.isLoginValido(login, senha).subscribe(res => {
      if (res != null) {
        this.user = Object.assign(this.user, res);
        this.tipo = this.user.perfil;

        this.isUsuarioAutenticado.emit(true);
        this.autenticado = true;
        this._router.navigate(['/pagina-inicial', login]);
      } else {
        this.isUsuarioAutenticado.emit(false);
        alert("login ou senha incorretos");
      }
    })
  }

  // retorna se o usuario esta autenticado ou não para guarda de rotas
  isAuth() {
    return this.autenticado;
  }

  isLoginValido(login, senha) {
    var url = "http://localhost:8080/api/usuario/login/" + login + "/" + senha;
    return this._http.get(url)
  }
  
}
