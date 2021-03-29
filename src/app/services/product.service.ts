import { Injectable,OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import * as data from '../data.json'


@Injectable({
  providedIn: 'root'
})
export class ProductService {

  products:any;
  constructor() { 
      this.products = (data as any).default;

}
  
  

  getProducts(){
    return this.products
  }
  updateProducts(product:any,index:any)
  {
    this.products.splice(index,1,product)

  }
  addProducts(product:any)
  {
    this.products.push(product)

  }
  deleteProducts(index:any)
  {
this.products.splice(index,1);
  }
}
