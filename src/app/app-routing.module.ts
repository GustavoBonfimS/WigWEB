import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PaginaInicialComponent } from './pagina-inicial/pagina-inicial.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  { path: '', component: PaginaInicialComponent,
    canActivate: [AuthGuard] },
  { path: 'login', component: LoginComponent },
  { path: 'pagina-inicial', component: PaginaInicialComponent,
    canActivate: [AuthGuard] },
  // lazy loading
  { path: 'empresas', loadChildren: () =>
    import('./empresas/empresas.module').then(m => m.EmpresasModule),
    canActivate: [AuthGuard] },
  // lazy loading
  { path: "minha-conta", loadChildren: () =>
    import('./minha-conta/minha-conta.module').then(m => m.MinhaContaModule),
    canActivate: [AuthGuard] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }