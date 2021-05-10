
import { Component, EventEmitter, Input, Output} from '@angular/core';
import { Product } from '../models/product.model';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent {

  //to recieve data from parent ad Input
  @Input() productObj: Product;

  //create a custom event
  @Output() myEvent=new EventEmitter()



  sendProductDetailsToParent(nailColor)
   //emit data to parent
  {
    this.myEvent.emit(nailColor);
  }
}
