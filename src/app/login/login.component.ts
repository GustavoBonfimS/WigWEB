import { Component, OnInit } from '@angular/core';
import { AuthService } from './auth.service';
import { Usuario } from '../classes/Usuario';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private _authService: AuthService) { }

  ngOnInit(): void {
  }

  usuario: Usuario = new Usuario();

  fazerLogin() {
    this._authService.validarLogin(this.usuario);
  }
}
