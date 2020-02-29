import { Component, OnInit } from '@angular/core';
import { Usuario } from '../shared/classes/Usuario';
import { Cliente } from '../shared/classes/Cliente';

@Component({
  selector: 'app-minha-conta',
  templateUrl: './minha-conta.component.html',
  styleUrls: ['./minha-conta.component.css']
})
export class MinhaContaComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.user = Cliente.getCliente();
    console.log(this.user);
  }

  user;

  conta: any = {
    id: 1,
    nome: "gustavo",
    idade: "18 anos",
    sexo: "masculino"
  }

}
