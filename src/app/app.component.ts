import { Component,OnInit } from '@angular/core';
import {ProductService} from './services/product.service'


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title:string;
  products:any[];
  constructor(private _productService:ProductService)
  {
    this.title="Amazon Retail app";
    this.products=_productService.getProducts();
    
  }
  

 

  // getProducts(){
  //   return [
  //     {name:"iphone",price:10000,category:"mobile"},
  //     {name:"macbook",price:60000,category:"laptop"}
  //     ]
  // }
  // addProducts(){
  //   this.products.push({
  //     name:"Apple",
  //     price:6000,
  //     category:"watch"
  //   })
  // }
  clickEventFromChild(event:any){
    const {message}=event
    console.log(message)
    alert(message)
  }
}

