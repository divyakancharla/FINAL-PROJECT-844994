import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Seller } from 'src/app/Models/seller';
import { Router } from '@angular/router';
import { SellerService } from '../seller.service';

@Component({
  selector: 'app-seller-profile',
  templateUrl: './seller-profile.component.html',
  styleUrls: ['./seller-profile.component.css']
})
export class SellerProfileComponent implements OnInit {
  Sellform:FormGroup;
  submitted=false;
  list:Seller[];
  seller:Seller;
  id:number;
  exp:boolean;
  constructor(private route:Router,private builder:FormBuilder,private service:SellerService) {
    this.id=Number(localStorage.getItem('sellerid'));
    this.exp=false
   }
  
  ngOnInit() {
    this.Sellform=this.builder.group({
      
        id:['',[Validators.required]],
        username:['',[Validators.required]],
        password:['',[Validators.required]],
        companyname:['',[Validators.required]],
        GSTIN:['',[Validators.required]],
        brief:['',[Validators.required]],
        postaladdress:['',[Validators.required]],
        website:['',[Validators.required]],
        email:['',[Validators.required,Validators.email]],
        mobilenumber:['',[Validators.required]]
        }) 
        this.myprofile()
      }
     
  
  get f()
  {
     return this.Sellform.controls; 
  }

 
  Onsubmit()
  {
    this.submitted =true;
      if(this.Sellform.valid){
        this.myprofile()
      }
  }
  myprofile()
  {
   
  this.service.Myprofile(this.id).subscribe(res=>
    
   {
     this.seller=res;
     console.log(this.seller);
     this.Sellform.patchValue({
       
       username:this.seller.username,
       email:this.seller.email,
       password:this.seller.password,
       brief:this.seller.brief,
       companyname:this.seller.companyname,
       postaladdress:this.seller.postaladdress,
       website:this.seller.website,
       mobilenumber:this.seller.mobilenumber,
        GSTIN:this.seller.GSTIN
     })
    
  })}
  Edit()
  {
    this.seller=new Seller();
    this.seller.id=Number(localStorage.getItem('sellerid'))
    this.seller.username=this.Sellform.value["username"],
    this.seller.email=this.Sellform.value["email"],
    this.seller.password=this.Sellform.value["password"],
    this.seller.brief=this.Sellform.value["brief"],
    this.seller.companyname=this.Sellform.value["companyname"],
    this.seller.postaladdress=this.Sellform.value["postaladdress"],
    this.seller.website=this.Sellform.value["website"],
    this.seller.mobilenumber=this.Sellform.value["mobilenumber"],
    this.seller.GSTIN=this.Sellform.value["GSTIN"],
    this.service.edit(this.seller).subscribe(res=>{console.log(this.seller),alert("updated succesfully"),this.myprofile()},err=>{
      console.log(err)
    })
  }
}
