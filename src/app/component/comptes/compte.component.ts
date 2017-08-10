import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { CompteService } from "./comptes.service";
import { Compte } from './comptes';


@Component({
   selector: 'app-compte',
   templateUrl: './compte.component.html'
})
export class CompteComponent implements OnInit { 
   observableCompte: Observable<Compte[]>
   compte: Compte[];
   errorMessage: String;
   constructor(private compteService: CompteService) { }
   ngOnInit(): void {
        this.observableCompte = this.compteService.getCompteWithObservable();
	this.observableCompte.subscribe(
            compte => this.compte = compte,
            error =>  this.errorMessage = <any>error);
   }
} 