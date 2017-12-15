import { Component, ViewChild } from '@angular/core';
import { Nav, Platform, LoadingController, ToastController  } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { AuthServiceProvider } from '../providers/auth-service/auth-service';

import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { ProfilPage } from '../pages/profil/profil';
import { MeetsPage } from '../pages/meets/meets';
import { MyteamPage } from '../pages/myteam/myteam';
import { NewsPage } from '../pages/news/news';
import { TeamsPage } from '../pages/teams/teams';
import { RegisterPage } from '../pages/register/register';
import { LoginPage } from '../pages/login/login';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = HomePage;

  loading: any;

  pages: Array<{title: string, component: any}>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen, public loadingCtrl: LoadingController, private toastCtrl: ToastController) {


    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Home', component: HomePage },
      { title: 'List', component: ListPage },
      { title: 'Register', component: RegisterPage },
      { title: 'My Team', component: MyteamPage },
      { title: 'Meets', component: MeetsPage },
      { title: 'Teams', component: TeamsPage },
      { title: 'News', component: NewsPage }
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openProfil() {
    this.nav.setRoot(ProfilPage);
  }

  openPage(page) {
    this.nav.setRoot(page.component);
  }



}
