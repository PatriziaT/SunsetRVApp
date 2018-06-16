import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController} from 'ionic-angular';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';

import { UserProvider } from '../../providers/user/user'
import { User } from '../../shared/user';


import { AngularFireAuth } from 'angularfire2/auth';
@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {

  registerForm: FormGroup;
  image: string = 'assets/imgs/logo.png';
  imageUri: string;

  user = {} as User;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private viewCtrl: ViewController,
    private formBuilder: FormBuilder,
    public userProvider: UserProvider,
    private aFAuth: AngularFireAuth) {
  
      this.registerForm = this.formBuilder.group({
        firstname: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(25)] ],
        lastname: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(25)] ],
        username: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(25)] ],
        password: ['', [Validators.required, Validators.minLength(8), Validators.maxLength(25)] ],
        telnum: ['', [Validators.required, Validators.pattern] ],
        email: ['', [Validators.required, Validators.email] ],
      });
      
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterPage');
  }
    dismiss() {
    this.viewCtrl.dismiss(true);
  }
      
        onSubmit() {
          console.log(this.registerForm.value);
          this.dismiss();
        }
        
       //waiting to try and get result back from firebase
  // register(){
  //   console.log(this.user);
  //   try {
  //     const result =  this.aFAuth.auth.createUserWithEmailAndPassword(this.user.username, this.user.password);
  //     console.log(result);
  //   }
  //   catch (err) {
  //     console.log(err);
  //   }
  // }
      }
 
