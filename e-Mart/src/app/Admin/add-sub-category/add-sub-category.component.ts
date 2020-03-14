import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { SubCategory } from 'src/app/Models/sub-category';
import { AdminService } from '../admin.service';
import { Category } from 'src/app/Models/category';

@Component({
  selector: 'app-add-sub-category',
  templateUrl: './add-sub-category.component.html',
  styleUrls: ['./add-sub-category.component.css']
})
export class AddSubCategoryComponent implements OnInit {
  adminform:FormGroup;
  submitted=false;
  category:SubCategory;
  categories:Category[];
  subcategories:SubCategory[];
 
  constructor(private builder:FormBuilder,private service:AdminService) { 
    this.service.getcategory().subscribe(res=>{this.categories=res,console.log(this.categories)},err=>console.log(err));
    this.service.getsubbcategory().subscribe(res=>{this.subcategories=res,console.log(this.subcategories)},err=>console.log(err));

  }

  ngOnInit() {
    this.adminform=this.builder.group({
      subcategoryid:['',Validators.required],
      gst:['',Validators.required],
      categoryid:['',Validators.required],
      subcategoryname:['',Validators.required],
      subcategorydet:['',Validators.required]

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
      this.AddC()
    }
}
Reset() {
  alert("Added new subcategory");
    this.submitted = false;
    this.adminform.reset();
}
AddC()
{
  
  this.category=new SubCategory();
  this.category.Cid=Number(this.adminform.value["categoryid"]),
  this.category.Gst=this.adminform.value["gst"],
  this.category.Subid=Math.floor(Math.random()*1000),
  this.category.Subname=this.adminform.value["subcategoryname"],
  this.category.Subdet=this.adminform.value["subcategorydet"]
  console.log(this.category);
  this.service.addsybcategory(this.category).subscribe(res=>{console.log(this.category),this.Reset()},err=>{console.log(err)})
  
}
  

}
