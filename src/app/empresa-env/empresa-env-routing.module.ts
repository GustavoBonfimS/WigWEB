import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmpresaEnvComponent } from './empresa-env.component';
import { AvaliacoesComponent } from './avaliacoes/avaliacoes.component';
import { HomeComponent } from './home/home.component';


const routes: Routes = [
  {
    path: '', component: EmpresaEnvComponent, children: [
      { path: 'avaliacoes', component: AvaliacoesComponent },
      { path: 'home', component: HomeComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmpresaEnvRoutingModule { }
