import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, EMPTY } from 'rxjs';
import { Avaliacao } from './classes/Avaliacao';
import { Usuario } from './classes/Usuario';
import { Empresa } from './classes/Empresa';
import { catchError, take } from 'rxjs/operators';
import { AlertModalService } from './alert-modal/alert-modal.service';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Cliente } from './classes/Cliente';

@Injectable({
  providedIn: 'root'
})
export class MethodsService {

  constructor(private http: HttpClient,
              private alertModalService: AlertModalService) { }

  private baseUrl = "http://localhost:8080/api/";

  listAvaliacoes() {
    return this.verificaErro(this.http.get<Avaliacao[]>('api/cliente/Avaliacao/Listar'));
  }

  insertAvaliacao(avaliacao) {
    var url = "cliente/Avaliacao/Inserir";
    return this.http.post(this.baseUrl + url, avaliacao);
  }

  getAvaliacao(conteudo: string) {
    var url = 'cliente/Avaliacao/get/${conteudo}';
    return this.http.get(this.baseUrl + url);
  }

  getMinhasAvaliacoes(idcliente) {
    var url = 'cliente/Avaliacao/minhas/${idcliente}';
    return this.http.get(this.baseUrl + url);
  }

  getAvaliacoesEmpresas(idempresa) {
    var url = 'cliente/Avaliacao/Listar/${idempresa}';
    return this.http.get(this.baseUrl + url);
  }
  
  atualizarIndex(login: string) {
    var url = "cliente/atualizarIndex/" + login;
    return this.http.get<Avaliacao[]>(this.baseUrl + url);
  }

  responderAvaliacao(avaliacao: Avaliacao) {
    var url = "cliente/Avaliacao/Responder";
    return this.http.post(this.baseUrl + url, avaliacao);
  }

  getRespostasAvaliacao(idavaliacao) {
    var url = "cliente/Avaliacao/Resposta/get/" + idavaliacao;
    return this.http.get(this.baseUrl + url);
  }

  // ------

  getUsuario(login) {
    return this.verificaErro(this.http.get<Usuario>('api/usuario/get/${login}'));
  }

  onLogin(login: string, senha: string) {
    const url = '/api/usuario/Login';
    const user = new Usuario();
    user.login = login;
    user.senha = senha;
    return this.verificaErro(this.http.post(url, user));
  }

  // -----

  getEmpresa(idempresa) {
    return this.http.get<Empresa>('api/empresa/get/id/${idempresa}')
  }

  listEmpresas() {
    return this.verificaErro(this.http.get<Empresa[]>('api/empresa/Listar'));
  }
  // -----
  private verificaErro(obs: Observable<any>) {
    return obs.pipe(
      catchError(err => {
        this.alertModalService.showAlertDanger('erro ao se conectar ao servidor, tente novamente mais tarde');
        return EMPTY;
      })
    )
  }
}
