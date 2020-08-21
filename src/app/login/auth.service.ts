import { Injectable, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { AlertModalService } from '../shared/alert-modal/alert-modal.service';
import { MethodsService } from '../shared/methods.service';
import { Cliente } from '../shared/classes/Cliente';
import { ClienteCacheDataService } from '../shared/cache/cliente-cache-data.service';
import { FormGroup } from '@angular/forms';
import { take } from 'rxjs/operators';
import { EmpresaCacheDataService } from '../shared/cache/empresa-cache-data.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  typeUser: string;
  private userId: number;
  private autenticado = false;
  mostrarMenu = new EventEmitter<boolean>();

  constructor(
    private router: Router,
    private methods: MethodsService,
    private modalService: AlertModalService,
    private empresaCacheData: EmpresaCacheDataService,
    private clienteCacheData: ClienteCacheDataService
  ) { }

  validarLogin(login, senha) {

    // validação de login com o servidor
    this.methods.onLogin(login, senha)
      .subscribe((res: any) => {
        if (res != null) {
          this.userId = res.idusuario;
          switch (res.perfil) {
            case 'cliente':
              this.typeUser = 'cliente';
              this.mostrarMenu.emit(true);
              this.router.navigate(['/pagina-inicial']);
              this.clienteCacheData.setCliente(res);
              break;
            case 'admin':
              this.typeUser = 'admin';
              this.router.navigate(['/admin']);
              break;
            case 'empresa':
              this.typeUser = 'empresa';
              this.router.navigate(['/empresa-env']);
              this.empresaCacheData.setEmpresa(res);
              break;
          }
          this.autenticado = true;
        } else {
          this.mostrarMenu.emit(false);
          this.modalService.showAlertDanger('login ou senha incorretos');
        }
      });
  }

  isAuth() {
    return this.autenticado;
  }

  isLogado() {
    this.methods.verifyLogin(this.userId)
    .pipe(take(1))
    .subscribe((res: boolean) => {
      return res;
    });
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
      if (resposta != null) {
        this.clienteCacheData.setCliente(resposta);
        this.mostrarMenu.emit(true);
        this.autenticado = true;
        this.router.navigate(['/pagina-inicial']);
      }
    });
  }
}
