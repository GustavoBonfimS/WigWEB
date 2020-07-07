import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MethodsService } from './methods.service';
import { HttpClientModule } from '@angular/common/http';
import { AlertModalComponent } from './alert-modal/alert-modal.component';
import { ConfirmModalComponent } from './confirm-modal/confirm-modal.component';
import { AlertModalService } from './alert-modal/alert-modal.service';


@NgModule({
  declarations: [AlertModalComponent, ConfirmModalComponent],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  exports: [
    AlertModalComponent,
    ConfirmModalComponent,
  ],
  providers: [
    MethodsService,
    AlertModalService
  ],
  entryComponents: [
    AlertModalComponent,
    ConfirmModalComponent
  ]
})
export class SharedModule { }
