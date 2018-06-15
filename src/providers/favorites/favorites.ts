import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

//import { RVsProvider } from '../rvs/rvs';

@Injectable()
export class FavoritesProvider {

  constructor(public http: HttpClient) {
    console.log('Hello FavoritesProvider Provider');
  }

}




