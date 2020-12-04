import { Injectable } from '@angular/core';
import { io } from 'socket.io-client';
import { Observable } from 'rxjs';
import { Avaliacao } from './classes/Avaliacao';
import { ClienteCacheDataService } from './cache/cliente-cache-data.service';

@Injectable({
  providedIn: 'root'
})
export class SocketIOService {

  socket;

  constructor() {

   }

   connect(idcliente: number) {
    this.socket = io('localhost:3333', {
      query: {
        idCliente: idcliente
      }
    });
   }

  getNotifications(): Observable<Avaliacao> {
    return new Observable<Avaliacao>(observer => {
      this.socket.on('newNotification', (notif) => {
        observer.next(notif);
      });
    });
  }
}
