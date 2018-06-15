import { Component, Inject } from '@angular/core';
//import { HttpModule } from '@angular/http';
import { NavController, NavParams, ModalController } from 'ionic-angular';
import { RVs } from '../../shared/rvs';
import { RVsProvider } from '../../providers/rvsdata/rvsdata';

import { LoginPage } from './../login/login';

//import firebase from 'firebase';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
  //templateUrl: 'build/pages/tabs/tabs.html'

})
export class HomePage {
  
    rvs: RVs;
    errorMessage: string;
  

    constructor(
      public navCtrl: NavController,
      public navParams: NavParams,
      public rvsservice: RVsProvider,
      public modalCtrl: ModalController) {

      }
      openLogin() {
      let modal = this.modalCtrl.create(LoginPage);
      modal.present();
    }
      // createPerson(firstName: string, lastName: string): void {
      //   const personRef: firebase.database.Reference = firebase.database().ref(`/person1/`);
      //   personRef.set({
      //     firstName,
      //     lastName
      //   })
      // }

      // updatePerson(firstName: string, lastName: string): void {
      //     const personRef: firebase.database.Reference = firebase.database().ref(`/person1/`);
      //     personRef.update({
      //       firstName,
      //       lastName
      //     })
      // }
      // updatePerson(): void {
      //   const personRef: firebase.database.Reference = firebase.database().ref(`/person1/`);
      //   personRef.remove()
      // })
    }

    // ionViewDidLoad() {
    //   console.log('ionViewDidLoad SpecialsPage');
    // }
    // ionViewDidLoad() ;{
    //   const personRef: firebase.database.Reference = firebase.database().ref(`/person1/`);
    //   personRef.on('value', personSnapshot => {
    //     myPerson = personSnapshot.val();
    //   });
      //}

      // getRVs() {
      //   this.rvs.getRVs()
      //      .subscribe(
      //        rvs => this.rvs = rvs,
      //        error =>  this.errorMessage = <any>error);
      // }
    
    //@Inject('BaseURL') public BaseURL) { }
  
    //ngOnInit() {
    //   this.rvsservice.getFeaturedRVs()
    //      .subscribe(rvs => this.rvs = rvs,
    //       errmess => this.errorMessage = <any>errmess );
     
  
    // }
    
  