import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {data} from '../data'
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  products: any = data
  constructor(private route: ActivatedRoute) { 
    
  }
  property:any[]
  product:any[]
  src:string
  ngOnInit(): void {
    if(this.route!)
    {
      this.route.queryParams.subscribe(params => {
        const {id}=params

        this.products.forEach((p) => {
          if (p.id == id) {
            this.product = p;
            console.log(this.product)
          }
        });
      });
    }
    if(this.product['id']==1)
    {
      this.src="https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcT6BxpeggZ37gagGb6pQ42eibIOvbg12rvT_Szi9L23PerzZL2wA29C-bEradEM3d1iey-abHyXgghsU924uX09wpGQza9Pz9I&usqp=CAc"
    }
    else if(this.product['id']==2)
    {
      this.src="https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcRrfQh6fIcwv0JJjiawHvnSg1fyROG9nqEpEnSGGXBLTZkqpqu00We0khNme30iyir7BP85pvQw4gkzBdePPzm0GrskK1_fPLKm&usqp=CAc"

    }
    else{
      this.src="https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQYa1OdJXcyS1HorO4NH_2o6RF4GMhEL_DHMBrsWYm0S47e6vxpqMWb1jUm8TkJpBEKvARdpuifiUg7-mcTm_5ZSkl-T663jhY&usqp=CAc"
    }

    
  }

}
