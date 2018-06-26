import { Component, Inject} from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController, ModalController  } from 'ionic-angular';

import { RV } from '../../shared/rv';
// import { NewinventoryProvider } from '../newinventory/newinventory';
// import { RvdetailPage } from '../rvdetail/rvdetail';
import { FavoritesProvider } from '../../providers/favorites/favorites';

import { HomePage } from './../home/home';
import { FavoritePage } from './../favorite/favorite';
import { SettingsPage } from './../settings/settings';
import { LogoutPage } from './../logout/logout';



@IonicPage()
@Component({
  selector: 'page-newinventory',
  templateUrl: 'newinventory.html',
})

export class NewinventoryPage{

  rv: RV[];
  errMess: string;

  constructor(
    @Inject('BaseURL') private BaseURL,
    public navCtrl: NavController, 
    public navParams: NavParams,
    // private newinventoryservice: NewinventoryProvider,
    private favoritesservice: FavoritesProvider,
    public viewCtrl: ViewController,
    private modalCtrl: ModalController) {
  }

  addToFavorites(rv: RV) {
    console.log('Adding to Favorites', rv.id);
    this.favoritesservice.addFavorite(rv.id);
    
  }

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

