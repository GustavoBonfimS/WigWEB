import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AvaliacoesComponent } from './avaliacoes/avaliacoes.component';
import { MinhaContaComponent } from './minha-conta.component';
import { MinhaContaRoutingModule } from './minha-conta-routing.module';
import { MinhaContaResolverService } from './minha-conta.resolver.service';

@NgModule({
  declarations: [
    AvaliacoesComponent,
    MinhaContaComponent
  ],
  imports: [
    CommonModule,
    MinhaContaRoutingModule
  ],
  providers: [
    MinhaContaResolverService
  ]
})
export class MinhaContaModule { }
