import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PaginaInicialComponent } from './pagina-inicial/pagina-inicial.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './guards/auth.guard';
import { NotFoundComponent } from './not-found/not-found.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  {
    path: 'pagina-inicial/:login', component: PaginaInicialComponent,
    canActivate: [AuthGuard], canLoad: [AuthGuard]
  },
  {
    path: 'empresas', loadChildren: () =>
      import('./empresas/empresas.module').then(m => m.EmpresasModule),
    canActivate: [AuthGuard], canLoad: [AuthGuard]
  },
  {
    path: 'minha-conta', loadChildren: () =>
      import('./minha-conta/minha-conta.module').then(m => m.MinhaContaModule),
    canActivate: [AuthGuard], canLoad: [AuthGuard]
  },
  {
    path: '', component: PaginaInicialComponent,
    canActivate: [AuthGuard], canLoad: [AuthGuard]
  },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
