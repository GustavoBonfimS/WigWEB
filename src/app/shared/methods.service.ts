import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MethodsService {

  constructor(private _http: HttpClient) { }

  getAvaliacoes() {
    var url = "url"
    return this._http.get(url);
  }

  
}
