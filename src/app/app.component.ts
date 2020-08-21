import { Component, OnInit, OnDestroy } from '@angular/core';
import { AuthService } from './login/auth.service';
import { ClienteCacheDataService } from './shared/cache/cliente-cache-data.service';
import { Router } from '@angular/router';
import { AlertModalService } from './shared/alert-modal/alert-modal.service';
import { take } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'WigWEB';

  mostrarMenu = false;
  search = '';

  constructor(
    private authService: AuthService,
    private alertModal: AlertModalService,
    private router: Router
  ) { }

  ngOnDestroy(): void {
    this.authService.logOut();
  }

  ngOnInit(): void {
    this.authService.mostrarMenu.subscribe(
      mostrar => this.mostrarMenu = mostrar
    );
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

  pesquisar() {
    if (this.search.trim() === '' || this.search == null) {
      this.alertModal.showAlertDanger('Informe uma empresa para pesquisar');
    } else {
      this.search = this.search.trim();
      this.router.navigate(['pesquisar'], { queryParams: { emp: this.search } });
      this.search = '';
    }
  }
}
