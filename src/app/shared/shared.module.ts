import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MethodsService } from './methods.service';
import { HttpClientModule } from '@angular/common/http';
import { AlertModalComponent } from './alert-modal/alert-modal.component';
import { ConfirmModalComponent } from './confirm-modal/confirm-modal.component';
import { AlertModalService } from './alert-modal/alert-modal.service';
import { ClienteCacheDataService } from './cache/cliente-cache-data.service';
import { RatingModalComponent } from './rating-modal/rating-modal.component';
import { FormsModule } from '@angular/forms';
import { EmpresaCacheDataService } from './cache/empresa-cache-data.service'
import { InfoRatingModalComponent } from './info-rating-modal/info-rating-modal.component';

@NgModule({
  declarations: [AlertModalComponent, ConfirmModalComponent, RatingModalComponent, InfoRatingModalComponent],
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
    ClienteCacheDataService,
    EmpresaCacheDataService
  ],
  entryComponents: [
    AlertModalComponent,
    ConfirmModalComponent,
    RatingModalComponent,
    InfoRatingModalComponent
  ]
})
export class SharedModule { }
