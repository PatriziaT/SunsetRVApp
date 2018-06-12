import { Component, Inject } from '@angular/core';
import { IonicPage, NavController, NavParams,ItemSliding, ToastController, LoadingController } from 'ionic-angular';

import { FavoritesProvider } from '../../providers/favorites/favorites';
/**
 * Generated class for the FavoritePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-favorite',
  templateUrl: 'favorite.html',
})
export class FavoritePage {

  //favorites: RVs[];
  errMess: string;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private favoriteservice: FavoritesProvider,
    @Inject('BaseURL') private BaseURL) {
  }
  
  // ngOnInit() {
  //   this.favoriteservice.getFavorites()
  //     .subscribe(favorites => this.favorites = favorites,
  //       errmess => this.errMess = errmess);
  // }
  // ionViewDidLoad() {
  //   console.log('ionViewDidLoad FavoritePage');
  // }

  // deleteFavorite(item: ItemSliding, id: number) {
  //   console.log('delete', id);

  //   let alert = this.alertCtrl.create({
  //     title: 'Confirm Delete',
  //     message: 'Do you want to delete RVs '+ id,
  //     buttons: [
  //       {
  //         text: 'Cancel',
  //         role: 'cancel',
  //         handler: () => {
  //           console.log('Delete cancelled');
  //         }
  //       },
  //       {
  //         text: 'Delete',
  //         handler: () => {
  //           let loading = this.loadingCtrl.create({
  //             content: 'Deleting . . .'
  //           });
  //           let toast = this.toastCtrl.create({
  //             message: 'RVs ' + id + ' deleted successfully', 
  //             duration: 3000});
  //           loading.present();
  //           this.favoriteservice.deleteFavorite(id)
  //             .subscribe(favorites => {this.favorites = favorites; loading.dismiss(); toast.present(); } ,
  //               errmess =>{ this.errMess = errmess; loading.dismiss(); });
  //          // Schedule a single notification
  //           this.localNotifications.schedule({
  //     id: id,
  //     text: 'RVs ' + id + ' added as a favorite successfully'
  //   });
    
  //             }
  //       }
  //     ]
  //   });
  
  //   alert.present();

  //   item.close();

  // }
}
