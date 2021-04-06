import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {KeysPipe} from './keys.pipe';
import { NewEmployeeComponent } from './components/new-employee/new-employee.component';
import {HttpClientModule} from '@angular/common/http'
import { EmployeeService} from './services/employee.service';

@NgModule({
  declarations: [
    AppComponent,
    NewEmployeeComponent,
    KeysPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [EmployeeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
