import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs'; /* se utilizan para recoger los datos que devuelve el api */
import { Article } from '../models/article';
import { Global } from './global';

@Injectable()
export class ArticleService {

  public url: string;

  constructor(
    private _http: HttpClient /* cargar en el app.module */
  ) {
    this.url = Global.url;
  }

  pruebas() {
    return 'Soy el servicio de articulos :D';
  }

  getArticles(last:any = null):Observable<any> {

    var articles = 'articles';

    if(last != null) {
      articles = 'articles/true';
    }

    return this._http.get(this.url + articles); // peticion ajax al backend. 
  }

  getArticle(articleId):Observable<any> {
    return this._http.get(this.url+'article/'+articleId); // petición ajax perfecta al backend para unicos articulos
  }

  search(searchString):Observable<any> {
    return this._http.get(this.url+'search/'+searchString);
  }

  create(article):Observable<any>{
    let params = JSON.stringify(article); // pasando objeto convertido a un string por http
    let headers = new HttpHeaders().set('Content-Type', 'application/json'); // el backend recibe datos en json string lo va a convertir a un objeto usable en js 

    return this._http.post(this.url+'save', params, {headers: headers}); // peticion ajax
  }

  update(id, article):Observable<any>{
    let params = JSON.stringify(article);
    let headers = new HttpHeaders().set('Content-type', 'application/json');

    return this._http.put(this.url+'article/'+id, params, {headers: headers});
  }

  delete(id):Observable<any>{
    let headers = new HttpHeaders().set('Content-type', 'application/json');
    return this._http.delete(this.url+'article/'+id, {headers: headers});
  }


}

