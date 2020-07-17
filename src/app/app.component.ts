import { Component, OnInit } from '@angular/core';
import { AuthService } from './login/auth.service';
import { ClienteCacheDataService } from './shared/cliente-cache-data.service';
import { Router } from '@angular/router';
import { AlertModalService } from './shared/alert-modal/alert-modal.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'WigWEB';

  mostrarMenu = false;

  constructor(private authService: AuthService, 
              private alertModal: AlertModalService) { }

  ngOnInit(): void {
    this.authService.mostrarMenu.subscribe(
      mostrar => this.mostrarMenu = mostrar
    );
  }

  sair() {
    this.alertModal.showConfirm('Sair', 'Tem certeza que deseja sair da aplicação?', 'sim', 'cancelar')
    .subscribe((res: boolean) => {
      if (res === true) {
        this.authService.logOut();
      }
    })
  }
}
