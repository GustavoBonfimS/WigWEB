import { Component, OnInit } from '@angular/core';
import { Cliente } from '../shared/classes/Cliente';
import { ActivatedRoute } from '@angular/router';
import { take } from 'rxjs/operators';

@Component({
  selector: 'app-minha-conta',
  templateUrl: './minha-conta.component.html',
  styleUrls: ['./minha-conta.component.css']
})
export class MinhaContaComponent implements OnInit {

  user: Cliente;

  constructor(
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.route.data.pipe(take(1)).subscribe((info) => {
      this.user = info.cliente;
    });
  }


}
