import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController, ModalController  } from 'ionic-angular';

import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { Storage } from '@ionic/storage';
// import { User } from '../../shared/user';

// import { HomePage } from '../home/home';
// import { NewinventoryPage } from '../newinventory/newinventory';
// import { SpecialsPage } from '../specials/specials';
// import { SettingsPage } from '../settings/settings';
// import { FavoritePage } from '../favorite/favorite';

@IonicPage()
@Component({
  selector: 'page-logout',
  templateUrl: 'logout.html',
})
export class LogoutPage {

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public viewCtrl: ViewController,
    // private formBuilder: FormBuilder,
    // private storage: Storage,
    // private modalCtrl: ModalController
  ) {
  }

  //     storage.get('user').then(user => {
  //       if (user) {
  //         console.log(user);
  //         this.user = user;
  //       }
           
  // }
  //   else
  //   console.log('user not defined');
// });

  ionViewDidLoad() {
    console.log('ionViewDidLoad LogoutPage');
  }

}
