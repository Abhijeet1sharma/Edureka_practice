import { Component, Input, OnInit, Output ,EventEmitter} from '@angular/core';


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  @Input()
  items:any;

  @Output()
  addEventFromChild:EventEmitter<any>

  @Input()
  heading:String;


  constructor() { 
    this.addEventFromChild=new EventEmitter()
  }


  ngOnInit(): void {
  }

  childButtonClicked(){
  return  this.addEventFromChild.emit({message:"hi from child"});
  }

}
