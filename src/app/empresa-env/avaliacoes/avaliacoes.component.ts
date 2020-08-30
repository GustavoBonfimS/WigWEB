import { Component, OnInit } from '@angular/core';
import { Avaliacao } from 'src/app/shared/classes/Avaliacao';
import { Observable, EMPTY } from 'rxjs';
import { MethodsService } from 'src/app/shared/methods.service';
import { take, switchMap } from 'rxjs/operators';
import { EmpresaCacheDataService } from 'src/app/shared/cache/empresa-cache-data.service';
import { Empresa } from 'src/app/shared/classes/Empresa';
import { AlertModalService } from 'src/app/shared/alert-modal/alert-modal.service';

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
    private alertModalService: AlertModalService,
    private empresaCacheData: EmpresaCacheDataService
  ) { }

  ngOnInit(): void {
    this.empresa = this.empresaCacheData.getEmpresa();
    this.avaliacoes$ = this.methods.getAvaliacoesEmpresas(this.empresa.idempresa);
  }

  onSelect(index) {
    this.avaliacoes$.forEach(item => {
      this.alertModalService.showAnswerModal(item[index])
      .pipe(
        take(1),
        switchMap(message => {
          if (message != null) {
            const avaliacao = new Avaliacao();
            avaliacao.autor = this.empresa.login;
            avaliacao.conteudo = message;
            avaliacao.idcliente = item[index].idcliente;
            avaliacao.idavaliacao = item[index].idavaliacao;
            avaliacao.idempresa = this.empresa.idempresa;
            return this.methods.responderAvaliacao(avaliacao);
          } else {
            return EMPTY;
          }
        })
      )
    .subscribe(res => {
      if (res != null) {
        this.alertModalService.showAlertSuccess('Sucesso ao responder avaliação!');
      }
    })
    });
  }

}
