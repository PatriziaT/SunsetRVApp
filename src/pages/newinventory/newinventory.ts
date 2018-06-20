import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController, ModalController  } from 'ionic-angular';

// import { HomePage } from './../home/home';

import { FavoritePage } from './../favorite/favorite';
import { SettingsPage } from './../settings/settings';
import { LogoutPage } from './../logout/logout';
import { HomePage } from './../home/home';

@IonicPage()
@Component({
  selector: 'page-newinventory',
  templateUrl: 'newinventory.html',
})
export class NewinventoryPage {


  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public viewCtrl: ViewController,
    private modalCtrl: ModalController) {
  }

  // ionViewDidLoad() {
  //   console.log('ionViewDidLoad NewinventoryPage');
  // }
//it works on both now
 // opens Favorite Page
 openFavorite() {
  let modal = this.modalCtrl.create(FavoritePage);
  modal.present();
}

// opens Settings Page
openSettings() {
  let modal = this.modalCtrl.create(SettingsPage);
  modal.present();
}
// opens Logout Page
openLogout() {
  let modal = this.modalCtrl.create(LogoutPage);
  modal.present();
}
//Dismiss the window back to Root Home
  dismiss() {
    this.navCtrl.setRoot(HomePage);
}
}

