import { Component, OnInit, Input } from '@angular/core';
import { MethodsService } from '../methods.service';
import { Empresa } from '../classes/Empresa';
import { ClienteCacheDataService } from '../cliente-cache-data.service';
import { Cliente } from '../classes/Cliente';
import { Avaliacao } from '../classes/Avaliacao';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { AlertModalService } from '../alert-modal/alert-modal.service';

@Component({
  selector: 'app-rating-modal',
  templateUrl: './rating-modal.component.html',
  styleUrls: ['./rating-modal.component.css']
})
export class RatingModalComponent implements OnInit {

  message: string;
  @Input() empresa: Empresa;
  cliente: Cliente;

  constructor(private methods: MethodsService,
              private bsModalRef: BsModalRef,
              private clienteCacheData: ClienteCacheDataService,
              private modalService: AlertModalService) { }

  ngOnInit(): void {
    this.cliente = this.clienteCacheData.getClienteLogado();
  }

  onSend() {
    const avaliacao = new Avaliacao();
    avaliacao.autor = this.cliente.login;
    avaliacao.conteudo = this.message;
    avaliacao.idcliente = this.cliente.idcliente;
    avaliacao.idempresa = this.empresa.idempresa;

    this.methods.insertAvaliacao(avaliacao).subscribe(
      res => {
        if (res != null) {
          this.bsModalRef.hide();
          this.modalService.showAlertSuccess('Avaliado com sucesso!');
        }
      }
    );
  }

  onCancel() {
    this.bsModalRef.hide();
  }

}
