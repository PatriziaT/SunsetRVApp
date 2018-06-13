import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { RVs } from '../../shared/rvs';
import { RVsProvider } from '../../providers/rvs/rvs';


@IonicPage()
@Component({
  selector: 'page-specials',
  templateUrl: 'specials.html',
})
export class SpecialsPage {

  rvSpecials = [];
  rvItem: any;
  rvs: RVs;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public viewCtrl: ViewController,
    private rvsdata: RVsProvider) {

      
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad SpecialsPage');
    
  
  }
//x button on the side but its not working
  // dismiss() {
  //   this.viewCtrl.dismiss(true);
  // }

}
