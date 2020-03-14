import { Injectable } from '@angular/core';
import { Category } from '../Models/category';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { SubCategory } from '../Models/sub-category';

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  url:string='http://localhost:60821/Admin/'
  urlI:string='http://localhost:60821/Item/'
  constructor(private http:HttpClient) { }
  
  addcategory(item:Category):Observable<any>
  {
    return this.http.post<any>(this.url+'AddC'+'/',item);
  }
  addsybcategory(item:SubCategory):Observable<any>
  {
    return this.http.post<any>(this.url+'AddS'+'/',item);
  }
  getcategory():Observable<Category[]>
  {
    return this.http.get<Category[]>(this.urlI+'GetCategory');
  }
  getsubbcategory():Observable<SubCategory[]>
  {
    return this.http.get<SubCategory[]>(this.urlI+'GetSubcategory');
  }
delcategory(id:number):Observable<any>
  {
    return this.http.delete<any>(this.url+'deleteCategory'+id);
  }
  getsubbcategorybyid(id:number):Observable<SubCategory>
  {
    return this.http.get<SubCategory>(this.url+'GetSubCategoryById'+id);
  }
  getcategorybyid(id:number):Observable<SubCategory[]>
  {
    return this.http.get<SubCategory[]>(this.url+'GetCategoryById'+id);
  }
}
