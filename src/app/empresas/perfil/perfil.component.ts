import { Component, OnInit } from '@angular/core';
import { MethodsService } from 'src/app/shared/methods.service';
import { ActivatedRoute } from '@angular/router';
import { Empresa } from 'src/app/shared/classes/Empresa';
import { take } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {

  empresa: Empresa;
  avaliacoes$: Observable<Empresa[]>;

  constructor(private methods: MethodsService,
    private activateRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.empresa = new Empresa();
    this.activateRoute.params.pipe(take(1)).subscribe((data: any) => this.empresa.login = data.nome);

    this.methods.getEmpresaPeloNome(this.empresa.login).subscribe(
      empresa => {
        this.empresa = empresa;
        this.avaliacoes$ = this.methods.getAvaliacoesEmpresas(this.empresa.idempresa);
      }
    );
  }

}
