import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Seller } from 'src/app/Models/seller';
import { Router } from '@angular/router';
import { SellerService } from '../seller.service';
import { Items } from 'src/app/Models/items';

@Component({
  selector: 'app-view-items',
  templateUrl: './view-items.component.html',
  styleUrls: ['./view-items.component.css']
})
export class ViewItemsComponent implements OnInit {
  form:FormGroup;
  form2:FormGroup;
  submitted=false;
  list:Items[];
  list2:Items;
  listt:Items;
  seller:Seller;
  id:number;
  str:String;
  itemid:number;
  selid:number;
  Subid:number;
  cid:number;
  constructor(private route:Router,private builder:FormBuilder,private service:SellerService) {
    this.id=Number(localStorage.getItem('sellerid'));
    this.myitems()
   }
  
  ngOnInit() {
    this.form=this.builder.group({
      itemnam:[''],
      price:[''],
      itemdet:[''],
      stock:[''],

      })}
      
  
  get f()
  {
     return this.form.controls; 
  }

 patch(itemid:number){
 this.itemid=itemid;
  this.list2=new Items();
  this.service.getbyid(itemid).subscribe(res=>{this.list2=res,console.log(this.list2)
  console.log(this.list2.cid);
  this.form.patchValue({
    itemnam:this.list2.itemname,
    price:this.list2.price,
    itemdet:this.list2.itemdet,
    stock:this.list2.stocknumber
  
 })})}
  Onsubmit()
  {
    this.submitted =true;
      if(this.form.valid){
        this.myitems()
      }
  }
  myitems()
  {
    
  this.service.Viewitems(this.id).subscribe(res=>
    
   {
     this.list=res;
     console.log(this.list);
      
    
  })}
 
  Edititem()
  {
    // this.cid=this.list2.cid;
    // this.selid=this.list2.sellerid;
    // this.Subid=this.list2.subid;
    this.listt=new Items();
    this.listt.itemid=this.itemid;
    this.listt.sellerid=this.list2.sellerid;
    this.listt.cid=this.list2.cid;
    this.listt.subid=this.list2.subid;
    this.listt.imagename=this.list2.imagename;  
    this.listt.itemname=this.form.value["itemnam"],
    this.listt.price=Number(this.form.value["price"]),
    this.listt.itemdet=this.form.value["itemdet"],
    this.listt.stocknumber=Number(this.form.value["stock"])
    console.log(this.list);
    this.service.updateitem(this.listt).subscribe(res=>{this.myitems()},err=>{
      console.log(err)
    })
  }
  Delete(id:number)
{

this.service.delete(id).subscribe(res=>
  
 {
   this.list=res;
   alert("successfully deleted") 
   this.myitems()
  
 }
  )
  
}
}
