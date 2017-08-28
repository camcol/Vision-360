import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomepageComponent } from "./component/homepage/home.component";
import { OtherpageComponent } from "./component/otherpage/otherpage.component";
import { ComptespageComponent } from "./component/comptespage/comptespage.component";
import { MonargentpageComponent } from './component/monargent/monargent.component';
import { MonbudgetpageComponent } from "./component/monbudgetpage/monbudgetpage.component";
import { MesprocurationspageComponent } from "./component/mesprocurationspage/mesprocurationspage.component";
import { MesvirementspageComponent } from "./component/mesvirementspage/mesvirementspage.component";
import { MescreditspageComponent } from "./component/mescreditspage/mescreditspage.component";
import { MesassurancespageComponent } from "./component/mesassurancespage/mesassurancespage.component";
import { MesservicesmobilespageComponent } from "./component/messervicesmobilespage/messervicesmobilespage.component";
import { MesdocumentspageComponent } from "./component/mesdocumentspage/mesdocumentspage.component";
import { ActualitesetnouveautespageComponent } from "./component/actualitesetnouveautespage/actualitesetnouveautespage.component";
import { MesalertespageComponent } from "./component/mesalertespage/mesalertespage.component";
import { MailpageComponent } from "./component/mailpage/mailpage.component";
import { MescommandespageComponent } from "./component/mescommandespage/mescommandespage.component";


const ROUTES = [
    { path: '', redirectTo: '/Home', pathMatch: 'full' },
    { path: 'Home',  component: HomepageComponent },
    { path: 'OtherBank', component: OtherpageComponent },
    { path: 'MesComptes', component: ComptespageComponent },
    { path: 'MonArgent', component: MonargentpageComponent },  
    { path: 'MonBudget', component: MonbudgetpageComponent },  
    { path: 'MesProcurations', component: MesprocurationspageComponent }, 
    { path: 'MesVirements', component: MesvirementspageComponent }, 
    { path: 'MesCredits', component: MescreditspageComponent }, 
    { path: 'MesAssurances', component: MesassurancespageComponent },
    { path: 'MesServicesMobiles', component: MesservicesmobilespageComponent },
    { path: 'MesDocuments', component: MesdocumentspageComponent },
    { path: 'ActualitésNouveautés', component: ActualitesetnouveautespageComponent },
    { path: 'MesCommandes', component: MescommandespageComponent },
    { path: 'MesAlertes', component: MesalertespageComponent },
    { path: 'Mail', component: MailpageComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(ROUTES)],
  exports: [RouterModule],
  providers:[]
})

export class AppRoutingModule { }
