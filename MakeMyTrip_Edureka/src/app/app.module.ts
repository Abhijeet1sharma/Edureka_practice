import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {KeysPipe} from './keys.pipe';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { BusSearchComponent } from './components/bus-search/bus-search.component';
import { HeaderComponent } from './components/header/header.component';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import {BusDataService} from './services/bus-data.service'
import { FormsModule ,ReactiveFormsModule} from '@angular/forms';
import {GetBusInfoService} from './services/get-bus-info.service'
import { NgSelectModule } from '@ng-select/ng-select';
import {routing} from './app.routing';
import { UserComponent } from './components/user/user.component';
import { SeatSelectComponent } from './components/seat-select/seat-select.component';
import { UserFormComponent } from './components/user-form/user-form.component';
import { DisplayTicketComponent } from './components/display-ticket/display-ticket.component';
import { FooterComponent } from './components/footer/footer.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BusSearchComponent,
    HeaderComponent,
    UserComponent,
    KeysPipe,
    SeatSelectComponent,
    UserFormComponent,
    DisplayTicketComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(
      BusDataService, { dataEncapsulation: false }
    ),
    FormsModule,
    ReactiveFormsModule,
    NgSelectModule,
    routing
  ],
  providers: [BusDataService,
  GetBusInfoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
