import { Component, OnInit } from '@angular/core';
import { Avaliacao } from 'src/app/shared/classes/Avaliacao';
import { Observable } from 'rxjs';
import { MethodsService } from 'src/app/shared/methods.service';
import { take } from 'rxjs/operators';

@Component({
  selector: 'app-avaliacoes',
  templateUrl: './avaliacoes.component.html',
  styleUrls: ['./avaliacoes.component.css']
})
export class AvaliacoesComponent implements OnInit {

  itemHover = false;
  avaliacoes$: Observable<Avaliacao[]>;

  constructor(
    private methods: MethodsService
  ) { }

  ngOnInit(): void {
    // this.avaliacoes$ = this.methods.getAvaliacoesEmpresas()
  }

  onSelect(index) {
    this.avaliacoes$.forEach(item => {
    });
  }

}
