import { Component, ViewChild } from '@angular/core';
import { Page, IonicPage, NavController, NavParams } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';
import { RestProvider } from '../../providers/rest/rest';


@IonicPage()
@Component({
  selector: 'page-teamdetail',
  templateUrl: 'teamdetail.html',
})
export class TeamdetailPage {
  teams: any;
  id: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public restProvider: RestProvider) {
    this.id = this.navParams.get('id');
    this.getTeamDetail();
  }

  getTeamDetail() {
    this.restProvider.getTeamDetail(this.id)
      .then(data => {
        this.teams = data;
      });
  }


}
