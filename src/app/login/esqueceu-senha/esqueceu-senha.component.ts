import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MethodsService } from 'src/app/shared/methods.service';
import { Cliente } from 'src/app/shared/classes/Cliente';
import { take } from 'rxjs/operators';
import { AlertModalService } from 'src/app/shared/alert-modal/alert-modal.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-esqueceu-senha',
  templateUrl: './esqueceu-senha.component.html',
  styleUrls: ['./esqueceu-senha.component.css']
})
export class EsqueceuSenhaComponent implements OnInit {

  formulario: FormGroup;
  submited = false;

  constructor(
    private formBuilder: FormBuilder,
    private methods: MethodsService,
    private alertModalService: AlertModalService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.formulario = this.formBuilder.group({
      email: [null, [Validators.email, Validators.required]],
      senha: [null, Validators.required]
    });
  }

  alterarSenha() {
    this.submited = true;
    if (this.formulario.valid) {
      const fields = new Cliente();
      fields.email = this.formulario.get('email').value;
      fields.senha = this.formulario.get('senha').value;
      this.methods.alterarSenha(fields)
      .pipe(take(1))
      .subscribe(res => {
        if (res != null) {
          this.alertModalService.showAlertSuccess('Senha alterada com sucesso!');
          this.router.navigate(['/login']);
        } else {
          this.alertModalService.showAlertDanger('Nenhum usuario encontrado com esse email');
        }
      })
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
