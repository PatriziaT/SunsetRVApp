import { Component, OnInit, Inject } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { RV } from '../../shared/rv';
import { NewinventoryProvider } from '../../providers/newinventory/newinventory';
import { RvdetailPage } from '../rvdetail/rvdetail';


@IonicPage()
@Component({
  selector: 'page-menu',
  templateUrl: 'menu.html',
})
export class MenuPage implements OnInit {
  rvs: RV[];
  errMess: string;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private newinventoryservice: NewinventoryProvider,
    @Inject('BaseURL') private BaseURL) { }
  
  ngOnInit() {
    this.newinventoryservice.getRVs()
      .subscribe(rvs => this.rvs = rvs,
        errmess => this.errMess = <any>errmess);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MenuPage');
  }

  rvSelected(event, rv) {
    // That's right, we're pushing to ourselves!
    this.navCtrl.push(RvdetailPage, {
      rv: rv
    });
  }
}
