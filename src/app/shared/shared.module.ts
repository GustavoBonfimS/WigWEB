import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MethodsService } from './methods.service';
import { HttpClientModule } from '@angular/common/http';
import { AlertModalComponent } from './alert-modal/alert-modal.component';


@NgModule({
  declarations: [AlertModalComponent],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  exports: [
    AlertModalComponent
  ],
  providers: [
    MethodsService,
  ],
  entryComponents: [
    AlertModalComponent
  ]
})
export class SharedModule { }
