import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Items } from 'src/app/Models/items';
import { Purchase } from 'src/app/Models/purchase';
import { BuyerService } from '../buyer.service';
import{NgControl} from '@angular/forms';
@Component({
  selector: 'app-buy-product',
  templateUrl: './buy-product.component.html',
  styleUrls: ['./buy-product.component.css']
})
export class BuyProductComponent implements OnInit {
payform:FormGroup;
pay:boolean=false;
items:Items;
list:Items[]=[];
id:string;
id1:number;
today=new Date();
purchase:Purchase;
disabled:boolean=false;
total:number;
submitted=false;
  constructor(private fromb:FormBuilder,private route:Router,private service:BuyerService, router:Router) {
    //this.items=new Items();
    if(localStorage.getItem('buy')==null)
    {
      router.navigateByUrl('/Buyer/Search'); }
  else{
    
    this.items=JSON.parse(localStorage.getItem('buy'));
  this.list.push(this.items)
  console.log(this.list)}
  }
   
   get f()
  {
    return this.payform.controls;
  }

  ngOnInit() {
    this.payform=this.fromb.group({
      cardnumber:['',[Validators.required,Validators.pattern("[0-9]{16}")]],
      cvv:['',[Validators.required,Validators.pattern("[0-9]{3}")]],
      pid:['',Validators.required],
      select:['',Validators.required],
      transtype:['',Validators.required],
      remarks:['',Validators.required],
      numberofitems:['',[Validators.required,Validators.min(1)]],
      total:['',Validators.required]

    })
    
  }
card(){
 
  this.id=this.payform.value['transtype']
  
  if(this.id=='Cash'){
    this.pay=false
  }
  else{
    this.pay=true;
    
  }
  

}
key(event){
 this.id1=Number(this.payform.value['numberofitems'])
  
    console.log(this.total=this.id1*this.items.price);
  
    
}

 
  onsubmit()
  {
  this.submitted=true;
  if(this.payform.valid){
   return this.Buy()
  }
  
}

Buy(){
  console.log(this.items.sellerid);
  this.purchase=new Purchase();
  this.purchase.pid=Number(Math.floor(Math.random()*1000));
  this.purchase.buyerid=Number(localStorage.getItem('buyerid'));
  this.purchase.sellerid=this.items.sellerid;
  this.purchase.TransactionType=this.payform.value['transtype']
  this.purchase.itemid=this.items.itemid;
  this.purchase.NumberOfitems=this.payform.value['numberofitems']
  this.purchase.Datetime=this.today;
  this.purchase.remarks=this.payform.value['remarks']
  this.purchase.transactionstatus="paid";
  console.log(this.purchase);

  this.service.Buy(this.purchase).subscribe(res=>{alert("payment Success"),this.route.navigateByUrl('Buyer')
  
  })
}
}
