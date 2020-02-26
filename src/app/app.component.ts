import { Component } from '@angular/core';
import { AuthService } from './login/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'WigWEB';

  mostrarMenu: boolean = false;

  constructor(private _authService: AuthService) { }

  ngOnInit(): void {
    this._authService.isUsuarioAutenticado.subscribe(
      mostrar => this.mostrarMenu = mostrar
    );
  }

  sair() {
    alert("sair works")
  }
}