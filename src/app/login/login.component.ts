import { Component, OnInit } from '@angular/core';
import { AuthService } from './auth.service';
import { Usuario } from '../shared/classes/Usuario';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private _authService: AuthService) { }

  ngOnInit(): void {
  }

  login: any;
  senha: any;
  setUsuario() {
    Usuario.login = this.login;
    Usuario.senha = this.senha;
  }

  fazerLogin() {
    this._authService.validarLogin();
  }
}
