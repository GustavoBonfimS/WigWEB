import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './admin.component';
import { EmpresasComponent } from './empresas/empresas.component';
import { ClientesComponent } from './clientes/clientes.component';
import { HomeComponent } from './home/home.component';


const routes: Routes = [
  {
    path: '', component: AdminComponent, children: [
      { path: 'empresas', component: EmpresasComponent },
      { path: 'home', component: HomeComponent },
      { path: 'clientes', component: ClientesComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
