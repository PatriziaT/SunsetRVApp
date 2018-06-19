import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController  } from 'ionic-angular';
import { SpecialsProvider } from '../../providers/specialsdata/specialsdata';

import { AuthService } from '../../shared/auth.service';
import { Subscription } from 'rxjs/Subscription';

import { FavoritePage } from './../favorite/favorite';
import { SettingsPage } from './../settings/settings';
import { HomePage } from './../home/home';
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
    //Need to subscribe to the authStatus I do? thats firebase? 
    //only inside the app to pass data around oh
    // now it will ask for the data to see if user is login
    
    this.authSubscription = this.authService.authChange.subscribe(authStatus => {
      this.isAuth = authStatus;
    });
    //based on that piece of code above?
    //yes it ask the auth Status if true   then we are login, if not it will show other data now.above
    //no it has a runtime err 
// save
// can to git so i can pull it to my pc ok give a sec
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

  onLogout() {
    this.authService.logout();
  }
}
