import { Component, OnInit } from '@angular/core';
import { MethodsService } from 'src/app/shared/methods.service';
import { Observable } from 'rxjs';
import { Avaliacao } from 'src/app/shared/classes/Avaliacao';
import { ClienteCacheDataService } from 'src/app/shared/cliente-cache-data.service';
import { take } from 'rxjs/operators';

@Component({
  selector: 'app-avaliacoes',
  templateUrl: './avaliacoes.component.html',
  styleUrls: ['./avaliacoes.component.css']
})
export class AvaliacoesComponent implements OnInit {

  avaliacoes$: Observable<Avaliacao[]>;

  constructor(private methods: MethodsService,
              private clienteCacheService: ClienteCacheDataService) { }

  ngOnInit(): void {
    this.avaliacoes$ = this.methods.getMinhasAvaliacoes(this.clienteCacheService.getClienteLogado().idcliente)
    .pipe(take(1));
  }
}
