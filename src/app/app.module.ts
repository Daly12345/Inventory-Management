 import { BrowserModule } from '@angular/platform-browser';
 import { NgModule } from '@angular/core';
 import { FormsModule } from '@angular/forms';
 import { HttpClientModule } from '@angular/common/http';

 import { AppComponent } from './app.component';
 import { ProductImageComponent } from './product-image/product-image.component';
 
 import { PriceDisplayComponent } from './price-display/price-display.component';
 import { ProductRowComponent } from './product-row/product-row.component';
 import { ProductsListComponent } from './products-list/products-list.component';
 import{ProductDepartmentComponent} from './product-department/product-department.component';


 @NgModule({
 declarations: [
 AppComponent,
 ProductImageComponent,
 PriceDisplayComponent,
 ProductRowComponent,
 ProductsListComponent,
 ProductDepartmentComponent,
 
 ],
 imports: [
 BrowserModule,
 FormsModule,
 HttpClientModule
 ],
 providers: [],
 bootstrap: [AppComponent]
 })
 export class AppModule { } 