import { Component, OnInit, Input } from '@angular/core';
import { Empresa } from '../classes/Empresa';
import { ClienteCacheDataService } from '../cache/cliente-cache-data.service';
import { Cliente } from '../classes/Cliente';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-rating-modal',
  templateUrl: './rating-modal.component.html',
  styleUrls: ['./rating-modal.component.css']
})
export class RatingModalComponent implements OnInit {

  message: string;
  @Input() empresa: Empresa;
  cliente: Cliente;
  result: Subject<string>;

  constructor(private bsModalRef: BsModalRef,
              private clienteCacheData: ClienteCacheDataService) { }

  ngOnInit(): void {
    this.cliente = this.clienteCacheData.getClienteLogado();
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
