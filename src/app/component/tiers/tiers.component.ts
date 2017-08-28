import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { TiersService } from "./tiers.service";
import { Tiers } from './tiers';


@Component({
   selector: 'app-tiers',
   templateUrl: './tiers.component.html'
})
export class TiersComponent implements OnInit { 
   observableTiers: Observable<Tiers[]>
   tiers: Tiers[];
   errorMessage: String;
   constructor(private tiersService: TiersService) { }
   ngOnInit(): void {
        this.observableTiers = this.tiersService.getTiersWithObservable();
	this.observableTiers.subscribe(
            tiers => this.tiers = tiers,
            error =>  this.errorMessage = <any>error);
   }
} 