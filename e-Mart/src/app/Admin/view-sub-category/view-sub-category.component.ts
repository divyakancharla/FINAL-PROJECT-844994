import { Component, OnInit } from '@angular/core';
import { SubCategory } from 'src/app/Models/sub-category';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AdminService } from '../admin.service';
import { Category } from 'src/app/Models/category';

@Component({
  selector: 'app-view-sub-category',
  templateUrl: './view-sub-category.component.html',
  styleUrls: ['./view-sub-category.component.css']
})
export class ViewSubCategoryComponent implements OnInit {

  list:SubCategory;
  list2:SubCategory;
viewsub:FormGroup;
id:number;
subcategories:SubCategory[];
  constructor(private service:AdminService,private form:FormBuilder) {
  this.service.getsubbcategory().subscribe(res=>{this.subcategories=res,console.log(this.subcategories),err=>console.log(err)});
  // this.list=new SubCategory
   // this.view()
   }

  ngOnInit() {
    this.viewsub=this.form.group({
      subcategoryid:['',Validators.required],
      categoryid:['',Validators.required],
      subcategoryname:['',Validators.required],
      briefdetails:['',Validators.required],
      GSTIN:['',Validators.required]
    })
  }

  // Delete()
  // {
  //   let id=1
  //   this.service.deletesubcategories(id).subscribe(res=>{this.list=res
  //   console.log(this.list)},err=>{console.log(err.innermessage)})
  // }
  // view(){
  // this.id=this.viewsub.value['categoryid'];
  // console.log(this.id)
  // this.service.getsubbcategorybyid(this.id).subscribe(res=>
    
  //   {
  //     this.list=res;
  //     console.log(this.list);
     
     
  //  })
  //  this.service.getsubbcategory().subscribe(res=>{this.list2=res
  //   console.log(this.list)})
   
  // }
  // Edititem()
  // {
  //   // this.cid=this.list2.cid;
  //   // this.selid=this.list2.sellerid;
  //   // this.Subid=this.list2.subid;
  //   this.listt=new SubCategory();
  //   this.listt.itemid=this.itemid;
  //   this.listt.sellerid=this.list2.sellerid;
  //   this.listt.cid=this.list2.cid;
  //   this.listt.subid=this.list2.subid;
  //   this.listt.itemname=this.form.value["itemnam"],
  //   this.listt.price=Number(this.form.value["price"]),
  //   this.listt.itemdet=this.form.value["itemdet"],
  //   this.listt.stocknumber=Number(this.form.value["stock"])
  //   console.log(this.list);
  //   this.service.updateitem(this.listt).subscribe(res=>{alert("updated succesfully")},err=>{
  //     console.log(err)
  //   })
  // }
} 