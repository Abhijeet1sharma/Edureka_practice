import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title:string;
  products:any[];
  constructor()
  {
    this.title="Amazon Retail app";
    this.products=this.getProducts();
    this
  }
  getProducts(){
    return [
      {name:"iphone",price:10000,category:"mobile"},
      {name:"macbook",price:60000,category:"laptop"}
      ]
  }
  addProducts(){
    this.products.push({
      name:"Apple",
      price:6000,
      category:"watch"
    })
  }
  clickEventFromChild(event:any){
    const {message}=event
    console.log(message)
    alert(message)
  }
}

