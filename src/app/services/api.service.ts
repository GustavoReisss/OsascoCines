import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { environment } from '../../environments/environment';
import { LoadingService } from './loading.service';
import { catchError, map } from 'rxjs/internal/operators'
import { MessageService } from 'primeng/api';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  static readonly BASE_URL = environment.baseUrl;
  static readonly TIMEOUT_DEFAULT = 30000;
  static readonly NO_AUTH = new HttpHeaders().set('No-Auth', 'True');
  static readonly OOPS_TITLE: string = 'Erro';
  static readonly OOPS_MESSAGE : string = 
    'Oops! Ocorreu uma falha inesperada. Verifique sua conexão com a internet.';

  constructor(public http: HttpClient,
              private loadingService: LoadingService,
              private messageService: MessageService) { }


  getUrl(endpoint: string): string {
    if (endpoint.startsWith('http:')) {
      return endpoint;
    }

    let url: string = ApiService.BASE_URL;

    if(!url.endsWith('/') && !endpoint.startsWith('/')) {
      url += '/';
    } else if (url.endsWith('/') && endpoint.startsWith('/')) {
      endpoint = endpoint.substr(1);
    }

    url += endpoint;
    
    return url;
  }  

  get (url: string, options?: {
    headers?: 
    | HttpHeaders
    | {
      [header: string]: string | string[];
    };
    observe?: 'body';
    params?:
      | HttpParams
      | {
        [params: string]: string | string[];
      };
      reportProgress?: boolean;
      responseType?: 'json';
      withCredentials?: boolean;
    }
  ): Observable<any> {
      this.loadingService.start();

      return this.http.get(this.getUrl(url), options).pipe (
        map((response: any) => {
          this.loadingService.end();

          if (response.type !== null && response.type !== 'application/json') {
            return response;
          }

          if (!response.success) {
            this.showError(response);
          }

          if (response.token && response.token.trim() !== '') {
            localStorage.setItem('login.token', response.token);
          }

          return response;
        }),
        catchError( err => this.showError(err))
      );
  }

  showError(error: any): Observable<any> {
    this.loadingService.end();
    this.messageService.clear();
    this.messageService.add({
      severity: 'error',
      summary: ApiService.OOPS_TITLE,
      detail: error.error
        ? error.error.message
        : error.message
          ? error.message 
          : ApiService.OOPS_MESSAGE
    });
    return throwError(error);
  }
}
