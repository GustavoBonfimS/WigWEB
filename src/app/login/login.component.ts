import { Component, OnInit } from '@angular/core';
import { AuthService } from './auth.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  // tslint:disable-next-line: component-selector
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private authService: AuthService,
              private formBuilder: FormBuilder) { }

  formulario: FormGroup;
  submited = false;

  ngOnInit(): void {
    window.history.forward();
    this.formulario = this.formBuilder.group({
      login: [null, Validators.required],
      senha: [null, Validators.required]
    });
  }

  fazerLogin() {
    this.submited = true;
    if (this.formulario.valid) {
      const login = this.formulario.get('login').value;
      const senha = this.formulario.get('senha').value;
      this.authService.validarLogin(login, senha);
    } else {
      // valida campos
      Object.keys(this.formulario.controls).forEach(item => {
        const campo = this.formulario.get(item);
        campo.markAsTouched({ onlySelf: true });
      });
    }
  }

  isValid(campo) {
    return !this.formulario.get(campo).valid && this.formulario.get(campo).touched;
  }
}
