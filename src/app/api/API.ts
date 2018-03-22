
import { HttpHeaders } from '@angular/common/http';
export class Api {
    static url = { keyword: 'http://jisusrecipe.market.alicloudapi.com/recipe/search?keyword=', item: 'http://jisusrecipe.market.alicloudapi.com/recipe/class', classid: 'http://jisusrecipe.market.alicloudapi.com/recipe/byclass?classid=' ,foodid:'http://jisusrecipe.market.alicloudapi.com/recipe/detail?id='};
    static httpHeaders = {
        headers: new HttpHeaders({ 'Authorization': 'APPCODE 8404fb2810f045818810cbd64cdfd3a3' })
    }
    static page = '&num=10&start='; 
}