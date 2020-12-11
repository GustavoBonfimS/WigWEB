import { Component, OnInit } from '@angular/core';
import { MethodsService } from '../shared/methods.service';
import { Avaliacao } from '../shared/classes/Avaliacao';
import { Observable, EMPTY } from 'rxjs';
import { AlertModalService } from '../shared/alert-modal/alert-modal.service';
import { take, switchMap } from 'rxjs/operators';
import { ClienteCacheDataService } from '../shared/cache/cliente-cache-data.service';
import { SocketIOService } from '../shared/socket-io.service';
import { NotificationsService } from 'angular2-notifications';

@Component({
  selector: 'app-pagina-inicial',
  templateUrl: './pagina-inicial.component.html',
  styleUrls: ['./pagina-inicial.component.css']
})
export class PaginaInicialComponent implements OnInit {

  constructor(
    private methods: MethodsService,
    private alertModalService: AlertModalService,
    private socketService: SocketIOService,
    private clienteCacheData: ClienteCacheDataService,
    private notificationService: NotificationsService
  ) { }

  avaliacoes$: Observable<Avaliacao[]>;

  ngOnInit(): void {
    Notification.requestPermission();
    this.avaliacoes$ = this.methods.listAvaliacoes();
    this.clienteCacheData.awaitToLoad().pipe(
      take(1),
      switchMap(c => {
        this.socketService.connect(c.idcliente);
        return this.socketService.getNotifications();
      }),
      take(1)
    ).subscribe((ntf: Avaliacao) => {
      const tabIsFocused = !document.hidden;
      if (tabIsFocused) {
        this.notificationService.info('Avaliação respondida!', `Sua avaliação em ${ntf.autor} foi respondida!`, {
          timeOut: 4000,
          showProgressBar: true,
          pauseOnHover: true,
          clickToClose: true
        });
      } else {
        var ntfOut = new Notification('Avaliação respondida!', {
          body: `Sua avaliação em ${ntf.autor} foi respondida!`
        })
      }
    });
  }

  showRespostas(index: number) {
    this.avaliacoes$.forEach(item => {
      this.methods.getRespostasAvaliacao(item[index].idavaliacao).pipe(take(1))
        .subscribe(resposta => {
          this.alertModalService.showInfoRatingModal(item[index], resposta);
        });
    });
  }
}
