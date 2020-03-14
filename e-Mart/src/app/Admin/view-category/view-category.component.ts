import { Component, OnInit } from '@angular/core';
import { SellerService } from 'src/app/Seller/seller.service';
import { AdminService } from '../admin.service';
import { Category } from 'src/app/Models/category';

@Component({
  selector: 'app-view-category',
  templateUrl: './view-category.component.html',
  styleUrls: ['./view-category.component.css']
})
export class ViewCategoryComponent implements OnInit {
categories:Category[];
  constructor(private service:SellerService,private services:AdminService) { 
    this.services.getcategory().subscribe(res=>{this.categories=res,console.log(this.categories)},err=>console.log(err));

  }

  ngOnInit() {
  }
  
}
