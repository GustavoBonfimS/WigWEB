import { Injectable } from '@angular/core';
import { Cliente } from '../shared/classes/Cliente';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { ClienteCacheDataService } from '../shared/cache/cliente-cache-data.service';

@Injectable({
  providedIn: 'root'
})
export class MinhaContaResolverService implements Resolve<Cliente>{

  constructor(
    private clienteCacheData: ClienteCacheDataService
  ) { }
 
  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Cliente | Observable<Cliente> | Promise<Cliente> {
    return this.clienteCacheData.getClienteLogado();
  }
}
