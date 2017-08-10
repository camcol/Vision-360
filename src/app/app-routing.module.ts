import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomepageComponent} from "./component/homepage/home.component";


const ROUTES = [
    { path: '', redirectTo: '/Home', pathMatch: 'full' },
    { path: 'Home',  component: HomepageComponent },
    { path: 'OtherBank', component: HomepageComponent },
    { path: 'MesComptes', component: HomepageComponent },  
];

@NgModule({
  imports: [RouterModule.forRoot(ROUTES)],
  exports: [RouterModule],
  providers:[]
})

export class AppRoutingModule { }
