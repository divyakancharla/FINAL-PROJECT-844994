import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Buyer } from '../Models/buyer';
import { Purchase } from '../Models/purchase';
import { Addcart } from '../Models/addcart';
const Requestheaders={headers:new HttpHeaders({
  'Content-Type': 'application/json',
  'Authorization': 'Bearer'+localStorage.getItem('token')
})}
@Injectable({
  providedIn: 'root'
})
export class BuyerService {
  url:string='http://localhost:60821/Buyer/'
  constructor(private http:HttpClient) { }
  
  Myprofile(id:number):Observable<any>
  {
    return this.http.get<any>(this.url+'get'+'/'+id,Requestheaders);
  }
  edit(item:Buyer):Observable<any>
  {
    return this.http.put<any>(this.url+'Edit',item,Requestheaders);
  }
  search(name:string):Observable<any>
  {
    return this.http.get<any>(this.url+'Search'+'/'+name,Requestheaders);
  }
  Buy(item:Purchase):Observable<any>
  {
    
    return this.http.post<any>(this.url+'BuyItem'+'/',item,Requestheaders);
  }
  AddCart(item:Addcart):Observable<any>
  {
    
    return this.http.post<any>(this.url+'AddCart'+'/',item,Requestheaders);
  }
  viewcart(name:Number):Observable<any>
  {
    return this.http.get<any>(this.url+'GetCart'+'/'+name,Requestheaders);
  }
  viewallcart(id:Number):Observable<any>
  {
  
    return this.http.get<any>(this.url+'GetAllCart'+'/'+id);
  }
  DeleteCartItem(id:number):Observable<any>
  {
    return this.http.delete<any>(this.url+'DeleteCartItem/'+id);
  }
  purcahsehistory(name:Number):Observable<any>
  {
    return this.http.get<any>(this.url+'History'+'/'+name,Requestheaders);
  }
  
}
