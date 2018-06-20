import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';

import { User } from './user';

//I dont see the user model

@Injectable()
export class AuthService {
  // handle event change on log/in/out
  authChange = new Subject<boolean>();
  private user: User;
 
 
  constructor(  ) { }

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
  }

  // From other pages asking if the User is Log in or not (boolean)
  isAuth() {
    return this.user != null;
  }
}