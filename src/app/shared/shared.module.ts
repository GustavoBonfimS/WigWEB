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
import { EmpresaCacheDataService } from './cache/empresa-cache-data.service';
import { InfoRatingModalComponent } from './info-rating-modal/info-rating-modal.component';
import { AnswerModalComponent } from './answer-modal/answer-modal.component';
import { AdminCacheDataService } from './cache/admin-cache-data.service';
import { SocketIOService } from './socket-io.service';

@NgModule({
  declarations: [
    AlertModalComponent,
    ConfirmModalComponent,
    RatingModalComponent,
    InfoRatingModalComponent,
    AnswerModalComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule
  ],
  exports: [
    AlertModalComponent,
    ConfirmModalComponent,
    RatingModalComponent,
    InfoRatingModalComponent,
    AnswerModalComponent
  ],
  providers: [
    MethodsService,
    AlertModalService,
    ClienteCacheDataService,
    EmpresaCacheDataService,
    AdminCacheDataService,
    SocketIOService
  ],
  entryComponents: [
    AlertModalComponent,
    ConfirmModalComponent,
    RatingModalComponent,
    InfoRatingModalComponent,
    AnswerModalComponent
  ]
})
export class SharedModule { }
