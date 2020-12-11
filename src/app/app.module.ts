import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './login/login.component';
import { AuthService } from './login/auth.service';
import { AuthGuard } from './guards/auth.guard';
import { NotFoundComponent } from './not-found/not-found.component';
import { PaginaInicialModule } from './pagina-inicial/pagina-inicial.module';
import { ModalModule } from 'ngx-bootstrap/modal';
import { CriarContaComponent } from './login/criar-conta/criar-conta.component';
import { PesquisaModule } from './pesquisa/pesquisa.module';
import { EsqueceuSenhaComponent } from './login/esqueceu-senha/esqueceu-senha.component';
import { SimpleNotificationsModule } from 'angular2-notifications';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NotFoundComponent,
    CriarContaComponent,
    EsqueceuSenhaComponent
  ],
  imports: [
    SharedModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    PaginaInicialModule,
    PesquisaModule,
    ModalModule.forRoot(),
    SimpleNotificationsModule.forRoot()
  ],
  providers: [AuthService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
