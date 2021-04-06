import { Component, OnInit } from '@angular/core';
import {EmployeeService} from '../../services/employee.service'
import {Employee2} from '../employee2'

@Component({
  selector: 'app-new-employee',
  templateUrl: './new-employee.component.html',
  styleUrls: ['./new-employee.component.css'],
  providers:[EmployeeService]
})
export class NewEmployeeComponent implements OnInit {
  Employee:Employee2[]

  constructor(private EmpService:EmployeeService) { }

  ngOnInit(): void {


    
  }
  getData()
  {
    this.Employee=this.EmpService.getData()
  }

}
