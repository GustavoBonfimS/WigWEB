import { Component, OnInit } from '@angular/core';
import { AuthService } from '../login/auth.service';
import { AlertModalService } from '../shared/alert-modal/alert-modal.service';
import { take } from 'rxjs/operators';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  constructor(
    private authService: AuthService,
    private alertModal: AlertModalService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.router.navigate(['admin/home']);
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
