import { Component, OnInit } from '@angular/core';
import { MethodsService } from 'src/app/shared/methods.service';
import { Observable, EMPTY } from 'rxjs';
import { Avaliacao } from 'src/app/shared/classes/Avaliacao';
import { ClienteCacheDataService } from 'src/app/shared/cache/cliente-cache-data.service';
import { take, switchMap } from 'rxjs/operators';
import { AlertModalService } from 'src/app/shared/alert-modal/alert-modal.service';

@Component({
  selector: 'app-avaliacoes',
  templateUrl: './avaliacoes.component.html',
  styleUrls: ['./avaliacoes.component.css']
})
export class AvaliacoesComponent implements OnInit {

  avaliacoes$: Observable<Avaliacao[]>;
  itemHover = false;

  constructor(
    private methods: MethodsService,
    private alertModalService: AlertModalService,
    private clienteCacheService: ClienteCacheDataService
  ) { }

  ngOnInit(): void {
    this.avaliacoes$ = this.methods.getMinhasAvaliacoes(this.clienteCacheService.getClienteLogado().idcliente)
      .pipe(take(1));
  }

  onSelect(index) {
    this.avaliacoes$.forEach(item => {
      this.methods.getRespostasAvaliacao(item[index].idavaliacao).pipe(take(1))
        .subscribe(resposta => {
          this.alertModalService.showInfoRatingModal(item[index], resposta);
        });
    });
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
          this.avaliacoes$ = this.methods.getMinhasAvaliacoes(this.clienteCacheService.getClienteLogado().idcliente);
        }
      });
  }
}
