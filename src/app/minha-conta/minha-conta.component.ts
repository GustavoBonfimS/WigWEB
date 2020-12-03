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
    // this.route.data.pipe(
    //     take(1),
    //     switchMap(data => {
    //       if (!data.cliente) {
    //         return this.methods.getClienteByUserId(parseInt(localStorage.getItem('userId'), 10));
    //       }
    //       return this.route.data;
    //     }),
    //   ).subscribe((c) => {
    //     if (c.cliente) {
    //       this.user = c.cliente;
    //     } else {
    //       this.user = c;
    //     }
    // });
    this.methods.getClienteByUserId(parseInt(localStorage.getItem('userId'), 10)).subscribe(res => {
      this.user = res;
    });
  }


}
