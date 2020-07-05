import { Component, OnInit } from '@angular/core';
import { AuthService } from './login/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'WigWEB';

  mostrarMenu = false;

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
    this.authService.mostrarMenu.subscribe(
      mostrar => this.mostrarMenu = mostrar
    );
  }

  sair() {
    alert('sair works');
  }
}
