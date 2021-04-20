import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators,FormControl } from '@angular/forms';
import {GetBusInfoService} from '../../services/get-bus-info.service'
import {Router,ActivatedRoute} from '@angular/router'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  
  Bus:any[]
  submitted: boolean = false;

  
  form = new FormGroup({
    source: new FormControl('',Validators.required),
    dest: new FormControl('',Validators.required),
    dob:new FormControl('',Validators.required)
  });
  get f(){
    return this.form.controls;
  }
  constructor(private formBuilder: FormBuilder,private BusInfo:GetBusInfoService,
    private router:Router,
    private route:ActivatedRoute) {
    this.Bus=[]
   
   
   }
   cities = [
    { id: 1, city_id: "Jaipur" },
    { id: 2, city_id: "Ahemdabad" },
    { id: 3, city_id: "Pune" },
    { id: 4, city_id: "Banglore" },
    { id: 5, city_id: "Haryana" },
    { id: 6, city_id: "Mumbai" }
  ];
   source = this.cities;
   dest = this.cities;
  


  
  ngOnInit() {
    // merge(
    //   this.form.get('dest_switch_id').valueChanges,
    //   this.form.get('source_switch_id').valueChanges
    // ).subscribe(()=>{

    //   this.source = this.cities.filter(x => x.id != this.form.get('dest_switch_id').value);
    //   this.dest = this.cities.filter(x => x.id != this.form.get('source_switch_id').value);
    // })
    this.Bus=this.BusInfo.getInfo()
  }
  
  
   
  

  
  onFormSubmit()
  {
    const Leaving=this.form.value.source
    const Going=this.form.value.dest
    const date=this.form.value.dob
    let data:any[]=this.form.value
    console.log(data)
   this.BusInfo.setCity(Leaving,Going,date)
   this.router.navigate(['./busSearch'])
  }
    
    
  changeWebsite(e) {
    const city=e.target.value
    this.dest=this.cities.filter(x=>x.city_id!=city);
  
  }

  
  
   

}




 