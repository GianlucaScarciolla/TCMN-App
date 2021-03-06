import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map'

@Injectable()
export class RestProvider {
  apiUrl = 'http://localhost/tcmn/api.php';

  constructor(public http: HttpClient) {

  }

  getUsers() {
    return new Promise(resolve => {
      this.http.get(this.apiUrl + '/user' + '?transform=1').subscribe(data => {
        resolve(data.user);
      }, err => {
        console.log(err);
      });
    });
  }


  getTeams(country) {

    return new Promise(resolve => {
      if (country === undefined) {
        country = 'All';
      }
      
      var string = '';
      if (country !== 'All') {
        string = '&filter=Country,eq,' + country;
      }
      console.log(string);
      console.log(country);

      this.http.get(this.apiUrl + '/team' + '?transform=1&filter=active,eq,1' + string).subscribe(data => {
        console.log(data.team);
        resolve(data.team);
      }, err => {
        console.log(err);
      });
    });

  }


  getTeamDetail(id) {
    return new Promise(resolve => {
      this.http.get(this.apiUrl + '/team' + '?transform=1&filter=active,eq,1' + '&filter=Team_ID,eq,' + id).subscribe(data => {
        resolve(data.team);
      }, err => {
        console.log(err);
      });
    });
  }


  addUser(data) {
    return new Promise((resolve, reject) => {
      this.http.post(this.apiUrl + '/user', JSON.stringify(data))
        .subscribe(res => {
          resolve(res);
        }, (err) => {
          reject(err);
        });
    });


      // TODO:  Create PUT call and soft Delete

      // this.http.post(this.apiUrl+'/users', JSON.stringify(data), {
      //   headers: new HttpHeaders().set('Authorization', 'my-auth-token'),
      //   params: new HttpParams().set('id', '3'),
      // })
      // .subscribe(res => {
      //   resolve(res);
      // }, (err) => {
      //   reject(r);
      // });


    }



  }
