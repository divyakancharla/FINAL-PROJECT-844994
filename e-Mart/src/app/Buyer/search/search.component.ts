import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { BuyerService } from '../buyer.service';
import { Items } from 'src/app/Models/items';
import { Router } from '@angular/router';
import { Addcart } from 'src/app/Models/addcart';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
search:FormGroup;
item:Items;
items:Items[];
cart:Addcart;
transtype:string;
allcart:Addcart
carddet:Addcart;
id:Number;
id2:Number
Message:string;
bool:Boolean;
  constructor(private formb:FormBuilder,private service:BuyerService,private route:Router) 
  {
    
    
    
  }

  ngOnInit()
   {
    this.search=this.formb.group({search:['']})
  }
searchh()
{

  this.service.search(this.search.value['search']).subscribe(res=>{this.items=res,console.log(this.items)
  if(this.items==null){
    this.bool=true;
    this.Message="No Results"
  }})
}
Buy(list:Items){

  this.item=list;
  console.log(this.item);
  localStorage.setItem('buy',JSON.stringify(list));
  this.route.navigateByUrl('/Buyer/buyproduct')
}
addcart(cartitem:Addcart){
  this.id=cartitem.itemid;
  this.service.viewallcart(this.id).subscribe(res=>{this.id2=res,console.log(this.id2)
  if(this.id2!=0)
  {
    alert("already exists")
  }
  else{
    this.cart=new Addcart();
 this.cart.itemid=cartitem.itemid;
 this.cart.buyerid=Number(localStorage.getItem('buyerid'));
 this.cart.itemname=cartitem.itemname;
 this.cart.price=cartitem.price;
 this.cart.imagename=cartitem.imagename;
 this.cart.cartid=Number(Math.floor(Math.random()*1000));

  this.service.AddCart(this.cart).subscribe(res=>alert("item added to cart"))


}})}
  }


