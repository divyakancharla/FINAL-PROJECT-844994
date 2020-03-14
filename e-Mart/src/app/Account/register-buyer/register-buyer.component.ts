import { Component, OnInit } from '@angular/core';
import{FormGroup,FormBuilder,Validators} from '@angular/forms';
import { Buyer } from 'src/app/Models/buyer';
import { RegisterService } from '../Services/register.service';
import { resetFakeAsyncZone } from '@angular/core/testing';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
@Component({
  selector: 'app-register-buyer',
  templateUrl: './register-buyer.component.html',
  styleUrls: ['./register-buyer.component.css']
})
export class RegisterBuyerComponent implements OnInit {
item:Buyer;
items:Buyer;
itemForm:FormGroup;
b:Buyer[];
submitted=false;
  constructor(private services:RegisterService,private builder:FormBuilder,private route:Router) { 
    
  }
  ngOnInit() {
    this.itemForm=this.builder.group({
    username:['',[Validators.required,Validators.pattern("[a-zA-Z]{5}")]],
    password:['',[Validators.required,Validators.pattern("[a-zA-Z]{4}")]],
    email:['',[Validators.required,Validators.email]],
    mobilenumber:['',[Validators.required,Validators.pattern("[6,9][0-9]{9}")]],
    createdatetime:['',[Validators.required]]
    }) 
  }
  get f()
  {
    return this.itemForm.controls;
  }
 
  onsubmit()
  {
  this.submitted=true;
  if(this.itemForm.valid){
    this.Add();
  }
  
}
onReset() {
    this.submitted = false;
    this.itemForm.reset();
}
  
  Add()
    {
      
      this.items=new Buyer();
      this.items.username=this.itemForm.value['username'];
      this.items.id=Math.floor(Math.random()*10);
      this.items.email=this.itemForm.value['email'];
      this.items.mobilenumber=this.itemForm.value['mobilenumber'];
      this.items.createdatetime=new Date(this.itemForm.value['createdatetime']);
      this.items.password=(this.itemForm.value['password']);
      console.log(this.items)
      this.services.addBuyer(this.items).subscribe(
        res=>{this.itemForm.reset()
      },err=>{console.log(err)}
      );
    
  }
  reset(){
    alert("Sucessfully Registered");
    this.itemForm.reset();
  }
  redirect()
  {
    this.route.navigateByUrl('/Land/login')
  }
  resett(){
    this.itemForm.reset();
  }
}

