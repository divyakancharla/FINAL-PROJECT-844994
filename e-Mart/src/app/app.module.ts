import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import{ReactiveFormsModule} from "@angular/forms";
import{FormsModule} from "@angular/forms";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BuyerLandingPageComponent } from './Buyer/buyer-landing-page/buyer-landing-page.component';
import { SearchComponent } from './Buyer/search/search.component';
import { ViewCartComponent } from './Buyer/view-cart/view-cart.component';
import { PurchaseHistoryComponent } from './Buyer/purchase-history/purchase-history.component';
import { ViewProfileComponent } from './Buyer/view-profile/view-profile.component';
import { BuyProductComponent } from './Buyer/buy-product/buy-product.component';
import { SellerLandingPageComponent } from './Seller/seller-landing-page/seller-landing-page.component';
import { AddItemsComponent } from './Seller/add-items/add-items.component';
import { ViewItemsComponent } from './Seller/view-items/view-items.component';
import { ViewReportsComponent } from './Seller/view-reports/view-reports.component';
import { AdminLandingPageComponent } from './Admin/admin-landing-page/admin-landing-page.component';
import { BlockUnblockBuyerComponent } from './Admin/block-unblock-buyer/block-unblock-buyer.component';
import { AddCategoryComponent } from './Admin/add-category/add-category.component';
import { AddSubCategoryComponent } from './Admin/add-sub-category/add-sub-category.component';
import { DailyReportsComponent } from './Admin/daily-reports/daily-reports.component';
import { BlockUnblockSellerComponent } from './Admin/block-unblock-seller/block-unblock-seller.component';
import { LoginComponent } from './Account/login/login.component';
import { RegisterBuyerComponent } from './Account/register-buyer/register-buyer.component';
import { RegisterSellerComponent } from './Account/register-seller/register-seller.component';
import { SellerProfileComponent } from './Seller/seller-profile/seller-profile.component';
import { HomeComponent } from './Account/home/home.component';
import { LoginService } from './Account/Services/login.service';
import { from } from 'rxjs';
import {HttpClientModule} from '@angular/common/http';
import { ViewCategoryComponent } from './Admin/view-category/view-category.component';
import { ViewSubCategoryComponent } from './Admin/view-sub-category/view-sub-category.component';
import { StartComponent } from './start/start.component';
import { LandingComponent } from './Account/landing/landing.component';
@NgModule({
  declarations: [
    AppComponent,
    BuyerLandingPageComponent,
    SearchComponent,
    ViewCartComponent,
    PurchaseHistoryComponent,
    ViewProfileComponent,
    BuyProductComponent,
    SellerLandingPageComponent,
    AddItemsComponent,
    ViewItemsComponent,
    ViewReportsComponent,
    AdminLandingPageComponent,
    BlockUnblockBuyerComponent,
    AddCategoryComponent,
    AddSubCategoryComponent,
    DailyReportsComponent,
    BlockUnblockSellerComponent,
    LoginComponent,
    RegisterBuyerComponent,
    RegisterSellerComponent,
    SellerProfileComponent,
    HomeComponent,
    ViewCategoryComponent,
    ViewSubCategoryComponent,
    StartComponent,
    LandingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
    
  ],
  providers: [LoginService],
  bootstrap: [AppComponent]
})
export class AppModule { }
