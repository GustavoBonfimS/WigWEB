import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmpresaEnvRoutingModule } from './empresa-env-routing.module';
import { EmpresaEnvComponent } from './empresa-env.component';
import { AvaliacoesComponent } from './avaliacoes/avaliacoes.component';
import { HomeComponent } from './home/home.component';


@NgModule({
  declarations: [EmpresaEnvComponent, AvaliacoesComponent, HomeComponent],
  imports: [
    CommonModule,
    EmpresaEnvRoutingModule
  ]
})
export class EmpresaEnvModule { }
