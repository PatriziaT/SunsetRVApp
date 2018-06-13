import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

@Injectable()
export class SpecialsProvider {

  private apiUrl: string = "https://www.parsehub.com/api/v2/projects/tAKTtgEqpu4Y/last_ready_run/data";
  
  constructor(
    private http: HttpClient) {
    console.log('Hello SpecialsProvider Provider');
  }

getSpecials() {
  return this.http.get(this.apiUrl)
  .do((res: Response) => console.log(res))
  .map((res: Response) => res.json())
}

}
