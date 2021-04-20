import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {GetBusInfoService} from '../../services/get-bus-info.service'
import {Router} from '@angular/router'

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {

  loginForm: FormGroup = this.formBuilder.group({});
  submitted: boolean = false;
  error: string = '';
  loading: boolean = false;
  Dest_city:string
  Src_city:string
  Selected_seats:any[]
  date:any
  data=[]

  constructor(private formBuilder: FormBuilder,
    private BusService:GetBusInfoService,
    private router:Router) {
    
     }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      UserName: ['', [Validators.required]],
      Mobile: ['', [Validators.required, Validators.minLength(10)]],
      email: ['', [Validators.required, Validators.email]]
    });
    this.getDate()
    this.getDest()
    this.getSeats()
    this.getSrc()
  }
  get f() {
    return this.loginForm.controls;
  }
  getSeats()
  {
    this.Selected_seats=this.BusService.getSelectedSeats()
    console.log(this.Selected_seats)
  }
  getDest()
  {
    this.Dest_city=this.BusService.getdest()
  }
  getSrc()
  {
    this.Src_city=this.BusService.getsrc()
  }
  getDate()
  {
    this.date=this.BusService.getDepartureDate()
  }

  onFormSubmit() {
    this.submitted = true;
    if (this.loginForm.invalid) {
      this.error="Invalid Input"
    }
    else{
     
      this.data.push(this.loginForm.value)
      
      this.BusService.setUserInfo(this.data)
      this.router.navigate(['./displayTicket'])
      
    }
  }
}
