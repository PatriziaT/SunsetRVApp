import { Injectable } from '@angular/core';

import { RV } from '../../shared/rv';

import { Http, Response } from '@angular/http';
import { baseURL } from '../../shared/baseurl';
import { Restangular } from 'ngx-restangular';
import { Observable } from 'rxjs/Observable';
import { ProcessHttpmsgProvider } from '../process-httpmsg/process-httpmsg';
import 'rxjs/add/operator/delay';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

@Injectable()
export class NewinventoryProvider {

  constructor(public http: Http,
    // private restangularmodule: RestangularModule,
    private processHTTPMsgService: ProcessHttpmsgProvider,
    private restangular: Restangular,

  ) { }
// copied from ionic

getDishes(): Observable<RV[]> {
  return this.http.get(baseURL + 'rvs')
                  .map(res => { return this.processHTTPMsgService.extractData(res); })
                  .catch(error => { return this.processHTTPMsgService.handleError(error); });
}

getRV(id: number): Observable<RV> {
  return  this.http.get(baseURL + 'rvs/'+ id)
                  .map(res => { return this.processHTTPMsgService.extractData(res); })
                  .catch(error => { return this.processHTTPMsgService.handleError(error); });
}

getFeaturedRV(): Observable<RV> {
  return this.http.get(baseURL + 'rvs?featured=true')
                  .map(res => { return this.processHTTPMsgService.extractData(res)[0]; })
                  .catch(error => { return this.processHTTPMsgService.handleError(error); });
}

}
  
  
  
  
  
  
  // copied from angular 
//   getRVs(): Observable<RV[]> {
//     return this.restangular.all('rves').getList();
//   }

//   getRV(id: number): Observable<RV> {
//     return  this.restangular.one('rves',id).get();
//   }

//   getFeaturedRV(): Observable<RV> {
//     return this.restangular.all('rves').getList({featured: true})
//       .map(rves => rves[0]);
//   }

//   getRVIds(): Observable<number[] | any> {
//     return this.getRVs()
//       .map(rves => { return rves.map(rv => rv.id) })
//       .catch(error => { return error; } );
//   }
// }




  


