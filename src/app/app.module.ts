import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { IonicStorageModule } from '@ionic/storage';

import { AngularFireModule } from 'angularfire2';
// import { AngularFireAuth } from 'angularfire2/auth';
import { Firebase_Config } from './firebase_config';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
//import { ListPage } from '../pages/list/list';
import { SpecialsPage } from '../pages/specials/specials';
import { FavoritePage } from '../pages/favorite/favorite';
import { LoginPage } from '../pages/login/login';
import { RegisterPage } from '../pages/register/register';
import { SettingsPage } from '../pages/settings/settings';
import { NewinventoryPage } from '../pages/newinventory/newinventory';
import { LogoutPage } from '../pages/logout/logout';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { FavoritesProvider } from '../providers/favorites/favorites';
import { SpecialsProvider } from '../providers/specialsdata/specialsdata';
import { ProcessHttpmsgProvider } from '../providers/process-httpmsg/process-httpmsg';
import { RVsProvider } from '../providers/rvsdata/rvsdata';
import { UserProvider } from '../providers/user/user';

import { baseURL } from '../shared/baseurl';
import { NewRvProvider } from '../providers/new-rv/new-rv';

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
    LogoutPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpClientModule,
    HttpModule,
    IonicStorageModule.forRoot(),
    AngularFireModule.initializeApp(Firebase_Config.fire),
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
    LogoutPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    FavoritesProvider,
    ProcessHttpmsgProvider,
    { provide: 'BaseURL', useValue: baseURL },
    SpecialsProvider,
    RVsProvider,
    UserProvider,
    NewRvProvider,
    // AngularFireAuth
  ]
})
export class AppModule {}
