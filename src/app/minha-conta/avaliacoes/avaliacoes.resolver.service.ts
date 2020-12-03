import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Avaliacao } from 'src/app/shared/classes/Avaliacao';
import { Observable } from 'rxjs';
import { MethodsService } from 'src/app/shared/methods.service';
import { ClienteCacheDataService } from 'src/app/shared/cache/cliente-cache-data.service';

@Injectable({
  providedIn: 'root'
})
export class AvaliacoesResolverService implements Resolve<Avaliacao[]> {

  constructor(
    private methods: MethodsService,
    private clienteCacheData: ClienteCacheDataService
  ) { }

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
    ): Avaliacao[] | Observable<Avaliacao[]> {
    const idUser = Number(localStorage.getItem('userId'));
    return this.methods.getMinhasAvaliacoesByIdUser(idUser);
  }
}
