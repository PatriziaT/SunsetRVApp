import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { NavController } from 'ionic-angular/umd';
import { User } from './user';

import { HomePage } from '../pages/home/home';
//I dont see the user model

@Injectable()
export class AuthService {
  // handle event change on log/in/out
  authChange = new Subject<boolean>();
  private user: User;
 
  // Ok pick a place where LogIn/Logoff show up,
  //and see where it show the number of people login, "  1"  
  //if you hover on it will show where am at
//same as it is now on the lfet bottom :)
//what? it does? 
  constructor(
    public navCtrl: NavController
  ) { }

  private authSuccessfully() {
    this.authChange.next(true);
  }

  login() {
    // When the User login
    //Code to Firebase, if login is true:
    this.authSuccessfully();
  }

  logout() {
    // Set the user back to false
    this.user = null;
    this.authChange.next(false);
    this.navCtrl.setRoot(HomePage);
  }

  // From other pages asking if the User is Log in or not (boolean)
  isAuth() {
    return this.user != null;
  }
}