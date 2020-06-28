import { Component, OnInit } from '@angular/core';
import { AuthService } from './auth.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private authService: AuthService, private formBuilder: FormBuilder) { }

  formulario: FormGroup;
  mostrarErroUsername = false;
  mostrarErroSenha = false;

  ngOnInit(): void {
    this.formulario = this.formBuilder.group({
      username: [null, Validators.required],
      senha: [null, Validators.required]
    });
  }

  fazerLogin() {
    if (this.formulario.valid) {
      //  console.log(this.formulario);
      // this.authService.validarLogin(this.login, this.senha);
    } else {
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
