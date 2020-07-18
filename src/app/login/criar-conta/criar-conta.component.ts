import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MethodsService } from 'src/app/shared/methods.service';import { AlertModalService } from 'src/app/shared/alert-modal/alert-modal.service';

@Component({
  selector: 'app-criar-conta',
  templateUrl: './criar-conta.component.html',
  styleUrls: ['./criar-conta.component.css']
})
export class CriarContaComponent implements OnInit {

  formulario: FormGroup;
  submited = false;

  constructor(private builder: FormBuilder,
              private methods: MethodsService,
              private modalService: AlertModalService) { }

  ngOnInit(): void {
    this.formulario = this.builder.group({
      username: [null, Validators.required],
      senha: [null, Validators.required],
      confirmarSenha: [null, Validators.required],
      email: [null, [Validators.email, Validators.required]]
    });
  }

  cadastrar() {
    this.submited = true;
    if (this.formulario.valid) {
      if (this.formulario.get('senha').value === this.formulario.get('confirmarSenha').value) {
        // certo
      } else {
        this.modalService.showAlertDanger('As senhas não são iguais.');
      }
    } else {
      // validations
      Object.keys(this.formulario.controls).forEach(item => {
        const campo = this.formulario.get(item);
        campo.markAsTouched({ onlySelf: true });
      });
      if (!this.formulario.get('email').valid) {
        this.modalService.showAlertDanger('Email invalido');
        return;
      }
      this.modalService.showAlertDanger('Campos obrigatórios não preenchidos');
    }
  }

  isConfirmed() {
    return true;
  }

  isValid(campo) {
    return !this.formulario.get(campo).valid && this.formulario.get(campo).touched;
  }

}
