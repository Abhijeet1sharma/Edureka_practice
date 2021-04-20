import { Component, OnInit } from '@angular/core';
import {GetBusInfoService} from '../../services/get-bus-info.service'

@Component({
  selector: 'app-display-ticket',
  templateUrl: './display-ticket.component.html',
  styleUrls: ['./display-ticket.component.css']
})
export class DisplayTicketComponent implements OnInit {

  userInfo:any[]
  src_city:string
  dest_city:string
  departure_date:any
  selectedSeat:any[]
  Total_fare:number
  BusDetails:[]
  constructor(private BusService:GetBusInfoService) { }

  ngOnInit(): void {
    this.getUserInfo()
    this.getCities()
    this.getSelectedSeat()
    this.getTotalFare()
    this.getBusDetails()
    
  }
  getBusDetails()
  {
    this.BusDetails=this.BusService.getSelectedBus()
    console.log(this.BusDetails)
  }
  getUserInfo()
  {
    this.userInfo=this.BusService.getUserInfo();
    console.log("User info ",this.userInfo);
  }
  getCities()
  {
    this.src_city=this.BusService.getsrc()
    this.dest_city=this.BusService.getdest()
    this.departure_date=this.BusService.getDepartureDate()
  }
  getSelectedSeat()
  {
    this.selectedSeat=this.BusService.getSelectedSeats()
  }
  getTotalFare()
  {
    this.Total_fare=this.BusService.getTotalFare()
    console.log(this.Total_fare)
  }

}
