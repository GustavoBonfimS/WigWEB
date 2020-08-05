import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmpresaEnvRoutingModule } from './empresa-env-routing.module';
import { EmpresaEnvComponent } from './empresa-env.component';


@NgModule({
  declarations: [EmpresaEnvComponent],
  imports: [
    CommonModule,
    EmpresaEnvRoutingModule
  ]
})
export class EmpresaEnvModule { }
