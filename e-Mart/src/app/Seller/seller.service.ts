import { Injectable } from '@angular/core';
import { Seller } from '../Models/seller';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Items } from '../Models/items';
const Requestheaders={headers:new HttpHeaders({
  'Content-Type': 'application/json',
  'authorization': 'Bearer '+localStorage.getItem('token')
})}

@Injectable({
  providedIn: 'root'
})
export class SellerService {
  url:string='http://localhost:60821/Seller/';
  urlI:string='http://localhost:60821/Item/'
  constructor(private http:HttpClient) { }
  
  Myprofile(id:number):Observable<Seller>
  {
   console.log(Requestheaders)
    return this.http.get<Seller>(this.url+'myprofile'+'/'+id,Requestheaders);
  }
  edit(item:Seller):Observable<any>
  {
    return this.http.put<any>(this.url+'editprofile',item,Requestheaders);
  }
  GetSubCat(id:number):Observable<any>
  {
    return this.http.get<any>(this.urlI+'getsubcategory/'+id,Requestheaders);
  }
  Additems(item:Items):Observable<any>
  {
    return this.http.post<any>(this.urlI+'additem',item,Requestheaders);
  }
  Viewitems(id:number):Observable<any>
  {
    return this.http.get<any>(this.urlI+'Viewitem/'+id,Requestheaders);
  }
  getbyid(id:number):Observable<any>
  {
    return this.http.get<any>(this.urlI+'getitem/'+id,Requestheaders);
  }
  updateitem(item:Items):Observable<Items[]>
  {
    
    return this.http.put<Items[]>(this.urlI+'updateitem',item,Requestheaders);
  }
  delete(id:number):Observable<any>
  {
    return this.http.delete<any>(this.urlI+'deleteitem/'+id,Requestheaders);
  }

}
