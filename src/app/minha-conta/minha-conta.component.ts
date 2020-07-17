import { Component, OnInit } from '@angular/core';
import { Usuario } from '../shared/classes/Usuario';
import { Cliente } from '../shared/classes/Cliente';
import { MethodsService } from '../shared/methods.service';
import { ClienteCacheDataService } from '../shared/cliente-cache-data.service';

@Component({
  selector: 'app-minha-conta',
  templateUrl: './minha-conta.component.html',
  styleUrls: ['./minha-conta.component.css']
})
export class MinhaContaComponent implements OnInit {

  user: Cliente;

  constructor(private methods: MethodsService,
              private clienteCacheService: ClienteCacheDataService) { }

  ngOnInit(): void {
      this.user = this.clienteCacheService.getClienteLogado();
  }


}
