import { Component, OnInit, HostBinding, Input } from '@angular/core';
import {Product} from '../product'
@Component({
  selector: 'app-product-image',
  templateUrl: './product-image.component.html',
  styleUrls: ['./product-image.component.css']
})


 @Component({
   selector: 'product-image',
   template: `
   <img class="product-image" [src]="product.imageUrl">
   `
   })
   export class ProductImageComponent {
   @Input() product: Product;
   @HostBinding('attr.class') cssClass = 'ui small image';
   }
  
