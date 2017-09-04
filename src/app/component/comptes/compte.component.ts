import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { CompteService } from "./comptes.service";


@Component({
   selector: 'app-compte',
   templateUrl: './compte.component.html',
   styleUrls: ['./compte.component.css'] 
})
export class CompteComponent implements OnInit { 
   compteToDisplay: Object;
   
   constructor(private compteService: CompteService) { }
   
   ngOnInit(): void {
        this.compteService.getCompte().subscribe(data => {
                this.compteToDisplay = data;
        });
   }
} 