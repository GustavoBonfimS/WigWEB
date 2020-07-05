import { Injectable, EventEmitter } from '@angular/core';
import { Usuario } from '../shared/classes/Usuario';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { empty, Subject } from 'rxjs';
import { AlertModalService } from '../shared/alert-modal/alert-modal.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private router: Router,
              private http: HttpClient,
              private alertModalService: AlertModalService) { }

  private autenticado = false;
  private user = new Usuario();
  mostrarMenu = new EventEmitter<boolean>();

  validarLogin(login, senha) {
    // validação de login com o servidor
    this.isLoginValido(login, senha)
    .subscribe((res) => {
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
    return this.http.post(url, u)
    .pipe(
      catchError(err => {
        this.alertModalService.showAlertDanger('erro ao se conectar ao servidor, tente novamente mais tarde');
        // tslint:disable-next-line: deprecation
        return empty();
      })
    );
  }

}
