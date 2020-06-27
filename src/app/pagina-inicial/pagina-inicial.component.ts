import { Component, OnInit } from '@angular/core';
import { MethodsService } from '../shared/methods.service';
import { map } from "rxjs/operators";
import { Avaliacao } from '../shared/classes/Avaliacao';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Usuario } from '../shared/classes/Usuario';
import { ActivatedRoute } from '@angular/router';
import { Empresa } from '../shared/classes/Empresa';

@Component({
  selector: 'app-pagina-inicial',
  templateUrl: './pagina-inicial.component.html',
  styleUrls: ['./pagina-inicial.component.css']
})
export class PaginaInicialComponent implements OnInit {

  constructor(private _methods: MethodsService) { }

  avaliacoes: Avaliacao[] = [];
  avaliacoes1: Avaliacao[] = [];
  empresas = [];
  empresas1: Empresa[] = [];

  ngOnInit(): void {
    // usar o service para buscar avaliacoes
    this._methods.listAvaliacoes()
      .subscribe(res => {
        this.avaliacoes = res;
        for (let i = 3; i < this.avaliacoes.length; i++) {
          this.avaliacoes1.push(this.avaliacoes[i]);
        }
        for (let i = 0; i < res.length; i++) {
          this.buscarEmpresaPeloId(res[i].idempresa).subscribe(dados => {
            this.avaliacoes[i].nomeEmpresa = dados.login;
          });
        }
      });


  }

  buscarEmpresaPeloId(idempresa) {
    return this._methods.getEmpresa(idempresa);
  }
}
