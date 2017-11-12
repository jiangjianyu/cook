import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { ResponDish ,Food} from '../eneity/ResponDish';
import { Api } from '../api/api';
import { catchError, map, tap } from 'rxjs/operators';

//返回了一个在指定值之间的随机整数
function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}

@Injectable()
export class FoodService {

  public random: number = getRandomInt(223, 269);
  constructor(private http: HttpClient) { }
  getFoodListByCid(id: string, start: number): Observable<ResponDish> {
    return this.http.get<ResponDish>(Api.url.classid + id + Api.page + start, Api.httpHeaders).pipe(
      tap(e => console.log('error ---' + e), () => console.log('success')));
  }
  getFoodListByKey(q: string, start: number): Observable<ResponDish> {
    return this.http.get<ResponDish>(Api.url.keyword + q + Api.page + start, Api.httpHeaders).pipe(
      tap(e => console.log('error- --' + e), () => console.log('success')));
  }
  getNiceFood(): Observable<ResponDish> {
    return this.http.get<ResponDish>(Api.url.classid + this.random + '&num=10&start=0', Api.httpHeaders).pipe(
      tap(e => console.log('error---' + e), () => console.log('success')));
  }
  getFood(id:string): Observable<Food> {
    return this.http.get<Food>(Api.url.foodid + id, Api.httpHeaders).pipe(
      tap(e => console.log('error---' + e), () => console.log('success')));
  }

}
