import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AvaliacoesComponent } from './avaliacoes/avaliacoes.component';
import { MinhaContaComponent } from './minha-conta.component';
import { MinhaContaRoutingModule } from './minha-conta-routing.module';
import { RespostasComponent } from './respostas/respostas.component';



@NgModule({
  declarations: [AvaliacoesComponent, MinhaContaComponent, RespostasComponent],
  imports: [
    CommonModule,
    MinhaContaRoutingModule
  ]
})
export class MinhaContaModule { }
