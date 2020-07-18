import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, EMPTY } from 'rxjs';
import { Avaliacao } from './classes/Avaliacao';
import { Usuario } from './classes/Usuario';
import { Empresa } from './classes/Empresa';
import { catchError, take } from 'rxjs/operators';
import { AlertModalService } from './alert-modal/alert-modal.service';
import { Cliente } from './classes/Cliente';

@Injectable({
  providedIn: 'root'
})
export class MethodsService {

  constructor(private http: HttpClient,
              private alertModalService: AlertModalService) { }

  listAvaliacoes() {
    return this.verificaErro(this.http.get<Avaliacao[]>('api/cliente/Avaliacao/Listar'));
  }

  insertAvaliacao(avaliacao: Avaliacao) {
    const url = 'api/cliente/Avaliacao/Inserir';
    return this.verificaErro(this.http.post(url, avaliacao));
  }

  getAvaliacao(conteudo: string) {
    const url = 'api/cliente/Avaliacao/get/' + conteudo;
    return this.verificaErro(this.http.get<Avaliacao>(url));
  }

  getMinhasAvaliacoes(idcliente: number) {
    const url = 'api/cliente/Avaliacao/minhas/' + idcliente;
    return this.verificaErro(this.http.get<Avaliacao[]>(url));
  }

  getAvaliacoesEmpresas(idempresa: number) {
    return this.verificaErro(this.http.get<Avaliacao[]>('api/cliente/Avaliacao/Listar/' + idempresa));
  }

  atualizarIndex(login: string) {
    const url = 'api/cliente/atualizarIndex/' + login;
    return this.verificaErro(this.http.get(url));
  }

  responderAvaliacao(avaliacao: Avaliacao) {
    const url = 'api/cliente/Avaliacao/Responder';
    return this.verificaErro(this.http.post(url, avaliacao));
  }

  getRespostasAvaliacao(idavaliacao: number) {
    const url = 'api/cliente/Avaliacao/Resposta/get/' + idavaliacao;
    return this.verificaErro(this.http.get(url));
  }

  getRespostasDoCliente(idcliente: number) {
    const url = 'api/cliente/Avaliacao/Resposta/Listar/Cliente/' + idcliente;
    return this.verificaErro(this.http.get<Avaliacao[]>(url));
  }

  // ------

  getUsuario(login: string) {
    return this.verificaErro(this.http.get<Usuario>('api/usuario/get/' + login));
  }

  onLogin(login: string, senha: string) {
    const url = '/api/usuario/Login';
    const user = new Usuario();
    user.login = login;
    user.senha = senha;
    return this.verificaErro(this.http.post(url, user));
  }

  cadastrar(user: Cliente) {
    const url = 'api/usuario/Inserir';
    return this.verificaErro(this.http.post(url, user));
  }

  // -----

  getEmpresa(idempresa: number) {
    return this.verificaErro(this.http.get<Empresa>('api/empresa/get/id/' + idempresa));
  }

  getEmpresaPeloNome(nome: string) {
    return this.verificaErro(this.http.get<Empresa>('api/empresa/get/nome/' + nome));
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
    );
  }
}
