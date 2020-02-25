import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PaginaInicialComponent } from './pagina-inicial/pagina-inicial.component';
import { EmpresasComponent } from './empresas/empresas.component';
import { MinhaContaComponent } from './minha-conta/minha-conta.component';


const routes: Routes = [
  { path: 'pagina-inicial', component: PaginaInicialComponent },
  { path: 'empresas', component: EmpresasComponent },
  { path: '', component: PaginaInicialComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }