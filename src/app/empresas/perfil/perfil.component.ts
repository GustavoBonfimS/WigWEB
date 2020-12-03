import { Component, OnInit } from '@angular/core';
import { MethodsService } from 'src/app/shared/methods.service';
import { ActivatedRoute } from '@angular/router';
import { Empresa } from 'src/app/shared/classes/Empresa';
import { take, switchMap } from 'rxjs/operators';
import { Observable, EMPTY } from 'rxjs';
import { AlertModalService } from 'src/app/shared/alert-modal/alert-modal.service';
import { Avaliacao } from 'src/app/shared/classes/Avaliacao';
import { Cliente } from 'src/app/shared/classes/Cliente';
import { ClienteCacheDataService } from 'src/app/shared/cache/cliente-cache-data.service';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {

  empresa: Empresa;
  avaliacoes$: Observable<Empresa[]>;
  cliente: Cliente;

  constructor(
    private methods: MethodsService,
    private activateRoute: ActivatedRoute,
    private modalService: AlertModalService,
    private clienteCacheData: ClienteCacheDataService
  ) { }

  ngOnInit(): void {
    this.empresa = new Empresa();
    this.activateRoute.params
      .pipe(
        take(1),
        switchMap(params => {
          return this.methods.getEmpresaPeloNome(params.nome);
        })
      )
      .subscribe(
        empresa => {
          this.empresa = empresa;
          this.avaliacoes$ = this.methods.getAvaliacoesEmpresas(this.empresa.idempresa);
        }
      );

    this.methods.getClienteByUserId(parseInt(localStorage.getItem('userId'), 10)).subscribe(user => {
      this.cliente = user;
    });
  }

  fazerAvaliacao() {
    this.modalService.showRatingModal(this.empresa)
      .pipe(
        take(1),
        switchMap(message => {
          if (message != null) {
            const avaliacao = new Avaliacao();
            avaliacao.autor = this.cliente.login;
            avaliacao.conteudo = message;
            avaliacao.idcliente = this.cliente.idcliente;
            avaliacao.idempresa = this.empresa.idempresa;
            return this.methods.insertAvaliacao(avaliacao);
          } else {
            return EMPTY;
          }
        })
      )
      .subscribe(response => {
        if (response != null) {
          this.modalService.showAlertSuccess('Enviado com sucesso!');
          this.avaliacoes$ = this.methods.getAvaliacoesEmpresas(this.empresa.idempresa);
        }
      }
      );
  }

  showDeleteButton(idcliente: number) {
    if (idcliente === this.clienteCacheData.getClienteLogado().idcliente) {
      return true;
    }
    return false;
  }

  onDelete(idavaliacao: number) {
    const title = 'Excluir avaliação?';
    const msg = 'Tem certeza que deseja excluir a avaliação?';
    this.modalService.showConfirm(title, msg)
      .pipe(
        take(1),
        switchMap((res: boolean) => {
          if (res) {
            return this.methods.deleteAvaliacao(idavaliacao);
          }
          return EMPTY;
        })
      ).subscribe((result: boolean) => {
        if (result) {
          this.modalService.showAlertSuccess('Excluido com sucesso!');
          this.avaliacoes$ = this.methods.getAvaliacoesEmpresas(this.empresa.idempresa);
        }
      });
  }

}
