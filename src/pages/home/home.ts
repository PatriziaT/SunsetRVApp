import { Component, OnInit, Inject } from '@angular/core';
import { NavController } from 'ionic-angular';
import { RVs } from '../../shared/rvs';
import { RVsProvider } from '../../providers/rvs/rvs';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage implements OnInit {
  
    rvs: RVs;
   
    rvsErrMess: string;
    promoErrMess: string;
    leaderErrMess: string;
  
    constructor(public navCtrl: NavController,
      private rvsservice: RVsProvider,
    
      @Inject('BaseURL') private BaseURL) { }
  
    ngOnInit() {
      this.rvsservice.getFeaturedRVs()
         .subscribe(rvs => this.rvs = rvs,
          errmess => this.rvsErrMess = <any>errmess );
     
  
    }
  
  }
  