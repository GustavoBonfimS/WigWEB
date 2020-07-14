import { Injectable, EventEmitter } from '@angular/core';
import { Usuario } from '../shared/classes/Usuario';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { empty, Subject } from 'rxjs';
import { AlertModalService } from '../shared/alert-modal/alert-modal.service';
import { MethodsService } from '../shared/methods.service';
import { Cliente } from '../shared/classes/Cliente';
import { ClienteCacheDataService } from '../shared/cliente-cache-data.service';

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
              break;
            case 'empresa':
              // redirect para modulo de empresa
              this.modalService.showAlertSuccess('modulo de empresa não esta pronto');
              break;
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
}
