import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SpecialsProvider } from '../../providers/specialsdata/specialsdata';


@IonicPage()
@Component({
  selector: 'page-specials',
  templateUrl: 'specials.html',
})
export class SpecialsPage {

  specialsList =[];
  specials: any;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public specialsData: SpecialsProvider) {
   
      this.getSpecials();
  }

  getSpecials() {
    this.specialsData.getSpecials().subscribe(data => this.specialsList = data);
  }


  // ionViewDidLoad() {
  //   console.log('ionViewDidLoad SpecialsPage');
    
  
  // }
//x button on the side but its not working
  // dismiss() {
  //   this.viewCtrl.dismiss(true);
  // }

}
