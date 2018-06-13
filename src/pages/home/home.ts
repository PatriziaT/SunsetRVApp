import { Component, Inject } from '@angular/core';
//import { HttpModule } from '@angular/http';
import { NavController} from 'ionic-angular';
import { RVs } from '../../shared/rvs';
import { RVsProvider } from '../../providers/rvs/rvs';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
  //templateUrl: 'build/pages/tabs/tabs.html'

})
export class HomePage {
  
    rvs: RVs;
    errorMessage: string;
    
    
  
    constructor(public navCtrl: NavController,
      public rvsservice: RVsProvider) {
      }

      // getRVs() {
      //   this.rvs.getRVs()
      //      .subscribe(
      //        rvs => this.rvs = rvs,
      //        error =>  this.errorMessage = <any>error);
      // }
    
    //@Inject('BaseURL') public BaseURL) { }
  
    //ngOnInit() {
    //   this.rvsservice.getFeaturedRVs()
    //      .subscribe(rvs => this.rvs = rvs,
    //       errmess => this.errorMessage = <any>errmess );
     
  
    // }
  
  }