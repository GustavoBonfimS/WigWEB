import { Component, OnInit, Input } from '@angular/core';
import { Subject } from 'rxjs';
import { Avaliacao } from '../classes/Avaliacao';
import { BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-answer-modal',
  templateUrl: './answer-modal.component.html',
  styleUrls: ['./answer-modal.component.css']
})
export class AnswerModalComponent implements OnInit {

  @Input() avaliacao: Avaliacao;
  result: Subject<string>;
  message: string;

  constructor(
    private bsModalRef: BsModalRef
  ) { }

  ngOnInit(): void {
    this.result = new Subject();
  }

  onSend() {
    this.result.next(this.message);
    this.bsModalRef.hide();
  }

  onCancel() {
    this.result.next(null);
    this.bsModalRef.hide();
  }


}
