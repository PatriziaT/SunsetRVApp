import { Injectable } from '@angular/core';
import { RVs } from '../../shared/rvs';
import { Observable } from 'rxjs/Observable';
import { Http, Response } from '@angular/http';
import { baseURL } from '../../shared/baseurl';
import { ProcessHttpmsgProvider } from '../process-httpmsg/process-httpmsg';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/delay';
import 'rxjs/add/operator/catch';

@Injectable()
export class RVsProvider {

  result: Object;
 

  // private apiUrl: string = "https://www.parsehub.com/api/v2/projects/tAKTtgEqpu4Y/last_ready_run/data";

  constructor(public http: Http,
              private processHTTPMsgService: ProcessHttpmsgProvider) {}

  // getRVses(): Observable<RVs[]> {
  //   return this.http.get(this.apiUrl).pipe(
  //     map(this.extractData),  
  //     catchError(this.handleError)
  //   );
  // }
  // private extractData(res: Response) {
  //   let body = res;
  //   return body || { };
  // }
  
  // private handleError (error: Response | any) {
  //   let errMsg: string;
  //   if (error instanceof Response) {
  //     const err = error || '';
  //     errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
  //   } else {
  //     errMsg = error.message ? error.message : error.toString();
  //   }
  //   console.error(errMsg);
  //   return Observable.throw(errMsg);
  // }

  getRVs(id: number): Observable<RVs> {
    return  this.http.get(baseURL + 'rvs/'+ id)
                    .map(res => { return this.processHTTPMsgService.extractData(res); })
                    .catch(error => { return this.processHTTPMsgService.handleError(error); });
  }

  getFeaturedRVs(): Observable<RVs> {
    return this.http.get(baseURL + 'rvs?featured=true')
                    .map(res => { return this.processHTTPMsgService.extractData(res)[0]; })
                    .catch(error => { return this.processHTTPMsgService.handleError(error); });
  }

}