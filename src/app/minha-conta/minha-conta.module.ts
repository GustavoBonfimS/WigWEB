import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AvaliacoesComponent } from './avaliacoes/avaliacoes.component';
import { MinhaContaComponent } from './minha-conta.component';
import { MinhaContaRoutingModule } from './minha-conta-routing.module';
import { MinhaContaResolverService } from './minha-conta.resolver.service';
import { AvaliacoesResolverService } from './avaliacoes/avaliacoes.resolver.service';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AvaliacoesComponent,
    MinhaContaComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    MinhaContaRoutingModule
  ],
  providers: [
    MinhaContaResolverService,
    AvaliacoesResolverService
  ]
})
export class MinhaContaModule { }
