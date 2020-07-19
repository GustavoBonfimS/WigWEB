import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { take, map, switchMap, tap } from 'rxjs/operators';
import { MethodsService } from '../shared/methods.service';
import { Empresa } from '../shared/classes/Empresa';
import { Observable, EMPTY } from 'rxjs';

@Component({
  selector: 'app-pesquisa',
  templateUrl: './pesquisa.component.html',
  styleUrls: ['./pesquisa.component.css']
})
export class PesquisaComponent implements OnInit {

  result$: Observable<Empresa[]>;
  itemHover = false;
  isResultNotFound = false;

  constructor(private activatedRoute: ActivatedRoute,
              private methods: MethodsService) { }

  ngOnInit(): void {
    this.result$ = this.activatedRoute.queryParams
      .pipe(
        tap(param => {
          if (!param.emp) {
            console.log('null');
          }
        }),
        map(param => param.emp),
        switchMap(emp => this.methods.pesquisar(emp)));
  }

}
