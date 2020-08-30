import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router, CanLoad } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../login/auth.service';
import { Route } from '@angular/compiler/src/core';
import { take, map } from 'rxjs/operators';
import { PaginaInicialComponent } from '../pagina-inicial/pagina-inicial.component';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate, CanLoad {

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot)
    : Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    if (this.verificarAcesso()) {

      // caso usuairo esteja autenticado no fluxo normal (login) seria redirecionado
      // para pagina inicial, mas se for empresa ou admin
      // tera que ser redirecionado para as paginas corretas
      // tslint:disable-next-line: triple-equals
      if (next.component == PaginaInicialComponent.toString()) {
        switch (this.authService.typeUser) {
          case 'empresa':
            this.router.navigate(['/empresa-env']);
            break;
          case 'admin':
            this.router.navigate(['/admin']);
            break;
        }
      }
      return true;
    }
    return false;
  }

  canLoad(route: Route): Observable<boolean> | Promise<boolean> | boolean {
    return this.verificarAcesso();
  }

  verificarAcesso() {
    // verifica se usuario esta logado para navegar entre as paginas após login
    // apenas vai cair aqui se lnavegar entre paginas inernamente
    if (this.authService.isAuth()) {
      return true;
    }

    // caso atualize a pagina ou tente acessa por url especifico
    // vai cair aqui e ira verifica r no servidor se esta logado
    if (this.authService.verifyLoginOnServer()) {
      return true;
    } else {
      this.router.navigate(['login']);
      return false;
    }
  }

}
