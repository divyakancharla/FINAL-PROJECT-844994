import { Component, OnInit } from '@angular/core';
import{FormBuilder,FormGroup,Validators} from '@angular/forms';
import { Seller } from 'src/app/Models/seller';
import { RegisterService } from '../Services/register.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-register-seller',
  templateUrl: './register-seller.component.html',
  styleUrls: ['./register-seller.component.css']
})
export class RegisterSellerComponent implements OnInit {
  regform:FormGroup;
  submitted=false;
  list:Seller[];
  seller:Seller;
  

  constructor(private builder:FormBuilder,private service:RegisterService,private route:Router) { }

  ngOnInit() {
    this.regform=this.builder.group({
    username:['',[Validators.required,Validators.pattern("[a-zA-Z]{5}")]],
    password:['',[Validators.required,Validators.pattern("[a-zA-Z]{4}[0-9]{4}")]],
    companyname:['',[Validators.required,Validators.pattern("[a-zA-Z]{5,20}")]],
    GSTIN:['',[Validators.required,Validators.pattern("[a-zA-Z0-9]{15}")]],
    brief:['',[Validators.required,Validators.pattern("[a-zA-Z]{5,20}")]],
    postaladdress:['',[Validators.required,Validators.pattern("[a-zA-Z]{8,15}")]],
    website:['',[Validators.required,Validators.pattern("[a-zA-Z]{8,15}")]],
    email:['',[Validators.required,Validators.email]],
    mobilenumber:['',[Validators.required,Validators.pattern("[6,9][0-9]{9}")]]
    })
    
  }
  get f()
  {
    return this.regform.controls;
  }
 
  onsubmit()
  {
    this.submitted=true;
    if(this.regform.valid){
      this.Sub();
    }
}
onReset() {
    this.submitted = false;
    this.regform.reset();
}
Sub()
{
  
  this.seller=new Seller();
  this.seller.id=Math.floor(Math.random()*10);
  this.seller.username=this.regform.value["username"];
  this.seller.password=this.regform.value["password"];
  this.seller.companyname=this.regform.value["companyname"];
  this.seller.GSTIN=this.regform.value["GSTIN"];
  this.seller.brief=this.regform.value["brief"];
  this.seller.postaladdress=this.regform.value["postaladdress"];
  this.seller.website=this.regform.value["website"];
  this.seller.email=this.regform.value["email"];
  this.seller.mobilenumber=this.regform.value["mobilenumber"];
  console.log(this.seller);
  this.service.addSeller(this.seller).subscribe(res=>{this.reset()},err=>{console.log(err)});

}
reset(){
  alert("Successfully registered");
  this.regform.reset();
}

redirect()
{
  this.route.navigateByUrl('/Land/login')
}
resett(){
  this.regform.clearValidators();
}
}
 

