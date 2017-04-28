import { Injectable } from '@angular/core';
import {
    Http,
    Response,
    RequestOptions,
    Headers
} from '@angular/http';
import { LoginForm } from '../models';
import 'rxjs/add/operator/map';

@Injectable()
export class RestService {

    constructor(private http: Http) {}

      post(url:string,body:any,headers:any) {
        return this.http.post(url,body,headers).
          map(response => {
             response.json();
          })
      }
      get(url:string,body:any){
        return this.http.get(url,body).
        map((response)=>{
           response.json();
        })
      }
        private logError(error: any) {
            console.error(error.error);
            throw error;
        }
 }
