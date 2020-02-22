import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NgxBootstrapModule } from '../ngx-bootstrap/ngx-bootstrap.module';

@NgModule({
  declarations: [],
  imports: [
    NgxBootstrapModule,
    CommonModule
  ],
  exports: [
    NgxBootstrapModule
  ]
})
export class SharedModule { }
