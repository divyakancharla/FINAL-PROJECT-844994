import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http'
import { Observable } from 'rxjs';
import { Buyer } from 'src/app/Models/buyer';
const Requestheaders={headers:new HttpHeaders({
  'content-type':'application/json'})

}
@Injectable({
  providedIn: 'root'
})
export class LoginService {
  url:string='http://localhost:60821/User/'
  constructor(private http:HttpClient) { }
  loginb(name:string,password:string):Observable<any>
  {
    
    return this.http.get<any>(this.url+'loginb/'+name+'/'+password,Requestheaders);
  }
  logins(name:string,password:string):Observable<any>
  {
    return this.http.get<any>(this.url+'login/'+name+'/'+password,Requestheaders);
  }
 
}
