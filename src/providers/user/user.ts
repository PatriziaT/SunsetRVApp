import { HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';

// import { AngularFireAuth } from 'angularfire2/auth'
import { User } from '../../shared/user';

@Injectable()
export class UserProvider {

  user = {} as User;

  constructor(
    // private aFAuth: AngularFireAuth,
    public http: HttpClientModule) {
      console.log('Hello UserProvider Provider');
  }
 
}
//waiting to try and get result back from firebase

//marks all read scribbly
// async register(user: User){
//   try {
//     const result =  this.aFAuth.auth.createUserWithEmailAndPassword(user.username, user.password);
//     console.log(result);
//   }
//   catch (err) {
//     console.log(err);
//   }
// }
// async signInUser(user: User){
//   this.aFAuth.auth.signInWithEmailAndPassword(this.user.username + '@domian.xta', this.user.password)
//   .then( data => {
//     console.log('LOGIN WORKING', this.aFAuth.auth.currentUser);
//   })
//   .catch( err => {
//     console.log('got an error', err, 'the err message', err.message);
//   })
// }
