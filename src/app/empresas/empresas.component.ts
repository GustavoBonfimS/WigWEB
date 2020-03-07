import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-empresas',
  templateUrl: './empresas.component.html',
  styleUrls: ['./empresas.component.css']
})
export class EmpresasComponent implements OnInit {

  constructor() { }

  nomes: any;
  ngOnInit(): void {
    this.nomes = ["teste1", "testando", "outroteste"];

  }

}
