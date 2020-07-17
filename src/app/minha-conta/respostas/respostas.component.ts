import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { MethodsService } from 'src/app/shared/methods.service';
import { ClienteCacheDataService } from 'src/app/shared/cliente-cache-data.service';

@Component({
  selector: 'app-respostas',
  templateUrl: './respostas.component.html',
  styleUrls: ['./respostas.component.css']
})
export class RespostasComponent implements OnInit {

  itemHover = false;
  respostas$: Observable<any>;

  constructor(private methods: MethodsService,
              private clienteCacheService: ClienteCacheDataService) { }

  ngOnInit(): void {
    const idCliente = this.clienteCacheService.getClienteLogado().idcliente;
    this.respostas$ = this.methods.getRespostasDoCliente(idCliente);
  }

}
