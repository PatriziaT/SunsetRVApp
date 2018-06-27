import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController, ModalController } from 'ionic-angular';

import { RV } from '../../shared/rv';
import { SettingsPage } from './../settings/settings';
import { LogoutPage } from './../logout/logout';

import { FavoritesProvider } from '../../providers/favorites/favorites';


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
    
    private favoritesservice: FavoritesProvider,
    // @Inject('BaseURL') private BaseURL,
  ) {
  }
  
  ngOnInit() {
    this.favoritesservice.getFavorites()
      .subscribe(favorites => this.favorites = favorites,
        errmess => this.errMess = errmess);
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad FavoritesPage');
  }


// deleteFavorite(item: ItemSliding, id: number) {
//   console.log('delete', id);
//   this.favoritesservice.deleteFavorite(id)
//     .subscribe(favorites => this.favorites = favorites,
//       errmess => this.errMess = errmess);
//   item.close();

// }

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

