import { Component, OnInit } from '@angular/core';
import { MethodsService } from '../shared/methods.service';
import { Avaliacao } from '../shared/classes/Avaliacao';
import { Empresa } from '../shared/classes/Empresa';
import { Observable } from 'rxjs';
import { AlertModalService } from '../shared/alert-modal/alert-modal.service';
import { take } from 'rxjs/operators';

@Component({
  selector: 'app-pagina-inicial',
  templateUrl: './pagina-inicial.component.html',
  styleUrls: ['./pagina-inicial.component.css']
})
export class PaginaInicialComponent implements OnInit {

  constructor(
    private methods: MethodsService,
    private alertModalService: AlertModalService
  ) { }

  avaliacoes$: Observable<Avaliacao[]>;

  ngOnInit(): void {
    // usar o service para buscar avaliacoes
    this.avaliacoes$ = this.methods.listAvaliacoes();
  }

  showRespostas(index: number) {
    this.avaliacoes$.forEach(item => {
      this.methods.getRespostasAvaliacao(item[index].idavaliacao).pipe(take(1))
        .subscribe(resposta => {
          this.alertModalService.shwoInfoRatingModal(item[index], resposta);
        });
    });
  }
}
