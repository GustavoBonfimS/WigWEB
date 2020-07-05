import { Injectable, EventEmitter } from '@angular/core';
import { Usuario } from '../shared/classes/Usuario';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private router: Router,
              private http: HttpClient) { }

  private autenticado = false;
  private user = new Usuario();
  mostrarMenu = new EventEmitter<boolean>();
  private tipo: string;

  validarLogin(login, senha) {
    // validação de login com o servidor
    this.isLoginValido(login, senha).subscribe((res) => {
      if (res != null) {
        console.log(res);

        this.user = Object.assign(res);

        switch (this.user.perfil) {
          case 'cliente':
            this.router.navigate(['/pagina-inicial', login]);
            break;
          case 'admin':
            // redirect para modulo de admin
            break;
          case 'empresa':
          // redirect para modulo de empresa
        }

        this.mostrarMenu.emit(true);
        this.autenticado = true;
      } else {
        this.mostrarMenu.emit(false);
        alert('login ou senha incorretos');
      }
    });
  }

  // retorna se o usuario esta autenticado ou não para guarda de rotas
  isAuth() {
    return this.autenticado;
  }

  isLoginValido(login: string, senha: string) {
    const url = '/api/usuario/Login';

    const u = new Usuario();
    u.login = login;
    u.senha = senha;
    return this.http.post(url, u);
  }

}
