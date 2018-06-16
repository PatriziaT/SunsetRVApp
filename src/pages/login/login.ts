import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController, ModalController  } from 'ionic-angular';

import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { Storage } from '@ionic/storage';
import { User } from '../../shared/user';

import { HomePage } from '../home/home';

import { AuthService } from '../providers/auth.service';

// import { RegisterPage } from '../register/register';

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  loginForm: FormGroup;
  loginError: string;
  // user = {} as User;
  // user: User = {username: '', password: ''};


  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public viewCtrl: ViewController,
    private formBuilder: FormBuilder,
    private storage: Storage,
    private modalCtrl: ModalController,
    private auth: AuthService,) {

  //     storage.get('user').then(user => {
  //       if (user) {
  //         console.log(user);
  //         this.user = user;
  //         this.loginForm
  //           .patchValue({
  //             'username': this.user.username, 
  //             'password': this.user.password 
       //})     
  //  }
  //   else
  //   console.log('user not defined');
          }}
  
this.loginForm = this.formBuilder.group({
  email: ['', Validators.compose([Validators.required, Validators.email])],
			password: ['', Validators.compose([Validators.required, Validators.minLength(6)])]
    });
  
  // username: ['', Validators.required],
  // password: ['',Validators.required],
  // remember: true
// });

login() {
  let data = this.loginForm.value;

  if (!data.email) {
    return;
  }

  let credentials = {
    email: data.email,
    password: data.password
  };
  this.auth.signInWithEmail(credentials)
    .then(
      () => this.navCtrl.setRoot(HomePage),
      error => this.loginError = error.message
    );
}

  //   }
  //   openRegister() {
  //     let modal = this.modalCtrl.create(RegisterPage);
  //     modal.present();
  //     modal.onDidDismiss(() => this.dismiss())
  //   }
    
  // ionViewDidLoad() {
  //   console.log('ionViewDidLoad LoginPage');
  // }
  // dismiss() {
  //   this.viewCtrl.dismiss();
  // }

  // onSubmit() {
  //   console.log(this.loginForm.value, this.user);
  //   this.user.username = this.loginForm.get('username').value;
  //   this.user.password = this.loginForm.get('password').value;
  //   console.log(this.user);
  //   if(this.loginForm.get('remember').value)
  //     this.storage.set('user', this.user)
  //   else
  //     this.storage.remove('user');
  //   this.viewCtrl.dismiss();
  // }
 


