import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { EmpresasComponent } from './empresas/empresas.component';
import { ClientesComponent } from './clientes/clientes.component';


@NgModule({
  declarations: [
    AdminComponent,
    EmpresasComponent,
    ClientesComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
