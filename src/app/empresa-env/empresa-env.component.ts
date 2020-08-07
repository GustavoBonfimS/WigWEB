import { Component, OnInit } from '@angular/core';
import { AuthService } from '../login/auth.service';
import { AlertModalService } from '../shared/alert-modal/alert-modal.service';
import { take } from 'rxjs/operators';
import { Router } from '@angular/router';

@Component({
  selector: 'app-empresa-env',
  templateUrl: './empresa-env.component.html',
  styleUrls: ['./empresa-env.component.css']
})
export class EmpresaEnvComponent implements OnInit {

  constructor(
    private authService: AuthService,
    private router: Router,
    private alertModal: AlertModalService
  ) { }

  ngOnInit(): void {
    this.router.navigate(['empresa-env/home']);
  }

  sair() {
    this.alertModal.showConfirm('Sair', 'Tem certeza que deseja sair da aplicação?', 'sim', 'cancelar')
    .pipe(take(1))
    .subscribe((res: boolean) => {
      if (res) {
        this.authService.logOut();
      }
    });
  }
}
