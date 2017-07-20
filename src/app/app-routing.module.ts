import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomepageComponent} from "./component/homepage/home.component";


const ROUTES = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'home',
    },
    {   
        path:'home', 
        children:[
            {
                path:'',
                component: HomepageComponent
            }
        ]
    },
];

@NgModule({
  imports: [RouterModule.forRoot(ROUTES)],
  exports: [RouterModule],
  providers:[]
})

export class AppRoutingModule { }
