import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-landing-page',
  templateUrl: './admin-landing-page.component.html',
  styleUrls: ['./admin-landing-page.component.css']
})
export class AdminLandingPageComponent implements OnInit {
  username:string;
  constructor(private route:Router,private routes:Router) {
    this.username=(localStorage.getItem('admin'))
    if(this.username==null){
      this.routes.navigateByUrl('Land');
    }
    else{
      this.route.navigateByUrl('Admin')
    }
   }

  ngOnInit() {
  }
  reset(){
    localStorage.clear();
    this.route.navigateByUrl('Land');
  }
}
