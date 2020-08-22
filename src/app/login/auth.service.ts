import { Injectable, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { AlertModalService } from '../shared/alert-modal/alert-modal.service';
import { MethodsService } from '../shared/methods.service';
import { Cliente } from '../shared/classes/Cliente';
import { ClienteCacheDataService } from '../shared/cache/cliente-cache-data.service';
import { FormGroup } from '@angular/forms';
import { take, tap, map } from 'rxjs/operators';
import { EmpresaCacheDataService } from '../shared/cache/empresa-cache-data.service';
import { AdminCacheDataService } from '../shared/cache/admin-cache-data.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  typeUser: string;
  private userId: number = parseInt(localStorage.getItem('userId'), 10) || undefined;
  private autenticado = false;
  mostrarMenu = new EventEmitter<boolean>();

  constructor(
    private router: Router,
    private methods: MethodsService,
    private modalService: AlertModalService,
    private empresaCacheData: EmpresaCacheDataService,
    private clienteCacheData: ClienteCacheDataService,
    private adminCacheData: AdminCacheDataService
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
          localStorage.setItem('userId', this.userId.toString());
        } else {
          this.mostrarMenu.emit(false);
          this.modalService.showAlertDanger('login ou senha incorretos');
          localStorage.setItem('userId', null);
        }
      });
  }

  isAuth() {
    return this.autenticado;
  }

  setLoggedIn(value: boolean) {
    this.autenticado = value;
  }

  verifyLoginOnServer() {
    /**
     * verifica se tem alguma id nos cookies do navegador,
     * se houver ira buscar o tipo e o objeto no servidor e setar nas classes respectivas
     */
    if (this.userId != null && this.userId !== undefined) {

      this.methods.getUsuarioById(this.userId).pipe(take(1))
        .subscribe(res => {
          this.setOnTypes(res);
        });

      return true;
    }

    /**
     * se não houver nda nos cookies ira buscar se o usuario esta logado no servidor
     * caso esteja ia buscar também o objeto inteiro e setar na classe respectiva
     */
    if (this.methods.verifyLogin(this.userId)) {
      this.methods.getUsuarioById(this.userId).pipe(take(1))
        .subscribe(res => {
          this.setOnTypes(res);
        });
      return true;
    }
    return false;
  }

  private setOnTypes(res) {
    this.autenticado = true;
    switch (res.perfil) {
      case 'cliente':
        this.clienteCacheData.setCliente(res);
        this.mostrarMenu.emit(true);
        break;
      case 'empresa':
        this.empresaCacheData.setEmpresa(res);
        this.router.navigate(['empresa-env/home']);
        break;
      case 'admin':
        this.adminCacheData.setAdmin(res);
        this.router.navigate(['admin']);
    }
  }

  logOut() {
    this.autenticado = false;
    this.mostrarMenu.emit(false);
    this.clienteCacheData.logOut();
    localStorage.clear();
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
