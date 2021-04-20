import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
@Injectable({
  providedIn: 'root'
})
export class BusDataService implements InMemoryDbService{

  createDb()
  {
    const buses=[
      {id:1,from:"Jaipur",to:"Haryana",DepartureTime:"10:00 pm",BusName:"Jaipur Jet",Coach:"AC",Seats:36,fare:400},
      {id:2,from:"Jaipur",to:"Haryana",DepartureTime:"10:00 pm",BusName:"Jaipur Exclusive",Coach:"AC",Seats:36,fare:600},
      {id:3,from:"Mumbai",to:"Ahemdabad",DepartureTime:"10:00 pm",BusName:"Mumbai Exclusive",Coach:"AC",Seats:36,fare:600},
      {id:4,from:"Mumbai",to:"Pune",DepartureTime:"10:00 pm",BusName:"Mumbai Exclusive",Coach:"AC",Seats:36,fare:600},
    ]
    
    return {buses}
  }
}
