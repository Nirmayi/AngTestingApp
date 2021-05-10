import { Component, Input } from '@angular/core';
import { Product } from '../models/product.model';


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {

  products:Product[]=[
    {
      nailColor:"Shade-1",
      description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis nisi sunt placeat esse blanditiis quidem culpa quaerat sed consequatur deleniti quod, in asperiores ipsum fugiat possimus, vero repellat numquam vel.",
      nailImage:"https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/index2-1566590504.png?crop=0.502xw:1.00xh;0,0&resize=640:*"
    },
    {
      nailColor:"Shade-2",
      description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis nisi sunt placeat esse blanditiis quidem culpa quaerat sed consequatur deleniti quod, in asperiores ipsum fugiat possimus, vero repellat numquam vel.",
      nailImage:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRd0VJ9Z1nIkPRNQrtKDZzG5K4w3j9aQZpfVUNF65Ek2BbpG95ViTQ_Efa1WKvrqaccrj0&usqp=CAU"
    },
    {
      nailColor:"Shade-3",
      description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis nisi sunt placeat esse blanditiis quidem culpa quaerat sed consequatur deleniti quod, in asperiores ipsum fugiat possimus, vero repellat numquam vel.",
      nailImage:"https://www.byrdie.com/thmb/h4GDp19HrhIC7f-Hg5j7RaLYHBM=/1254x1254/smart/filters:no_upscale()/ScreenShot2020-08-31at8-533a1e7843f340ca8872180418484f69.jpg"
    },
    {
      nailColor:"Shade-4",
      description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis nisi sunt placeat esse blanditiis quidem culpa quaerat sed consequatur deleniti quod, in asperiores ipsum fugiat possimus, vero repellat numquam vel.",
      nailImage:"https://www.4fashionadvice.com/wp-content/uploads/blue-3.jpg"
    },
    {
      nailColor:"Shade-5",
      description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis nisi sunt placeat esse blanditiis quidem culpa quaerat sed consequatur deleniti quod, in asperiores ipsum fugiat possimus, vero repellat numquam vel.",
      nailImage:"https://images.jdmagicbox.com/comp/delhi/j9/011pxx11.xx11.201201171858.f5j9/catalogue/deepak-nail-art-at-home-service-shadipur-delhi-nail-spas-1yzt4z00k0.jpg?clr="
    },
    {
      nailColor:"Shade-6",
      description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis nisi sunt placeat esse blanditiis quidem culpa quaerat sed consequatur deleniti quod, in asperiores ipsum fugiat possimus, vero repellat numquam vel.",
      nailImage:"https://images-na.ssl-images-amazon.com/images/I/61VV0rhlzkL._SL1050_.jpg"
    }





  ];

  productsSentByChild=[];
  productCount:number=0;

  getProductDetailsFromChild(productTitle)
  {
    console.log(productTitle);
    this.productsSentByChild.push(productTitle)
    this.productCount++
  }
  

}
