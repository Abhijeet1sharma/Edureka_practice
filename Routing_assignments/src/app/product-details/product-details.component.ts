import { Component, OnInit } from '@angular/core'
import {data} from '../data'

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  products: any = data
  constructor() {
  
  
   
   }

  ngOnInit(): void {
  }
 

}
