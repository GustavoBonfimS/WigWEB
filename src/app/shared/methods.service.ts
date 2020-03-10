import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Avaliacao } from './classes/Avaliacao';
import { Usuario } from './classes/Usuario';
import { Empresa } from './classes/Empresa';

@Injectable({
  providedIn: 'root'
})
export class MethodsService {

  constructor(private _http: HttpClient) { }

  private baseUrl = "http://localhost:8080/api/";

  listAvaliacoes() {
    var url = "cliente/Avaliacao/Listar";
    return this._http.get<Avaliacao[]>(this.baseUrl + url);
  }

  insertAvaliacao(avaliacao) {
    var url = "cliente/Avaliacao/Inserir";
    return this._http.post(this.baseUrl + url, avaliacao);
  }

  getAvaliacao(conteudo: string) {
    var url = 'cliente/Avaliacao/get/${conteudo}';
    return this._http.get(this.baseUrl + url);
  }

  getMinhasAvaliacoes(idcliente) {
    var url = 'cliente/Avaliacao/minhas/${idcliente}';
    return this._http.get(this.baseUrl + url);
  }

  getAvaliacoesEmpresas(idempresa) {
    var url = 'cliente/Avaliacao/Listar/${idempresa}';
    return this._http.get(this.baseUrl + url);
  }
  
  atualizarIndex(login: string) {
    var url = "cliente/atualizarIndex/" + login;
    return this._http.get<Avaliacao[]>(this.baseUrl + url);
  }

  responderAvaliacao(avaliacao: Avaliacao) {
    var url = "cliente/Avaliacao/Responder";
    return this._http.post(this.baseUrl + url, avaliacao);
  }

  getRespostasAvaliacao(idavaliacao) {
    var url = "cliente/Avaliacao/Resposta/get/" + idavaliacao;
    return this._http.get(this.baseUrl + url);
  }

  // ------

  getUsuario(login) {
    var url = 'usuario/get/${login}'
    return this._http.get<Usuario>(this.baseUrl + url);
  }

  // -----

  getEmpresa(idempresa) {
    var url = "empresa/get/id/" + idempresa;
    return this._http.get<Empresa>(this.baseUrl + url);
  }
}
