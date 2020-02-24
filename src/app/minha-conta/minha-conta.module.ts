import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AvaliacoesComponent } from './avaliacoes/avaliacoes.component';
import { MinhaContaComponent } from './minha-conta.component';



@NgModule({
  declarations: [AvaliacoesComponent, MinhaContaComponent],
  imports: [
    CommonModule
  ]
})
export class MinhaContaModule { }
