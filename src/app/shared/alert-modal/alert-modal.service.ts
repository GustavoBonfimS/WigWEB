import { Injectable } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { AlertModalComponent } from './alert-modal.component';
import { ConfirmModalComponent } from '../confirm-modal/confirm-modal.component';
import { RatingModalComponent } from '../rating-modal/rating-modal.component';
import { Empresa } from '../classes/Empresa';

enum AlertTypes {
  DANGER = 'danger',
  SUCCESS = 'success',
  WARNING = 'warning'
}

@Injectable({
  providedIn: 'root'
})
export class AlertModalService {

  constructor(private modalService: BsModalService) { }

  private showAlert(message: string, type: AlertTypes) {
    const bsModalRef: BsModalRef = this.modalService.show(AlertModalComponent);
    bsModalRef.content.message = message;
    bsModalRef.content.type = type;
  }

  showAlertDanger(message) {
    this.showAlert(message, AlertTypes.DANGER);
  }

  showAlertSuccess(message) {
    this.showAlert(message, AlertTypes.SUCCESS);
  }

  showAlertWarning(message) {
    this.showAlert(message, AlertTypes.WARNING);
  }

  showConfirm(title: string, msg: string, okTXt?: string, cancelTxt?: string) {
    const bsModalRef: BsModalRef = this.modalService.show(ConfirmModalComponent);
    bsModalRef.content.title = title;
    bsModalRef.content.message = msg;

    if (okTXt) {
      bsModalRef.content.okTxt = okTXt;
    }

    if (cancelTxt) {
      bsModalRef.content.cancelTxt = cancelTxt;
    }

    return (bsModalRef.content as ConfirmModalComponent).confirmResult;
  }

  showRatingModal(empresa: Empresa) {
    const bsModalRef: BsModalRef = this.modalService.show(RatingModalComponent);
    bsModalRef.content.empresa = empresa;
  }
}
