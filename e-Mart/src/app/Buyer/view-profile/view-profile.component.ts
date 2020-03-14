import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Buyer } from 'src/app/Models/buyer';
import { SellerService } from 'src/app/Seller/seller.service';
import { BuyerService } from '../buyer.service';

@Component({
  selector: 'app-view-profile',
  templateUrl: './view-profile.component.html',
  styleUrls: ['./view-profile.component.css']
})
export class ViewProfileComponent implements OnInit {
  Buyerform:FormGroup;
  submitted:boolean=false;
  item:Buyer;
  constructor(private form:FormBuilder,private service:BuyerService) {
    this.ViewProfile();
   }
   get f()
   {
     return this.Buyerform.controls;
   }
  ngOnInit() {
    this.Buyerform=this.form.group({
      id:['',[Validators.required]],
      username:['',[Validators.required,Validators.pattern("^[A-Z]{6,15}$")]],
      createdatetime:['',[Validators.required]],
      mobilenumber:['',[Validators.required,Validators.pattern("^[6-9][0-9]{7}$")]],
      //desig:['',[Validators.required]],
      email:['',[Validators.required,Validators.email]],
      password:['',[Validators.required,Validators.pattern("^(?=.*[A-Z]).{8,30}$")]]
  });
  }
ViewProfile(){
  let bid=JSON.parse(localStorage.getItem('buyerid'));
  this.service.Myprofile(bid).subscribe(res=>{this.item=res;
  console.log(this.item)
  this.Buyerform.patchValue({
    id:this.item.id,
    username:this.item.username,
    email:this.item.email,
    createdatetime:this.item.createdatetime,
    password:this.item.password,
    mobilenumber:this.item.mobilenumber

  })
},
  err=>{
    console.log(err);
  }
  )}
  Onsubmit(){
    alert("safsd")
    this.submitted=true;
    if(this.Buyerform.valid){
      this.ViewProfile();
    }
  }
 
  Edit()
  {
  
    this.item=new Buyer();
    this.item.id=Number(this.Buyerform.value["id"]),
    this.item.username=this.Buyerform.value["username"],
    this.item.email=this.Buyerform.value["email"],
    this.item.password=this.Buyerform.value["password"],
    this.item.mobilenumber=this.Buyerform.value["mobilenumber"],
    this.item.createdatetime=new Date(this.Buyerform.value["createdatetime"])
    this.service.edit(this.item).subscribe(res=>{console.log(this.item),alert("updated succesfully")},err=>{
      console.log(err)
    })
  }
 

}
