import { Component, OnInit } from '@angular/core';
import { AuthService } from './login/auth.service';
import { ClienteCacheDataService } from './shared/cliente-cache-data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'WigWEB';

  mostrarMenu = false;

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
    this.authService.mostrarMenu.subscribe(
      mostrar => this.mostrarMenu = mostrar
    );
  }

  sair() {
    this.authService.logOut();
  }
}
