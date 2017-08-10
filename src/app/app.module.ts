import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HomepageComponent } from "./component/homepage/home.component";
import { RouterModule, RouterLinkActive } from '@angular/router';
import { AppRoutingModule } from "./app-routing.module";
import { PerfectScrollbarModule } from 'angular2-perfect-scrollbar';
import { PerfectScrollbarConfigInterface } from 'angular2-perfect-scrollbar';
import { MdMenuModule } from 'md-menu/menu';
import { MenuComponent } from './component/menu/menu.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpModule } from '@angular/http';
import { CompteComponent } from "./component/comptes/compte.component";
import { CompteService } from "./component/comptes/comptes.service";

const PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
  suppressScrollX: true,
};

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    MenuComponent,
    CompteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PerfectScrollbarModule.forRoot(PERFECT_SCROLLBAR_CONFIG),
    BrowserAnimationsModule,
    RouterModule,
    HttpModule
  ],
  providers: [CompteService],
  bootstrap: [AppComponent]
})

export class AppModule { }
