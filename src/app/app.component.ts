import { Component } from '@angular/core';
import {EmployeeService} from './services/employee.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Emp';
  students:any[];
  constructor(private EmpService:EmployeeService)
  {
    this.students=EmpService.getData()
    
 
  }
}
