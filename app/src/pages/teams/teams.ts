import { Component, ViewChild } from '@angular/core';
import { Page, IonicPage, NavController, NavParams } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';
import { RestProvider } from '../../providers/rest/rest';
import { TeamdetailPage } from '../teamdetail/teamdetail';

/**
 &filter=Country,eq,
 */

@IonicPage()
@Component({
  selector: 'page-teams',
  templateUrl: 'teams.html',
})
export class TeamsPage {
  teams: any;
  country: any;

  constructor(public navCtrl: NavController, public restProvider: RestProvider) {
    this.country = 'All';
    console.log('land ist ' + this.country);
    this.getTeams();
  }

  Countryfilter() {
    this.getTeams(this.country);
    console.log('zwei land ist ' + this.country);
  }

  // test = '&filter=Country,eq,Schweiz';
  getTeams(country) {
    this.restProvider.getTeams(country)
      .then(data => {
        this.teams = data;
      });
  }

  teamdetail(teamid) {
    console.log("Teamid1 " + teamid);
    this.navCtrl.push(TeamdetailPage, { id: teamid });
  }

}
