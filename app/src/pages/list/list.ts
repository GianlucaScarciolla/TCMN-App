import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';
import { RestProvider } from '../../providers/rest/rest';

@Component({
  selector: 'page-list',
  templateUrl: 'list.html'
})

export class ListPage {
  teams: any;

  constructor(public navCtrl: NavController, public restProvider: RestProvider) {
    this.getTeams();
  }

  getTeams() {
    this.restProvider.getTeams()
      .then(data => {
        this.teams = data;
      });
  }
}
