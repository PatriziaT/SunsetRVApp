import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import AuthProvider = firebase.auth.AuthProvider;


@Injectable()
export class AuthServiceProvider {
  private user: firebase.User;

  constructor(
    public http: HttpClient,
    public afAuth: AngularFireAuth) {
      afAuth.authState.subscribe(user => {
        this.user = user;
      });
    console.log('Hello AuthServiceProvider Provider');
  }

}
signInWithEmail(credentials) {
  console.log('Sign in with email');
  return this.afAuth.auth.signInWithEmailAndPassword(credentials.email,
     credentials.password);
}

}

