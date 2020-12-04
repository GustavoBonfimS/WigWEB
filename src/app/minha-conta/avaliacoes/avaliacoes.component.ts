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

  avaliacoes: Observable<Avaliacao[]>;
  itemHover = false;

  constructor(
    private methods: MethodsService,
    private alertModalService: AlertModalService,
    private clienteCacheService: ClienteCacheDataService
  ) { }

  ngOnInit(): void {
    const userid = parseInt(localStorage.getItem('userId'), 10);
    this.avaliacoes = this.methods.getMinhasAvaliacoesByIdUser(userid);
  }

  onSelect(av: Avaliacao, index: number) {
    this.methods.getRespostasAvaliacao(av.idavaliacao).pipe(take(1))
      .subscribe(resposta => {
        console.log(this.avaliacoes[index]);
        this.alertModalService.showInfoRatingModal(av, resposta);
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
      ).subscribe((deleted) => {
        console.log(deleted);
        if (deleted) {
          this.alertModalService.showAlertSuccess('Excluido com sucesso!');
          const userid = parseInt(localStorage.getItem('userId'), 10);
          this.avaliacoes = this.methods.getMinhasAvaliacoesByIdUser(userid);
        }
      });
  }
}
