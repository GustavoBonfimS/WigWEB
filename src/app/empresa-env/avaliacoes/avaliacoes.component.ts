import { Component, OnInit } from '@angular/core';
import { Avaliacao } from 'src/app/shared/classes/Avaliacao';
import { Observable } from 'rxjs';
import { MethodsService } from 'src/app/shared/methods.service';
import { take } from 'rxjs/operators';
import { EmpresaCacheDataService } from 'src/app/shared/cache/empresa-cache-data.service';
import { Empresa } from 'src/app/shared/classes/Empresa';

@Component({
  selector: 'app-avaliacoes',
  templateUrl: './avaliacoes.component.html',
  styleUrls: ['./avaliacoes.component.css']
})
export class AvaliacoesComponent implements OnInit {

  itemHover = false;
  empresa: Empresa;
  avaliacoes$: Observable<Avaliacao[]>;

  constructor(
    private methods: MethodsService,
    private empresaCacheData: EmpresaCacheDataService
  ) { }

  ngOnInit(): void {
    this.empresa = this.empresaCacheData.getEmpresa();
    this.avaliacoes$ = this.methods.getAvaliacoesEmpresas(this.empresa.idempresa);
  }

  onSelect(index) {
    this.avaliacoes$.forEach(item => {
    });
  }

}
