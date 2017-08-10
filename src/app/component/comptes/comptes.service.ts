import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import * as xml2js from 'xml2js';
import { Compte } from './comptes';

@Injectable()
export class CompteService {
    url = "./assets/BaseTiers.json";
    constructor(private http:Http) { }
    getCompteWithObservable(): Observable<Compte[]> {
        return this.http.get(this.url)
	        .map(this.extractData)
	        .catch(this.handleErrorObservable);
    }
    private extractData(res: Response) {
	let body = res.json();
        return body;
    }
    private handleErrorObservable (error: Response | any) {
	console.error(error.message || error);
	return Observable.throw(error.message || error);
    
    }
} 
