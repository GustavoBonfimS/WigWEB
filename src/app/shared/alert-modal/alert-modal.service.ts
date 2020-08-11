import { Injectable } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { AlertModalComponent } from './alert-modal.component';
import { ConfirmModalComponent } from '../confirm-modal/confirm-modal.component';
import { RatingModalComponent } from '../rating-modal/rating-modal.component';
import { Empresa } from '../classes/Empresa';
import { Avaliacao } from '../classes/Avaliacao';
import { InfoRatingModalComponent } from '../info-rating-modal/info-rating-modal.component';
import { AnswerModalComponent } from '../answer-modal/answer-modal.component';

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
    return (bsModalRef.content as RatingModalComponent).result;
  }

  showInfoRatingModal(avaliacao: Avaliacao, resposta: Avaliacao) {
    const bsModalRef: BsModalRef = this.modalService.show(InfoRatingModalComponent);
    bsModalRef.content.avaliacao = avaliacao;
    bsModalRef.content.resposta = resposta;
  }

  showAnswerModal(avaliacao: Avaliacao) {
    const bsModalRef: BsModalRef = this.modalService.show(AnswerModalComponent);
    bsModalRef.content.avaliacao = avaliacao;
    return (bsModalRef.content as AnswerModalComponent).result;
  }
}
