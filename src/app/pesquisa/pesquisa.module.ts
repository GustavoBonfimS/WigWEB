import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PesquisaComponent } from './pesquisa.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    PesquisaComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class PesquisaModule { }
