import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ProfilPage } from '../pages/profil/profil';
import { MeetsPage } from '../pages/meets/meets';
import { MyteamPage } from '../pages/myteam/myteam';
import { NewsPage } from '../pages/news/news';
import { TeamsPage } from '../pages/teams/teams';
import { ListPage } from '../pages/list/list';
import { RegisterPage } from '../pages/register/register';
import { LoginPage } from '../pages/login/login';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
// import { HTTP } from '@ionic-native/http';
import { HttpClientModule } from '@angular/common/http';
import { RestProvider } from '../providers/rest/rest';
import { AuthServiceProvider } from '../providers/auth-service/auth-service';


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    MeetsPage,
    ProfilPage,
    NewsPage,
    TeamsPage,
    MyteamPage,
    RegisterPage,
    LoginPage,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    RegisterPage,
    MeetsPage,
    ProfilPage,
    NewsPage,
    TeamsPage,
    MyteamPage,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    RestProvider,
    AuthServiceProvider,
  ]
})
export class AppModule {}
