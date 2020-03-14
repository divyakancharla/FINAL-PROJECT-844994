import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Category } from 'src/app/Models/category';
import { AdminService } from '../admin.service';

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.css']
})
export class AddCategoryComponent implements OnInit {
  adminform:FormGroup;
  submitted=false;
  category:Category;
  categories:Category[];
 
  constructor(private builder:FormBuilder,private service:AdminService) { 
    this.service.getcategory().subscribe(res=>{this.categories=res,console.log(this.categories)},err=>console.log(err));
    
  }
  

  ngOnInit() {
    this.adminform=this.builder.group({
      categoryid:['',Validators.required],
      categoryname:['',Validators.required],
      categorydet:['',Validators.required]

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
  alert("New Category Added");
    this.submitted = false;
    this.adminform.reset();
}
AddC()
{
  
  this.category=new Category();
  this.category.cid=Math.floor(Math.random()*1000),
  this.category.cname=this.adminform.value["categoryname"],
  this.category.cdet=this.adminform.value["categorydet"],
  this.service.addcategory(this.category).subscribe(res=>{console.log(this.category),this.Reset()},err=>{console.log(err)})
  
}
  

}
