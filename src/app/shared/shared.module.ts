import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MethodsService } from './methods.service';
import { HttpClientModule } from '@angular/common/http';
import { AlertModalComponent } from './alert-modal/alert-modal.component';
import { ConfirmModalComponent } from './confirm-modal/confirm-modal.component';
import { AlertModalService } from './alert-modal/alert-modal.service';
import { ClienteCacheDataService } from './cliente-cache-data.service';
import { RatingModalComponent } from './rating-modal/rating-modal.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [AlertModalComponent, ConfirmModalComponent, RatingModalComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule
  ],
  exports: [
    AlertModalComponent,
    ConfirmModalComponent,
  ],
  providers: [
    MethodsService,
    AlertModalService,
    ClienteCacheDataService
  ],
  entryComponents: [
    AlertModalComponent,
    ConfirmModalComponent,
    RatingModalComponent
  ]
})
export class SharedModule { }
