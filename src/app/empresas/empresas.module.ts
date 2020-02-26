import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmpresasComponent } from './empresas.component';
import { EmpresasRoutingModule } from './empresas-routing.module';
import { PerfilComponent } from './perfil/perfil.component';



@NgModule({
  declarations: [EmpresasComponent, PerfilComponent],
  imports: [
    CommonModule,
    EmpresasRoutingModule
  ]
})
export class EmpresasModule { }
