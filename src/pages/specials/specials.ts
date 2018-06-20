import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController  } from 'ionic-angular';
import { SpecialsProvider } from '../../providers/specialsdata/specialsdata';

import { AuthService } from '../../shared/auth.service';
import { Subscription } from 'rxjs/Subscription';

import { FavoritePage } from './../favorite/favorite';
import { SettingsPage } from './../settings/settings';
import { HomePage } from './../home/home';
import { LoginPage } from '../login/login';
@IonicPage()
@Component({
  selector: 'page-specials',
  templateUrl: 'specials.html',
})
export class SpecialsPage {

  specialsList =[];
  specials: any;
  
  isAuth = false;
  authSubscription: Subscription;
  
  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public specialsData: SpecialsProvider,
    private modalCtrl: ModalController,
    private authService: AuthService) {
   
      
  }

  //this was inside aboves constructor
  // this.getSpecials();

  // getSpecials() {
  //   this.specialsData.getSpecials().subscribe(data => this.specialsList = data);
  // }


  ionViewDidLoad() {
    console.log('ionViewDidLoad SpecialsPage');
  
   
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
//Dismiss the window back to Root Home
  dismiss() {
    this.navCtrl.setRoot(HomePage);
}
  onLogIN(){
      let modal = this.modalCtrl.create(LoginPage);
  modal.present();
  }
  onLogout() {
    this.authService.logout();
  }
}
