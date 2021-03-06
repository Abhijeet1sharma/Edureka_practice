import { Component, OnInit } from '@angular/core';
import {GetBusInfoService} from '../../services/get-bus-info.service'
import {Router} from '@angular/router'

@Component({
  selector: 'app-seat-select',
  templateUrl: './seat-select.component.html',
  styleUrls: ['./seat-select.component.css']
})
export class SeatSelectComponent implements OnInit {

  SelectedBus:any[]
  selectedids:any[]
  func_call:number=0
  fare:number
  total_fare:number
  seats=["A1","B1","C1","D1","E1","F1","G1","H1","I1",
       "A2","B2","C2","D2","E2","F2","G2","H2","I2",
       "A3","B3","C3","D3","E3","F3","G3","H3","I3",
       "A4","B4","C4","D4","E4","F4","G4","H4"]

  alert:boolean=false
  s:any[]
  constructor(private BusService:GetBusInfoService,private router:Router) { 
    this.selectedids=[]
    this.s=[]
    this.total_fare=0
  
  }

  ngOnInit(): void {
  this.getSelectedBus()
    
  }

  getSelectedBus()
  {
    this.SelectedBus=this.BusService.getSelectedBus()
   
   

  }

  Seat(seatid)
  {
    console.log(seatid)
    if(this.selectedids.includes(seatid))
    {
      let id=document.getElementById(seatid)
      id.innerHTML=`<img src="../assets/img/bseat.png" alt=" ">`
      for(let i=0;i<this.selectedids.length;i++)
      {
        if(this.selectedids[i]==seatid)
        {
          this.selectedids.splice(i,1);
          this.s.splice(i,1)
          this.total_fare-=this.fare
        }
      }
    
      

    }
    else
    {
    this.func_call+=1
    let id=document.getElementById(seatid)
    if(this.func_call<5)
    {

    id.innerHTML=`<img src="../assets/img/fseat.png" alt=" ">`
    this.selectedids.push(seatid)
    this.fare=this.SelectedBus['fare']
    let myobj={}
    myobj['seat_id']=seatid
    myobj['fare']=this.fare
    myobj['class']="Economy"
    this.s.push(myobj)
    this.total_fare+=this.fare
    

    }
    else
    {
      this.alert=true
    }
  }
    

  }

  Confirm()
  {
    this.BusService.setSelectedSeats(this.selectedids)
    this.BusService.setTotalFare(this.total_fare)
    this.router.navigate(['./userForm'])
  }
  



}
