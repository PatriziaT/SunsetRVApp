import { Component } from '@angular/core';
import { NavController, NavParams, ModalController , ViewController} from 'ionic-angular';

import { RV } from '../../shared/rv';
import { NewinventoryProvider } from '../../providers/newinventory/newinventory';

import { Promotion } from '../../shared/promotion';
import { PromotionProvider } from '../../providers/promotion/promotion';

import { LogoutPage } from './../logout/logout';
import { FavoritePage } from './../favorite/favorite';
import { SettingsPage } from './../settings/settings';


// @IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage {
  
    rv: RV;
    promotion: Promotion;
    rverrMess: string;
    promoErrMess: string;
  

    constructor(
      public navCtrl: NavController,
      public navParams: NavParams,
      public viewCtrl: ViewController,
      public modalCtrl: ModalController,
      private rvservice: NewinventoryProvider,
      private promotionservice: PromotionProvider
    ) {}

    // ngOnInit() {
    //   this.rvservice.getFeaturedRV()
    //      .subscribe(rv => this.rv = rv,
    //       errmess => this.rverrMess = <any>errmess );
    //   this.promotionservice.getFeaturedPromotion()
    //     .subscribe(promotion => this.promotion = promotion,
    //       errmess => this.promoErrMess = <any>errmess );
      
    // }

     // opens Logout Page
  openLogout() {
    let modal = this.modalCtrl.create(LogoutPage);
    modal.present();
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
  }

      