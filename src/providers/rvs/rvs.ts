import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
//import { Observable } from 'rxjs/Observable';
//import { RVs } from '../../shared/rvs';

//import { Http, Response } from '@angular/http';
//import { baseURL } from '../../shared/baseurl';
//import { ProcessHttpmsgProvider } from '../process-httpmsg/process-httpmsg';


/*
  Generated class for the RVsProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class RVsProvider {

  constructor(public http: HttpClient) {
    console.log('Hello RVsProvider Provider');
  }


}
