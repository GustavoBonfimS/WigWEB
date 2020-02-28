import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router, CanLoad } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../login/auth.service';
import { Route } from '@angular/compiler/src/core';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate, CanLoad {

  constructor(
    private _authService: AuthService,
    private _router: Router
  ) { }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot)
    : Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    return this.verificarAcesso();
  }

  canLoad(route: Route): Observable<boolean> | Promise<boolean> | boolean {
    return this.verificarAcesso()
  }

  verificarAcesso() {

    if (this._authService.isAuth()) {
      return true;
    }

    this._router.navigate(['/login'])
    return false;
  }

}
