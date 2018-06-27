// this equals to Dish.ts 


import { Injectable } from '@angular/core';
import { RV } from '../../shared/rv';
import { Observable } from 'rxjs/Observable';
import { Http } from '@angular/http';
import { baseURL } from '../../shared/baseurl';
import { ProcessHttpmsgProvider } from '../process-httpmsg/process-httpmsg';

import 'rxjs/add/operator/delay';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

@Injectable()
export class NewinventoryProvider {

  constructor(
    public http: Http,
    private processHTTPMsgService: ProcessHttpmsgProvider,

  ) { }

getRVs(): Observable<RV[]> {
  return this.http.get(baseURL + 'rvs')
                  .map(res => { return this.processHTTPMsgService.extractData(res); })
                  // .catch(error => { return this.processHTTPMsgService.handleError(error); });
}

getRV(id: number): Observable<RV> {
  return  this.http.get(baseURL + 'rvs/'+ id)
                  .map(res => { return this.processHTTPMsgService.extractData(res); })
                  // .catch(error => { return this.processHTTPMsgService.handleError(error); });
}

getFeaturedRV(): Observable<RV> {
  return this.http.get(baseURL + 'rvs?featured=true')
                  .map(res => { return this.processHTTPMsgService.extractData(res)[0]; })
                  // .catch(error => { return this.processHTTPMsgService.handleError(error); });
}

}
  




  


