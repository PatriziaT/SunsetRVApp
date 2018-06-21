import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController, ModalController } from 'ionic-angular';

//import { FavoritesProvider } from '../../providers/favorites/favorites';
import { SettingsPage } from './../settings/settings';
import { LogoutPage } from './../logout/logout';
@IonicPage()
@Component({
  selector: 'page-favorite',
  templateUrl: 'favorite.html',
})
export class FavoritePage {

  //favorites: RVs[];
  //errMess: string;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public viewCtrl: ViewController,
    private modalCtrl: ModalController) {
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
// //Dismiss the window back to Root Home
//   dismiss() {
//     this.navCtrl.setRoot(HomePage);
// }
}

