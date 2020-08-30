import { Component, OnInit } from '@angular/core';
import { MethodsService } from 'src/app/shared/methods.service';
import { Observable, EMPTY } from 'rxjs';
import { Avaliacao } from 'src/app/shared/classes/Avaliacao';
import { ClienteCacheDataService } from 'src/app/shared/cache/cliente-cache-data.service';
import { take, switchMap, tap } from 'rxjs/operators';
import { AlertModalService } from 'src/app/shared/alert-modal/alert-modal.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-avaliacoes',
  templateUrl: './avaliacoes.component.html',
  styleUrls: ['./avaliacoes.component.css']
})
export class AvaliacoesComponent implements OnInit {

  avaliacoes: Avaliacao[];
  itemHover = false;

  constructor(
    private methods: MethodsService,
    private activatedRoute: ActivatedRoute,
    private alertModalService: AlertModalService,
    private clienteCacheService: ClienteCacheDataService
  ) { }

  ngOnInit(): void {
    this.activatedRoute.data
      .pipe(
        take(1),
        switchMap(data => {
          if (!data.avaliacoes) {
            return this.methods.getMinhasAvaliacoes(parseInt(localStorage.getItem('userId'), 10));
          } else {
            return this.activatedRoute.data.pipe(take(1));
          }
        })
      )
      .subscribe(av => {
        if (av.avaliacoes) {
          this.avaliacoes = av.avaliacoes;
        } else {
          this.avaliacoes = av;
        }
      });
  }

  onSelect(idavaliacao: number, index: number) {
    this.methods.getRespostasAvaliacao(idavaliacao).pipe(take(1))
      .subscribe(resposta => {
        this.alertModalService.showInfoRatingModal(this.avaliacoes[index], resposta);
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
        }),
        switchMap((deleted: boolean) => {
          if (deleted) {
            this.alertModalService.showAlertSuccess('Excluido com sucesso!');
            // refresh avs
            return this.methods.getMinhasAvaliacoes(parseInt(localStorage.getItem('userId'), 10));
          }
          return EMPTY;
        })
      ).subscribe((avs) => {
        if (avs) {
          this.avaliacoes = avs;
        }
      });
  }
}
