import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { MethodsService } from 'src/app/shared/methods.service';
import { ClienteCacheDataService } from 'src/app/shared/cliente-cache-data.service';
import { Avaliacao } from 'src/app/shared/classes/Avaliacao';
import { tap, take } from 'rxjs/operators';
import { AlertModalService } from 'src/app/shared/alert-modal/alert-modal.service';

@Component({
  selector: 'app-respostas',
  templateUrl: './respostas.component.html',
  styleUrls: ['./respostas.component.css']
})
export class RespostasComponent implements OnInit {

  itemHover = false;
  respostas$: Observable<Avaliacao[]>;

  constructor(
    private methods: MethodsService,
    private clienteCacheService: ClienteCacheDataService,
    private alertoModalService: AlertModalService
  ) { }

  ngOnInit(): void {
    const idCliente = this.clienteCacheService.getClienteLogado().idcliente;
    this.respostas$ = this.methods.getRespostasDoCliente(idCliente);
  }

  onSelect(index) {
    this.respostas$.forEach(item => {
      this.methods.getAvaliacaoByid(item[index].idavaliacao).pipe(take(1))
        .subscribe(av => {
          this.alertoModalService.shwoInfoRatingModal(av, item[index]);
        });
    });
  }

}
