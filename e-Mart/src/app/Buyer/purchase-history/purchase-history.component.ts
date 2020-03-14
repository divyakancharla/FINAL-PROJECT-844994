import { Component, OnInit } from '@angular/core';
import { BuyerService } from '../buyer.service';
import { Items } from 'src/app/Models/items';
import { Purchase } from 'src/app/Models/purchase';
import { SellerService } from 'src/app/Seller/seller.service';

@Component({
  selector: 'app-purchase-history',
  templateUrl: './purchase-history.component.html',
  styleUrls: ['./purchase-history.component.css']
})
export class PurchaseHistoryComponent implements OnInit {
list:Items;
item:Items
bid:number;
purch:Purchase[]=[];
items:Items[]=[]
  constructor(private service:BuyerService,private services:SellerService) {
    
    this.list=JSON.parse(localStorage.getItem('buy'))
    if(this.list==null){
      alert("no items to show");

    }
    else{
     this.PurchaseHistory();
    }
   }
   PurchaseHistory()
   {
   this.bid=Number(localStorage.getItem('buyerid'))
     this.service.purcahsehistory(this.bid).subscribe(res=>{
   this.purch=res;
   console.log(this.purch);
   for(let i=0;i<this.purch.length;i++)
   {
   this.services.getbyid(this.purch[i].itemid).subscribe(res=>{
     this.items.push(res);
     console.log(this.items);
   })
   }
   console.log(this.purch);
     })
   }
   
  ngOnInit() {
  }

}
