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

  constructor(private methods: MethodsService) { }

  avLinha1: Avaliacao[] = [];
  avLinha2: Avaliacao[] = [];
  empLinha1 = [];
  empLinha2: Empresa[] = [];

  ngOnInit(): void {
    // usar o service para buscar avaliacoes
    this.methods.listAvaliacoes()
      .subscribe(res => {
        this.avLinha1 = res;
        for (let i = 3; i < this.avLinha1.length; i++) {
          this.avLinha2.push(this.avLinha1[i]);
        }
        for (let i = 0; i < res.length; i++) {
          this.buscarEmpresaPeloId(res[i].idempresa).subscribe(dados => {
            this.avLinha1[i].nomeEmpresa = dados.login;
          });
        }
      });


  }

  buscarEmpresaPeloId(idempresa) {
    return this.methods.getEmpresa(idempresa);
  }
}
