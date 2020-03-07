import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pagina-inicial',
  templateUrl: './pagina-inicial.component.html',
  styleUrls: ['./pagina-inicial.component.css']
})
export class PaginaInicialComponent implements OnInit {

  constructor() { }

  avaliacoes;

  ngOnInit(): void {
    // usar o service para buscar avaliacoes
    this.avaliacoes = [
      {autor: "testeAutor", conteudo: "testando conteudo da valiação", empresa: "Unitoledo"},
      {autor: "outroTeste", conteudo: "testando conteudo da outra avaliação", empresa: "Unitoledo"},
      {autor: "terceiro", conteudo: "testando conteudo da valiação", empresa: "Unitoledo"},

    ];
    
  }

}
