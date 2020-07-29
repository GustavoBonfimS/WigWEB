import { Component, OnInit, Input } from '@angular/core';
import { Avaliacao } from '../classes/Avaliacao';
import { MethodsService } from '../methods.service';
import { BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-info-rating-modal',
  templateUrl: './info-rating-modal.component.html',
  styleUrls: ['./info-rating-modal.component.css']
})
export class InfoRatingModalComponent implements OnInit {

  @Input() avaliacao: Avaliacao;
  @Input() resposta: Avaliacao;

  constructor(private bsModalRef: BsModalRef) { }

  ngOnInit(): void {

  }

  onCancel() {
    this.bsModalRef.hide();
  }

}
