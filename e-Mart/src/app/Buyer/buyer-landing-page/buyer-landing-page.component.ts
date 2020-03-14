import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BuyerService } from '../buyer.service';
import { Buyer } from 'src/app/Models/buyer';
import { Items } from 'src/app/Models/items';

@Component({
  selector: 'app-buyer-landing-page',
  templateUrl: './buyer-landing-page.component.html',
  styleUrls: ['./buyer-landing-page.component.css']
})
export class BuyerLandingPageComponent implements OnInit {
id:number;
list:Buyer;
  constructor(private route:Router,private service:BuyerService) {
    if(localStorage.getItem('buyerid')==null)
    {
      this.route.navigateByUrl('Land');
    }
    this.myone()
  
   }
myone(){
  this.id=JSON.parse(localStorage.getItem('buyerid'));
  this.service.Myprofile(this.id).subscribe(res=>{this.list=res
    console.log(this.list)});
   
}
  ngOnInit() {
  }
  reset(){
    localStorage.clear();
    this.route.navigateByUrl('Land');
  }
}
