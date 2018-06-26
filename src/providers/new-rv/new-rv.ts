import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import { baseURL } from '../../shared/baseurl';
import { ProcessHttpmsgProvider } from '../process-httpmsg/process-httpmsg'

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/delay';
import 'rxjs/add/operator/catch';
import { newinven } from '../../shared/newinven';

@Injectable()
export class NewRvProvider {

  result: Object;

  constructor(public http: HttpClient,
    private processHTTPMsgService: ProcessHttpmsgProvider) {

  }
  getNewinventory(id: number): Observable<newinven > {
    return  this.http.get(baseURL + 'rvs/'+ id)
                    .map(res => { return this.processHTTPMsgService.extractData(res); })
                    .catch(error => { return this.processHTTPMsgService.handleError(error); });
  }

  getFeaturedNewinventory(): Observable<newinven> {
    return this.http.get(baseURL + 'rvs?featured=true')
                    .map(res => { return this.processHTTPMsgService.extractData(res)[0]; })
                    .catch(error => { return this.processHTTPMsgService.handleError(error); });
  }}
