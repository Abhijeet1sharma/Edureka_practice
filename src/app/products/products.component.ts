import { Component, Input, OnInit, Output ,EventEmitter} from '@angular/core';
import {ProductService} from '../services/product.service'


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  products:any[]
  @Input()
  items:any;

  @Output()
  addEventFromChild:EventEmitter<any>

  @Input()
  heading:String;


  constructor(private _productService:ProductService) { 
    this.addEventFromChild=new EventEmitter()
    this.products=_productService.getProducts();
    console.log(this.products)
  }


  ngOnInit(): void {
  }

  childButtonClicked(){
  return  this.addEventFromChild.emit({message:"hi from child"});
  }

}
