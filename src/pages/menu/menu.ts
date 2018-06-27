import { Component, OnInit, Inject } from '@angular/core';
import {  IonicPage, NavController, NavParams } from 'ionic-angular';

import { RV } from '../../shared/rv';
import { NewinventoryProvider } from '../../providers/newinventory/newinventory';
import { RvdetailPage } from '../rvdetail/rvdetail';
import { FavoritesProvider } from '../../providers/favorites/favorites';

@IonicPage()
@Component({
  selector: 'page-menu',
  templateUrl: 'menu.html',
})

  const RVS: RV[]= [
    {
      // "id": "0",
      name: "2019 Wolf Pack - 295PACK13",
      stocknumber: "CHE32",
      image: "/assets/images/WolfPack.jpg",
      category: "Toy Hauler",
      price:"49,793.00",
      description:"Unit is upgraded to: 6-Gallon Gas/Electric Water Heater, Real Wood Doors/Drawers, Enclosed Tanks, Back-Up Camera Ready, LED Lighting, USB, 5.5k Gen, Electric Jacks, Ramp Door Patio System w/ Screen Wall, *Gen Pulls From Same Fuel Cell, Hold 2K Lbs In Garage And 1.5K Lbs On Patio Deck",
      condition: "New",
      vin: "5ZT3SPVBXJA004328"
    },

  
  ];
  export class MenuPage implements OnInit {

  rvs= RVS; 
  selectedRv = RVS[0];
  errMess: string;
  
  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private newinventoryservice: NewinventoryProvider,
    private favoritesservice: FavoritesProvider,
    @Inject('BaseURL') private BaseURL) { }
  
  ngOnInit() {
    this.newinventoryservice.getRVs()
      .subscribe(rvs => this.rvs = rvs,
        errmess => this.errMess = <any>errmess);
  }

  addToFavorites(rv: RV) {
    console.log('Adding to Favorites', rv.id);
    this.favoritesservice.addFavorite(rv.id);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MenuPage');
  }

  rvSelected(event, rv) {
    // That's right, we're pushing to ourselves!
    this.navCtrl.push(RvdetailPage, {
      rv: rv
    });
  }
}
