import {Route, RouterModule, RouterOutlet, Routes } from '@angular/router'
 import {ContactComponent} from './contact/contact.component'
 import {ProductDetailsComponent} from './product-details/product-details.component'
 import {HomeComponent} from './home/home.component'
 import {WildCardComponent} from './wild-card/wild-card.component'
import { ModuleWithProviders } from '@angular/core'
import {ProductComponent} from './product/product.component'


 const routes: Routes =[
    {path:"home",component:HomeComponent},
    {path:"product-details",component:ProductDetailsComponent},
    {path:"contact",component:ContactComponent},
    {path:"product",component:ProductComponent},
    { path: '**', component:WildCardComponent  }




 ];

 export const routing:ModuleWithProviders<any>=RouterModule.forRoot(routes);
