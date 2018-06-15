import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { HttpClientModule } from '@angular/common/http';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
//import { ListPage } from '../pages/list/list';

import { SpecialsPage } from '../pages/specials/specials';
import { FavoritePage } from '../pages/favorite/favorite';
import { LoginPage } from '../pages/login/login';
import { IonicStorageModule } from '@ionic/storage';
import { RegisterPage } from '../pages/register/register';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { FavoritesProvider } from '../providers/favorites/favorites';
import { SpecialsProvider } from '../providers/specialsdata/specialsdata';
import { ProcessHttpmsgProvider } from '../providers/process-httpmsg/process-httpmsg';
import { RVsProvider } from '../providers/rvsdata/rvsdata';

import { HttpModule } from '@angular/http';
import { baseURL } from '../shared/baseurl';

//import firebase from 'firebase';
@NgModule({
  declarations: [
    MyApp,
    HomePage,
    SpecialsPage,
    FavoritePage,
    LoginPage,
    RegisterPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpClientModule,
    HttpModule,
    IonicStorageModule.forRoot(),
    
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    SpecialsPage,
    FavoritePage,
    LoginPage,
    RegisterPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    FavoritesProvider,
    ProcessHttpmsgProvider,
    { provide: 'BaseURL', useValue: baseURL },
    SpecialsProvider,
    RVsProvider
  ]
})
export class AppModule {}
