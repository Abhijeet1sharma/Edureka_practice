import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  Employee:any[]
  constructor(private http: HttpClient) { 
    
    http.get<any>("http://dummy.restapiexample.com/api/v1/employees")
      .subscribe(data => {
        this.Employee=data.data
        console.log(this.Employee)
      })
      
  }
  getData()
  {
    return this.Employee;
  }

}
