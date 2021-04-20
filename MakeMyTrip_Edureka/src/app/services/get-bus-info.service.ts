import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class GetBusInfoService {
  src_city:string
  dest_city:string
  departure_date:any
  selected_bus:any
  selected_seats:any[]
  UserForm:any[]
  Total_fare:number
  SERVER_URL: string = "/api/buses";
   buses:any[]=[
    {Bus_number:1001,from:"Jaipur",to:"Haryana",DepartureTime:"10:00 pm",BusName:"Jaipur Jet",Coach:"AC",Seats:36,fare:400},
    {Bus_number:1002,from:"Jaipur",to:"Haryana",DepartureTime:"10:00 pm",BusName:"Jaipur Exclusive",Coach:"AC",Seats:36,fare:600},
    {Bus_number:1001,from:"Haryana",to:"Jaipur",DepartureTime:"10:00 pm",BusName:"Jaipur Jet",Coach:"AC",Seats:36,fare:400},
    {Bus_number:1002,from:"Haryana",to:"Jaipur",DepartureTime:"10:00 pm",BusName:"Jaipur Exclusive",Coach:"AC",Seats:36,fare:600},
    {Bus_number:1004,from:"Jaipur",to:"Mumbai",DepartureTime:"10:00 pm",BusName:"Jaipur Golden",Coach:"AC",Seats:36,fare:600},
    {Bus_number:1004,from:"Mumbai",to:"Jaipur",DepartureTime:"10:00 pm",BusName:"Jaipur Golden",Coach:"AC",Seats:36,fare:600},
    {Bus_number:1004,from:"Jaipur",to:"Ahemdabad",DepartureTime:"10:00 pm",BusName:"Jaipur Golden",Coach:"AC",Seats:36,fare:600},
    {Bus_number:1004,from:"Ahemdabad",to:"Jaipur",DepartureTime:"10:00 pm",BusName:"Jaipur Golden",Coach:"AC",Seats:36,fare:600},
    {Bus_number:1003,from:"Mumbai",to:"Ahemdabad",DepartureTime:"10:00 pm",BusName:"Mumbai Exclusive",Coach:"AC",Seats:36,fare:600},
    {Bus_number:1003,from:"Ahemdabad",to:"Mumbai",DepartureTime:"10:00 pm",BusName:"Mumbai Exclusive",Coach:"AC",Seats:36,fare:600},
    {Bus_number:1005,from:"Mumbai",to:"Pune",DepartureTime:"10:00 pm",BusName:"Mumbai jet",Coach:"AC",Seats:36,fare:600},
    {Bus_number:1006,from:"Mumbai",to:"Pune",DepartureTime:"10:00 pm",BusName:"Mumbai SilverLine",Coach:"AC",Seats:36,fare:600},
    {Bus_number:1005,from:"Pune",to:"Mumbai",DepartureTime:"10:00 pm",BusName:"Mumbai jet",Coach:"AC",Seats:36,fare:600},
    {Bus_number:1006,from:"Pune",to:"Mumbai",DepartureTime:"10:00 pm",BusName:"Mumbai SilverLine",Coach:"AC",Seats:36,fare:600},
    {Bus_number:1007,from:"Pune",to:"Mumbai",DepartureTime:"10:00 pm",BusName:"Pune SilverLine",Coach:"AC",Seats:36,fare:600},
    {Bus_number:1007,from:"Pune",to:"Banglore",DepartureTime:"10:00 pm",BusName:"Pune SilverLine",Coach:"AC",Seats:36,fare:600},
    {Bus_number:1007,from:"Banglore",to:"Pune",DepartureTime:"10:00 pm",BusName:"Pune SilverLine",Coach:"AC",Seats:36,fare:600},
  
  ]
  constructor(private httpClient: HttpClient) {
  
   }
  getInfo(){ 
    return   this.buses

}

setCity(src,dest,date)
{
this.src_city=src
this.dest_city=dest
this.departure_date=date

}
getsrc()
{
  return this.src_city
}
getdest()
{
  return this.dest_city
}
setSelectedBus(bus)
{
  this.selected_bus=bus
  console.log(this.selected_bus)
}
getSelectedBus()
{
  return this.selected_bus
}

getDepartureDate()
{
  return this.departure_date
}
setSelectedSeats(selected_seats)
{
  this.selected_seats=selected_seats
}

getSelectedSeats()
{
  return this.selected_seats
}

setUserInfo(User)
{
  this.UserForm=User
}
getUserInfo()
{
  return this.UserForm
}

setTotalFare(fare)
{
  this.Total_fare=fare
  console.log(this.Total_fare)
  
}
getTotalFare()
{
  return this.Total_fare
}

}
