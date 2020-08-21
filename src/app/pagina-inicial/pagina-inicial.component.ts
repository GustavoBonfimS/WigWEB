import { Component, OnInit } from '@angular/core';
import { MethodsService } from '../shared/methods.service';
import { Avaliacao } from '../shared/classes/Avaliacao';
import { Observable, EMPTY } from 'rxjs';
import { AlertModalService } from '../shared/alert-modal/alert-modal.service';
import { take, switchMap } from 'rxjs/operators';
import { ClienteCacheDataService } from '../shared/cache/cliente-cache-data.service';

@Component({
  selector: 'app-pagina-inicial',
  templateUrl: './pagina-inicial.component.html',
  styleUrls: ['./pagina-inicial.component.css']
})
export class PaginaInicialComponent implements OnInit {

  constructor(
    private methods: MethodsService,
    private clienteCacheData: ClienteCacheDataService,
    private alertModalService: AlertModalService
  ) { }

  avaliacoes$: Observable<Avaliacao[]>;

  ngOnInit(): void {
    this.avaliacoes$ = this.methods.listAvaliacoes();
  }

  showRespostas(index: number) {
    this.avaliacoes$.forEach(item => {
      this.methods.getRespostasAvaliacao(item[index].idavaliacao).pipe(take(1))
        .subscribe(resposta => {
          this.alertModalService.showInfoRatingModal(item[index], resposta);
        });
    });
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
    this.alertModalService.showConfirm(title, msg)
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
          this.alertModalService.showAlertSuccess('Excluido com sucesso!');
          this.avaliacoes$ = this.methods.listAvaliacoes();
        }
      });
  }
}
