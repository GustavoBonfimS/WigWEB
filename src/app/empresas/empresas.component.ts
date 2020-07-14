import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Empresa } from '../shared/classes/Empresa';
import { MethodsService } from '../shared/methods.service';

@Component({
  selector: 'app-empresas',
  templateUrl: './empresas.component.html',
  styleUrls: ['./empresas.component.css']
})
export class EmpresasComponent implements OnInit {

  itemHover = false;
  constructor(private methods: MethodsService) { }

  empresas$: Observable<Empresa[]>;
  ngOnInit(): void {
    this.empresas$ = this.methods.listEmpresas();
  }

}
