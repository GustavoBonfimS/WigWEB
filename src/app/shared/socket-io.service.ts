import { Injectable } from '@angular/core';
import { io } from 'socket.io-client';
import { Observable } from 'rxjs';
import { NotificationModel } from './classes/NotificationModel';
import { Avaliacao } from './classes/Avaliacao';

@Injectable({
  providedIn: 'root'
})
export class SocketIOService {

  socket;

  constructor() {
    this.socket = io('localhost:3333');
   }

  getNotifications(): Observable<NotificationModel> {
    return new Observable<NotificationModel>(observer => {
      this.socket.on('newNotification', (notif) => {
        observer.next(notif);
      });
    });
  }
}
