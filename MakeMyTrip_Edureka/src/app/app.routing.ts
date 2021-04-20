import {Route, RouterModule, RouterOutlet, Routes } from '@angular/router'
import {HomeComponent} from './components/home/home.component'
import {BusSearchComponent} from './components/bus-search/bus-search.component'
import {SeatSelectComponent} from './components/seat-select/seat-select.component'
import {UserFormComponent} from './components/user-form/user-form.component'
import { ModuleWithProviders } from '@angular/core'
import {DisplayTicketComponent} from './components/display-ticket/display-ticket.component'
const routes: Routes =[
    {path:"",component:HomeComponent},
    {path:"busSearch",component:BusSearchComponent},
    {path:"seatSelect",component:SeatSelectComponent},
    {path:"userForm",component:UserFormComponent},
    {path:"displayTicket",component:DisplayTicketComponent}



 
 
  ];
 
  export const routing:ModuleWithProviders<any>=RouterModule.forRoot(routes);
 