import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmpresasComponent } from './empresas.component';
import { PerfilComponent } from './perfil/perfil.component';

const routes: Routes = [
    { path: '', component: EmpresasComponent },
    { path: 'perfil', component: PerfilComponent },

  ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmpresasRoutingModule { }