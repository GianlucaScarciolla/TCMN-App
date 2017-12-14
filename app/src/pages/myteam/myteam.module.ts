import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MyteamPage } from './myteam';

@NgModule({
  declarations: [
    MyteamPage,
  ],
  imports: [
    IonicPageModule.forChild(MyteamPage),
  ],
})
export class MyteamPageModule {}
