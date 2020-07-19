import { Injectable, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { AlertModalService } from '../shared/alert-modal/alert-modal.service';
import { MethodsService } from '../shared/methods.service';
import { Cliente } from '../shared/classes/Cliente';
import { ClienteCacheDataService } from '../shared/cliente-cache-data.service';
import { FormGroup } from '@angular/forms';
import { take } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private router: Router,
              private methods: MethodsService,
              private modalService: AlertModalService,
              private clienteCacheData: ClienteCacheDataService) { }

  private autenticado = false;
  mostrarMenu = new EventEmitter<boolean>();

  validarLogin(login, senha) {

    // validação de login com o servidor
    this.methods.onLogin(login, senha)
      .subscribe((res: any) => {
        if (res != null) {
          switch (res.perfil) {
            case 'cliente':
              this.router.navigate(['/pagina-inicial']);
              this.clienteCacheData.setCliente(res);
              break;
            case 'admin':
              // redirect para modulo de admin
              this.modalService.showAlertSuccess('modulo de admin não esta pronto');
              return;
            case 'empresa':
              // redirect para modulo de empresa
              this.modalService.showAlertSuccess('modulo de empresa não esta pronto');
              return;
          }

          this.mostrarMenu.emit(true);
          this.autenticado = true;
        } else {
          this.mostrarMenu.emit(false);
          this.modalService.showAlertDanger('login ou senha incorretos');
        }
      });
  }

  // retorna se o usuario esta autenticado ou não para guarda de rotas
  isAuth() {
    return this.autenticado;
  }

  logOut() {
    this.autenticado = false;
    this.mostrarMenu.emit(false);
    this.clienteCacheData.logOut();
    this.router.navigate(['login']);
  }

  cadastrar(form: FormGroup) {
    const user = new Cliente();
    user.login = form.get('username').value;
    user.senha = form.get('senha').value;
    user.email = form.get('email').value;
    user.CPF = form.get('CPF').value;
    user.perfil = 'cliente';
    this.methods.cadastrar(user).pipe(
      take(1)
    ).subscribe((resposta: Cliente) => {
      // tslint:disable-next-line: no-unused-expression
      if (resposta != null) {
        this.clienteCacheData.setCliente(resposta);
        this.mostrarMenu.emit(true);
        this.autenticado = true;
        this.router.navigate(['/pagina-inicial']);
      }
    });
  }
}
