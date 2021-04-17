import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {KeysPipe} from './keys.pipe';
import { AppComponent } from './app.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { HomeComponent } from './home/home.component';
import { ProductComponent } from './product/product.component';
import { ContactComponent } from './contact/contact.component';
import { WildCardComponent } from './wild-card/wild-card.component';
import {routing} from './app.routing'
@NgModule({
  declarations: [
    AppComponent,
    ProductDetailsComponent,
    KeysPipe,
    HomeComponent,
    ProductComponent,
    ContactComponent,
    WildCardComponent,
    
    
  ],
  imports: [
    BrowserModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
