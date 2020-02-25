import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-minha-conta',
  templateUrl: './minha-conta.component.html',
  styleUrls: ['./minha-conta.component.css']
})
export class MinhaContaComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  conta: any = {
    id: 1,
    nome: "gustavo",
    idade: "18 anos",
    sexo: "masculino"
  }

}
