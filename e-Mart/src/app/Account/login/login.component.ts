import { Component, OnInit } from '@angular/core';
import {FormBuilder,FormGroup,Validators} from '@angular/forms';

import { LoginService } from '../Services/login.service';
import { Buyer } from 'src/app/Models/buyer';
import { Router } from '@angular/router';
import { Token } from 'src/app/Models/token';
import { CompileShallowModuleMetadata } from '@angular/compiler';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  regform:FormGroup;
  submitted=false;
  list:Buyer[];
  seller:Buyer;
  chb:number;
  chs:number;
  flag:number=0;
  token:Token;
  role:string='Buyer'

  ngOnInit() {
    this.regform=this.builder.group({
      
      username:['',Validators.required],
      password:['',Validators.required]
      
    });
   
  }
  get f()
  {
     return this.regform.controls; 
  }
  constructor(private route:Router,private builder:FormBuilder,private service:LoginService) { }
  onsubmit()
  {
  this.submitted=true;
  if(this.regform.valid){
    this.check();
  }
  
}


  check() {

    this.seller=new Buyer();
    this.token=new Token();
    this.seller.username=this.regform.value['username'];
    this.seller.password=this.regform.value['password']
    if(this.seller.username=="admin"&& this.seller.password=="pass"){
      this.flag=1;
      JSON.stringify(localStorage.setItem('admin',this.seller.username))
      this.route.navigateByUrl('Admin')
    }
    else{
  
      this.regform.reset;
    }
      
  if(this.flag!=1){
    this.service.loginb(this.seller.username,this.seller.password).subscribe(res=>{this.token=res,console.log(this.token)
     
     
    if(this.token.message=="success")
    {
      console.log(this.token.message)
      localStorage.setItem('buyerid',this.token.buyerid.toString());
      localStorage.setItem('sellerid',this.token.sellerid.toString());
      localStorage.setItem('token',this.token.token);
      //this.route.navigateByUrl('Buyer');
      this.flag=1;
    
      this.route.navigateByUrl('Buyer');

    }
    else{
      
      this.route.navigateByUrl('login')
    }
    
  }) }
 
  
  if(this.flag!=1){
  this.service.logins(this.seller.username,this.seller.password).subscribe(res=>{this.token=res,console.log(this.token)
    if(this.token.message=="success")
    {
      localStorage.setItem('buyerid',JSON.stringify(this.token.buyerid));
      localStorage.setItem('sellerid',JSON.stringify(this.token.sellerid));
      localStorage.setItem('token',JSON.stringify(this.token.token));
      this.route.navigateByUrl('Seller');
      this.flag=1
   
    }
   else{
     this.regform.reset();
     this.route.navigateByUrl('login')
   }
   
  })
  
 
  }
 
}
  
}



