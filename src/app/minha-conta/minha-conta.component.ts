import { Component, OnInit } from '@angular/core';
import { Cliente } from '../shared/classes/Cliente';
import { ActivatedRoute } from '@angular/router';
import { take, switchMap, map, tap } from 'rxjs/operators';
import { MethodsService } from '../shared/methods.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-minha-conta',
  templateUrl: './minha-conta.component.html',
  styleUrls: ['./minha-conta.component.css']
})
export class MinhaContaComponent implements OnInit {

  user: Cliente;

  constructor(
    private route: ActivatedRoute,
    private methods: MethodsService
  ) { }

  ngOnInit(): void {
    this.methods.getClienteByUserId(parseInt(localStorage.getItem('userId'), 10)).subscribe(res => {
      this.user = res;
    });
  }


}
