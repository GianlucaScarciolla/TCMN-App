import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';
import { RestProvider } from '../../providers/rest/rest';

/**
 * Generated class for the TeamsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-teams',
  templateUrl: 'teams.html',
})
export class TeamsPage {
  teams: any;

  constructor(public navCtrl: NavController, public restProvider: RestProvider) {
    this.getTeams();
  }

  // test = '&filter=Country,eq,Schweiz';
  getTeams() {
    this.restProvider.getTeams()
      .then(data => {
        this.teams = data;
      });
  }

}
