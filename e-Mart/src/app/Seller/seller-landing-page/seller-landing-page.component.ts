import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SellerService } from '../seller.service';
import { Seller } from 'src/app/Models/seller';

@Component({
  selector: 'app-seller-landing-page',
  templateUrl: './seller-landing-page.component.html',
  styleUrls: ['./seller-landing-page.component.css']
})
export class SellerLandingPageComponent implements OnInit {
id:number;
list:Seller;
  constructor(private route:Router,private servicez:SellerService) {
    if(localStorage.getItem('sellerid')==null){
      this.route.navigateByUrl('Land');
    }
    else{
      this.myone()
    }
   }
   myone(){
    this.id=JSON.parse(localStorage.getItem('sellerid'));
    this.servicez.Myprofile(this.id).subscribe(res=>{this.list=res
      console.log(this.list)});
     
  }

  ngOnInit() {
  }
reset(){
  localStorage.clear();
  this.route.navigateByUrl('Land');
}
}
