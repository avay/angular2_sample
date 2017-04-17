import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { MerchantSearchRes } from  '../model/MerchantSearchRes';
import { MerchantSearchReq } from '../model/MerchantSearchReq';

/**
 * This class provides the MerchantList service with methods to read merchants and add names.
 */


@Injectable()
export class MerchantService {

	public merchantSearchRes: MerchantSearchRes;
	public merchantSearchReq: MerchantSearchReq;

  /**
   * Creates a new MerchantService with the injected Http.
   * @param {Http} http - The injected Http.
   * @constructor
   */
  constructor(private http: Http) {}

   getMerchants() {
   		return this.http.get('http://localhost:8888/merchants')
		.map((response: Response) => <MerchantSearchRes>response.json());
    }
   		
   	search(): Observable<MerchantSearchReq> {
   		return this.http.get('http://localhost:8888/merchants/search')
   		.map((response: Response) => <MerchantSearchReq>response.json());
   	}

  /**
    * Handle HTTP error
    */
  private handleError (error: any) {
    // In a real world app, we might use a remote logging infrastructure
    // We'd also dig deeper into the error to get a better message
    let errMsg = (error.message) ? error.message :
      error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    console.error(errMsg); // log to console instead
    return Observable.throw(errMsg);
  }
}

