import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { IonicStorageModule } from '@ionic/storage';

// import { AngularFireModule } from 'angularfire2';
// import { AngularFireAuth } from 'angularfire2/auth';
// import { Firebase_Config } from './firebase_config';

import { MyApp } from './app.component';

// =Welcome Page
import { HomePage } from '../pages/home/home';

import { RvdetailPage } from '../pages/rvdetail/rvdetail';
// =Promotions
import { SpecialsPage } from '../pages/specials/specials';
import { SpecialsProvider } from '../providers/specialsdata/specialsdata';
import { PromotionProvider } from '../providers/promotion/promotion';

import { FavoritePage } from '../pages/favorite/favorite';
import { FavoritesProvider } from '../providers/favorites/favorites';

import { SettingsPage } from '../pages/settings/settings';
import { NewinventoryPage } from '../pages/newinventory/newinventory';
import { NewinventoryProvider } from '../providers/newinventory/newinventory';

import { LoginPage } from '../pages/login/login';
import { RegisterPage } from '../pages/register/register';

import { LogoutPage } from '../pages/logout/logout';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { ProcessHttpmsgProvider } from '../providers/process-httpmsg/process-httpmsg';
import { UserProvider } from '../providers/user/user';

import { AuthService } from '../shared/auth.service';
import { baseURL } from '../shared/baseurl';


@NgModule({ 
  declarations: [
    MyApp,
    HomePage,
    SpecialsPage,
    FavoritePage,
    LoginPage, 
    RegisterPage,
    SettingsPage,
    NewinventoryPage,
    
    LogoutPage,
    RvdetailPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpClientModule,
    HttpModule,
    IonicStorageModule.forRoot(),
    // AngularFireModule.initializeApp(Firebase_Config.fire),
    // AngularFireAuth
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    SpecialsPage,
    FavoritePage,
    LoginPage,
    RegisterPage,
    SettingsPage,
    NewinventoryPage,
    LogoutPage,
    RvdetailPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    FavoritesProvider,
    ProcessHttpmsgProvider,
    { provide: 'BaseURL', useValue: baseURL },
    SpecialsProvider,
    UserProvider,
    NewinventoryProvider,
    AuthService,
    PromotionProvider,

    // AngularFireAuth
  ]
})
export class AppModule {}
