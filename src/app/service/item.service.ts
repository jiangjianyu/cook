import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { ResponItem } from '../eneity/responItem';
import { Api } from '../api/api';
import { Observable } from 'rxjs/Observable';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable()
export class ItemService {

  constructor(private http: HttpClient) { }
  getItems(): Observable<ResponItem> {
    return this.http.get<ResponItem>(Api.url.item, Api.httpHeaders).pipe(
      tap(e => console.log('error' + e), () => console.log('success')));
  }

 
}
