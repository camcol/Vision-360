import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';

@Injectable()
export class CompteService {
    url = "./assets/compte.json";

    constructor(private http:Http) { }

    getCompte(){
        return this.http.get(this.url)
            .map(res => res.json());
    }
} 
