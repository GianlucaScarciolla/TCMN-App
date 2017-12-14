import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MeetsPage } from './meets';

@NgModule({
  declarations: [
    MeetsPage,
  ],
  imports: [
    IonicPageModule.forChild(MeetsPage),
  ],
})
export class MeetsPageModule {}
