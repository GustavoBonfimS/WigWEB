import { Component, OnInit } from '@angular/core';
import { MethodsService } from '../shared/methods.service';
import { Avaliacao } from '../shared/classes/Avaliacao';
import { Empresa } from '../shared/classes/Empresa';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-pagina-inicial',
  templateUrl: './pagina-inicial.component.html',
  styleUrls: ['./pagina-inicial.component.css']
})
export class PaginaInicialComponent implements OnInit {

  constructor(private methods: MethodsService) { }

  avLinha1: Avaliacao[] = [];
  avLinha2: Avaliacao[] = [];
  empLinha1 = [];
  empLinha2: Empresa[] = [];
  avaliacoes$: Observable<Avaliacao[]>;

  ngOnInit(): void {
    // usar o service para buscar avaliacoes
    this.avaliacoes$ = this.methods.listAvaliacoes();
  }

  buscarEmpresaPeloId(idempresa) {
    return this.methods.getEmpresa(idempresa);
  }
}
