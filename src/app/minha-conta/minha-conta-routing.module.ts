import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MinhaContaComponent } from './minha-conta.component';
import { AvaliacoesComponent } from './avaliacoes/avaliacoes.component';
import { AvaliacoesResolverService } from './avaliacoes/avaliacoes.resolver.service';

const routes: Routes = [
  { path: '', component: MinhaContaComponent, children: [
    { path: 'avaliacoes', component: AvaliacoesComponent,
      resolve: { avaliacoes: AvaliacoesResolverService } }
  ]},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MinhaContaRoutingModule { }
