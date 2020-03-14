import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Items } from 'src/app/Models/items';
import { SellerService } from '../seller.service';
import { AdminService } from 'src/app/Admin/admin.service';
import { Category } from 'src/app/Models/category';
import { SubCategory } from 'src/app/Models/sub-category';

@Component({
  selector: 'app-add-items',
  templateUrl: './add-items.component.html',
  styleUrls: ['./add-items.component.css']
})
export class AddItemsComponent implements OnInit {
  adminform:FormGroup;
  submitted=false;
  category:Items;
  categories:Category[];
  subcategories:SubCategory[]
  img:string;
  list:Items[]=[]
  constructor(private builder:FormBuilder,private service:SellerService,private services:AdminService) {
    this.services.getcategory().subscribe(res=>{this.categories=res,console.log(this.categories)},err=>console.log(err));
   }
Get(){
  this.service.GetSubCat(this.adminform.value["categoryid"]).subscribe(res=>{this.subcategories=res,console.log(this.subcategories)},err=>console.log(err));

}
  ngOnInit() {
    this.adminform=this.builder.group({
      categoryid:['',Validators.required],
      subcategoryid:['',Validators.required],
      Sellerid:['',Validators.required],
      Itemid:['',Validators.required],
      Itemname:['',Validators.required],
      Itemdet:['',Validators.required],
      Price:['',Validators.required],
      stocknumber:['',Validators.required],
      Remarks:['',Validators.required],
      imagename:['',Validators.required]

  })
}
get f()
{
  return this.adminform.controls;
}
Onsubmit()
{
  this.submitted =true;
    if(this.adminform.valid){
      this.Add()
    }
}
Reset() {
  alert("Item Added");
    this.submitted = false;
    this.adminform.reset();
}
Add()
{
  
  this.category=new Items();
  this.category.cid=Number(this.adminform.value["categoryid"]),
  this.category.subid=Number(this.adminform.value["subcategoryid"]),
  this.category.itemid=Math.floor(Math.random()*1000),
  this.category.itemname=this.adminform.value["Itemname"],
  this.category.sellerid=Number(localStorage.getItem('sellerid')),
  this.category.price=this.adminform.value["Price"],
  this.category.stocknumber=this.adminform.value["stocknumber"],
  this.category.itemdet=this.adminform.value["Itemdet"],
  this.category.remarks=this.adminform.value["Remarks"],
  this.category.imagename=this.img
  console.log(this.category)
  this.service.Additems(this.category).subscribe(res=>{console.log(this.category),this.Reset()},err=>{console.log(err)})
  
}
fileEvent(event){
  this.img = event.target.files[0].name;
}
 
}
