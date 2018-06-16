import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController  } from 'ionic-angular';



@IonicPage()
@Component({
  selector: 'page-newinventory',
  templateUrl: 'newinventory.html',
})
export class NewinventoryPage {

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public viewCtrl: ViewController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NewinventoryPage');
  }

}
