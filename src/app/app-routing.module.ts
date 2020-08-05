import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PaginaInicialComponent } from './pagina-inicial/pagina-inicial.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './guards/auth.guard';
import { NotFoundComponent } from './not-found/not-found.component';
import { CriarContaComponent } from './login/criar-conta/criar-conta.component';
import { PesquisaComponent } from './pesquisa/pesquisa.component';
import { EsqueceuSenhaComponent } from './login/esqueceu-senha/esqueceu-senha.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'criar-conta', component: CriarContaComponent },
  { path: 'forget', component: EsqueceuSenhaComponent },
  {
    path: 'pagina-inicial', component: PaginaInicialComponent,
    canActivate: [AuthGuard], canLoad: [AuthGuard]
  },
  {
    path: 'pesquisar', component: PesquisaComponent,
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
    path: 'admin', loadChildren: () =>
      import('./admin/admin.module').then(m => m.AdminModule),
    canActivate: [AuthGuard], canLoad: [AuthGuard]
  },
  {
    path: 'empresa-env', loadChildren: () =>
      import('./empresa-env/empresa-env.module').then(m => m.EmpresaEnvModule),
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
