import { Component, OnInit } from '@angular/core';
import {Employee2} from './employee'

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  flag:boolean=false
  Employees:Employee2[];
  constructor() {
   this.Employees= this.getEmployee()
  
   }

  ngOnInit(): void {
  }
  getEmployee()
  {
    return  [
      {id:1, FirstName:"Abhijeet ",LastName:"Sharma",dept:"IT",city:"Jaipur",email:"abhijeet@gmail.com"},
      {id:2, FirstName:"Aayush ",LastName:"Sharma",dept:"IT",city:"Jaipur",email:"aayush@gmail.com"},
      {id:3, FirstName:"Ajay ",LastName:"Sharma",dept:"IT",city:"Jaipur",email:"ajay@gmail.com"},
    ];
   
  }

  Edit()
  {
    this.flag=true
  }

  update()
  {
    this.flag=false
  }

}
