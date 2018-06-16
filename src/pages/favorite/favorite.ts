import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';

//import { FavoritesProvider } from '../../providers/favorites/favorites';

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
    public viewCtrl: ViewController,
   // private favoriteservice: FavoritesProvider,
    //@Inject('BaseURL')
) 
    {
  }
  

}
