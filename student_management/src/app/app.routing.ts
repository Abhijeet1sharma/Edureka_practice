import {Route, RouterModule, RouterOutlet, Routes } from '@angular/router'
 import {StudentsComponent} from './components/students/students.component'
 import {ContactComponent} from './components/contact/contact.component'
 import {AboutComponent} from './components/about/about.component'
 import {CoursesComponent} from './components/courses/courses.component'
 import {HomeComponent} from './components/home/home.component'
import { ModuleWithProviders } from '@angular/core'
import {LoginComponent} from './components/login/login.component'

 const routes: Routes =[
   {path:"",component:HomeComponent},
   {path:"Login",component:LoginComponent},
    {path:"students",component:StudentsComponent},
    {path:"contact",component:ContactComponent},
    {path:"about",component:AboutComponent},
    {path:"courses",component:CoursesComponent},


 ];

 export const routing:ModuleWithProviders<any>=RouterModule.forRoot(routes);
