
import { HttpHeaders } from '@angular/common/http';
export class Api {
    static url = { keyword: '/recipe/search?keyword=', item: '/recipe/class', classid: '/recipe/byclass?classid=' ,foodid:'/recipe/detail?id='};
    static httpHeaders = {
        headers: new HttpHeaders({ 'Authorization': 'APPCODE 8404fb2810f045818810cbd64cdfd3a3' })
    }
    static page = '&num=10&start='; 
}