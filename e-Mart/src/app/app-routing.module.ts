import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BuyerLandingPageComponent } from './Buyer/buyer-landing-page/buyer-landing-page.component';
import { SearchComponent } from './Buyer/search/search.component';
import { ViewCartComponent } from './Buyer/view-cart/view-cart.component';
import { PurchaseHistoryComponent } from './Buyer/purchase-history/purchase-history.component';
import { BuyProductComponent } from './Buyer/buy-product/buy-product.component';
import { ViewProfileComponent } from './Buyer/view-profile/view-profile.component';
import { SellerLandingPageComponent } from './Seller/seller-landing-page/seller-landing-page.component';
import { AddItemsComponent } from './Seller/add-items/add-items.component';
import { ViewItemsComponent } from './Seller/view-items/view-items.component';
import { ViewReportsComponent } from './Seller/view-reports/view-reports.component';
import { SellerProfileComponent } from './Seller/seller-profile/seller-profile.component';
import { AdminLandingPageComponent } from './Admin/admin-landing-page/admin-landing-page.component';
import { BlockUnblockBuyerComponent } from './Admin/block-unblock-buyer/block-unblock-buyer.component';
import { BlockUnblockSellerComponent } from './Admin/block-unblock-seller/block-unblock-seller.component';
import { AddCategoryComponent } from './Admin/add-category/add-category.component';
import { AddSubCategoryComponent } from './Admin/add-sub-category/add-sub-category.component';
import { DailyReportsComponent } from './Admin/daily-reports/daily-reports.component';
import { LoginComponent } from './Account/login/login.component';
import { RegisterBuyerComponent } from './Account/register-buyer/register-buyer.component';
import { RegisterSellerComponent } from './Account/register-seller/register-seller.component';
import { HomeComponent } from './Account/home/home.component';
import { ViewCategoryComponent } from './Admin/view-category/view-category.component';
import { ViewSubCategoryComponent } from './Admin/view-sub-category/view-sub-category.component';
import { StartComponent } from './start/start.component';
import { LandingComponent } from './Account/landing/landing.component';


const routes: Routes = [
  {path:'start',component:StartComponent},
  {path:'Landing',component:LandingComponent},

  {path:'Buyer',component:BuyerLandingPageComponent,children:[
    {path:'Search',component:SearchComponent},{path:'Viewcart',component:ViewCartComponent},
    {path:'purchase',component:PurchaseHistoryComponent},
    {path:'buyproduct',component:BuyProductComponent},
    {path:'viewprofile',component:ViewProfileComponent}]},
    {path:'Seller',component:SellerLandingPageComponent,children:[
    {path:'Additems',component:AddItemsComponent},{path:'viewitems',component:ViewItemsComponent},
    {path:'ViewReports',component:ViewReportsComponent},{path:'ViewProfile',component:SellerProfileComponent}]},
    {path:'Admin',component:AdminLandingPageComponent,children:[
      {path:'BlockUblockbuyer',component:BlockUnblockBuyerComponent},
      {path:'viewcategory',component:ViewCategoryComponent},{path:'viewsubcategory',component:ViewSubCategoryComponent},
    {path:'BlockUblockSeller',component:BlockUnblockSellerComponent},{path:'AddCategory',component:AddCategoryComponent},
  {path:'AddSubCategory',component:AddSubCategoryComponent},{path:'DailyReports',component:DailyReportsComponent}]},
  {path:'Land',component:HomeComponent,children:[{path:'registerbuyer',component:RegisterBuyerComponent},
  {path:'registerSeller',component:RegisterSellerComponent},{path:'login',component:LoginComponent}]},
  {path:'',redirectTo:'Landing',pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
