import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

//import { FavoritesProvider } from '../../providers/favorites/favorites';
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
  //errMess: string;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
   // private favoriteservice: FavoritesProvider,
    //@Inject('BaseURL')
  ) 
    
    {
  }
  
  
}
