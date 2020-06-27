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

  usernmae: any;
  senha: any;
  formulario: FormGroup;

  ngOnInit(): void {
    this.formulario = this.formBuilder.group({
      username: [null, Validators.required],
      senha: [null, Validators.required]
    });
  }

  fazerLogin() {
    if (this.formulario.valid) {

      // this.authService.validarLogin(this.login, this.senha);
      console.log(this.formulario);
    }
  }
}
