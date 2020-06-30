import { Injectable, EventEmitter } from '@angular/core';
import { Usuario } from '../shared/classes/Usuario';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  // tslint:disable-next-line: variable-name
  constructor(private _router: Router,
    // tslint:disable-next-line: variable-name
    private _http: HttpClient) { }

  private autenticado = false;
  private user = new Usuario();
  isUsuarioAutenticado = new EventEmitter<boolean>();
  private tipo: string;

  validarLogin(login, senha) {
    // validação de login com o servidor
    this.isLoginValido(login, senha).subscribe((res: any) => {
      if (res != null) {
        // this.user = Object.assign(this.user, res);
        console.log(res.perfil);
        this.tipo = this.user.perfil;

        this.isUsuarioAutenticado.emit(true);
        this.autenticado = true;
        this._router.navigate(['/pagina-inicial', login]);
      } else {
        this.isUsuarioAutenticado.emit(false);
        alert('login ou senha incorretos');
      }
    });
  }

  // retorna se o usuario esta autenticado ou não para guarda de rotas
  isAuth() {
    return this.autenticado;
  }

  isLoginValido(login, senha) {
    const url = '/api/usuario/Login';

    const u = new Usuario();
    u.login = login;
    u.senha = senha;
    console.log(JSON.stringify(u));
    return this._http.post(url, u);
  }

}
