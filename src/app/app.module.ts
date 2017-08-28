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
import { TiersComponent } from "./component/tiers/tiers.component";
import { OtherpageComponent } from './component/otherpage/otherpage.component';
import { ComptespageComponent } from './component/comptespage/comptespage.component';
import { MonargentpageComponent } from './component/monargent/monargent.component';
import { MonbudgetpageComponent } from './component/monbudgetpage/monbudgetpage.component';
import { MesprocurationspageComponent } from './component/mesprocurationspage/mesprocurationspage.component';
import { MesvirementspageComponent } from './component/mesvirementspage/mesvirementspage.component';
import { MescreditspageComponent } from './component/mescreditspage/mescreditspage.component';
import { MesassurancespageComponent } from './component/mesassurancespage/mesassurancespage.component';
import { MesservicesmobilespageComponent } from './component/messervicesmobilespage/messervicesmobilespage.component';
import { MesdocumentspageComponent } from './component/mesdocumentspage/mesdocumentspage.component';
import { ActualitesetnouveautespageComponent } from './component/actualitesetnouveautespage/actualitesetnouveautespage.component';
import { MesalertespageComponent } from './component/mesalertespage/mesalertespage.component';
import { MailpageComponent } from './component/mailpage/mailpage.component';
import { MescommandespageComponent } from './component/mescommandespage/mescommandespage.component';


const PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
  suppressScrollX: true,
};

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    MenuComponent,
    CompteComponent,
    TiersComponent,
    OtherpageComponent,
    ComptespageComponent,
    MonargentpageComponent,
    MonbudgetpageComponent,
    MesprocurationspageComponent,
    MesvirementspageComponent,
    MescreditspageComponent,
    MesassurancespageComponent,
    MesservicesmobilespageComponent,
    MesdocumentspageComponent,
    ActualitesetnouveautespageComponent,
    MesalertespageComponent,
    MailpageComponent,
    MescommandespageComponent,

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
