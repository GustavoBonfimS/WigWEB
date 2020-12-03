import { Injectable } from '@angular/core';
import { io } from 'socket.io-client';
import { Observable } from 'rxjs';
import { Avaliacao } from './classes/Avaliacao';

@Injectable({
  providedIn: 'root'
})
export class SocketIOService {

  socket;

  constructor() {
    this.socket = io('localhost:3333', {
      query: {
        idCliente: 2
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
