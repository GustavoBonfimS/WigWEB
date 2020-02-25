import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-avaliacoes',
  templateUrl: './avaliacoes.component.html',
  styleUrls: ['./avaliacoes.component.css']
})
export class AvaliacoesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  avaliacoes: any[] = [
    { autor: "autorTeste", conteudo: "gostei muito do local, otimas mesas" },
    { autor: "autor desonhecido", conteudo: "gostei muito do local, otimas mesas" },
    { autor: "algum autor ai", conteudo: "gostei muito do local, otimas mesas" }
  ]
}
