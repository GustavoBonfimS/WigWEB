import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmpresaEnvComponent } from './empresa-env.component';


const routes: Routes = [
  {
    path: '', component: EmpresaEnvComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmpresaEnvRoutingModule { }
