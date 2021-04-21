import { Component, OnInit } from '@angular/core';
import {Router,ActivatedRoute} from '@angular/router'
import {GetBusInfoService} from '../../services/get-bus-info.service'


@Component({
  selector: 'app-bus-search',
  templateUrl: './bus-search.component.html',
  styleUrls: ['./bus-search.component.css'],
  
})


export class BusSearchComponent implements OnInit {

  Bus_data:any[]
  new_bus:any[]
  src_city:string
  dest_city:string
  error_msg:boolean=false

  constructor(private router:Router,
    private route:ActivatedRoute,
    private getBus:GetBusInfoService) { 
      this.Bus_data=[]
      this.new_bus=[]
      
    }
    public selectedName:any;
  
    

  ngOnInit(): void {
    this.getData()
    this.data_filter()
     
    
  }

  getData()
  {
  
   this.Bus_data= this.getBus.getInfo()
   this.src_city=this.getBus.getsrc()
   this.dest_city=this.getBus.getdest()
   
   
     
    
  }
  
  data_filter()
  {
    
    for(var i in this.Bus_data)
    {
      if(this.Bus_data[i]['from']===this.src_city && this.Bus_data[i]['to']===this.dest_city)
      {
        this.new_bus.push(this.Bus_data[i])
        
      }
    }
    if(this.new_bus.length==0)
    {
      this.error_msg=true

    }
  console.log(this.new_bus)
  }

  ViewDetail(Bus)
  {
    this.getBus.setSelectedBus(Bus)
    this.router.navigate(['./seatSelect'])


  }
 

  
  

}
