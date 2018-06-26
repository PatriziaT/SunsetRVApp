import { Component, } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController, ModalController  } from 'ionic-angular';

import { FavoritePage } from './../favorite/favorite';
import { SettingsPage } from './../settings/settings';
import { LogoutPage } from './../logout/logout';
import { HomePage } from './../home/home';
import { NewInven } from '../../shared/newinven';

@IonicPage()
@Component({
  selector: 'page-newinventory',
  templateUrl: 'newinventory.html',
})
export class NewinventoryPage {

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public viewCtrl: ViewController,
    private modalCtrl: ModalController) {
  }

  rvs: NewinventoryPage[] = [
    {
      name:'2019 Wolf Pack - 295PACK13',
      stocknumber: 'CHE32',
      image: '/assets/images/WolfPack.jpg',
      category: 'Toy Hauler',
      price:'49,793.00',
      description:'Unit is upgraded to: 6-Gallon Gas/Electric Water Heater, Real Wood Doors/Drawers, Enclosed Tanks, Back-Up Camera Ready, LED Lighting, USB, 5.5k Gen, Electric Jacks, Ramp Door Patio System w/ Screen Wall, *Gen Pulls From Same Fuel Cell, Hold 2K Lbs In Garage And 1.5K Lbs On Patio Deck',
      condition: "New",
      vin: '5ZT3SPVBXJA004328',
    },
   {
      name:'2019 Solaire - 202RB SOL14',
      stocknumber: 'SOL14',
      image: '/assets/images/Solaire.jpg',
      category: 'Travel Trailer',
      price:'23,728.00',
      description:'Unit is upgraded to: Fiberglass Marine-Gel Coated, Powder-Coated Frame, Vacuum Bonded, Solid Surface Countertops, USB Chargers, 8 Cubic Fridge, Stainless Steel Appliances, Electric Jacks, Custom Stairs, Custom Electric Hitch, 4 Season (heated and ducted underbelly), Back-Up Camera Ready, Solar Ready, I-Beam Chassis w/ Independent Suspension (Torsion), Custom Sink Rack',  
      condition: "New",
      vin: '5ZT3SPVBXJA000987',
    },
   {
      name:'2018 Phoenix - 295BH',
      stocknumber: 'SHA27',
      image: '/assets/images/Phoenix.jpg',
      category: '5th Wheel',
      label:'New',
      price:'42,294.00',
      description:'',
      condition: "New",
      vin: '5ZT3SPVBXJA000429' 
   },
   {
      name:'2019 Sonoma - 270BHS',
      stocknumber: 'SON45',
      image: '/assets/images/Sonoma.jpg',
      category: 'Travel Trailer',
      price:'34,634.00',
      description:'A delectable, semi-sweet New York Style Cheese Cake, with Graham cracker crust and spiced with Indian cardamoms',
      condition: "New",
      vin: '4X4TSKC21KE081638'
    }
   ];



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

