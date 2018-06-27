import { Component, OnInit, Inject } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController,ItemSliding, ModalController } from 'ionic-angular';

import { SettingsPage } from './../settings/settings';
import { LogoutPage } from './../logout/logout';

import { FavoritesProvider } from '../../providers/favorites/favorites';
import { RV } from '../../shared/rv';

@IonicPage()
@Component({
  selector: 'page-favorite',
  templateUrl: 'favorite.html',
})
export class FavoritePage {

  favorites: RV[];
  errMess: string;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public viewCtrl: ViewController,
    private modalCtrl: ModalController,
    private favoritesservice: FavoritesProvider,) {
  }
  
  ngOnInit() {
    this.favoritesservice.getFavorites()
      .subscribe(favorites => this.favorites = favorites,
        errmess => this.errMess = errmess);
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad FavoritesPage');
  }

// opens Settings Page
openSettings() {
  let modal = this.modalCtrl.create(SettingsPage);
  modal.present();
}

deleteFavorite(item: ItemSliding, id: number) {
  console.log('delete', id);
  this.favoritesservice.deleteFavorite(id)
    .subscribe(favorites => this.favorites = favorites,
      errmess => this.errMess = errmess);
  item.close();

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

