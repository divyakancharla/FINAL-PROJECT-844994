import { Component, OnInit } from '@angular/core';
import { BuyerService } from '../buyer.service';
import { Addcart } from 'src/app/Models/addcart';
import { Route } from '@angular/compiler/src/core';
import { Items } from 'src/app/Models/items';
import { Router } from '@angular/router';

@Component({
  selector: 'app-view-cart',
  templateUrl: './view-cart.component.html',
  styleUrls: ['./view-cart.component.css']
})
export class ViewCartComponent implements OnInit {
list:Addcart;
id:Number;

transtype:string;
  constructor(private service:BuyerService,private route:Router) { 
   this.view();
  }
view()
{
  this.transtype=localStorage.getItem('transtype')
  this.id=JSON.parse(localStorage.getItem('buyerid'))
  console.log(this.id);
  this.service.viewcart(this.id).subscribe(res=>{this.list=res,console.log(this.list.Sellerid)})
}
  ngOnInit() {
  }
Delete(del:number)
{
  
this.service.DeleteCartItem(del).subscribe(res=>{alert("deleted"),this.view()});

}
Buy(buy:Items[]){
  console.log(buy)
  localStorage.setItem('buy',JSON.stringify(buy));
  //console.log(JSON.parse(localStorage.getItem('buy')))
  this.route.navigateByUrl('/Buyer/buyproduct')
}
}
