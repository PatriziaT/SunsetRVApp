import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController, ActionSheetController } from 'ionic-angular';

import { RV } from '../../shared/rv';
import { FavoritesProvider } from '../../providers/favorites/favorites';

@IonicPage()
@Component({
  selector: 'page-rvdetail',
  templateUrl: 'rvdetail.html',
})
export class RvdetailPage {

  rv: RV;
  errMess: string;
  favorite: boolean;
  actionSheet: boolean;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private favoritesservice: FavoritesProvider,
    
    public actionSheetCtrl: ActionSheetController,
    public modalCtrl: ModalController,) {

      this.rv = navParams.get('rv');
      this.favorite = favoritesservice.isFavorite(this.rv.id);
      // let total = 0; DOES NOT WORK
  
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RvdetailPage');
  }

  addToFavorites() {
    console.log('Adding to Favorites', this.rv.id);
    this.favorite = this.favoritesservice.addFavorite(this.rv.id);
  }

  presentActionSheet() {
    let actionSheet = this.actionSheetCtrl.create({
      title: 'Select Actions',
      buttons: [
        {
          text: 'Add to Favorites',
          handler: () => {
            console.log('Add to Favorites clicked');
          }
        },
        {
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
          },
        //   {
        //   text: 'Share via Facebook',
        //   handler: () => {
        //     this.socialSharing.shareViaFacebook(this.dish.name + ' -- ' + this.dish.description, this.BaseURL + this.dish.image, '')
        //       .then(() => console.log('Posted successfully to Facebook'))
        //       .catch(() => console.log('Failed to post to Facebook'));
        //   }
        // },
        // {
        //   text: 'Share via Twitter',
        //   handler: () => {
        //     this.socialSharing.shareViaTwitter(this.dish.name + ' -- ' + this.dish.description, this.BaseURL + this.dish.image, '')
        //       .then(() => console.log('Posted successfully to Twitter'))
        //       .catch(() => console.log('Failed to post to Twitter'));
        //   }
        // }
      ]
    });
 
    actionSheet.present();
    
  }
}
