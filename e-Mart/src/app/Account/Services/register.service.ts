import { Injectable } from '@angular/core';
import{HttpClient,HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Buyer } from 'src/app/Models/buyer';
import { Seller } from 'src/app/Models/seller';
const Requestheaders={headers:new HttpHeaders({
  'content-type':'application/json'})

}
@Injectable({
  providedIn: 'root'
})
export class RegisterService {
url:string='http://localhost:60821/User/'
  constructor(private http:HttpClient) { }
  addBuyer(item:Buyer):Observable<any>
  {
    return this.http.post<any>(this.url+'addb',item);
  }
  addSeller(item:Seller):Observable<any>
  {
    return this.http.post<any>(this.url+'adds',item);
  }
  
}
